import React from 'react';
import Navbar from './Navbar'
import GameContainer from './GameContainer'
import Score from './Score'
import Hint from './Hint'

//Timer is not rerendering upon clicking on an answer button

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      questions: [],
      correct_answers: [],
      incorrect_answers: [],
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

  //answers: this.state.incorrect_answers[this.state.index].concat(this.state.correct_answers[this.state.index])

  //instead of console.log as 2nd argument, call allAnswers method
  //allAnswers combines incorrect and correct answers into one array which it returns

  // allAnswers = (incorr, corr) => {
  //   let answers = incorr.map(arr => {return arr[this.state.index].push(corr[this.state.index])})
  //   console.log(answers)
  // }

  //to merge correct_answers array with incorrect_answers array use .concat method or spread operator
  //answers: [...this.state.incorrect_answers, this.state.correct_answers]

  decode = (string) => {
    let parser = new DOMParser()
    let decodedText = parser.parseFromString(string, 'text/html').body.textContent
    return decodedText
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
          correct_answers={this.state.correct_answers}
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
