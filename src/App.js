import React from 'react';

import './App.css';
import {MessageSlide} from './Redux/mappings/mapping';


class App extends React.Component{
  render(){
    return(
      <div id="box">
          <MessageSlide></MessageSlide> 
      </div>
    )
  
}
}

export default App;
