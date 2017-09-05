import React from 'react'
import Answer from './Answer'

const AnswersContainer = (props) => {
  let answers = props.incorrect_answers.map( (arr, i) => [...arr, props.correct_answers[i]] )

  return(
    <div>
      {answers.map( arr => arr.map( answer => <Answer answer={answer} />))}
    </div>
  )
}

export default AnswersContainer

//here combine arrays and shuffle

// function shuffle(array) {
//   let len = array.length
//   let x = array[len]
//
//   while(len) {
//     let y = Math.floor(Math.random() * len--);
//     array[len] = array[y];
//     array[y] = x;
//   }
//   return array;
// }


//fisher-yates shuffling algorithm
// function shuffle(array) {
//   var m = array.length, t, i;
//
//   // While there remain elements to shuffle…
//   while (m) {
//
//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);
//
//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//
//   return array;
//}
