import React from 'react'
import HighScore from './HighScore'
import { Grid } from 'semantic-ui-react'

const Leaderboard = (props) => {
  //debugger
  //should use object.assign to clone props.scores so not to modify original props.scores
  props.scores.map(score => score.username = (props.users.filter(user => user.id === score.user_id)[0].username))
  //returns an array of arrays with just one element that is equal to the username of that user
  //but props.scores is different
  //debugger
  let sortedScores = props.scores.sort(function(a, b) {return b.score - a.score}).slice(0, 10)

  //what if highest is 800 and have 50 800 scores?

  return(
    <div>
      {sortedScores.map((obj, i) => <HighScore key={i} username={obj.username} score={obj.score} />)}
    </div>
  )
}

export default Leaderboard
