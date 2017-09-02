import React from 'react'
import Answer from './Answer'

const AnswersContainer = (props) => {
  return(
    <div>
      <Answer incorrect_answers={props.incorrect_answers}/>
      <Answer incorrect_answers={props.incorrect_answers}/>
      <Answer incorrect_answers={props.incorrect_answers}/>
      <Answer incorrect_answers={props.incorrect_answers}/>
    </div>
  )
}

export default AnswersContainer
