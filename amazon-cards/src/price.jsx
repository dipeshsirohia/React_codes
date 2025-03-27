export default function Price({oldprice,newprice}){
    let styles={backgroundColor:"gold",}
    let oldstyle={textDecorationLine:"line-through"} 
    return(
        <div style={styles}>
        <span style={oldstyle} >{oldprice}</span>
        &nbsp;  &nbsp;  &nbsp;
        <span>{newprice}</span>
        </div>
    )
}