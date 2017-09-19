import React from 'react'
import Question from './Question'
import AnswersContainer from './AnswersContainer'
import NextQuestion from './NextQuestion'

class GameContainer extends React.Component{
  constructor() {
    super()
    this.state = {
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
    let answer = event.target.textContent === this.props.data.correct_answer ? true : false
    // eslint-disable-next-line
    answer === true ? this.props.handleScore() : null
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
  }

  render() {
    return(
      <div id="gameContainer-container">
        <Question question={this.decode(this.props.data.question)} />
        <AnswersContainer answers={this.combineAnswers(this.props.data.incorrect_answers, this.props.data.correct_answer)}
          checkAnswer={this.checkAnswer}
          clickedAnswer={this.state.clickedAnswer}/>
        <NextQuestion nextQuestion={this.state.nextQuestion} handleNextQuestion={this.handleNextQuestion}/>
      </div>
    )
  }
}

export default GameContainer
