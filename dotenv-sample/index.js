// .envファイルがない場合は、watanabeが表示される
// ちなみに、このままだと.envのフォルダは自由に選べないよね。
let dbhost = process.env.DB_HOST || 'watanabe'

console.log(dbhost)