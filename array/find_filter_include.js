const divisonIds = [24,78];

const rv = [
  {divisonId:24},
  {divisonId:78},
  {divisonId:100}
];

const found = rv.find(e => divisonIds.includes(e.divisonId));
console.log(found);
// { divisonId: 24 }
// 最初の1件しか返さない

const filtered = rv.filter(e => divisonIds.includes(e.divisonId));
console.log(filtered);
// [ { divisonId: 24 }, { divisonId: 78 } ]
// filterなら複数件返ってくる

filtered[0].divisonId=9999;
console.log(rv);
// [ { divisonId: 9999 }, { divisonId: 78 }, { divisonId: 100 } ]
// リファレンスには新しい配列って書いてあるけど、シャローコピーっぽいね。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter