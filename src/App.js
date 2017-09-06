import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OpenTriviaDB from './adapters/OpenTriviaDB'
import Homepage from './components/Homepage'
import Game from './components/Game'
import Signup from './components/Signup'
import Login from './components/Login'
import Auth from './services/Auth'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: '',
      category: '',
      difficulty: '',
      type: '',
      data: [],
      jwt: '',
      isLoggedIn: false,
      user: {}
    }
  }

  login(loginParams) {
    Auth.login(loginParams)
    .then((json) => {
      localStorage.setItem('jwt', json.jwt)
      this.setState({
        jwt: json.jwt,
        isLoggedIn: true
      })
    })
  }

  currentUser() {
    Auth.currentUser()
      .then((user) => {
        console.log(user)
        this.setState({
          user: user
        })
        console.log(this.state.user)
      })
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
            <Route exact path='/' render={ () => <Homepage handleSubmit={this.handleSubmit} handleSelection={this.handleSelection} loggedIn={this.state.isLoggedIn} /> }/>
            <Route exact path='/game' render={ () => <Game data={this.state.data} difficulty={this.state.difficulty}/> }/>
            <Route exact path='/signup' render={ () => <Signup /> }/>
            <Route exact path='/login' render={ () => <Login /> }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
