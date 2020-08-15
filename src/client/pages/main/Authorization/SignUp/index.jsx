import React from 'react'

const testFunc = () => {
  const login = document.getElementById('signup_login').value
  const password = document.getElementById('signup_password').value

  alert('TestFunc: ' + login + ' ' + password)
}

const SignUp = () => {
  return (
    <div>
      <p>SignUp</p>
      <form name="SignUpFrom" onSubmit={testFunc} >
        <label>Логин: <input type="text" name="login" id="signup_login" /></label> <br />
        <label>Пароль: <input type="password" name="password" id="signup_password" /></label> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUp