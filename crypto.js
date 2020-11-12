const Crypto = require("crypto");

function getSecureRandom(){
  const buff = Crypto.randomBytes(8);  // バイナリで8byteのランダムな値を生成
  const hex  = buff.toString("hex");   // 16進数の文字列に変換
  
  // 例:2276c6cf02f3d7df
  console.log(hex);
  
  return ( parseInt(hex,16) );         // integerに変換して返却
}

getSecureRandom();