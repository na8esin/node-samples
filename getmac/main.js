const address = require('getmac');

// networksetup -listallhardwareports
address.getMac((err, macAddress) => {
    
    // エラー時の処理
    if (err) {
      throw err;
    }
    
    // 第二引数にMACアドレスが返ってきます
    console.log(macAddress);

    // output例 *使っているコンピューターによって返ってくる値は変わります
    
    // Macの場合
    // eth-0のMACアドレスが返ってきます
    // 08:00:27:88:84:F9

    // Windowsの場合
    // physical addressの値が返ってきます
    // 08-00-27-D6-4D-75 *Windowsの場合は少しフォーマットが違います

    // Linuxの場合
    // eth-0の HWaddrの値が返ってきます
    // 08:00:27:4D:6D:04

    // コンピューターのネットワーク機器のMACアドレスが正しいものか判別する場合
    if (address.isMac("08:00:27:88:84:F9")) {
         console.log('有効なMACアドレスです')
       } else {
         console.log('無効なMACアドレスです')
      }

});