import React from 'react'
import { Button } from 'semantic-ui-react'

const Answer = (props) => {
  return(
    <div>
      <Button id="answerButton" onClick={props.checkAnswer}>{props.answer}</Button>
    </div>
  )
}

export default Answer

//onClick call function that displays correct or wrong and then increments the index
//if clicked button is correct answer, turn button green, else turn it red
