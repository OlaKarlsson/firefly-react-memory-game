import React, { Component } from 'react';
import './gameboard.css';
import Card from './card';
import fireflies from './firefly_characters.json';
import fools from './foolfly_characters.json';

const GameModes = {FIREFLY:"Firefly",FOOLFLY:"Foolfly"}

export default class GameBoard extends Component{
    
    constructor(props){
        super(props);

        this.selectCard = this.selectCard.bind(this);
        this.reStart = this.reStart.bind(this);
        this.reStartInFireFlyMode = this.reStartInFireFlyMode.bind(this);
        this.reStartInFoolMode = this.reStartInFoolMode.bind(this);

        //Initiate the state
        this.state={
            cards:[],
            gameLocked: false,
            lastCardSelected: null,
            numberOfMatches: 0,
            mode: GameModes.FIREFLY
        }
    }

    componentDidMount(){
        //We cant set the data in the constructor, so we set it once the component has mounted (loaded)    
        this.setState({
            cards: this.getData(this.state.mode)
        })
        console.log("componentDidMount - loaded data");
        console.log(this.state.cards);
        
        

    }

    selectCard(id){
        //If the game is in locked state, ignore the click
        if(this.state.gameLocked){
            return;
        }
        var cards = this.state.cards;
        let selectedCard = cards[id];
        
        //Because of how Javascript works objects made from other objects are created by reference
        //hence updating selectedCard, will update the object in the cards array
        selectedCard.isFlipped = true;  

        //Update the state to trigger a re-render of the componenets, to flip the card
        this.setState({cards, gameLocked: true});

        //Check if there's a selected card stored 
        if (this.state.lastCardSelected === null) {
            //If no card stored, store the currently selected one
            this.setState({
                lastCardSelected: selectedCard, gameLocked: false
            })    

        } else {
            //If lastSelected is not null, then we compare the now selected card with the stored one
            if (this.state.lastCardSelected.characterID === selectedCard.characterID) {
                console.log("Match!");
                //Delay for 1 second, then mark the cards as matched
                setTimeout(() => {
                    selectedCard.isMatched = true;
                    this.state.lastCardSelected.isMatched = true;
                    let numberOfMatches = this.state.numberOfMatches;
                    console.log(this.state.numberOfMatches);

                    console.log(numberOfMatches + 1);
                    

                    this.setState({cards, lastCardSelected: null, gameLocked: false, numberOfMatches: numberOfMatches + 1});
                  }, 1000);            
            }else {
                //If the cards dont macth
                //Delay for 1 second, then flip back the cards
                setTimeout(() => {
                    selectedCard.isFlipped = false; 
                    this.state.lastCardSelected.isFlipped = false;
                    this.setState({cards, lastCardSelected: null, gameLocked: false});
                  }, 1000); 
                
            }
            
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.mode} Memory </h1>
                <h3>Number of matches: {this.state.numberOfMatches}</h3> <button onClick={this.reStartInFireFlyMode}>Re-start in Firefly mode</button>
                <button onClick={this.reStartInFoolMode}>Re-start in Foolfly mode</button>
                <div className="gameboard-container">
                    {
                        this.state.cards.map((card, index)=>{
                            return <Card key={index} id={index} isFlipped={card.isFlipped} card={card} selectCard={this.selectCard} />
                        })
                    }
                    
                </div>
            </div>
        )
    }


    
    reStart(mode){
        this.setState({
            gameLocked: false,
            lastCardSelected: null,
            numberOfMatches: 0,
            mode: mode,
            cards:this.getData(mode)
        })
    }

    reStartInFireFlyMode(){       
        this.reStart(GameModes.FIREFLY);
    }

    reStartInFoolMode(){       
        this.reStart(GameModes.FOOLFLY);
    }

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

      getData(mode) {

        let items= [];
    
        if (mode === GameModes.FIREFLY) {   
            console.log("get firefly data");     
            items = fireflies;        
        } else {
            console.log("get foolfly data");      
            items = fools;
        }
        
        let itemList = [];
    
        items.forEach(element => {
            let newItem = {};
            newItem.characterID = element.characterID;
            newItem.image = element.image;
            newItem.isFlipped = false;
            newItem.isMatched = false;
            itemList.push(newItem);
    
            let mirrorItem = {};
            mirrorItem.characterID = element.characterID;
            mirrorItem.image = element.image;
            mirrorItem.isFlipped = false;
            newItem.isMatched = false;
            itemList.push(mirrorItem);
        });
    
    
        items = this.shuffleArray(itemList)

        
        console.log(items);
    
        return items;       
    }




}