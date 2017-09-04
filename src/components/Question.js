import React from 'react';

const Question = (props) => {
  return(
    <div>
      <h3 id="questionText">{props.questions[props.index]}</h3>
    </div>
  )
}

export default Question
