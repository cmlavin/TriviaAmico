class ScoreData {

  static sendScore(scoreData) {
    return fetch('http://localhost:3000/api/v1/scores#create', {
      method: 'POST',
      body: scoreData
    })
    .then(resp => {return resp.json()})
  }

  static getScore(user) {

  }
}

export default ScoreData
