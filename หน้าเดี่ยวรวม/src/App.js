import axios from 'axios'
import { useEffect, useState } from 'react';
import { GameCard } from './gameCard';

function App() {

  const [gameList, setGameList] = useState([])

  const loadData = async () => {
    try {
      const { data } = await axios.get('https://tocfastapi.herokuapp.com/steam/')
      setGameList(data[0].gameData)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  console.log(gameList)
  return (
    <div className="mx-80 bg-slate-700">
      <div className="px-4 py-3 bg-slate-800">
        <span className="font-bold text-white">MEATS</span>
      </div>
      {
        gameList.map((game, idx) => <GameCard key={idx} data={game} />)
      }
    </div>
  );
}

export default App;
