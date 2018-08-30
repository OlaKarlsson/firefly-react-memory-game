import React, { Component } from 'react';
import GameBoard from './gameboard';
import items from './characters.json';

export default class App extends Component{

    render(){
        return (
            <div>
                <h1>Find pairs</h1>
                <GameBoard items={items} />
            </div>
            )
    }

}


