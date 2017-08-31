import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      questions: ''
    }
  }

  componentDidMount() {
    this.fetchAPIData(this.state.number, this.state.category, this.state.difficulty, this.state.type)
  }

  fetchAPIData = (number, category, difficulty, type) => {
    fetch(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      questions: data
    }), () => console.log(this.state.questions))
  }

  handleSelection = (event) => {
    this.setState({
      number: event.target.dataset.numquestions,
      category: event.target.dataset.category,
      difficulty: event.target.dataset.difficulty,
      type: event.target.dataset.questiontype
    }, () => console.log(this.state))
  }
  handleSubmit = (event) => {
    //debugger
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
