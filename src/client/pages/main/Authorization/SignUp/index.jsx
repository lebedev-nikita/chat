import React from 'react'
import { testRsa, testAes, testUnlockKey, testPwdKey } from '../../../../services/encTests'

function testFunc() {
  const login = document.getElementById('signup_login').value
  const password = document.getElementById('signup_password').value

  testRsa()
  testAes()
  testUnlockKey()
  testPwdKey(login, password)
}

function SignUp() {
  return (
    <div>
      <p>SignUp</p>
      <form name="SignUpFrom">
        <label>Логин: <input type="text" name="login" id="signup_login" /></label> <br />
        <label>Пароль: <input type="password" name="password" id="signup_password" /></label> <br />
        <button type="button" onClick={testFunc} >Run test</button>
      </form>
    </div>
  )
}

export default SignUp