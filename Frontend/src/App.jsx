import { useState } from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import GamePage from "./Pages/Game/GamePage";
import SearchPage from "./Pages/Search/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path={"/Game/:name"} element={<GamePage />} />
          <Route path={"/Search"} element={<SearchPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
