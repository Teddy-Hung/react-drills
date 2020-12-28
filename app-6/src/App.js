import React, {Component} from 'react';
import './App.css';
import ToDo from './ToDo'

class App extends Component{
  constructor(){
    super()

    this.state={
      userInput: '',
      listOfItems: []
    }
  }

  handleChange(e){
    this.setState({userInput: e})
  }
  
  handleAdd(item){
    let arr = this.state.listOfItems
    arr.push(item)
    this.setState({listOfItems: arr})
  }

  render(){
    // const listItems = this.state.listOfItems.map((e, i) => <h2 key={i}> {e} </h2>)
    const listItems = this.state.listOfItems.map((e, i) => <ToDo key= {i} item= {e}/>)
    return(
      <section class= 'App'>
        <h1>My to-do list</h1>
        <input placeholder= 'Enter new task' onChange= {(e) => this.handleChange(e.target.value)}></input>
        <button class= 'AddButton' onClick = {() => this.handleAdd(this.state.userInput)}>Add</button>
        <span class= 'list'>{listItems}</span>
      </section>
    )
  }
}

export default App;
