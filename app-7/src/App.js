import React, {Component} from 'react';
import './App.css';
import NewTask from './NewTask'
import List from './List'

class App extends Component{
  constructor(){
    super()

    this.state={
      listOfItems: []
    }

    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(task){
    this.setState({listOfItems: [...this.state.listOfItems, task]})
  }

  render(){
    // const listItems = this.state.listOfItems.map((e, i) => <h2 key={i}> {e} </h2>)
    // const listItems = this.state.listOfItems.map((e, i) => <ToDo key= {i} item= {e}/>)
    return(
      <section class= 'App'>
        <h1>My to-do list</h1>
        <NewTask add={this.handleAddTask}/>
        <List list={this.state.listOfItems}></List>
      </section>
    )
  }
}

export default App;
