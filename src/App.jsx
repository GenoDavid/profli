import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Hello World
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button disabled={count === 0 ? true : false} onClick={() => setCount((count) => count - 1)}>-</button>
      {count}
    </div >
  )
}

export default App
