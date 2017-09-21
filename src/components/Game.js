import React from 'react'
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
    if(prevProps.index !== this.state.index) {
      let gameOver = this.props.data.length === this.state.index ? true : false
      // eslint-disable-next-line
      gameOver === true ? this.props.gameData(this.state.score) : null
    }
  }

  timerAtZero = () => {
    this.setState({
      index: this.props.data.length
    })
  }

  gameOver = () =>{
    return(
      <div>
        <GameOver gameScore={this.props.gameScore}/>
        <div className="score-timer-container">
          <Score score={this.state.score}/>
        </div>
      </div>
    )
  }

  gameStart = () =>{
    return(
      <div>
        <GameContainer data={this.props.data[this.state.index]}
          incrementIndex={this.incrementIndex}
          handleScore={this.handleScore}/>
        <div className="score-timer-container">
          <Score score={this.state.score}/>
          <Timer timerAtZero={this.timerAtZero} numberOfQuestions={this.props.data.length}/>
        </div>
      </div>
    )
  }

  gameConditional = () =>{
    return this.props.data.length === this.state.index ?
      this.gameOver() :
      this.gameStart()
  }

  render() {
    return(
      <div>
        <Navbar />
        {this.props.data.length === 0 ? <Loading /> : this.gameConditional()}
      </div>
    )
  }
}

export default Game
