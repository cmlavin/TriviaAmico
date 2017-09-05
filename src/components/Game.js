import React from 'react';
import Navbar from './Navbar'
import GameContainer from './GameContainer'
import Timer from './Timer'
import Hint from './Hint'

//Timer is not rerendering upon clicking on an answer button

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
        {this.props.data.length !== 0 ?
          <GameContainer data={this.props.data[this.state.index]} incrementIndex={this.incrementIndex}/> : null}
        <Timer />
        <Hint />
      </div>
    )
  }
}
//could insert loading component instead of null in ternary

export default Game;

// incrementIndex = () => {
//   this.setState({
//     index: this.state.index + 1
//   }, this.handleGameOver())
// }
//
// handleGameOver = (props) => {
//   if (this.state.index > props.data.length) {
//
//   }
// }
