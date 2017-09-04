import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();
    this.timer = 0;
    this.state = {
      time: {},
      timeAlloted: 90
    }
  }

  componentDidMount() {
    let timeLeft = this.displayTime(this.state.timeAlloted)
    this.setState({
      time: timeLeft
    })
  }

  displayTime = (seconds) => {
    let min = Math.floor((seconds % 3600) / 60);
    let sec = Math.ceil((seconds % 3600) % 60);
    let convertedTime = {
      "min": min,
      "sec": sec
    };
      return convertedTime;
  }

  startTimer = () => {
    if (this.timer === 0) {
      this.timer = setInterval(this.handleCounter, 1000);
    }
  }

  handleCounter = () => {
    let counter = this.state.timeAlloted - 1;
    this.setState({
      time: this.displayTime(counter),
      timeAlloted: counter
    })
    if (counter === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return(
      <div id="timerContainer">
        <button onClick={this.startTimer}>Start</button>
        <h3 id="timerText">Time left: {this.state.time.min} min {this.state.time.sec} sec</h3>
      </div>
    )
  }
}

export default Timer;
