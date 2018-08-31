import React, { Component } from 'react';
import './gameboard.css';
import Card from './card';

export default class GameBoard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="gameboard-container">
                    {
                        this.props.cards.map((card, index)=>{
                            return <Card key={index} id={index} isFlipped={card.isFlipped} card={card} selectCard={this.props.selectCard} />
                        })
                    }
                    
                </div>
            </div>
        )
    }
}