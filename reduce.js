const util = require('util')

obj = [
  {
    id: 1,
    userId: 100,
    expertiseField: { id: 1, name: '資産運用A' }
  },
  {
    id: 2,
    userId: 100,
    expertiseField: { id: 2, name: '仕事' }
  },
  {
    id: 3,
    userId: 100,
    expertiseField: { id: 3, name: '何か' }
  },
  {
    id: 4,
    userId: 90,
    expertiseField: { id: 2, name: 'ライフプラン作成' }
  },
  {
    id: 5,
    userId: 90,
    expertiseField: { id: 2, name: 'ライフプラン作成' }
  },
  {
    id: 6,
    userId: 90,
    expertiseField: { id: 1, name: '資産運用A' }
  },
];

const groupBy = (objs, key) => {
  // 初回ループのrvは一番先頭のオブジェクト
  return objs.reduce((rv, obj) => {
    console.log('ループ');
    console.log(util.inspect(rv, { depth: null }));
    console.log(obj);

    // 更新対象の配列を探す
    if (found = rv.find(e => e.userId === obj.userId)) {
      // 見つかった場合更新する
      if (found.expertiseFields.find(e => e.id === obj.expertiseField.id)) {
        // 同じデータがすでに登録されている場合はスキップ
        return rv;
      }
      // シャローコピーなのでこれでOK
      found.expertiseFields.push(obj.expertiseField);
    } else {
      // 見つからなかった場合
      rv.push({
        userId: obj.userId,
        expertiseFields: [obj.expertiseField]
      });
    }
    console.log('リターン直前');
    return rv;
  }, []); // この第二引数が、rvの初期値か？
};

console.log(util.inspect(
  groupBy(obj, 'userId'),
  { depth: null }));

/* 出力結果
[
  {
    userId: 100,
    expertiseFields: [
      { id: 1, name: '資産運用A' },
      { id: 2, name: '仕事' },
      { id: 3, name: '何か' }
    ]
  },
  {
    userId: 90,
    expertiseFields: [ { id: 2, name: 'ライフプラン作成' }, { id: 1, name: '資産運用A' } ]
  }
]

*/