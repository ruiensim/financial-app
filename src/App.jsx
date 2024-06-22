import { useState } from "react"
import Header from "./component/Header"
import Input from "./component/Input"
import Display from "./component/Display"

function App() {
  const [value,setValue]=useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10

  })

  function handleChange(identifier,newValue){
    setValue(prevValue =>{
      return{
        ...prevValue,
        [identifier] : +newValue,
      };
    });

  }
  const isvalid = value.duration >= 1;

  return (
    <>
    <Header/>
    <Input data = {value} handleChange = {handleChange} />
    {isvalid?<Display data = {value}/>:<p className="center">Please enter a duration bigger than 1</p>}
    </>
  )
}

export default App
