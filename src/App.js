import React from 'react';

import './App.css';
import {MessageSlide} from './Redux/mappings/mapping';
import {WinnerSearch} from './Redux/mappings/mapping';

class App extends React.Component{
  render(){
    return(
      <div id="box">
          <MessageSlide></MessageSlide> 
          <WinnerSearch></WinnerSearch>
      </div>
    )
  
}
}

export default App;
