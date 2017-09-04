import React from 'react';
import Navbar from './Navbar'
import GameContainer from './GameContainer'
import Score from './Score'
import Hint from './Hint'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      questions: [],
      correct_answers: [],
      incorrect_answers: [],
      answers: [],
      score: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      questions: nextProps.data.results.map(obj => obj.question),
      correct_answers: nextProps.data.results.map(obj => obj.correct_answer),
      incorrect_answers: nextProps.data.results.map(obj => obj.incorrect_answers)

    }, () => console.log(this.state))
  }

  //create new function that increments question index and call this function when an <Answer/> in clicked (onClick)

//on clicking an answer, increment the index by 1
  //all the returned questions are being rendered on the Game page, need to only show one at a time based
  //on clicking an answer button

  incrementIndex = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  handleScore = () => {
    this.setState({
      score: 0
    })
  }

  render() {
    //debugger
    return(
      <div>
        <Navbar />
        <GameContainer questions={this.state.questions}
          incorrect_answers={this.state.incorrect_answers}
          index={this.state.index}
          incrementIndex={this.incrementIndex}/>
        <Score score={this.state.score}/>
        <Hint />
      </div>
    )
  }
}

export default Game;

//answers: nextProps.data.results.map((obj, i) => obj.incorrect_answers[i]).push(this.state.correct_answers[0])
