import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
    </>
  )
}

export default App
