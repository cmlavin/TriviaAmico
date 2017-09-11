import React from 'react'
import { Button } from 'semantic-ui-react'

const Answer = (props) => {
  return(
    <div>
      <Button id="answerButton" color="#A9C4DF" onClick={props.checkAnswer} disabled={props.clickedAnswer}>{props.answer}</Button>
    </div>
  )
}

export default Answer

//add color property onto Button?  to set default color to be blue
