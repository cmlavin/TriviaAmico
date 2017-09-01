class OpenTriviaDB {

  static fetchAPIData(number, category, difficulty, type){
    return fetch(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`)
    .then(resp => resp.json())
  }

}

export default OpenTriviaDB
