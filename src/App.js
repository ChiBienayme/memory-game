import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
// import TimeOut from "./components/TimeOut";
import "./App.css";


import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      finished: false,
      gameStarted : false,
    };
    this.gameOver = this.gameOver.bind(this);
  }

  gameOver() {
    if (!this.state.finished) {
      this.setState({ finished: true });
    }
  }

  render() {
    return (
      <>

      {
        this.state.gameStarted !== true ?
        (
          <div className="playWindow d-flex flex-column text-white text-center align-items-center justify-center">
            <h1>Memory game</h1>
            <button className="mt-4 pt-2 pb-2 btn btn-light w-25" onClick={()=> this.setState({gameStarted : true})}>PLAY</button>
          </div>
        )
        :
        (
          
          <div>
           <Header finish={this.state.finished} />
          <Main finish={this.state.finished} gameOver={this.gameOver} />
          </div>
        )
      }
      </>
    );
  }
}

export default App;
