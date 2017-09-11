import React from 'react'
import { Button } from 'semantic-ui-react'

class Answer extends React.Component {
  constructor() {
    super()
    this.state = {
      color: '#A9C4DF'
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.state.color !== '#A9C4DF') {
      this.setState({color:'#A9C4DF'})
    }
  }

  handleAnswer = (event) => {
    this.props.checkAnswer(event) === true ? (this.setState({color: '#289323'})) : (this.setState({color: '#FF0000'}))
  }

  render() {
    return(
      <div>
        <Button id="answerButton" onClick={this.handleAnswer} style={{backgroundColor: this.state.color}} disabled={this.props.clickedAnswer}>{this.props.answer}</Button>
      </div>
    )
  }
}

export default Answer
