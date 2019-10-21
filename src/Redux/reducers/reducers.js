
const message={message:"Welcome to redux!!!"}


export function homeReducer(state=message,action){
    console.log(state);
    console.log(action);
     switch(action.type){
         case "MESSAGE_ACTION":
               
                 return {message:action.data};
         default:
                 return state;
                
     }

}

export function winnerReducer(state={winners:[]},action){
    switch(action.type){
        case "WINNER_ACTION":
                  return {winners:action.data};
        default:
                  return state;
    }
}

export function dummyReducer(){

    return "REACT REDUX APP";
}

