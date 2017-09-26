import React from 'react'
import HighScore from './HighScore'
import { Header, Icon, Table } from 'semantic-ui-react'

class Leaderboard extends React.Component {
  componentWillReceiveProps(nextProps) {
    nextProps.scores.map(score => score.username = (nextProps.users.filter(user => user.id === score.user_id)[0].username))
  }

  sortedScores = () => {
    return this.props.scores.sort(function(a, b) {return b.score - a.score}).slice(0, 10)
  }
//to fix icon not changing size, look at gameTitle in Homepage
  render() {
    return(
      <div id="leaderboardDiv">
        <Header id="leaderboardHeader">
          <Icon name='trophy' />
          <Header.Content id="leaderboardHeaderText">
            Leaderboard
          </Header.Content>
        </Header>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={4}>Rank</Table.HeaderCell>
              <Table.HeaderCell width={6}>Username</Table.HeaderCell>
              <Table.HeaderCell width={6}>High Score</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.sortedScores().map((obj, i) => <HighScore key={i} rank={i+1} username={obj.username} score={obj.score} />)}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Leaderboard
