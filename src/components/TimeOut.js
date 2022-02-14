import React from 'react'
import Reset from "./Reset"


class TimeOut extends React.Component {

    constructor(){

        super();

        this.state = {
            displayH1: "none",
            displayBackground: "none",
        }

        //Bind functions
        this.displayGameOver = this.displayGameOver.bind(this);
    }
      
    displayGameOver() {
        console.log("coucou");
        setTimeout(() => {

            this.setState({displayH1 : "initial"});
            this.setState({displayBackground: "initial"});

              
            
         }, 30000);
    }


    render(){

        return (
            <div style={{display: this.state.displayBackground, width : "100vw", height : "100vh", backgroundColor : "black", position : "absolute", top: "0", left : "0",}}>                
                <div style={{position: "absolute", top: "45%", left: "10%"}} className="d-flex flex-column text-center mt-3">

                <h1 style={{display : this.state.display, color : "white",}}>TIME OUT ! YOU LOST HEHEH ! </h1>

                {this.displayGameOver()}

                <Reset finish={this.props.finish} />

                </div>
            </div>
        )
    }
}



export default TimeOut;