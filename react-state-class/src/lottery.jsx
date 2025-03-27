import { useState } from "react";
export default function Lottery(){
    let [Ticket,setTicket]=useState(0);

    let RandomNumber=()=>{
        let ticketNumber=Math.floor(Math.random() * 900) + 100;
        setTicket(Ticket=ticketNumber)
    }
    
    let isWinner=(t)=>{
        let num=0;
          while(t!=0){
           let r=t%10;
            num=num+r;
            t = Math.floor(t / 10);
          }
        if(num==15){
            return true;
        }
        return false;  
    }
    
    let w=isWinner(Ticket)
    return(
        <div>
        <h1>Lottery</h1>
        
        <h4>ticket number={Ticket}</h4>
        <button onClick={RandomNumber}>new tickets</button>
        {w?<h1>Congratulations!! you are winner</h1>:<p>try again</p>}
        
        </div>
    )
     
 }