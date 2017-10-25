const path = 'https://trivia-amico-api.herokuapp.com/api/v1/scores'

let headers = () => {
  const token = localStorage.getItem('jwt')
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}

export default class ScoreData {

  static sendScore(score) {
    return fetch(path, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(score)
    })
    .then(resp => {return resp.status})
  }

  static fetchAllScores() {
    return fetch(path, {
      method: 'GET',
      headers: headers()
    })
    .then(resp => {return resp.json()})
  }

}
