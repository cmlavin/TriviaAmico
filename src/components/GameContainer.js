import React from 'react';
import Question from './Question'
import AnswersContainer from './AnswersContainer'
import Timer from './Timer'

const GameContainer = (props) => {

  return(
    <div>
      <Question questions={props.questions}/>
      <AnswersContainer incorrect_answers={props.incorrect_answers}/>
      <Timer />
    </div>
  )
}

export default GameContainer

// function displayQuestion(questions){
//   questions.
// }
