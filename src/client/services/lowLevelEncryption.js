import forge from 'node-forge'

// TODO: Разобраться, что такое 'e'
// TODO: сделать генерацию ключей асинхронной
function generateRsaKeyPair() {
  const keyPair = forge.rsa.generateKeyPair({ bits: 2048, e: 0x10001 })
  return { private: keyPair.privateKey, public: keyPair.publicKey }
}

function rsaEncrypt(value, pubKey) {
  return pubKey.encrypt(value)
}

function rsaDecrypt(value, privKey) {
  return privKey.decrypt(value)
}

function generatePwdKey(login, password) {
  const numIterations = 10 * 1000
  let pwdKey = forge.pkcs5.pbkdf2(password, login, numIterations, 32)
  return pwdKey
}

function generateAesKey() {
  return forge.random.getBytesSync(32)
}


function generateUnlockKey() {
  return generateAesKey()
}

function generateChannelKey() {
  return generateAesKey()
}




// TODO: оптимизировать, не создавая 'cipher' каждый раз
// ? добавить функцию encryptMessage
const defaultIV = forge.random.getBytesSync(32)

function aesEncrypt(value, key, iv = defaultIV) {
  const cipher = forge.cipher.createCipher('AES-CBC', key)
  cipher.start({ iv: iv })
  cipher.update(forge.util.createBuffer(value))
  cipher.finish()
  return cipher.output
}


/*  TODO: подумать, как передавать iv. 
    Возможно, стоит сделать расшифровку сообщений отдельной функцией */
function aesDecrypt(value, key, iv = defaultIV) {
  let decipher = forge.cipher.createDecipher('AES-CBC', key)
  decipher.start({ iv: iv })
  decipher.update(value)
  let result = decipher.finish() // check 'result' for true/false
  // return String.fromCharCode.apply(null, decipher.output) 
  const hex = decipher.output.toHex()
  return hexyjs.hexToStr(hex)
  // .toString()
}


export {
  generateRsaKeyPair,
  rsaEncrypt,
  rsaDecrypt,

  generatePwdKey,
  generateUnlockKey,
  generateChannelKey,
  aesEncrypt,
  aesDecrypt
}