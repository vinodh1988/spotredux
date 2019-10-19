import {combineReducers, bindActionCreators} from 'redux';
import {dummyReducer,homeReducer} from '../reducers/reducers';
import {connect} from 'react-redux';
import MSlide from '../../MessageSlide';
import { randomAction } from '../actions/myactions';



export const state= combineReducers({
    msgSlideData: homeReducer,
    appTitle: dummyReducer
});

function mapStateToPropsMS(state){
      return {title:state.appTitle,message:state.msgSlideData.message} ;
}

function mapActiontoPropsMS(dispatch){
    return bindActionCreators({getMessage:randomAction},dispatch);
}

export const MessageSlide   = connect(mapStateToPropsMS,mapActiontoPropsMS)(MSlide);