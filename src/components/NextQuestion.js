import React from 'react'
import { Button } from 'semantic-ui-react'

const NextQuestion = (props) => {
  let buttonStatus = (props.nextQuestion === false ? true : false)

  return(
    <div>
        <Button disabled={buttonStatus} id="nextQuestionButton" onClick={props.handleNextQuestion}>
          Next Question
        </Button>
    </div>
  )
}

export default NextQuestion
