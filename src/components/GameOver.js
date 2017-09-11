import React from 'react'

const GameOver = (props) => {
  return(
    <div id="gameOverContainer">
      <h3>Game Over</h3>
      <h3>Final Score: {props.gameScore}</h3>
    </div>
  )
}

export default GameOver
