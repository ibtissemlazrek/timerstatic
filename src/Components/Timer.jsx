import React, { Component } from 'react';
class Timer extends Component{
    constructor(props) {
        super(props)
        this.state = {

          hour:0,
          minute:0,
          second:0,
          btn:false

        }}
        interval = {}
       changeTime = () => {
        this.interval = setInterval(
              ()=>{ if(this.state.second===60){
               this.setState({
                 second:0,
                   minute: this.state.minute+1,
               })
            }else
               { 
                   this.setState({ second:this.state.second+1,
                })
                   

               }
            if(this.state.minute===60){
                this.setState({
                  minute:0,
                    hour: this.state.hour+1,
                })
             }
                     }
            ,
            1000
              )}
              stoppedTimer=()=>{
                  this.setState({
                      btn:!this.state.btn
                      
                  })
                  clearInterval(this.interval)
              }

startTimer=()=> {
    this.stoppedTimer()



    if (this.state.btn==false){
    


this.changeTime()
}}

resetTimer=()=>{
      clearInterval(this.interval);

this.setState({
    second:0,
    minute:0,
    hour:0


})
}
    render(){ //ternairy function{.?.}
        return(
        <div className="static-timer">
        <span className="timer" > {this.state.hour <10 ?'0'+this.state.hour:this.state.hour}:{this.state.minute <10 ?'0' +this.state.minute:this.state.minute}: {this.state.second < 10 ?'0'+this.state.second:this.state.second }</span>
        <span className="type-timer" ></span> 
         <div className="btn-timer"> 
         <button className="btn" onClick={this.startTimer} >{this.state.btn?'Stop':'Start'}</button>
         <button className="btn" onClick={this.resetTimer} >Reset</button>
         </div>
         </div>
         );
    }
}
 
export default Timer;
