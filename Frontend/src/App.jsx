import { useState } from 'react'
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

      <Navbar />
      <div className='pt-[80px]'>
        <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      </div>
      
    </div>

  )
}

export default App
