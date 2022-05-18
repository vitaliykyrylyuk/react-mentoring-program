import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponentExamplePure from './components/ClassComponentExamplePure';
import ClassComponentExample from './components/ClassComponentExample';
import FunctionalComponentExample from './components/FunctionalComponentExample';

function App() {
  const title = React.createElement('h1', {className: 'title'}, 'Hello world!')
  
  return (
    <div className="App">
      <header className="App-header">
        {title}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <ClassComponentExamplePure />
        <ClassComponentExample />
        <FunctionalComponentExample name='parent props' />
      </main>
    </div>
  );
}

export default App;
