function Hello(){
    return(
        console.log("hello")
    )
}

function onMouseOver(){
    return(
        console.log("mouse is over")
    )
}

function onDoubleClick(){
    return(
        console.log("double clicked")
    )
}



export default function Button(){
    return(
        <>
        <button onClick={Hello}>click me</button>
        <p onClick={Hello}>this is random checking</p>
        <p onMouseOver={onMouseOver}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt consequatur nesciunt assumenda quo quasi rerum facere aliquid dolorum mollitia? Accusantium.</p>
        <button onDoubleClick={onDoubleClick}>double click</button>
        </>
    )
}