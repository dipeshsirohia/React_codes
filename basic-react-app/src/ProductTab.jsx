import Product from './product.jsx';

function ProductTab(){
    let options=["fast","durable","hi-tech"];
    
    return (
        <>
        <Product title="laptop" price="30,000" features={options} />
        <Product title="mobile" price="12,000" features={options}/>
        <Product title="pen" price="30"  features={options}/>
        </>
    )
}

export default ProductTab;