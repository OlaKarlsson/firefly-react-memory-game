import React, { Component } from 'react';
import GameBoard from './gameboard';

export default class App extends Component{
    

    render(){

        // let btnText = 'Re-start';
        // if (this.state.numberOfMatches === this.state.cards.length / 2) {
        // btnText = 'You Win! Play Again?';
        // }

        return (
            <div>
                <GameBoard />
            </div>
            )
    }

}


