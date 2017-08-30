import React from 'react';
import { Form, Select, Dropdown, Button } from 'semantic-ui-react'
import categories from '../categories'
import difficulties from '../difficulties'
import numQuestions from '../numQuestions'

class StartGame extends React.Component {
  constructor() {
    super()
    this.state = {
      number: '',
      category: '',
      difficulty: '',
      type: ''
    }
  }

  handleSelections = () => {
    this.setState({

    })
  }

  //call handleSelections upon a button click to ensure all fields are filled in when submitted
  //so that all keys in state are set at once

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSelections}>
          <Form.Field inline>
            <label><h3>Category</h3></label>
            <Select id="selectedCategory" options={categories} /><br/>
            <label><h3>Difficulty</h3></label>
            <Select id="selectedDifficulty" options={difficulties} /><br/>
            <label><h3>Number of questions</h3></label>
            <Select id="selectedNumber" options={numQuestions} /><br/>
            <Button>Submit</Button>
          </Form.Field>
        </Form>
      </div>
    )
  }
}

export default StartGame;
