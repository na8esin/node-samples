const resolvers = {
  Query: {
    hello: () => 'world'
  }
};

console.log(resolvers.Query.hello());
console.log(resolvers.Query.hello);
console.log(resolvers.Query);