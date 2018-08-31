import React, { Component } from 'react';
import './welcomescreen.css';

const GameModes = {FIREFLY:"Firefly",FOOLFLY:"Foolfly"}

export default class WelcomeScreen extends Component{
    constructor(props){
        super(props)
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

   
    swithMode(){
        let menu = document.querySelector('.firefly') // Using a class instead, see note below.
        menu.classList.toggle('transparent');
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        let mode = GameModes.FIREFLY;       
        
        let cleanInput = this.state.value.replace(/ /g,'').toLowerCase();
               

        if (cleanInput === "afool") {
            this.swithMode();
            mode = GameModes.FOOLFLY;       
        }

        setTimeout(() => {
            this.props.startGame(mode, this.state.value);
          }, 1500);   

        event.preventDefault();
      }

    render(){
        return(
            <div>
                <div id="bg">
                <img className="foolfly" src="./img/foolfly-bg.png" alt="" />
                <img className="firefly" src="./img/firefly.png" alt="" />
                    
                </div>
               
                <div className="welcome-container">
                    <h1>Welcome!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        To start with. tell us, who are you?<br/><br/>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
            </div> 
            </div>
            
            
        )
    }
        
}