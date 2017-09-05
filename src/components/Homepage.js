import React from 'react';
import StartGame from './StartGame'

const Homepage = (props) => {
  return(
    <div>
      <h3 id="gameTitle">Trivia Amico</h3>
      <StartGame handleSubmit={props.handleSubmit} handleSelection={props.handleSelection}/>
    </div>
  )
}

export default Homepage;

//current_user ? <StartGame/> : <LoginContainer/>
