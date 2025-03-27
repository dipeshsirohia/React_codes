import { useState } from "react"
import axios from 'axios'

export default function LoginForm(){
    const [form,setform]=useState({
        gmail:"",
        password:"",
    })

    let handleFormData=(event)=>{
        setform((currData)=>{
             return{...currData,[event.target.name]:event.target.value}
        })
     }
 
     let handleSubmit=async(event)=>{
         event.preventDefault();
          const response=await axios.post("http://localhost:4545/login",form);
          alert(response.data)
         setform({
            
            gmail:"",
            password:"",
            
         })
        }

    
    return(
        <>
          <form onSubmit={handleSubmit}>
            

            <label htmlFor="gmail">Gmail:</label>
            <input type="text" name="gmail" value={form.gmail} onChange={handleFormData}/>

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={form.password} onChange={handleFormData}/>

           

            <button>Submit</button>
          </form>
        </>
    )
}