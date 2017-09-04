import React from 'react';
import Navbar from './Navbar'
import GameContainer from './GameContainer'
import Score from './Score'
import Timer from './Timer'
import Hint from './Hint'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
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
      incorrect_answers: nextProps.data.results.map(obj => obj.incorrect_answers),
      answers: nextProps.data.results.map((obj, i) => obj.incorrect_answers[i]).push(this.state.correct_answers[0])
    }, () => console.log(this.state))
  }

//on clicking an answer, increment the index by 1
  //all the returned questions are being rendered on the Game page, need to only show one at a time based
  //on clicking an answer button

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
        <GameContainer questions={this.state.questions} answers={this.state.answers}/>
        <Score score={this.state.score}/>
        <Timer />
        <Hint />
      </div>
    )
  }
}

export default Game;
