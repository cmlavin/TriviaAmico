import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {},
      timer: 0,
      timeAlloted: 10 * props.numberOfQuestions
    }
  }

  componentDidMount() {
  let timeLeft = this.displayTime(this.state.timeAlloted)
  this.setState({
    time: timeLeft
    }, this.startTimer())
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.timeAlloted === 0) {
      this.props.timerAtZero()
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  displayTime = (seconds) => {
    let min = Math.floor((seconds % 3600) / 60)
    let sec = Math.ceil((seconds % 3600) % 60)
    let convertedTime = {
      "min": min,
      "sec": sec
    }
    return convertedTime
  }

  startTimer = () => {
    if (this.state.timer === 0) {
      this.setState({
        timer: setInterval(this.handleCounter, 1000)
      })
    }
  }

  handleCounter = () => {
    if(this.state.timeAlloted !== null) {
      let counter = this.state.timeAlloted - 1
      this.setState({
        time: this.displayTime(counter),
        timeAlloted: counter
      })
      if (counter === 0) {
        clearInterval(this.state.timer)
      }
    }
   }

  render() {
    return(
      <div id="timerContainer">
        <h3 id="timerText">
          Time left: {this.state.time.min} min {this.state.time.sec} sec
        </h3>
      </div>
    )
  }
}

export default Timer
