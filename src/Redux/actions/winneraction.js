import axios from 'axios';
export let winnerAction=(winners)=>{
    return {
        type:"WINNER_ACTION",
        data: winners
    }
}

export let AsyncWinnerCall=(pattern)=>{
    return async (dispatch)=>{
      
        try{
      let response= await axios.get("http://localhost:9999/winners/all/"+pattern);
      dispatch(winnerAction(response.data));
        }
        catch(e){
            dispatch(winnerAction([]))
        }
       /*.then( (response)=>{
              dispatch(winnerAction(response.data))
          }
        ).catch(()=>{
             dispatch(winnerAction([]))
        });*/
    }
}
