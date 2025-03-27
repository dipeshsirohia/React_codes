import { useState,useEffect } from "react"


export default function Joke(){
    let [joke,setjoke]=useState({})
     const URL="https://official-joke-api.appspot.com/random_joke"

    const newjoke= async()=>{
          let response=await fetch(URL)
          let jsonResponse=await response.json()
          setjoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
    }

    useEffect( ()=>{async function firstjoke(){
        let response=await fetch(URL)
        let jsonResponse=await response.json()
        setjoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
    }
firstjoke();
}
    ,[])

    return(
        <div>
            <h1>joke!</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={newjoke}>New joke</button>
        </div>
    )
}