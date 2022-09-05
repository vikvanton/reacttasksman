import CryptoJS from 'crypto-js';

const key = 'cipher_key_123';

export function encryptText(plainText) {
  return CryptoJS.AES.encrypt(plainText, key).toString();
}

export function decryptText(cipherText) {
  return CryptoJS.AES.decrypt(cipherText.toString(), key).toString(CryptoJS.enc.Utf8);
}