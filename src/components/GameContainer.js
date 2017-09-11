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
      nextQuestion: false,
      clickedAnswer: false
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
    let answer = event.target.clicked.textContent === this.props.data.correct_answer ? true : false
    answer === true ? this.handleScore() : null
    this.setState({
      nextQuestion: true,
      clickedAnswer: true
    })
    return answer
  }

  handleNextQuestion = () => {
    this.setState({
      nextQuestion: false,
      clickedAnswer: false
    })
    this.props.incrementIndex()
    this.props.gameOver()
  }

  handleScore = () => {
    let difficulty = this.props.difficulty
    let points = difficulty === "easy" ? 400 : difficulty === "medium" ? 800 : 1200
    this.setState({
      score: this.state.score + points
    }, this.props.gameScore(this.state.score))
  }

  render() {
    return(
      <div>
        <Question question={this.decode(this.props.data.question)} />
        <AnswersContainer answers={this.combineAnswers(this.props.data.incorrect_answers, this.props.data.correct_answer)}
          checkAnswer={this.checkAnswer} clickedAnswer={this.state.clickedAnswer}/>
        <Score score={this.state.score}/>
        <NextQuestion nextQuestion={this.state.nextQuestion} handleNextQuestion={this.handleNextQuestion}/>
      </div>
    )
  }
}

export default GameContainer
