import axios from 'axios'
import { useEffect, useState } from 'react';
import { GameCard } from './gameCard';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function App() {
  const { game_name } = useParams()
  const [gameInfo, setGameInfo] = useState(null)

  const loadData = async () => {
    try {
      const { data } = await axios.get(`https://tocfastapi.herokuapp.com/findByName?name=${game_name}`)
      console.log({ data })
      setGameInfo(data[0])
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="mx-80 bg-slate-700">
      <div className="px-4 py-3 bg-slate-800">
        <span className="font-bold text-white">MEATS</span>
      </div>
      {
        gameInfo && <GameCard data={gameInfo} />
      }
    </div>
  );
}

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:game_name" element={<App />} />
      </Routes>
    </Router>
  )
}

export default Navigation
