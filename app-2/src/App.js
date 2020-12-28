import React from 'react';
import {Component} from 'react'
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: '',
      filteredArr: []
    }
  }

  handleChange(e){
    this.setState({userInput: e})
  }

  // filterStrings(keyword){
  //   let array = this.state.arr.map()
  //   for(let i=0; i<array.length; i++){
  //     if(array.includes(keyword)){
  //       this.filteredArr.push(array[i])
  //     }
  //   }
  //   this.setState({filteredArr: array})
  // }

  render(){
    let listItems = this.state.arr.filter((e, i) => {
      return e.includes(this.state.userInput)
    }).map((e)=> {
      return <h2>{e}</h2>
    })
    return (
      <section>
        <input class= 'InputBox' onChange = {(e) => this.handleChange(e.target.value)}></input>
        {listItems}
      </section>
    )
  }
}

export default App;
