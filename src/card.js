import React, {Component} from 'react';
import './card.css';

export default class Card extends Component{
    constructor(props){
        super(props);
        //bind the click handler so that 'this' works properly
        this.handleClick = this.handleClick.bind(this);
    }

    //Create method for handling clicks
    handleClick(e){
        console.log("In handleClick");
        //If the card is not flipped call the method selectCard on the app
        if (!this.props.card.isFlipped) {
            this.props.selectCard(this.props.id);            
        }
       
        
    }

    render(){
        //There is probably a more elegant way of doing this
        //If the card is not matched
        if (!this.props.card.isMatched) {
            let className = "card pointer";
            if(this.props.isFlipped)
                className = "card flip";
        
            return(
                <div className="card-container" onClick={this.handleClick}>
                    <div className={className}>
                            <div className="side">
                                <img src={"./img/question-mark.jpg"} alt="Question mark" className={'card-image'} /> 
                            </div>
                            <div className="side back">
                                <img src={"./img/" + this.props.card.image} className={'card-image'} />
                            </div>
                    </div>
                </div>
            )
            
        } else {
            return(
                //If it's marked as matched, then just show the image
                <div className="card-container">
                    <div className="matched">
                        <img src={"./img/" + this.props.card.image} className={'card-image'} />
                    </div>
                </div>
            )
            
        }
        
    }
}