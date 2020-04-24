class User {
  id;
  name;
}

test('hello', () => {
  let userKeys = Reflect.ownKeys(new User());
  console.log(userKeys);
});