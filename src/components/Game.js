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
      questions: nextProps.data.results.map(obj => obj.question).map(ele => this.decode(ele)),
      correct_answers: nextProps.data.results.map(obj => obj.correct_answer),
      incorrect_answers: nextProps.data.results.map(obj => obj.incorrect_answers)

    }, () => console.log(this.state))
  }

  decode = (string) => {
    let parser = new DOMParser()
    let dom = parser.parseFromString('<!doctype html><body>' + string, 'text/html')
    let decodedString = dom.body.textContent
    return decodedString
  }

  incrementIndex = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  //if index > questions.length show that game is over

  handleScore = () => {
    this.setState({
      score: 0
    })
  }

  render() {
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
