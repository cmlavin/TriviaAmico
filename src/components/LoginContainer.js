import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const LoginContainer = () => {
  return(
    <div>
      <Link to='/signup'><Button>Sign up</Button></Link>
      <Link to='/login'><Button>Log in</Button></Link>
    </div>
  )
}

export default LoginContainer
