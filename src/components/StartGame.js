import React from 'react';
import { Form, Select, Dropdown, Button } from 'semantic-ui-react'
import categories from '../categories'
import difficulties from '../difficulties'
import numQuestions from '../numQuestions'
import questionType from '../questionType'

//class StartGame extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     number: '',
  //     category: '',
  //     difficulty: '',
  //     type: ''
  //   }
  // }

  // handleSelections = (event) => {
  //   event.preventDefault()
  //   debugger
  //   let selectedCategory = event.target.dataset.category
  //   let selectedDifficulty = event.target.dataset.difficulty
  //   let selectedNumQuestions = event.target.dataset.numQuestions
  //   let selectedType = event.target.dataset.questionType
  //   this.setState({
  //     number: selectedNumQuestions,
  //     category: selectedCategory,
  //     difficulty: selectedDifficulty,
  //     type: selectedType
  //   })
  // }

  //put onChange on each Select, onSubmit should fetch API data
  //selected game options need to be passed up using a callback function to the place where API call is being made
  //need to pass props down from App (App contains handleChange) and data is passed back up to handleChange from StartGame

  const StartGame = (props) => {
    return(
      <div>
        <Form>
          <Form.Field inline onSubmit={props.handleSubmit}>
            <label><h3>Category</h3></label>
            <Select id="selectedCategory" options={categories} onChange={props.handleSelection}/><br/>
            <label><h3>Difficulty</h3></label>
            <Select id="selectedDifficulty" options={difficulties} onChange={props.handleSelection}/><br/>
            <label><h3>Number of questions</h3></label>
            <Select id="selectedNumber" options={numQuestions} onChange={props.handleSelection}/><br/>
            <label><h3>Type of questions</h3></label>
            <Select id="selectedType" options={questionType} onChange={props.handleSelection}/><br/>
            <Button>Submit</Button>
          </Form.Field>
        </Form>
      </div>
    )
}

export default StartGame;
