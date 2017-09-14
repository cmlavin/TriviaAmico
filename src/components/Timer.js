import React from 'react';

// Timer is not rerendering upon clicking on an answer button
class Timer extends React.Component {
  constructor() {
    super();
    this.timer = 0;
    this.state = {
      timeAlloted: 30,
      timerRunning: false
    }
  }

  componentDidMount() {
    this.setState({
      timerRunning: true
    }, this.startTimer())
  }

  startTimer = () => {
    if (this.timer === 0) {
      this.timer = setInterval(this.handleCounter, 1000);
    }
  }

  stopTimer = () => {
    this.state.timerRunning === true ? this.setState({ timerRunning: false }) : null
  }

  resetTimer = () => {
    this.setState({timeAlloted: 30})
  }

  handleCounter = () => {
    let counter = this.state.timeAlloted - 1;
    this.setState({
      timeAlloted: counter
    })
    if (counter === 0) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return(
      <div id="timerContainer">
        <h3 id="timerText">Time left: {this.state.timeAlloted} sec</h3>
      </div>
    )
  }
}

export default Timer;
