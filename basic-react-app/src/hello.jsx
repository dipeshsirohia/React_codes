function Hello({username,color}){
    let styles={color:color}
    return(
        
        <div style={styles}>
            <p>hello, {username}</p>
        </div>
    )
}

export default Hello;