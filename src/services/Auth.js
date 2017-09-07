class Auth {

  static signup(signupParams) {
    return fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      body: JSON.stringify(signupParams)
    })
    .then(resp => {return resp.json()})
  }

  static login(loginParams) {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      body: JSON.stringify(loginParams)
    })
    .then(resp => {return resp.json()})
  }

  static currentUser() {
    return fetch('http://localhost:3000/api/v1/me', {
      method: 'GET',
      headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
    })
    .then(resp => {return resp.json()})
  }

  static logout() {
    localStorage.removeItem('jwt')
  }
}

export default Auth
