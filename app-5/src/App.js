import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state={
      img: null
    }
  }

  render(){
    return(
      <section class= 'App'>
        <img src='https://panels-images.twitch.tv/panel-28503320-image-3785c4d2-b0ab-467a-b544-0b400bf1e8da' alt= 'about-me-image'></img>
      </section>
    )
  }
}
export default App;