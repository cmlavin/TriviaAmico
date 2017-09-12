import React from 'react';
import Navbar from './Navbar'
import GameContainer from './GameContainer'
import Loading from './Loading'
import GameOver from './GameOver'
import Score from './Score'
import Timer from './Timer'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      score: 0
    }
  }

  incrementIndex = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  handleScore = () => {
    let difficulty = this.props.difficulty
    let points = difficulty === "easy" ? 400 : difficulty === "medium" ? 800 : 1200
    this.setState({
      score: this.state.score + points
    })
  }

componentDidUpdate(prevState, prevProps) {
  let gameOver = this.props.data.length === this.state.index ? true : false
  this.props.gameStatus(gameOver)
}

  render() {
    return(
      <div>
        <Navbar />
        {this.props.data.length === 0 ? <Loading /> : this.props.data.length === this.state.index ?
          <GameOver gameScore={this.props.gameScore}/> : <GameContainer data={this.props.data[this.state.index]} incrementIndex={this.incrementIndex} handleScore={this.handleScore}/>}
        <Score score={this.state.score}/>
        <Timer />
      </div>
    )
  }
}

export default Game;
