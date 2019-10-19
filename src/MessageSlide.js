import React from 'react';

import './App.css';

export default class MessageSlide extends React.Component{
    render(){
  return(
        <div id="message">
        <h1><u>{this.props.title}</u></h1>
            <h3>{this.props.message}</h3>
            <button onClick={this.props.getMessage}>Change Message</button>
        </div>
  );
    }
}