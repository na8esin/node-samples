const users = [{
  id:3,
  name: "jone"
},{
  id:6,
  name: "paul"
},{
  id:8,
  name: "anna"
}];

const userIds =[6, 3, 8];

const mapped = userIds.map(
  userid => users.find(e => e.id === userid) || null
);

console.log(mapped);