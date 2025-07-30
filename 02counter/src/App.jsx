import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {

  const [counter, setCounter] = useState(5)

  // let counter=5;

  // const addValue = () =>{
  //   console.log("value added",Math.random());
  //   // counter=counter+1
  //   setCounter(counter + 1)
  // }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={()=>{counter<20 ?setCounter(counter+1):null}}>Increment {counter}</button>
      <br />
      <button onClick={()=>{counter>0 ?setCounter(counter-1):null}}>Decrement {counter}</button>
    </>
  )
}

export default App
