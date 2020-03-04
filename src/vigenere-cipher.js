class VigenereCipheringMachine {
  constructor(type){
    this.type = type;
  }

  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  encrypt(message, key) {
    if (!message || !key) throw new Error('Error');
    let messageArr = message.toLowerCase().split('');
    let encryptedMessage = [];
    messageArr.forEach(item => {
      if (this.alphabet.includes(item)) 
      return encryptedMessage.push(this.alphabet.indexOf(item));
    })
    let encryptedKey = key.toLowerCase().split('').map(item => {
      return this.alphabet.indexOf(item);
    })

    let encryptedKeyLong = [];
    do {
      encryptedKeyLong = encryptedKeyLong.concat(encryptedKey);
    } while (encryptedKeyLong.length <= encryptedMessage.length);
    encryptedKeyLong = encryptedKeyLong.slice(0, encryptedMessage.length);

    let decryptedArr = [];
    for (let i = 0; i < encryptedMessage.length; i++) {
      let char = (encryptedMessage[i] + encryptedKeyLong[i]) % this.alphabet.length;
      decryptedArr.push(this.alphabet[char].toUpperCase());
    }

    messageArr.forEach((item, index) => {
      if (!this.alphabet.includes(item)) {
        decryptedArr.splice(index, 0, item)
      }
    })

    return this.type === false ? decryptedArr.reverse().join('') : decryptedArr.join('')
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Error');
    let messageArr = encryptedMessage.toLowerCase().split('');
    let decryptedMessage = [];
    messageArr.forEach(item => {
      if (this.alphabet.includes(item)) 
      return decryptedMessage.push(this.alphabet.indexOf(item));
    })
    let decryptedKey = key.toLowerCase().split('').map(item => {
      return this.alphabet.indexOf(item);
    })

    let decryptedKeyLong = [];
    do {
      decryptedKeyLong = decryptedKeyLong.concat(decryptedKey);
    } while (decryptedKeyLong.length <= decryptedMessage.length);
    decryptedKeyLong = decryptedKeyLong.slice(0, decryptedMessage.length);

    let encryptedArr = [];
    for (let i = 0; i < decryptedMessage.length; i++) {
      let char = (decryptedMessage[i] + this.alphabet.length - decryptedKeyLong[i]) % this.alphabet.length;
      encryptedArr.push(this.alphabet[char].toUpperCase());
    }

    messageArr.forEach((item, index) => {
      if (!this.alphabet.includes(item)) {
        encryptedArr.splice(index, 0, item)
      }
    })

    return this.type === false ? encryptedArr.reverse().join('') : encryptedArr.join('');
  }
}

module.exports = VigenereCipheringMachine;
