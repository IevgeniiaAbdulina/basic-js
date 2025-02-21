const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  charCodeA = 65;
  charCodeZ = 90;
  alphabetLength = 26;

  constructor(direct = true) {
    this.direct = direct;
  }

  generateKey(message, key) {
    if (message.length === key.length) {
      return key.toUpperCase();
    }

    let newMessage = message.split("").filter((symbol) => symbol !== " ").join("");
    key = key.split("");
    let temp = key.length;

    for (let i = 0; i < (newMessage.length - temp); i += 1) {
      key.push(key[i % key.length])
    }

    return key.join("").toUpperCase();
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let keyIndex = 0;
    key = this.generateKey(message, key);

    let result = message.split("")
        .map(char => char.toUpperCase().charCodeAt(0))
        .map(num => {
          if (num >= this.charCodeA && num <= this.charCodeZ) {
            num += key[keyIndex].charCodeAt(0);
            num %= this.alphabetLength;
            num += this.charCodeA;
            keyIndex++;
          }
          return String.fromCharCode(num);
        })

    result = !this.direct ? result.reverse() : result;
    return result.join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    let keyIndex = 0;
    key = this.generateKey(encryptedMessage, key);

    let result = encryptedMessage.split("")
        .map((char) => {
          return char.toUpperCase().charCodeAt(0);
        })
        .map((num) => {
          if (num >= this.charCodeA && num <= this.charCodeZ) {
            num -= key[keyIndex].charCodeAt(0);
            num += this.alphabetLength;
            num %= this.alphabetLength;
            num += this.charCodeA;
            keyIndex++;
          }
          return String.fromCharCode(num);
        });

    result = !this.direct ? result.reverse() : result;
    return result.join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
