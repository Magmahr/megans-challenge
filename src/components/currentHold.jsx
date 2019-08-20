import React, { Component } from 'react';

class CurrentHold extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    document.querySelector('.holder').classList.toggle('hidden')
    document.querySelector('.holder-change').classList.toggle('hidden')
  }

  render() {
    return (
      <div>
        <form class="holder" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          {this.state.value}
        </div>
        <div class="holder-change hidden">
        </div>
      </div>
    );
  }
}

export default CurrentHold
