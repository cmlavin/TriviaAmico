import React from 'react';
import { Form, Select, Button } from 'semantic-ui-react'
import categories from '../options/categories'
import difficulties from '../options/difficulties'
import numQuestions from '../options/numQuestions'
import questionTypes from '../options/questionTypes'

  const StartGame = (props) => {
    // debugger
    return(
      <div>
        <Form onSubmit={props.handleSubmit}>
          <Form.Field inline>
            <label><h3>Category</h3></label>
            <Select id="selectedCategory" name="category" options={categories} onChange={props.handleSelection}/><br/>
            <label><h3>Difficulty</h3></label>
            <Select id="selectedDifficulty" name="difficulty" options={difficulties} onChange={props.handleSelection}/><br/>
            <label><h3>Number of questions</h3></label>
            <Select id="selectedNumber" name="number" options={numQuestions} onChange={props.handleSelection}/><br/>
            <label><h3>Type of questions</h3></label>
            <Select id="selectedType" name="type" options={questionTypes} onChange={props.handleSelection}/><br/>
            <Button>Start Game</Button>
          </Form.Field>
        </Form>
      </div>
    )
}

export default StartGame;

//import { Link } from 'react-router-dom'
//<Link to={'/game'}></Link>



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
