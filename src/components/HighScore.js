import React from 'react'
import { Table } from 'semantic-ui-react'
import categories from '../options/categories'

const HighScore = (props) => {
  const category = () => {
    let foundCategory = categories.filter(obj => obj.value === props.category)
    return foundCategory[0].text
  }

  return(
      <Table.Row>
        <Table.Cell textAlign="center">{props.rank}</Table.Cell>
        <Table.Cell textAlign="center">{props.username}</Table.Cell>
        <Table.Cell textAlign="center">{category()}</Table.Cell>
        <Table.Cell textAlign="center">{props.score}</Table.Cell>
      </Table.Row>
  )
}

export default HighScore
