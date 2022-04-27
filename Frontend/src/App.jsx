import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Compare from "./Pages/Compare/Compare";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path={"/compare"} element={<Compare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
