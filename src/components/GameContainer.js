import React from 'react';
import Question from './Question'
import AnswersContainer from './AnswersContainer'
import Timer from './Timer'

const GameContainer = (props) => {
  const combineAnswers = (array, element) => {
    let combined = [...array, element]
    let answers = combined.map( element => decode(element) )
    return answers
  }

  const decode = (string) => {
    let parser = new DOMParser()
    let decodedText = parser.parseFromString(string, 'text/html').body.textContent
    return decodedText
  }

  return(
    <div>
      <Question question={decode(props.data.question)} />
      <AnswersContainer answers={combineAnswers(props.data.incorrect_answers, props.data.correct_answer)} incrementIndex={props.incrementIndex}/>
      <Timer />
    </div>
  )
}

export default GameContainer

// in this function pass the correct answer
// and the incorrect answers and combine them into one array
// and pass it into AnswersContainer as a single prop
