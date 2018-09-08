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
        let welcomeContainer = document.querySelector('.welcome-container') // Using a class instead, see note below.
        welcomeContainer.classList.add('transparent');              
        //Remove white spaces and make everything to lowe case, this way it's easier to compare the value later
        let cleanInput = this.state.value.replace(/ /g,'').toLowerCase();
            //Check in input is empty and if so ignore
            if (cleanInput.length === 0) {
            alert("Explain yourself. Who are you? (Your name will suffice.)");
            return;
        }

        //Set default mode
        let mode = GameModes.FIREFLY;               

        if (cleanInput === "afool") {
            this.swithMode();
            mode = GameModes.FOOLFLY;       
        }

        setTimeout(() => {
            this.props.startGame(mode, this.state.value);
            }, 2000);   

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
                        To start with. tell us, who are you?<br/>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label><br/>
                        <input type="submit" value="Submit" />
                    </form>
            </div> 
            </div>
            
            
        )
    }
        
}