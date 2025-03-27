import { useState } from "react";
export default function LudoBoard(){
      let[moves,setmoves]=useState({red:0,green:0,blue:0,yellow:0})

      let moveblue=()=>{setmoves({...moves , blue:moves.blue+1})}
      let movegreen=()=>{setmoves({...moves , green:moves.green+1})}
      let movered=()=>{setmoves({...moves , red:moves.red+1})}
      let moveyellow=()=>{setmoves({...moves , yellow:moves.yellow+1})}

      return(
        <>
        <div className="Board">
             <p id="blue">Blue moves={moves.blue}</p>
             <button onClick={moveblue} style={{backgroundColor:"blue"}}>+1</button>
             <p>Red moves={moves.red}</p>
             <button onClick={movered} style={{backgroundColor:"red"}}>+1</button>
             <p>green moves={moves.green}</p>
             <button onClick={movegreen} style={{backgroundColor:"green"}}>+1</button>
             <p>yellow moves={moves.yellow}</p>
             <button onClick={moveyellow} style={{backgroundColor:"yellow"}}>+1</button>
        </div>
        </>
      )
}