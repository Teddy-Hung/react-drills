import React from 'react';
import {Component} from 'react'
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  render(){
    const listItems = this.state.arr.map((e, i) => <h2 key={i}>{e}</h2>)
    return (
      <section>
        {listItems}
      </section>
    )
  }
}

export default App;
