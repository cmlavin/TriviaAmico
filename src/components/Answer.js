import React from 'react'
import { Button } from 'semantic-ui-react'

const Answer = (props) => {
  return(
    <div>
    <Button onClick={props.checkAnswer}>{props.answer}</Button>
    </div>
  )
}

export default Answer

//document.getElementsByClassName('button')[index].textContent returns the text of the button
//if text === correct_answer, answer is correct

//event.target??  to tell which button is clicked


//<Button onClick={props.incrementIndex}>{props.answer}</Button>

//onClick call function that displays correct or wrong and then increments the index


//if clicked button is correct answer, turn button green, else turn it red
