import React, { Component } from 'react';
class Timer extends Component{
    
    render() { 
        return (   <div className="static-timer">
        <span className="timer" >00:00:00</span>
        <span className="type-timer" >Hour Minute Second</span> 
         
         <div className="btn-timer"> 
         <button className="btn" > Start</button>
         <button className="btn"> Reset</button>
         </div>
         </div>
         );
    }
}
 
export default Timer;
