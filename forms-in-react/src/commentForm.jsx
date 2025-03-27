import { useState } from "react"

export default function CommentForm(){
    let [formData,setformData]=useState({
        username:"",
        comment:"",
        rating:0,
    })

    let handleInputChange = (event)=>{
        setformData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })
    }

    let handleSubmit=(event)=>{
        event.preventDefault()
        console.log(formData)
        setformData({
            username:"",
            comment:"",
            rating:0,
        })
    }

    return(
        <div>
            <form>
             <label htmlFor="username">username</label>
             <input type="text" placeholder="username" value={formData.username} name="username" id="username" onChange={handleInputChange}/>
             <br /><br /><br />

             <label htmlFor="comment">Comment</label>
             <textarea  placeholder="comment here" value={formData.comment} name="comment" id="comment" onChange={handleInputChange}/>
             <br /><br /><br />

             <label htmlFor="rating">rating</label>
             <input type="number"  value={formData.rating} name="rating" id="rating" onChange={handleInputChange}/>
             <br /><br /><br />

             <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}