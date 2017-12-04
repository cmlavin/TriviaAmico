import React from 'react'
import StartGame from './StartGame'
import Leaderboard from './Leaderboard'
import LoginContainer from './LoginContainer'
import Navbar from './Navbar'
import { Icon } from 'semantic-ui-react'

class Homepage extends React.Component {

  gameTitle = () => {
    return(
      <div id="homepageTitle" className="gameTitle">
        <Icon name='puzzle' flipped='horizontally' size="small" />
        Trivia Amico
      </div>
    )
  }

  homepageConditional = () => {
    return this.props.loggedIn ?
      (<div id="loggedInHomepage">
      <Navbar logout={this.props.logout}/>
      {this.gameTitle()}
      <StartGame handleSubmit={this.props.handleSubmit} handleSelection={this.props.handleSelection} />

      </div>) :
      (<div>
       {this.gameTitle()}
      <LoginContainer />
      </div>)
  }

  render() {
    return(
      this.homepageConditional()
    )
  }
}

export default Homepage
