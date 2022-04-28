import { useState } from 'react'
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import GamePage from './Pages/Game/GamePage'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

      <Navbar />
      <div >
        <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Game"} element={<GamePage />} />
      </Routes>
      </div>
      
    </div>

  )
}

export default App
