import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const LoginContainer = () => {
  return(
    <div id="loginContainer">
      <Link to='/signup'><Button id="signupButton" content='Sign up' icon='signup' /></Link>
      <Link to='/login'><Button id="loginButton" content="Log in" icon='user' /></Link>
    </div>
  )
}

export default LoginContainer
