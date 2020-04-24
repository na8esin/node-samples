// いっぱいでる
//console.log( process.env);

console.log(process.env.NODE_ENV);

// 書き換える
process.env.NODE_ENV= 'test';

console.log(process.env.NODE_ENV);
