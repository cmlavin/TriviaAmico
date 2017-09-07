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

  login = (event) => {
    let inputUsername = event.target.elements.username.value
    let inputPassword = event.target.elements.password.value
    if (inputUsername !== '' && inputPassword !== '') {
      let formData = new FormData()
      formData.append('username', inputUsername)
      formData.append('password', inputPassword)
      Auth.login(formData)
      .then(data => {
        localStorage.setItem('jwt', data.jwt)
        console.log(data.jwt)
        this.setState({
          jwt: data.jwt,
          isLoggedIn: true
        })
      })
    }
  }

  currentUser() {
    Auth.currentUser()
    .then(data => {
      console.log(data)
      this.setState({
        user: data
      })
      console.log(this.state.user)
    })
  }

  signup = (event) => {
    let inputEmail = event.target.elements.email.value
    let inputUsername = event.target.elements.username.value
    let inputPassword = event.target.elements.password.value
    if (inputEmail !== '' && inputUsername !== '' && inputPassword !== '') {
      let formData = new FormData()
      formData.append('email', inputEmail)
      formData.append('username', inputUsername)
      formData.append('password', inputPassword)
      Auth.signup(formData)
      .then(data => {
        if (data.id) {
          console.log('User successfully created.')
        }
      })
    }
  }
//inputEmail && inputUsername && inputPassword !== '' ? "" : "error message"

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
            <Route exact path='/' render={ () => <Homepage handleSubmit={this.handleSubmit} handleSelection={this.handleSelection} loggedIn={this.state.isLoggedIn}/> }/>
            <Route exact path='/game' render={ () => <Game data={this.state.data} difficulty={this.state.difficulty}/> }/>
            <Route exact path='/signup' render={ () => <Signup signup={this.signup}/> }/>
            <Route exact path='/login' render={ () => <Login login={this.login}/> }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
