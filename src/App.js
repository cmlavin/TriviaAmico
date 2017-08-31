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
      data: ''
    }
    //this.handleSubmit = this.handleSubmit.bind(this)
  }

  fetchAPIData = (number, category, difficulty, type) => {
    fetch(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      data: data
    }), () => console.log(this.state.data))
  }

  handleSelection = (event) => {
    this.setState({
      number: event.target.dataset.numquestions,
      category: event.target.dataset.category,
      difficulty: event.target.dataset.difficulty,
      type: event.target.dataset.questiontype
    }, () => console.log(this.state))
  }

  handleSubmit = () => {
    let {number, category, difficulty, type} = this.state
    //debugger
    // OpenTrivia.fetchAPIData(this.state.number, this.state.category, this.state.difficulty, this.state.type)
    this.fetchAPIData(number, category, difficulty, type)

  }
  //on submit, want to redirect to game page and will need to fetch data from API so that data can be used to make the game

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


// componentDidMount() {
//
// }
