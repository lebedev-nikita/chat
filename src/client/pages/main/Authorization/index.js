import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Authorization() {
  let hasAccount = confirm('Do you already heave an account?');

  if (hasAccount) {
    return (<SignIn/>);
  } else {
    return (<SignUp/>)
  }
}