import React from 'react'
import { Button, Grid, Header, Segment, Form, Icon } from 'semantic-ui-react'

const Login = (props) => {
  return(
    <div>
      <div id="#loginTitle" className="gameTitle"><Icon name='puzzle' flipped='horizontally' size="small" />Trivia Amico</div>
      <Grid id="loginFormGrid" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header id="loginFormHeader" textAlign='center'>Login to your account</Header>
        <Form size='large' onSubmit={props.login}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name="username" />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' name="password" type='password' />
            <Button id="loginButton" fluid size='large'>Login</Button>
          </Segment>
        </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Login
