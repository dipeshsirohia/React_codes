
// import './App.css'
import ProductTab from './ProductTab.jsx'
// import Title from './Title.jsx'
import {Title,Description} from './Title.jsx'
import Item  from './item.jsx'
import Hello from './hello.jsx'
import Button from './button.jsx'
import Form from './form.jsx'
// way to use pure javascript
function Js(){
  let name = "dipesh"
  return(
    <>
   
    <p>2 + 2 ={2+2}</p>
    <p>2 * 2 ={2*2}</p>
    <p>2 - 2 ={2-2}</p>
    <h2> my name is {name}</h2>
    </>
  )
}



function App() {
 
  return (
  <>
  
    {/* <Title/> */}
  {/* <h1>Myself Dipesh Sirohia</h1> */}
  {/* <Description/> */}
  {/* <Js/> */}
  <ProductTab/>
    {/* <Item  item="refregirator"  price={16000}/>
    <Item  item="television"  price={45000}/>
    <Item  item="mobile"  price={75000}/>
    <Item  item="washing machine"  price={4000}/> */}
    <Hello username="dipesh" color="green"/>
    {/* <Button/> */}
  {/* <Form/> */}

  </>
  )
}

export default App
