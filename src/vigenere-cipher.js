const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw Error;
    let arr = [];
    let k = 0;
    let count = 0;
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < message.length; i++) {
      if (arr_en.indexOf(message[i]) != -1) {
        if (arr_en.indexOf(key[(i - count) % key.length]) != -1) {
          k = (arr_en.indexOf(message[i]) + arr_en.indexOf(key[(i - count) % key.length])) % 26;
          arr.push(arr_EN[k]);
        } else {
          k = (arr_en.indexOf(message[i]) + arr_EN.indexOf(key[(i - count) % key.length])) % 26;
          arr.push(arr_EN[k]);
        }
      } else if (arr_EN.indexOf(message[i]) != -1) {
        if (arr_en.indexOf(key[(i - count) % key.length]) != -1) {
          k = (arr_EN.indexOf(message[i]) + arr_en.indexOf(key[(i - count) % key.length])) % 26;
          arr.push(arr_EN[k]);
        } else {
          k = (arr_EN.indexOf(message[i]) + arr_EN.indexOf(key[(i - count) % key.length])) % 26;
          arr.push(arr_EN[k]);
        }
      } else {
        count++;
        arr.push(message[i]);
      }
    }
    return !this.mode ? arr.reverse().join("") : arr.join("");
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw Error;
    let arr = [];
    let k = 0;
    let count = 0;
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (arr_en.indexOf(encryptedMessage[i]) != -1) {
        if (arr_en.indexOf(key[(i - count) % key.length]) != -1) {
          k = (arr_en.indexOf(encryptedMessage[i]) + 26 - arr_en.indexOf(key[(i - count) % key.length])) % 26;
          arr.push(arr_EN[k]);
        } else {
          k = (arr_en.indexOf(encryptedMessage[i]) + 26 - arr_EN.indexOf(key[(i - count) % key.length])) % 26;
          arr.push(arr_EN[k]);
        }
      } else if (arr_EN.indexOf(encryptedMessage[i]) != -1) {
        if (arr_en.indexOf(key[(i - count) % key.length]) != -1) {
          k = (arr_EN.indexOf(encryptedMessage[i]) + 26 - arr_en.indexOf(key[(i - count) % key.length])) % 26;
          arr.push(arr_EN[k]);
        } else {
          k = (arr_EN.indexOf(encryptedMessage[i]) + 26 - arr_EN.indexOf(key[(i - count) % key.length])) % 26;
          arr.push(arr_EN[k]);
        }
      } else {
        count++;
        arr.push(encryptedMessage[i]);
      }
    }
    return !this.mode ? arr.reverse().join("") : arr.join("");
  }
}
module.exports = VigenereCipheringMachine;
