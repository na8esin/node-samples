var _ = require('lodash');

console.log(_.groupBy(['one', 'two', 'three'], 'length'));

console.log(_.groupBy([{userId:100, name:"aaa"}, {userId:100, name:"bbb"},], 'userId'));