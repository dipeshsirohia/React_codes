import './product.css'
import Price from './price.jsx'
function Product({title,idx}){
    let oldprice=["1200","1300","1400","1500"];
    let newprice=["1150","1250","1350","1450"];
    let description=[["8,000 dpi","5 programmable buttons"],
                     ["intiutive surface","smart & fast"],
                     ["designed for i pad pro","optimal resourse"],
                     ["wireless","high connectivity"]]
    return(
        <div className='product'>
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
            
        </div>
    ) 
}

 export default Product;