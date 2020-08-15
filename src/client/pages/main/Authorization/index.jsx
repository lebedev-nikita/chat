import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Authorization = () => {

  // let hasAccount = confirm('Do you already heave an account?')
  let hasAccount = false

  if (hasAccount) {
    return (<SignIn/>)
  } else {
    return (<SignUp/>)
  }
}

export default Authorization