import React from 'react'
import HighScore from './HighScore'
import { Grid } from 'semantic-ui-react'

const Leaderboard = (props) => {
  let allScores = props.scores.map(obj => obj.score)
  let sortedScores = allScores.sort(function(a, b) {return b - a}).slice(0, 10)
  //what if highest is 800 and have 50 800 scores?

  return(
    <div>
      {sortedScores.map(score => <HighScore score={score} />)}
    </div>
  )
}

export default Leaderboard
