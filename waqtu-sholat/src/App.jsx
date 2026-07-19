import { useState } from 'react'
import './App.css'
import WebsiteMark from './components/website-mark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>test for waqtu sholat</p>
      <WebsiteMark />
    </>
  )
}

export default App
