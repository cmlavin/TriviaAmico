import React from 'react'
import HighScore from './HighScore'
import categories from '../options/categories'
import { Icon, Table } from 'semantic-ui-react'

class Leaderboard extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.scores.length !== 0 && nextProps.users.length !== 0 && nextProps.gameInfo.length !== 0) {
      nextProps.scores.map(scoreObj => scoreObj.username = (nextProps.users.filter(user => user.id === scoreObj.user_id)[0].username))
      nextProps.scores.map(scoreObj => scoreObj.category = (nextProps.gameInfo.filter(game => game.id === scoreObj.game_id)[0].category))
      nextProps.scores.map(scoreObj => scoreObj.category = (categories.filter(catObj => catObj.value === scoreObj.category)[0].text))
    }
  }

  sortedScores = () => {
    if(this.props.users.length !== 0 && this.props.gameInfo.length !== 0) {
      let sorted = this.props.scores.sort(function(a, b) {return b.score - a.score}).slice(0, 10)
      return sorted.map((obj, i) => <HighScore key={i} rank={i+1} username={obj.username} score={obj.score} category={obj.category}/>)
    }
  }

  render() {
    return(
      <div id="leaderboardDiv">
        <div id="leaderboardHeader">
          <Icon name='trophy' />
            Leaderboard
        </div>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Rank</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>High Score</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.sortedScores()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Leaderboard
