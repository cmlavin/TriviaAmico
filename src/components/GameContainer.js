import React from 'react';
import Question from './Question'
import AnswersContainer from './AnswersContainer'
import Timer from './Timer'

const GameContainer = (props) => {
  return(
    <div>
      <Question questions={props.questions} index={props.index}/>
      <AnswersContainer correct_answers={props.correct_answers}
        incorrect_answers={props.incorrect_answers}
        index={props.index}
        incrementIndex={props.incrementIndex}/>
      <Timer />
    </div>
  )
}

export default GameContainer
