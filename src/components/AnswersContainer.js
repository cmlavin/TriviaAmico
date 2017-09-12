import React from 'react'
import Answer from './Answer'

class AnswersContainer extends React.Component {
  shuffle = (array) => {
    let m = array.length
    let t
    let i
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.clickedAnswer === false ? true : false
  }

  render() {
    return(
      <div>
        {this.shuffle(this.props.answers).map( (answer, i) =>
          <Answer answer={answer} key={i} checkAnswer={this.props.checkAnswer} clickedAnswer={this.props.clickedAnswer}/>)}
      </div>
    )
  }
}

export default AnswersContainer
