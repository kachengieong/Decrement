import React, {Component} from 'react';
import './App.css';
import Decrement from './Decrement.js'

class App extends Component{
  render() {
    return (
      <>
      <Decrement start={10}/>
      <Decrement start={20}/>
      <Decrement start={15}/>
      </>
    )
  }
}

export default App;
