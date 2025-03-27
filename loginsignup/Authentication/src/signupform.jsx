import { useState } from "react"
import axios from 'axios'

export default function SignupForm(){
    const [form,setform]=useState({
        username:"",
        gmail:"",
        password:"",
        phone:"",
    })

    let handleFormData=(event)=>{
        setform((currData)=>{
             return{...currData,[event.target.name]:event.target.value}
        })
     }
 
     let handleSubmit=async(event)=>{
         event.preventDefault();
          const response=await axios.post("http://localhost:4545/signup",form);
          alert(response.data)
         setform({
            username:"",
            gmail:"",
            password:"",
            phone:"",
         })
        }

    
    return(
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={form.username} onChange={handleFormData}/>

            <label htmlFor="gmail">Gmail:</label>
            <input type="text" name="gmail" value={form.gmail} onChange={handleFormData}/>

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={form.password} onChange={handleFormData}/>

            <label htmlFor="phone">Phone:</label>
            <input type="number" name="phone" value={form.phone} onChange={handleFormData}/>

            <button>Submit</button>
          </form>
        </>
    )
}