import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  }
  
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.increment(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  
  increment() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <p>Why, hello there.</p>
        <p>{counter}</p>
      </div>
    );
  }
}

export default hot(module)(App);
