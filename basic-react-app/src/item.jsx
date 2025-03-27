import './item.css'

function Item({item,price}){
    let styles={backgroundColor:price>30000?"green":""}
    return(
        <div >
        <p>The item name:{item}</p>
         <p>price:{price}</p>
        
        {price>30000 && <p style={styles}>final price  with 5% off:{price*0.95}</p>}
  
        </div>
    )
  }

  export default Item;