import {combineReducers, bindActionCreators} from 'redux';
import {dummyReducer,homeReducer,winnerReducer} from '../reducers/reducers';
import {connect} from 'react-redux';
import MSlide from '../../MessageSlide';
import Wsearch from '../../WinnerSearch';
import { randomAction } from '../actions/myactions';
import { AsyncWinnerCall } from '../actions/winneraction';



export const state= combineReducers({
    msgSlideData: homeReducer,
    appTitle: dummyReducer,
    winnersData: winnerReducer
});

function mapStateToPropsMS(state){
      return {title:state.appTitle,message:state.msgSlideData.message} ;
}

function mapStateToPropsWS(state){
    return {winners: state.winnersData.winners} ;
}



function mapActiontoPropsMS(dispatch){
    return bindActionCreators({getMessage:randomAction},dispatch);
}

function mapActiontoPropsWS(dispatch){
    return bindActionCreators({getWinners:AsyncWinnerCall},dispatch);
}


export const MessageSlide   = connect(mapStateToPropsMS,mapActiontoPropsMS)(MSlide);
export const WinnerSearch  = connect(mapStateToPropsWS,mapActiontoPropsWS)(Wsearch);