import React from 'react'

class Timer extends React.Component {
  constructor() {
    super()
    this.timer = 0
    this.state = {
      time: {},
      timeAlloted: '',
      timerRunning: false
    }
  }

  //what if pass props into constructor and set initial state of timeAlloted = 10 * this.props.numberOfQuestions
  //but this was how it was originally and that didn't work either

  //if timeAlloted = 0, or = '', then need to wait or need to update component
  //did I do this in another component?

  // componentDidMount() {
  //   let timeLeft = this.displayTime(this.state.timeAlloted)
  //   this.setState({
  //     time: timeLeft,
  //     timerRunning: true
  //   }, this.startTimer())
  // }

  //let timeLeft = this.displayTime(this.state.timeAlloted)
//maybe componentwillmount is working here but this.props.numberOfQuestions from <Game /> is still async so not updated data yet
//can't check to see if nextprops.data.length is different because someone might have chosen the same # of questions

  componentWillMount() {
    this.setState({
      timeAlloted: (10 * this.props.numberOfQuestions)
    }, () => {
    let timeLeft = this.displayTime(this.state.timeAlloted)
    this.setState({
      time: timeLeft,
      timerRunning: true
    }, this.startTimer())
  }
  )
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.timeAlloted === 0) {
      this.setState({timerRunning:false}, this.props.timerAtZero())
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  displayTime = (seconds) => {
    //debugger
    let min = Math.floor((seconds % 3600) / 60)
    let sec = Math.ceil((seconds % 3600) % 60)
    let convertedTime = {
      "min": min,
      "sec": sec
    }
      return convertedTime
  }

  startTimer = () => {
    if (this.timer === 0) {
      this.timer = setInterval(this.handleCounter, 1000)
    }
  }

  handleCounter = () => {
    let counter = this.state.timeAlloted - 1
    this.setState({
      time: this.displayTime(counter),
      timeAlloted: counter
    })
    if (counter === 0) {
      clearInterval(this.timer)
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

// import React from 'react'
//
// class Timer extends React.Component {
//   constructor() {
//     super()
//     this.timer = 0
//     this.state = {
//       time: {},
//       timeAlloted: '',
//       timerRunning: false
//     }
//   }
//
//   //why keep timerRunning state?  Not using it anywhere except for <Timer />
//   //nor are there any conditionals based on its state
//
//   // componentWillMount() {
//
//
//   componentDidMount() {
//     console.log('numberOfQuestions:', this.props.numberOfQuestions)
//     this.setState({
//       timeAlloted: (10 * this.props.numberOfQuestions)
//     }, () => {
//       console.log('timeAlotted', this.state.timeAlloted)
//       let timeLeft = this.displayTime(this.state.timeAlloted)
//       console.log('Time Left:' ,timeLeft)
//       this.setState({
//         time: timeLeft,
//         timerRunning: true
//       }, this.startTimer())
//     })
//   }
//
//   //need timer to display time when component mounts (componentDidMount)
//   //cannot display time until props are received in componentWillReceiveProps
// //use componentWillMount?
//   // componentWillReceiveProps(nextProps) {
//   //   debugger
//   //   this.setState({
//   //     timeAlloted: (10 * nextProps.numberOfQuestions)
//   //   }, this.testingTimer())
//   // }
//
//   componentDidUpdate(prevProps, prevState){
//     if (this.state.timeAlloted === 0) {
//       this.setState({timerRunning:false}, this.props.timerAtZero())
//     }
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//
//   displayTime = (seconds) => {
//     let min = Math.floor((seconds % 3600) / 60)
//     let sec = Math.ceil((seconds % 3600) % 60)
//     let convertedTime = {
//       "min": min,
//       "sec": sec
//     }
//       return convertedTime
//   }
//
//   startTimer = () => {
//     if (this.timer === 0) {
//       this.timer = setInterval(this.handleCounter, 1000)
//     }
//   }
//
//   handleCounter = () => {
//     let counter = this.state.timeAlloted - 1
//     this.setState({
//       time: this.displayTime(counter),
//       timeAlloted: counter
//     })
//     if (counter === 0) {
//       clearInterval(this.timer)
//     }
//    }
//
//   render() {
//     return(
//       <div id="timerContainer">
//         <h3 id="timerText">
//           Time left: {this.state.time.min} min {this.state.time.sec} sec
//         </h3>
//       </div>
//     )
//   }
// }
//
// export default Timer
