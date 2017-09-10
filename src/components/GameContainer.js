import React from 'react';
import Question from './Question'
import AnswersContainer from './AnswersContainer'
import Score from './Score'
import NextQuestion from './NextQuestion'

class GameContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      score: 0,
      nextQuestion: false
    }
  }

  combineAnswers = (array, element) => {
    let combined = [...array, element]
    let answers = combined.map( element => this.decode(element) )
    return answers
  }

  decode = (string) => {
    let parser = new DOMParser()
    let decodedText = parser.parseFromString(string, 'text/html').body.textContent
    return decodedText
  }

  checkAnswer = (event) => {
    let clicked = event.target
    debugger
    clicked.textContent === this.props.data.correct_answer ? (clicked.style.backgroundColor = '#289323') && (this.handleScore()) : clicked.style.backgroundColor = '#FF0000'
    this.setState({
      nextQuestion: true
    })

  }
  //this.props.incrementIndex()

  handleScore = () => {
    let difficulty = this.props.difficulty
    let points = difficulty === "easy" ? 400 : difficulty === "medium" ? 800 : 1200
    this.setState({
      score: this.state.score + points
    })
  }

  render() {
    return(
      <div>
        <Question question={this.decode(this.props.data.question)} />
        <AnswersContainer answers={this.combineAnswers(this.props.data.incorrect_answers, this.props.data.correct_answer)}
          checkAnswer={this.checkAnswer}/>
        <Score score={this.state.score}/>
        <NextQuestion nextQuestion={this.state.nextQuestion} incrementIndex={this.props.incrementIndex} />
      </div>
    )
  }
}

export default GameContainer
