const util = require('util')

// userは複数のグループに所属することができる
const users = [
  {
    id: 1,
    name: 'ユーザ',
    groups: [
      {id:24, name:"テストグループ"},
      {id:78, name:"東京グループ"},
    ]
  },
  {
    id: 2,
    name: 'ユーザ2',
    groups: [
      {id:78, name:"東京グループ"},
    ]
  },
  {
    id: 3,
    name: 'ユーザ3',
    groups: [
      {id:24, name:"テストグループ"},
    ]
  },
];

const groupBy = (users, key) => {
  // 初回ループのrvは一番先頭のオブジェクト
  return users.reduce((rv, user) => {
    
    // まず、groupsのidの配列をつくる？
    const divisonIds = user.groups.map(g => g.id);
    
    // 更新対象の配列を探す
    if (found = rv.find(e => divisonIds.includes(e.divisonId))) {
      // 見つかった場合追加する。 シャローコピーなのでこれでOK
      found.users.push(user);
    } else {
      // 見つからなかった場合
      user.groups.forEach(g =>{
        rv.push({
          divisonId: g.id,
          users: [user]
        });
      });
    }
    return rv;
  }, []); // この第二引数が、rvの初期値か？
};

console.log(util.inspect(
  groupBy(users),
  { depth: null }));

/* 出力結果

[
  {
    divisonId: 24,
    users: [
      {
        id: 1,
        name: 'ユーザ',
        groups: [ { id: 24, name: 'テストグループ' }, { id: 78, name: '東京グループ' } ]
      },
      { id: 3, name: 'ユーザ3', groups: [ { id: 24, name: 'テストグループ' } ] }
    ]
  },
  {
    divisonId: 78,
    users: [
      {
        id: 1,
        name: 'ユーザ',
        groups: [ { id: 24, name: 'テストグループ' }, { id: 78, name: '東京グループ' } ]
      },
      { id: 2, name: 'ユーザ2', groups: [ { id: 78, name: '東京グループ' } ] }
    ]
  }
]
*/