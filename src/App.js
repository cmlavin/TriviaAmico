import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OpenTriviaDB from './adapters/OpenTriviaDB'
import Homepage from './components/Homepage'
import Game from './components/Game'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: '',
      category: '',
      difficulty: '',
      type: '',
      data: {}
    }
  }

  handleSelection = (event, data) => {
    //debugger
    const property = event.target.dataset.name
    this.setState({
      [property]: data.value,
    }, () => {console.log(this.state)})
  }

  handleSubmit = (event) => {
    let {number, category, difficulty, type} = this.state
    //debugger
    OpenTriviaDB.fetchAPIData(number, category, difficulty, type)
    .then(data => this.setState({
      data
    }, () => console.log(this.state)))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' render={ () => <Homepage handleSubmit={this.handleSubmit} handleSelection={this.handleSelection}/> }/>
            <Route exact path='/game' render={ () => <Game /> }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

//number: event.target.dataset.numquestion,
//category: event.target.dataset.category,
//difficulty: event.target.dataset.difficulty,
//type: event.target.dataset.questiontype
//state is not updating/saving

//
// handleSelection = (event, data) => {
//   debugger
//   const property = event.target.dataset.name
//   const value = event.target.dataset.option
//   this.setState({
//     [property]: value
//   }, () => {console.log(this.state)})
// }
//
// handleSubmit = (event) => {
//   let {number, category, difficulty, type} = this.state
//   debugger
//   OpenTriviaDB.fetchAPIData(number, category, difficulty, type)
//   .then(data => this.setState({
//     data
//   }, () => console.log(this.state)))
// }
