import forge from 'node-forge'
import hexyjs from 'hexyjs'
import {
  generateRsaKeyPair,
  rsaEncrypt,
  rsaDecrypt,

  generateAesKey,
  generateUnlockKey,
  generatePwdKey,
  aesEncrypt,
  aesDecrypt,
} from './lowLevelEncryption'

function testRsa() {
  const testString = 'Test passed: RSA'
  const keyPair = generateRsaKeyPair()
  const result = rsaDecrypt(rsaEncrypt(testString, keyPair.public), keyPair.private)

  console.log(result)
}

function testAes() {
  const testString = 'Test passed: AES'
  const key = forge.random.getBytesSync(32)
  const iv = forge.random.getBytesSync(32)

  const enc = aesEncrypt(testString, key, iv)
  const dec = aesDecrypt(enc, key, iv)
  console.log(dec)
}

function testUnlockKey() {
  const testString = 'Test passed: UnlockKey'
  const key = generateUnlockKey()
  const iv = forge.random.getBytesSync(32)

  const enc = aesEncrypt(testString, key, iv)
  const dec = aesDecrypt(enc, key, iv)
  console.log(dec)
}


function testPwdKey(login, password) {
  const testString = 'Test passed: pwdKey'
  const key = generatePwdKey(login, password)
  const iv = forge.random.getBytesSync(32)

  const enc = aesEncrypt(testString, key, iv)
  const dec = aesDecrypt(enc, key, iv)
  console.log(dec)
}

function testRsaOfAes() {
  const testString = 'Test passed: Rsa(Aes)'

  const rsaKeyPair = generateRsaKeyPair()
  const aesKey = generateAesKey()
  const iv = forge.random.getBytesSync(32)

  const encStr = aesEncrypt(testString, aesKey, iv)
  const encAesKey = rsaEncrypt(aesKey, rsaKeyPair.public)
  const decAesKey = rsaDecrypt(encAesKey, rsaKeyPair.private)
  const decStr = aesDecrypt(encStr, decAesKey, iv)
  console.log(decStr)
}

function testAesOfRsa() {
  const testString = 'Test passed: Aes(Rsa)'

  const rsaKeyPair = generateRsaKeyPair()
  const aesKey = generateAesKey()
  const iv = forge.random.getBytesSync(32)

  const encStr = rsaEncrypt(testString, rsaKeyPair.public)
  const encRsaKey = aesEncrypt(rsaKeyPair.private, aesKey, iv)
  const decRsaKey = aesDecrypt(encRsaKey, aesKey, iv)
  const decStr = rsaDecrypt(encStr, decRsaKey)
  console.log(decStr)
}


export { testRsa, testAes, testUnlockKey, testPwdKey, testRsaOfAes, testAesOfRsa }