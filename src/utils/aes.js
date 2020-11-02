/*
 *    AES加密解密
 *    2017/7/3
 *    qianyuan
 */

import CryptoJS from "crypto-js"; // 加密组件

const AES = {
  _KEY: "14ba97e95f8a6b3a1397887e9a84d289", //32位
  _IV: "//www.taoche.com", //16位

  encrypt: function (str, key, iv) {
    key = CryptoJS.enc.Utf8.parse(key || this._KEY);
    iv = CryptoJS.enc.Utf8.parse(iv || this._IV);

    let encrypted = '';

    let srcs = CryptoJS.enc.Utf8.parse(str);
    encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.ciphertext.toString();
  },

  decrypt: function (str, key, iv) {
    key = CryptoJS.enc.Utf8.parse(key || this._KEY);
    iv = CryptoJS.enc.Utf8.parse(iv || this._IV);
    let encryptedHexStr = CryptoJS.enc.Hex.parse(str);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }
};

export default AES;