import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addvalue = () => {
    if(count<20){
    setCount(count + 1)
    }
  }

  const removevalue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>hey!</h1>
      <h2>counter value: {count}</h2>

      <button onClick={addvalue}>value add karo</button>
      <br />

      <button onClick={removevalue}>value ko kam karo</button>
      <br />
      <h1>Abhi maza aayega na bhidu!!!</h1>
    </>
  )
}

export default App
