import React from 'react';
import Question from './Question'
import AnswersContainer from './AnswersContainer'
import Score from './Score'

class GameContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      score: 0
    }
    this.checkAnswer = this.checkAnswer.bind(this)
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
    let clicked = event.target.textContent
    clicked === this.props.data.correct_answer ? this.handleScore() : null
    this.props.incrementIndex()
  }

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
          incrementIndex={this.props.incrementIndex}
          checkAnswer={this.checkAnswer}/>
        <Score score={this.state.score}/>
      </div>
    )
  }
}

// const GameContainer = (props) => {
//   const combineAnswers = (array, element) => {
//     let combined = [...array, element]
//     let answers = combined.map( element => decode(element) )
//     return answers
//   }
//
//   const decode = (string) => {
//     let parser = new DOMParser()
//     let decodedText = parser.parseFromString(string, 'text/html').body.textContent
//     return decodedText
//   }
//
//   return(
//     <div>
//       <Question question={decode(props.data.question)} />
//       <AnswersContainer answers={combineAnswers(props.data.incorrect_answers, props.data.correct_answer)} incrementIndex={props.incrementIndex}/>
//     </div>
//   )
// }

export default GameContainer

//this is where to check answers
