import React from 'react';
import StartGame from './StartGame'
import LoginContainer from './LoginContainer'

const Homepage = (props) => {
  return(
    <div>
      <h3 className="gameTitle">Trivia Amico</h3>
      {props.loggedIn ? <StartGame handleSubmit={props.handleSubmit} handleSelection={props.handleSelection} /> : <LoginContainer />}
    </div>
  )
}

export default Homepage;
