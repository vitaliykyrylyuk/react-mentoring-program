import React from 'react';

class ClassComponentExample extends React.Component {
  state = {
    componentType: 'ClassComponent',
    counter: 0
  }
  
  render() {
    
    return (
      <div>
        <p>Counter is: {this.state.counter}</p>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          Increment
        </button>
        <h2>This comes from {this.state.componentType}</h2>
      </div>
    )
  }
}

export default ClassComponentExample;
