import React from 'react'
import { Table } from 'semantic-ui-react'

const HighScore = (props) => {
  return(
      <Table.Row>
        <Table.Cell textAlign="center">{props.username}</Table.Cell>
        <Table.Cell textAlign="center">{props.score}</Table.Cell>
      </Table.Row>
  )
}

export default HighScore
