import forge from 'node-forge'
import hexyjs from 'hexyjs'
import {
  generateRsaKeyPair,
  rsaEncrypt,
  rsaDecrypt,

  generatePwdKey,
  aesEncrypt,
  aesDecrypt,
  generateUnlockKey
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
  const testString = 'Test passed: pwdKey '
  const key = generatePwdKey(login, password)
  const iv = forge.random.getBytesSync(32)

  const enc = aesEncrypt(testString, key, iv)
  const dec = aesDecrypt(enc, key, iv)
  console.log(dec)
}

export { testRsa, testAes, testUnlockKey, testPwdKey }