import React, { Component } from 'react';
import './App.css';
import { TaskTimer } from 'tasktimer';
import Counters from './components/counters'
import NavBar from './components/navbar'
import Header from './components/header'


class App extends Component {

constructor() {
  super();
  this.state = {
    counters: []
  }
}

handleDelete = counterId => {
  const counters = this.state.counters.filter(c => c.id !== counterId)
  this.setState({ counters })
}

handleNewInstance = counterId => {
  const timer = new TaskTimer(1000);
  const task = {
  time: 0,
  name: "",
  id: (this.state.counters.length + 1),
  tickInterval: 1,
  // totalRuns: 10,
    callback(task) {

    },
    startTimer(counter, updateState) {
      timer.start()
      timer.on('tick', () => {
        updateState(timer, counter)
      });
    },
    stopTimer() {
      timer.stop()
    }
  }
  const counters = this.state.counters
  counters.push(task)
  this.setState({ counters })
}

startTimer = counter => {
  // const currentCounter = this.state.counters.filter(c => c.id === counter.id)
  counter.startTimer(counter, this.updateState)
}

stopTimer = counterId => {
  const counter = this.state.counters.filter(c => c.id === counterId)
  counter[0].stopTimer()
}

updateState = (timer, counter) => {
  const countdownTimeMs = Math.floor(86400000 - timer.time.elapsed)
  const secondTime = (countdownTimeMs / 1000)
  const formattedTime = this.secondsToHm(secondTime)
  // debugger
  console.log(counter.id);
  this.setState(prevState => ({
    counters: prevState.counters.map(
      c => c.id === counter.id ? { ...counter, time: formattedTime } : counter
    )
  }))
}

secondsToHm(secondTime) {
  secondTime = Number(secondTime);
  const h = Math.floor(secondTime / 3600);
  const m = Math.floor(secondTime % 3600 / 60);

  const hDisplay = h > 0 ? h + (h === 1 ? " hr, " : " hrs ") : "";
  const mDisplay = m > 0 ? m + (m === 1 ? " min, " : " mins ") : "";
  return hDisplay + mDisplay;
}

  // handleNewInstance = counterId => {
  //   const newCounterId = (this.state.counters.length + 1)
  //   const newCounter = {
  //     id: newCounterId,
  //     time: 0,
  //     isOn: false,
  //     start: 0
  //   }
  //   const newState = this.state.counters.push(newCounter)
  //   this.setState({ newState })
  // }

// startTimer = counterId => {
//   const counter = this.state.counters.filter(c => c.id === counterId)
//   // counter.start()
//   this.setState({
//     isOn: true,
//     time: counter.time.elapsed,
//   })
// }

// stopTimer() {
//   this.setState({isOn: false})
//   clearInterval(this.timer)
// }
// resetTimer() {
//   this.setState({time: 0, isOn: false})
// }

// handleIncrement = counter => {
//   const counters = [...this.state.counters]
//   const index = counters.indexOf(counter)
//   counters[index] = {...counter}
//   counters[index].value++
//   this.setState({ counters })
// }

// timerOn = counter => {
//   let timerValue = Date.now();
//   // let min = Math.floor(this.secondsRemaining / 60);
//   // let sec = this.secondsRemaining - (min * 60);
//
//   const counters = [...this.state.counters]
//   const index = counters.indexOf(counter)
//   counters[index] = {...counter}
//   counters[index].time = timerValue
//   this.setState({ counters })
//   console.log(counter);
// }
//
// handleStart = counter => {
//   setInterval(this.timerOn(counter), 1000)
// }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="content-container">
          <div className="counter-instances">
            <NavBar totalCounters={this.state.counters.length}/>
            <Counters
            onStart={this.startTimer}
            onDelete={this.handleDelete}
            onStop={this.stopTimer}
            counters={this.state.counters}/>
            <button className='button' onClick={() => this.handleNewInstance()}>
            <p>
            New
            </p>
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
