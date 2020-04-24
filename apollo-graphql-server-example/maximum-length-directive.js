const { ApolloServer, gql, SchemaDirectiveVisitor } = require("apollo-server");
const {
  GraphQLScalarType,
  GraphQLNonNull,
  defaultFieldResolver
} = require("graphql");

const typeDefs = gql`
  directive @length(max: Int) on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
  scalar LengthAtMost5

  type Query {
    books: [Book]
  }

  type Book {
    title: String @length(max: 5)
  }

  type Mutation {
    createBook(book: BookInput): Book
  }

  input BookInput {
    title: String! @length(max: 5)
  }
`;

const resolvers = {
  Mutation: {
    createBook(parent, args, context, info) {
      console.log(parent);
      console.log(args);
      console.log(context);
      console.log(info);
      // ちなみに、定義されてないプロパティは無視される
      return { title: args.book.title, author: "kkzzll" };
    }
  }
};

class LengthDirective extends SchemaDirectiveVisitor {
  visitInputFieldDefinition(field) {
    this.wrapType(field);
  }

  visitFieldDefinition(field) {
    this.wrapType(field);
  }

  // Replace field.type with a custom GraphQLScalarType that enforces the
  // length restriction.
  wrapType(field) {
    const { resolve = defaultFieldResolver } = field;
    console.log(field);
    if (
      field.type instanceof GraphQLNonNull &&
      field.type.ofType instanceof GraphQLScalarType
    ) {
      field.type = new GraphQLNonNull(
        new LimitedLengthType(field.type.ofType, this.args.max)
      );
    } else if (field.type instanceof GraphQLScalarType) {
      field.type = new LimitedLengthType(field.type, this.args.max);
    } else {
      throw new Error(`Not a scalar type: ${field.type}`);
    }

    field.resolve = async function(...args) {
      const result = await resolve.apply(this, args);
      if (typeof result === "string" && result.length > 5) {
        console.log(result);
        return new Error(`length too long`);
      }
      return result;
    };
  }
}

class LimitedLengthType extends GraphQLScalarType {
  constructor(type, maxLength) {
    super({
      name: `LengthAtMost${maxLength}`,

      // For more information about GraphQLScalar type (de)serialization,
      // see the graphql-js implementation:
      // https://github.com/graphql/graphql-js/blob/31ae8a8e8312/src/type/definition.js#L425-L446

      serialize(value) {
        value = type.serialize(value);
        assert.isAtMost(value.length, maxLength);
        return value;
      },

      parseValue(value) {
        return type.parseValue(value);
      },

      parseLiteral(ast) {
        return type.parseLiteral(ast);
      }
    });
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    length: LengthDirective
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
