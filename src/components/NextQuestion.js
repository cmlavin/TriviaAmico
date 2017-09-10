import React from 'react'
import { Button } from 'semantic-ui-react'

const NextQuestion = (props) => {
  return(
    <div>
      {props.nextQuestion === true ?
        <Button active id="nextQuestionButton">Next Question</Button> : <Button disabled id="nextQuestionButton">Next Question</Button>}
    </div>
  )
}

export default NextQuestion
