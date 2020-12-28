import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {      
      username: '',
      password: ''
    }

    //Why do we need this to work?
    // this.handleLogin = this.handleLogin.bind(this)
  }

  handleUserName(e){
    this.setState({username: e})
  }

  handlePassWord(e){
    this.setState({password: e})
  }

  handleLogin(username, password){
    alert(`Username: ${username} Password: ${password}`)
  }

  render(){
    return(
      <section className='App'>
        <input class='UserName' onChange= {(e) => this.handleUserName(e.target.value)}></input>
        <input class='Password' onChange= {(e) => this.handlePassWord(e.target.value)}></input>
        <button class='login' onClick= {() => this.handleLogin(this.state.username, this.state.password)}>Login</button>
      </section>
    )
  }

}

export default App;
