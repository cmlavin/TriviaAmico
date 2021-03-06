import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import OpenTriviaDB from './adapters/OpenTriviaDB'
import Homepage from './components/Homepage'
import Game from './components/Game'
import Signup from './components/Signup'
import Login from './components/Login'
import Auth from './services/Auth'
import ScoreData from './adapters/ScoreData'
import GameData from './adapters/GameData'
import UserData from './adapters/UserData'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: '',
      category: '',
      difficulty: '',
      type: '',
      data: [],
      isLoggedIn: false,
      user: {},
      scores: [],
      gameInfo: [],
      users: []
    }
  }

  componentDidMount(){
    if (!!localStorage.jwt) {
      this.setState({
        isLoggedIn: true
      })
      this.getAllUsers()
      this.getAllScores()
      this.currentUser()
    }
  }

  signup = (event) => {
    event.persist()
    let inputEmail = event.target.elements.email.value
    let inputUsername = event.target.elements.username.value
    let inputPassword = event.target.elements.password.value
    if (inputEmail !== '' && inputUsername !== '' && inputPassword !== '') {
      let formData = new FormData()
      formData.append('user[email]', inputEmail)
      formData.append('user[username]', inputUsername)
      formData.append('user[password]', inputPassword)
      Auth.signup(formData)
      .then(data => {
        console.log(data)
        if (data.id) {
          console.log('User successfully created.')
          this.login(event)
        }
      })
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
        console.log(data)
        if (!data.error) {
          this.setState({
            isLoggedIn: true,
            user: data.user
          })
          localStorage.setItem('jwt', data.jwt)
        }
      })
    }
  }

  logout = () => {
    Auth.logout()
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  currentUser() {
    Auth.currentUser()
    .then(data => {
      this.setState({
        user: data
      })
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

  gameData = (score) => {
    let {number, category, difficulty} = this.state
    let scoreHash = {
      score: {
        user_id: this.state.user.id,
        score: score,
        game_attributes: {
          category: category,
          difficulty: difficulty,
          num_questions: number
        }
      }
    }
    ScoreData.sendScore(scoreHash)
    // eslint-disable-next-line
    .then(data => {data === 200 ? this.getAllScores() : null})
  }

  getAllScores = () => {
    ScoreData.fetchAllScores()
    .then(data => this.setState({
      scores: data
    }, this.getAllGameData()))
  }

  getAllGameData = () => {
    GameData.fetchAllGames()
    .then(data => this.setState({
      gameInfo: data
    }))
  }

  getAllUsers = () => {
    UserData.fetchAllUsers()
    .then(data => this.setState({
      users: data
    }))
  }

  renderHomepage = () => {
    return <Homepage handleSubmit={this.handleSubmit} handleSelection={this.handleSelection}
              loggedIn={this.state.isLoggedIn} logout={this.logout} scores={this.state.scores}
              users={this.state.users} gameInfo={this.state.gameInfo}/>
  }

  renderGame = () => {
    return (this.state.isLoggedIn === true ?
              <Game data={this.state.data} difficulty={this.state.difficulty} gameData={this.gameData}/> : <Redirect to="/"/>)
  }

  renderSignup = () => {
    return (this.state.isLoggedIn === true ? <Redirect to="/" /> : <Signup login={this.login} signup={this.signup} />)
  }

  renderLogin = () => {
    return (this.state.isLoggedIn === true ? <Redirect to="/" /> : <Login login={this.login} />)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" render={this.renderHomepage} />
            <Route exact path='/game' render={this.renderGame} />
            <Route exact path='/signup' render={this.renderSignup}/>
            <Route exact path="/login" render={this.renderLogin}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
