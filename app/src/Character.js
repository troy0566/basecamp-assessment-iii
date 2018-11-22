import React, { Component } from 'react';
import './App.css';

class Character extends Component {

    render() {
      let characteristics = ["Str", "Dex", "Con", "Int", "Wis", "Chr"];
      let workingStatArray = this.props.stats;
      let workingAdjArray = this.props.adjustment;
  
      var rollnum = workingStatArray.length;
  
      let rollsLeft = 6 - rollnum; 
  
      return(
        this.props.stats.map(function(stat, idx){ 
          return<div key={idx}>
                  <div>
                    <li name="attributes"> 
                        <input type="checkbox"
                          name="statCheckGroup"
                          id = {stat + idx}
                          disabled={rollsLeft > 0} />
                        {characteristics[idx]} {stat} Adjustment: ({workingAdjArray[idx]}) 
                    </li>                  
                  </div>
                </div>
          }
        ) 
      )
  };
}
  export default Character;