import React from 'react'
import { Button } from 'semantic-ui-react'

const Answer = (props) => {
  return(
    <div>
    <Button onClick={props.incrementIndex}>{props.answer}</Button>
    </div>
  )
}

export default Answer

//onClick call function that displays correct or wrong and then increments the index
//next to button can add icon (green checkmark if correct, red X if incorrect)
