import Price from "./price.jsx"
export default function Product({title,idx}){
    let description=[["8,000 dpi","5 programmable buttons"],
    ["intiutive surface","smart & fast"],
    ["designed for i pad pro","optimal resourse"],
    ["wireless","high connectivity"]]
    let oldprice=["1200","1300","1400","1500"];
    let newprice=["1150","1250","1350","1450"];
return(
    <>
    <div className="card">
    <p>{title}</p>
    <p>{description[idx][0]}</p>
    <p>{description[idx][1]}</p>
    <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
    </div>
    </>
)
}