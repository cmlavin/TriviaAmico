import React from 'react';
import Navbar from './Navbar'
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
      score: 0
    }
  }

  handleGameData = (props) => {
    this.setState({
      questions: props.data.results.map(obj => obj.question),
      correct_answers: props.data.results.map(obj => obj.correct_answer),
      incorrect_answers: props.data.results.map(obj => obj.incorrect_answers)
    })
  }

  //should I setState or just do this code in this.state??

  render() {
    return(
      <div>
        <Navbar />
        <Score />
        <Timer />
        <Hint />
      </div>
    )
  }
}

export default Game;
