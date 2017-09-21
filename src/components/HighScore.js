import React from 'react'

const HighScore = (props) => {
  return(
    <div id="highScoreText">
      {props.username}
      {props.score}
    </div>
  )
}

export default HighScore
