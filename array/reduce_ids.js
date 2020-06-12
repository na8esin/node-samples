const util = require('util')

objs = [  {
    id: 1,    name:"john"
  },  {
    id: 2,    name:"paul"
  },  {
    id: 3,    name:"achapa"
  },
];

const userIds = (objs, key) => {
  // 初回ループのrvは一番先頭のオブジェクト
  return objs.reduce((rv, obj) => {
    // typescriptだとブラケット記法だから使えなくない？
    rv.push(obj[key]);
    return rv;
  }, []); // この第二引数が、rvの初期値か？
};

console.log(util.inspect(
  userIds(objs, 'id'),
  { depth: null }));

const mapped = objs.map(o => o.id);
console.log(util.inspect(
  mapped, { depth: null }));


/* 出力結果

*/