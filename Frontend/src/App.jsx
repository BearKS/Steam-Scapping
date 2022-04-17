import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

      <Navbar />
      <Home />

    </div>

  )
}

export default App
