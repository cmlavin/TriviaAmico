import React from 'react'
import HighScore from './HighScore'
import { Table } from 'semantic-ui-react'

class Leaderboard extends React.Component {
  componentWillReceiveProps(nextProps) {
    nextProps.scores.map(score => score.username = (nextProps.users.filter(user => user.id === score.user_id)[0].username))
  }

  sortedScores = () => {
    return this.props.scores.sort(function(a, b) {return b.score - a.score}).slice(0, 10)
  }

  render() {
    return(
      <div id="leaderboard">
        {this.sortedScores().map((obj, i) => <HighScore key={i} username={obj.username} score={obj.score} />)}
      </div>
    )
  }
}

export default Leaderboard
