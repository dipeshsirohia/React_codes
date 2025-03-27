import { useState } from "react"
export default function LikeButton(){
   let [IsLiked,setIsLiked]=useState(true)
   let Styles={color:"red"}
   let liked=()=>{
       setIsLiked(!IsLiked)
   }
    return(
        <>
        
        
        
        <p>like button</p>
        
       
        <p onClick={liked} style={Styles}>{IsLiked ?<i className="fa-regular fa-heart"></i>:<i className="fa-solid fa-heart"></i>}</p>
       </>
    )
}