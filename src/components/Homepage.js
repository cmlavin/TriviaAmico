import React from 'react'
import StartGame from './StartGame'
import Leaderboard from './Leaderboard'
import LoginContainer from './LoginContainer'
import Navbar from './Navbar'
import { Icon } from 'semantic-ui-react'

const Homepage = (props) => {
  return(
    <div>
      {props.loggedIn ? <Navbar logout={props.logout}/> : null}
      <div id="homepageTitle" className="gameTitle">
        <Icon name='puzzle' flipped='horizontally' size="small" />
        Trivia Amico
      </div>
      {props.loggedIn ? <StartGame handleSubmit={props.handleSubmit} handleSelection={props.handleSelection} /> : <LoginContainer />}
      <Leaderboard scores={props.scores} />
    </div>
  )
}

export default Homepage
