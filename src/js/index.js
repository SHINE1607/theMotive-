//importing the Time module 
import Time from './models/time';
import * as timeView from './views/timeView';
//cretaing the universal object  that contains all the information and can be accessed anywhere 
//it is made public 
export const state = {};
state.date = new Date();
window.state = state;
const controlTime  = async () => {
    state.index = 1;
    if(state.time == undefined){
        state.time = new Time();
    }
    //getting  the old time
    state.time.getOldTime();
    //getting the current time
    state.time.getNewTime();
    //getting the age 
    state.time.getAge();
    //initial update of aui
    
}

window.onload = () =>{
    controlTime();
   }

document.querySelector('.reset').addEventListener('click', (e) =>{
    
    window.location.reload();
})





