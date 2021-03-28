const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("absence of argument");
    let result = this.crypt(message.toLowerCase(), this.filterKey(key.toLowerCase()))
    return this.isDirect ? result : result.split("").reverse().join("")
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error("absence of argument");
    let result = this.crypt(message.toLowerCase(), this.filterKey(key.toLowerCase()), 'decrypt')
    return this.isDirect ? result : result.split("").reverse().join("")
  }

  crypt(input, key, mode) {
    let result = "";
    if (mode == 'decrypt') {
      for (let i = 0; i < key.length; i++)
        key[i] = (26 - key[i]) % 26;
    }
    for (let i = 0, j = 0; i < input.length; i++) {
      let c = input.charCodeAt(i);
      if (this.isLetter(c)) {
        result += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
        j++;
      } else {
        result += input.charAt(i);
      }
    }
    return result.toUpperCase();
  }

  filterKey(key) {
    let result = [];
    for (let i = 0; i < key.length; i++) {
      let c = key.charCodeAt(i);
      if (this.isLetter(c))
        result.push((c - 65) % 32);
    }
    return result;
  }

  isLetter(c) {
    return 97 <= c && c <= 122
  }
}

module.exports = VigenereCipheringMachine;