import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Authorization = () => {
  // return (
  //   <p>Authorization will be here!</p>
  // )
  
  // let [wantForm, setWantForm] = React.useState(false);

  let hasAccount = confirm('Do you already heave an account?');

  if (hasAccount) {
    return (<SignIn/>);
  } else {
    return (<SignUp/>)
  }
}

export default Authorization;