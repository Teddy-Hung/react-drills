import React from 'react';
import {Component} from 'react'
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      text: ''
    }
  }

  handleChange(input){
    this.setState({text: input})
  }

  render(){
    return (
      <section className = 'app-1'>
        <input className = 'inputLine' onChange = {e => this.handleChange(e.target.value)}></input>
        <p>{this.state.text}</p>
  
      </section>
    );
  }

}

export default App;
