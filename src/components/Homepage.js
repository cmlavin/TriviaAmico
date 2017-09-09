import React from 'react';
import StartGame from './StartGame'
import LoginContainer from './LoginContainer'
import Leaderboard from './Leaderboard'
import { Icon } from 'semantic-ui-react'

const Homepage = (props) => {
  return(
    <div>
      <div className="gameTitle"><Icon name='puzzle' flipped='horizontally' size="small" />Trivia Amico</div>
      {props.loggedIn ? <StartGame handleSubmit={props.handleSubmit} handleSelection={props.handleSelection} /> : <LoginContainer />}
      <Leaderboard />
    </div>
  )
}

export default Homepage;
