import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import Infobox from './infobox';
import { useState } from 'react';

export default function SearchBox(){
    let[city,setcity]=useState("")
    let [data,setdata]=useState({})
    let [ispresent,setispresent]=useState(false)
    let [error,seterror]=useState()
     
    const Api_url="http://api.weatherapi.com/v1/current.json"
    const API_key="0e53cd1344bc442eb91121703240706"
    
    let getweatherInfo =async ()=>{
        
         let response=await fetch(`${Api_url}?key=${API_key}&q=${city}`)
        let jsonResponse= await response.json() 
        console.log(jsonResponse)
        console.log({temp:jsonResponse.current.temp_c,humidity:jsonResponse.current.humidity})

        setdata({temp:jsonResponse.current.temp_c,
                humidity:jsonResponse.current.humidity,
                place:jsonResponse.location.name
                 })
             setispresent(ispresent=true)    
        
    }

    let handleInput=(event)=>{
      setcity(event.target.value)
    }

    let  handleSubmit=(event)=>{
       event.preventDefault()
       console.log("form was submitted")
       setcity("")
       getweatherInfo();
       setdata({})
    }



    return(
        <div className='searchBox' onSubmit={handleSubmit}>
        <h1>Search for the weather</h1>
        <form>
        <TextField id="outlined-basic" label="city name" variant="outlined"  required  value={city} onChange={handleInput}/>
        <br /> <br />
        <Button variant="contained" type='submit'>Search</Button>
        </form>
        <Infobox data={data} ispresent={ispresent}/>
        </div>
    )
}