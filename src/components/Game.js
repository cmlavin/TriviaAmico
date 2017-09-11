import React from 'react';
import Navbar from './Navbar'
import GameContainer from './GameContainer'
import Loading from './Loading'
import GameOver from './GameOver'
import Timer from './Timer'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      gameOver: false
    }
  }

  incrementIndex = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  gameOver = () => {
    if(this.props.data.length === this.state.index) {
      this.setState({
        gameOver: true
      })
    }
    this.props.gameStatus(this.state.gameOver)
  }

  render() {
    return(
      <div>
        <Navbar />
        {this.props.data.length === 0 ? <Loading /> : this.state.gameOver === true ?
          <GameOver gameScore={this.props.gameScore}/> : <GameContainer data={this.props.data[this.state.index]}
          incrementIndex={this.incrementIndex} difficulty={this.props.difficulty} gameScore={this.props.gameScore} gameOver={this.gameOver}/>}
        <Timer />
      </div>
    )
  }
}

export default Game;
