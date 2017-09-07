import React from 'react'
import { Button, Grid, Header, Segment, Form } from 'semantic-ui-react'

const Login = (props) => {
  return(
    <div>
      <h3 className="gameTitle">Trivia Amico</h3>
      <Grid id="loginFormGrid" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>Login to your account</Header>
        <Form size='large' onSubmit={props.login}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name="username" />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' name="password" type='password' />
            <Button fluid size='large'>Login</Button>
          </Segment>
        </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Login
