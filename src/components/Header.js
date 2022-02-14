import React from "react";
import Reset from "./Reset";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countdown: 10,
      color : "white",
    }
  }


  componentDidMount() {
    setInterval (() => {
      if (this.state.countdown !== 0) {
      this.setState(prevState => ({
        countdown: prevState.countdown - 1
      }))
    } else {
      this.setState({countdown: 0})
    }
    }, 1000);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.countdown !== this.state.countdown) {
      if (this.state.countdown < 4) { 
        this.setState({color: "red"})
      }
    }
  }

  
  renderReset() {
    if (this.props.finish) {
      return null;
    } else {
      return <Reset />;
    }
  }

  render() {
    return (
      <header>
        <h1 className="text-center py-3">Memory game</h1>
        <div className="d-flex justify-content-around align-items-center">
          <div className="col-6">
            <h2>Règle : </h2>
            <p>Trouve les images identiques et c'est gagné!</p>
            <p style={{color: this.state.color}}>Countdown: {this.state.countdown}</p>
          </div>
          <div>{this.renderReset()}</div>
        </div>
      </header>
    );
  }
}
export default Header;
