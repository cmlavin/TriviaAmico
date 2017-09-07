import React from 'react'
import { Button, Grid, Header, Segment, Form } from 'semantic-ui-react'

const Signup = (props) => {
  return(
    <div>
      <h3 className="gameTitle">Trivia Amico</h3>
      <Grid id="signupFormGrid" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>Signup for an account</Header>
        <Form size='large' onSubmit={props.signup}>
          <Segment stacked>
            <Form.Input fluid icon='envelope' iconPosition='left' placeholder='Email Address' name="email"/>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name="username"/>
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' name="password" type='password' />
            <Button fluid size='large'>Signup</Button>
          </Segment>
        </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Signup

//<Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password' />
