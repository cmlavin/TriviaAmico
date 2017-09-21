const path = 'http://localhost:3000/api/v1/users'

let headers = () => {
  const token = localStorage.getItem('jwt')
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}

export default class UserData {

  static fetchAllUsers() {
    return fetch(path, {
      method: 'GET',
      headers: headers()
    })
    .then(resp => {return resp.json()})
  }

}
