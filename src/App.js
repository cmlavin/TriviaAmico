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
      data: []
    }
  }

  handleSelection = (event, data) => {
    const property = event.currentTarget.dataset.name
    this.setState({
      [property]: data.value,
    }, () => console.log(this.state))
  }

  handleSubmit = (event) => {
    let {number, category, difficulty, type} = this.state
    OpenTriviaDB.fetchAPIData(number, category, difficulty, type)
    .then(data => this.setState({
      data: data.results
    }, () => console.log(this.state)))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' render={ () => <Homepage handleSubmit={this.handleSubmit} handleSelection={this.handleSelection}/> }/>
            <Route exact path='/game' render={ () => <Game data={this.state.data} difficulty={this.state.difficulty}/> }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
