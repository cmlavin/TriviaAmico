import React from 'react'
import { Button } from 'semantic-ui-react'

const Answer = (props) => {
  return(
    <div>
    <Button>{props.answers}</Button>
    </div>
  )
}

export default Answer
