import React from 'react';
import Navbar from './Navbar'
import GameContainer from './GameContainer'
import Loading from './Loading'
import GameOver from './GameOver'
import Timer from './Timer'
import Hint from './Hint'


class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }

  incrementIndex = () => {
    this.setState({
      index: this.state.index + 1
    })
  }

  render() {
    return(
      <div>
        <Navbar />
        {this.props.data.length === 0 ? <Loading /> : this.props.data.length === this.state.index ?
          <GameOver /> : <GameContainer data={this.props.data[this.state.index]} incrementIndex={this.incrementIndex}/>}
        <Timer />
        <Hint />
      </div>
    )
  }
}

export default Game;
