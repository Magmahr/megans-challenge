import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

  render() {
    const {counters, onDelete, onStart, onStop} = this.props
    return (
      <div>
        {counters.map(counter =>( <Counter
          key={counter.id}
          time={counter.time}
          counter={counter}
          onStop={onStop}
          onDelete={onDelete}
          onStart={onStart}
          />
        ))}
      </div>
    )
  }

}

export default Counters
