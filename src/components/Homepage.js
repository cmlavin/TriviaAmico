import React from 'react';
import StartGame from './StartGame'

const Homepage = (props) => {
  //debugger
  return(
    <StartGame handleSubmit={props.handleSubmit} handleSelection={props.handleSelection}/>
  )
}

export default Homepage;
