import { useState } from "react"

export default function Form(){
    let [formData,setformData]=useState({
        username:"",
        password:"",
    })
     
    let handleFormData=(event)=>{
       setformData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
       })
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
        setformData({
            username:"",
            password:"",
        })
    }

    return(
                 
        <form >
            <label htmlFor="username">fullname</label>
            <input type="text"  placeholder="enter name"  value={formData.username} onChange={handleFormData} id="username" name="username"/>
            <label htmlFor="username">fullname</label>
            <input type="password"  placeholder="enter password"  value={formData.password} onChange={handleFormData} id="password" name="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        
    )
}