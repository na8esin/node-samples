ids = [1,2,3];
params = ids.map(id => '?' ).join()
console.log(params);
var query = `SELECT * FROM users WHERE id IN (${params})`;
// SELECT * FROM users WHERE id IN (?,?,....,?)
console.log(query);
  