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

//add color property onto Button?  to set default color to be blue
