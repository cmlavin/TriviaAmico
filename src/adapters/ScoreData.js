class ScoreData {

  static sendScore(score) {
    return fetch('http://localhost:3000/api/v1/scores', {
      method: 'POST',
      headers: {'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`},
      body: JSON.stringify(score)
    })
    .then(resp => {return resp.json()})
  }

  static getScore(user) {

  }
}

export default ScoreData
