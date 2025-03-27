function onSubmit(event){
    return(
        event.preventDefault(),
        console.log("form was submitted")
    )
}

export default  function Form(){
    return(
        <form onSubmit={onSubmit}>
         <input  placeholder="write some thing"/>
         <button onClick={onSubmit}>submit</button>
        </form>
    )
}