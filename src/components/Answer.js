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
