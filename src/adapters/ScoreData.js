const path = 'http://localhost:3000/api/v1/scores'

export default class ScoreData {

  static sendScore(score) {
    return fetch(path, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(score)
    })
    .then(resp => {return resp.json()})
  }

  static getScore(user) {
    return fetch(path, {
      method: 'GET',
      headers: headers()
    })
    .then(resp => {return resp.json()})
  }

  static getAllScores() {
    return fetch(path, {
      method: 'GET',
      headers: headers()
    })
    .then(resp => {debugger})
  }

  let headers = () => {
    const token = localStorage.getItem('jwt')
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
  
}
