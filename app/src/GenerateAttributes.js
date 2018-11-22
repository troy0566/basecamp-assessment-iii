import React, { Component } from 'react';
import './App.css';
import Character from './Character.js';

class GenerateAttributes extends Component {
    constructor(stats){
      super(stats);
      this.handleClick = this.diceroll.bind(this);
    
      //These were meant for the checkboxes. Not used at present.
      // this.state = {
      //   attributes: [ 
      //     {id: 1, value: "Str", isChecked: false},
      //     {id: 2, value: "Dex", isChecked: false},
      //     {id: 3, value: "Con", isChecked: false},
      //     {id: 4, value: "Int", isChecked: false},
      //     {id: 5, value: "Wis", isChecked: false},
      //     {id: 6, value: "Chr", isChecked: false}
      //   ]  
      // }
      
      this.state = { reRolls: 3, 
                     stats: [],
                     adjustment: [],
                     checkboxgroup: {},
                    }  
    }
    diceroll(e){
      console.log(e.target.id)
      const min = 3;
      const max = 19;
      let rand = Math.floor( Math.random() * (max - min) + min);
      
      let workingStatArray = this.state.stats.slice();
      let workingAdjArray = this.state.adjustment.slice();
      let workingReRolls = this.state.reRolls;
      
        if (e.target.id === "reRoll"){
           workingStatArray.pop();
           workingAdjArray.pop();
           workingReRolls--;
        }
        if (e.target.id === "reRoll" || e.target.id === "roll")
        {
          workingStatArray.push(rand);
          
          workingAdjArray.push(this.attribAdjustment(rand));
        }
        if (e.target.id === "reStart")
        {
          workingStatArray = [];
          workingAdjArray = [];
          workingReRolls = 3;
        }
        this.setState({ stats: workingStatArray});
        this.setState({ adjustment: workingAdjArray});
        this.setState({ reRolls: workingReRolls});
    }
  
    exchangeAttributes(){
      /*  I will need more time to figure out how to handle checkbox groups.
          So, I decided not to impliment this in the interest of time.
          The idea was to iterate thruough the checkboxes, find 2 check ones
          switch them in the state array and re-render the changed values.*/
      alert("Button clicked")
    }

    attribAdjustment(rand){
      let adjustment = 0
      switch (rand){
        case 3:
          adjustment = -4;
          break;
        case 4:
        case 5:
          adjustment = -3;
          break;
        case 6:
        case 7:
          adjustment = -2;
          break;
        case 8:
        case 9:
          adjustment = -1;
          break;
        case 10:
        case 11:
          adjustment = 0;
          break;
        case 12:
        case 13:
          adjustment = 1;
          break;
        case 14:
        case 15:
          adjustment = 2;
          break;
        case 16:
        case 17:
          adjustment = 3;
          break;
        case 18:
          adjustment = 4;
          break;
        default:
          adjustment = 0
      }
      return adjustment;
    }
    render() {
        let workingStatArray = this.state.stats.slice();
        let rollnum = workingStatArray.length;
    
        let rollsLeft = 6 - rollnum; 
        let reRolls = this.state.reRolls;
        return(
          <div>
              <h1>Rollup a Character</h1>
              <div name="instructions">
                 The intent here was to create a small app to create a character for a game.
                 There are 6 attributes (Strength, Dexterity, Constitution, Intellegence, Wisdome, and Chrisma).
                 Attributes range from 3 to 18, with Adjustment modifiers automatically determined.
                 The process is controlled by the following buttons: 
                 
                 <ul>
                 <li>"Roll" button create one attribute.</li> 
                 
                 <li>"Reroll" - The user is allowed up to 3 rerolls a single or multible attributes.</li>
                 
                 <li>"Switch Attributes" - Remains a work in progress. It was intended to allow the user to pick 2 attribute to switch, however,
                 time did not allow me to complete this function.</li> 
                 
                 <li>"New Character" - Clicking this button resets the page for a new character to be generated.</li>
                 </ul>

              </div>
              <button class="myButton" disabled={rollsLeft === 0} onClick={this.diceroll.bind(this)} id='roll'>Roll</button>
              <button class="myButton" disabled={reRolls === 0} onClick={this.diceroll.bind(this)} id='reRoll'>Reroll</button>
              <button class="myButton" disabled={rollsLeft > 0} onClick={this.exchangeAttributes.bind(this)} id='exchange'>Switch Attributes</button> 
              <button class="myButton" onClick={this.diceroll.bind(this)} id='reStart'>New Character</button>
              <div>

              </div>          
              <div>Reroll Count   : {reRolls}</div>
              <div>Roll Remaining : {rollsLeft}</div>

            <ul>
              <Character
              stats = {this.state.stats.slice()}
              adjustment = {this.state.adjustment.slice()}
              />
            </ul>

          </div>
        );
    }
    
  }
  
  export default GenerateAttributes;