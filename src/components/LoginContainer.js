import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Grid, Header, Segment } from 'semantic-ui-react'

const LoginContainer = () => {
  const dimensions = {width: 375, height: 375}
  return(
    <div>
      <Grid id="loginContainerGrid">
        <Grid.Column>
          <Segment circular style={dimensions}>
            <Header id="loginContainerHeader" textAlign='center'>
              Welcome!
              <Header.Subheader>
                <Link to='/signup'><Button id="signupButton" content='Sign up' icon='signup' /></Link>
                <Link to='/login'><Button id="loginButton" content="Log in" icon='user' /></Link>
              </Header.Subheader>
            </Header>
         </Segment>
        </Grid.Column>
       </Grid>
      </div>
  )
}

export default LoginContainer
