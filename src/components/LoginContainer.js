import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Segment } from 'semantic-ui-react'

const LoginContainer = () => {
  const dimensions = {width: 425, height: 425}
  return(
    <div id="loginContainerDiv">
      <Segment circular style={dimensions} id="login">
        <Header id="loginContainerHeader" textAlign='center'>
          Welcome!
          <Header.Subheader>
            <Link to='/signup'><Button id="signupButton" content='Sign up' icon='signup' /></Link>
            <Link to='/login'><Button id="loginButton" content="Log in" icon='user' /></Link>
          </Header.Subheader>
        </Header>
      </Segment>
    </div>
  )
}

export default LoginContainer
