import React, { Component } from 'react';
import GameBoard from './gameboard';

export default class App extends Component{

    render(){
        return (
            <div>
                <h1>Find pairs</h1>
                <GameBoard />
            </div>
            )
    }

}


