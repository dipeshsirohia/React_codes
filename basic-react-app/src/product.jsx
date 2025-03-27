import "./product.css";

function Product({title,price,features}){
    let list=features.map((feature)=><li>{feature}</li>)
    return (
        < div className="Product">
        <div>{title}</div>
        <div>Price:{price}</div>
        <div>{list}</div>
        
        
        </div>
    )
}

export default Product; 