import React, {} from 'react';
//import logo from './logo.svg';
import './App.css';
import './Character.js';
import GenerateAttributes from './GenerateAttributes.js';

class CharGenerator extends React.Component {

  render(props){
    return ( 
        <div>
           <GenerateAttributes/> 
        </div>
    );
  }
}

export default CharGenerator;
