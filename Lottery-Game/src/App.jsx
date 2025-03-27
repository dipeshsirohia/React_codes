import './App.css'
import Lottery from './Lottery.jsx'
import {sum} from './helper'
function App() {
  let winCondition=(ticket)=>{
    return ticket.every((num)=>num===ticket[0])
  }

  return (
    <>
      <Lottery n={2} winCondition={winCondition}  /> 
    </>
  )
}

export default App
