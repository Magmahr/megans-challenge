import React, {Component} from 'react'
import CurrentHold from './currentHold';

class Counter extends Component{

render() {
    return (
    <div className="button-container">
      <CurrentHold />
      <span>
        {this.props.time}
      </span>
      <button
      className='button' onClick={() => this.props.onStart(this.props.counter)}>
      <p>Start</p>
      </button>
      <button
        className='button' onClick={() => this.props.onStop(this.props.counter.id)}>
        <p>Stop</p>
      </button>
      <button
        className='button' onClick={() => this.props.onDelete(this.props.counter.id)}>
        <p>Delete</p>
      </button>
    </div>
  )
}

// prettyDate(){
  // let date = new Date;
  // let options = {hour: "numeric", minute: "numeric"};
  // return new Intl.DateTimeFormat("en-US", options).format(date);
  // return new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
// }

// tick() {
// var min = Math.floor(this.secondsRemaining / 60);
// var sec = this.secondsRemaining - (min * 60);
// this.setState({
//   minutes: min,
//   seconds: sec
// })
// if (sec < 10) {
//   this.setState({
//     seconds: "0" + this.state.seconds,
//   })
// }
// if (min < 10) {
// this.setState({
//   value: "0" + min,
//  })
// }


// formatCount() {
//   const {value} = this.props.counter
//   return (
//     value === 0 ? '0:00' : value
//   )
//
// }


}

export default Counter
