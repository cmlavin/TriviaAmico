import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import Game from './components/Game'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      questions: ''
    }
  }

  componentDidMount() {
    this.fetchAPIData()
  }

  fetchAPIData = (number, category, difficulty, type) => {
    fetch(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      questions: data
    }), () => console.log(this.state.questions))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' render={ () => <Homepage /> }/>
            <Route exact path='/game' render={ () => <Game /> }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
