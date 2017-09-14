import React from 'react';

// Timer is not rerendering upon clicking on an answer button
class Timer extends React.Component {
  constructor() {
    super();
    this.timer = 0;
    this.state = {
      time: {},
      timeAlloted: 90,
      timerRunning: false
    }
  }

  componentDidMount() {
    let timeLeft = this.displayTime(this.state.timeAlloted)
    this.setState({
      time: timeLeft,
      timerRunning: true
    }, this.startTimer())
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  //   //debugger
  //   // if (nextProps.clickedAnswer === true) {
  //   //   this.stopTimer()
  //   // }
  //   // else if (nextProps.clickedNext === true) {
  //   //   this.resetTimer()
  //   // }
  // }

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
  //onClick of answer button call stopTimer

  resetTimer = () => {
    this.setState({timeAlloted: 30})
  }
  //onClick of nextQuestion button call resetTimer

  //if counter === 0 (we know no buttons have been pressed b/c stopTimer/resetTimer would have been called)
  //disable answer buttons, enable nextQuestion button, and display message saying "You ran out of time."
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

  // componentDidUpdate(prevProps, prevState){
  //   if (this.state.timeAlloted === 0) {
  //     this.setState({timerRunning:false}, )
  //   }
  // }
  //put callback after setstate to terminate game when timer reaches 0

  render() {
    return(
      <div id="timerContainer">
        <h3 id="timerText">Time left: {this.state.time.min} min {this.state.time.sec} sec</h3>
      </div>
    )
  }
}

export default Timer;
