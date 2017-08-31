import React from 'react';
import StartGame from './StartGame'

const Homepage = (props) => {
  //debugger
  return(
    <div>
      <h3>Trivia Amico</h3>
      <StartGame handleSubmit={props.handleSubmit} handleSelection={props.handleSelection}/>
    </div>
  )
}

export default Homepage;
