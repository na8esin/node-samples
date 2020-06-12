const util = require('util')

// userは複数のグループに所属することができる
const users = [
  {
    id: 2,
    name: 'ユーザ2',
    groups: [
      {id:78, name:"東京グループ"},
    ]
  },
  {
    id: 1,
    name: 'ユーザ',
    groups: [
      {id:24, name:"テストグループ"},
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
  {
    id: 4,
    name: 'ユーザ4',
    groups: [
      {id:24, name:"テストグループ"},
      {id:78, name:"東京グループ"},
    ]
  },
];

const groupBy = (users, key) => {
  // 初回ループのrvは一番先頭のオブジェクト
  return users.reduce((rv, user) => {

    // まず、groupsのidの配列をつくる
    const divisonIds = user.groups.map(g => g.id);

    // 更新対象の配列を探す。
    // ただ判定するためだけに使ってるので、ここは単純にfindでもいい気がする
    const founds = rv.filter(e => divisonIds.includes(e.divisonId));
    if (founds.length > 0) {
      // すでにあるところに追加して、ない方のやつは新規で追加
      divisonIds.forEach(divisonId =>{
        const found = rv.find(e => e.divisonId === divisonId);
        if (found) {
          found.users.push(user);
        } else {
          rv.push({
            divisonId: divisonId,
            users: [user]
          });
        }
      });
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
      { id: 3, name: 'ユーザ3', groups: [ { id: 24, name: 'テストグループ' } ] },
      {
        id: 4,
        name: 'ユーザ4',
        groups: [ { id: 24, name: 'テストグループ' }, { id: 78, name: '東京グループ' } ]
      }
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
      { id: 2, name: 'ユーザ2', groups: [ { id: 78, name: '東京グループ' } ] },
      {
        id: 4,
        name: 'ユーザ4',
        groups: [ { id: 24, name: 'テストグループ' }, { id: 78, name: '東京グループ' } ]
      }
    ]
  }
]
*/