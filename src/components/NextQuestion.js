import React from 'react'
import { Button } from 'semantic-ui-react'

const NextQuestion = (props) => {
  return(
    <div>
      {props.nextQuestion === true ?
        <Button active id="nextQuestionButton"
          onClick={props.handleNextQuestion}>
          Next Question
          </Button> :
        <Button disabled id="nextQuestionButton"
          onClick={props.handleNextQuestion}>
          Next Question
        </Button>}
    </div>
  )
}

export default NextQuestion

//let buttonStatus = 'active' if props.nextQuestion === true and = 'disabled' if props.nextQuestion === false
