const path = 'https://trivia-amico-api.herokuapp.com/api/v1'
export default class Auth {

  static signup(signupParams) {
    return fetch(`${path}/signup`, {
      method: 'POST',
      body: signupParams
    })
    .then(resp => {return resp.json()})
  }

  static login(loginParams) {
    return fetch(`https://trivia-amico-api.herokuapp.com/api/v1/login`, {
      method: 'POST',
      body: loginParams
    })
    .then(resp => {return resp.json()})
  }

  static currentUser() {
    return fetch(`${path}/me`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
    })
    .then(resp => {return resp.json()})
  }

  static logout() {
    localStorage.removeItem('jwt')
  }

}
