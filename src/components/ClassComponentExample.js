import React from 'react';

class ClassComponentExample extends React.Component {
  state = {
    componentType: 'ClassComponent'
  }
  
  render() {
    return <h2>This comes from {this.state.componentType}</h2>;
  }
}

export default ClassComponentExample;
