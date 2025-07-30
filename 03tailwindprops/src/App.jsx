import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {

  let myObject = {
    name: "John Doe",
    age: 30,
  }

  let myArray = [1, 2, 3, 4, 5]


  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 text-blue-600 drop-shadow-lg">Tailwind + Props</h1>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 px-4">
        <Card username="om" myObject={myObject} myArray={myArray} btnText="Click me"/>
        <Card username={"ompatel"} btnText="Visit me"/>
      </div>
    </>
  )
}

export default App
