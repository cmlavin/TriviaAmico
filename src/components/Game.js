import React from 'react';
import Navbar from './Navbar'
import GameContainer from './GameContainer'
import Score from './Score'
import Hint from './Hint'

//Timer is not rerendering upon clicking on an answer button

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      score: 0
    }
  }
  //     questions: nextProps.data.map(obj => obj.question).map(ele => this.decode(ele)),

  incrementIndex = () => {
    this.setState({
      index: this.state.index + 1
    })
  }
  //if index > questions.length show that game is over

  handleScore = () => {
    this.setState({
      score: 0
    })
  }

  render() {
    return(
      <div>
        <Navbar />
        {this.props.data.length !== 0 ?
          <GameContainer data={this.props.data[this.state.index]} incrementIndex={this.incrementIndex}/> : null}
        <Score score={this.state.score}/>
        <Hint />
      </div>
    )
  }
}

export default Game;
