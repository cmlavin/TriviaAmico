import React from 'react';
import Navbar from './Navbar'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      correct_answer: '',
      incorrect_answers: [],
      score: 0
    }
  }

  render() {
    return(
      <div>
        <Navbar />
      </div>
    )
  }
}

export default Game;
