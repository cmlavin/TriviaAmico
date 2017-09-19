import React from 'react'

const Score = (props) => {
  return(
    <div id="scoreContainer">
      <h4 id="scoreText">
        Score: {props.score}
      </h4>
    </div>
  )
}

export default Score
