const path = 'http://localhost:3000/api/v1/games'

let headers = () => {
  const token = localStorage.getItem('jwt')
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}

export default class GameData {

  static fetchAllGames() {
    return fetch(path, {
      method: 'GET',
      headers: headers()
    })
    .then(resp => {return resp.json()})
  }

}
