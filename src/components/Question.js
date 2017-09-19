import React from 'react'

const Question = (props) => {
  return(
    <div>
      <h3 id="questionText">
        {props.question}
      </h3>
    </div>
  )
}

export default Question
