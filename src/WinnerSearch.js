import React from 'react';
import ReactDOM  from 'react-dom';
import {Winner} from './Winner';
import './App.css';

class WinnerSearch extends React.Component{

  constructor(props){
      super(props);
      this.getWinners=this.getWinners.bind(this);
  }

  getWinners(){
    let pattern=ReactDOM.findDOMNode(this.refs.pattern).value;
    this.props.getWinners(pattern);
  }

  render(){
      console.log(this.props.winners);
     let code=this.props.winners.map((x)=>
     <Winner key={x.id} winner={x}></Winner>);
      return(
        <div className="home">
            Search winner  <input type="text" ref="pattern" onKeyUp={this.getWinners}/>
            {code}
        </div>
      );
  }
}

//WinnerSearch.defaultProps={winners:[]};
export default WinnerSearch;
