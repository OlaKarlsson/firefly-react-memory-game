import React, { Component } from 'react';
import './gameboard.css';
import Card from './card';

export default class GameBoard extends Component{
    render(){
        return (
            <div>
                <span>GameBoard</span>
                <Card />
            </div>
        )
    }
}