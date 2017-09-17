import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.state = {
      time: {},
      timeAlloted: (10*props.numberOfQuestions),
      timerRunning: false
    }
  }

  //what if 7 seconds per question

  componentDidMount() {
    let timeLeft = this.displayTime(this.state.timeAlloted)
    this.setState({
      time: timeLeft,
      timerRunning: true
    }, this.startTimer())
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

  stopTimer = () => {
    this.state.timerRunning === true ? this.setState({ timerRunning: false }) : null
  }

  resetTimer = () => {
    this.setState({timeAlloted: 30})
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

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.timeAlloted === 0) {
      this.setState({timerRunning:false}, this.props.timerAtZero())
    }
  }

  render() {
    return(
      <div id="timerContainer">
        <h3 id="timerText">Time left: {this.state.time.min} min {this.state.time.sec} sec</h3>
      </div>
    )
  }
}

export default Timer;
