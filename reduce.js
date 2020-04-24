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

    //console.log(rv);

    // 更新対象の配列を探す
    if (rv.find(e => e.userId === obj.userId)) {
      // 見つかった場合更新する
      // ただ、重複は排除したいね。そんなデータ入るかわからないけど
      rv.expertiseFields = obj.expertiseFields ?? [];
      rv.expertiseFields.push(obj.expertiseField);
    } else {
      // 見つからなかった場合
      rv.push({
        userId: obj.userId,
        expertiseFields: [{ id: obj.id, name: obj.name }]
      });
    }

    /*
        (rv[obj["expertiseFields"]] =
          rv[obj["expertiseFields"]] || []).push(obj.expertiseField);
    */
    return rv;
  }, []); // この第二引数が、rvの初期値か？
};

console.log(groupBy(obj, 'userId'));
console.log(groupBy(obj, 'userId')[0]);

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