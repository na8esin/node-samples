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
];

const groupBy = (objs, key) => {
  // 初回ループのrvは一番先頭のオブジェクト
  return objs.reduce((rv, obj) => {
    // 更新対象の配列を探す
    found = rv.find(e => e.userId === obj.userId);

    // 見つかったやつのexpertiseFieldsに追加する
    // ただ、重複は排除したいね。そんなデータ入るかわからないけど
    found.expertiseFields = found.expertiseFields ?? [];

    found.expertiseFields.push();

    (rv[obj["expertiseFields"]] =
      rv[obj["expertiseFields"]] || []).push(obj.expertiseField);
    return rv;
  }, {});
};

console.log(groupBy(obj, 'userId'));

/* 最終イメージ
rv =
  [
    {
      userId: 100,
      expertiseFields:[
        {
          id: 1, name: '資産運用A'
        },
        {
          id: 2, name: '年金A'
        }
      ]
    },
    {
      userId: 90,
      expertiseFields:[
        {
          id: 2, name: '年金A'
        }
      ]
    }
  ]
*/