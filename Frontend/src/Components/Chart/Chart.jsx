import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "123",
    pv: 2400,
  },
  {
    date: "13",
    pv: 1398,
  },
  {
    date: "Page C",
    pv: 9800,
  },
  {
    date: "Page D",
    pv: 3908,
  },
  {
    date: "Page E",
    pv: 0,
  },
  {
    date: "Page F",
    pv: 3800,
  },
  {
    date: "Page G",
    pv: 4300,
  },
];

export default function Chart() {
  const [players, setPlayers] = useState();

  const getPlayer = async () => {
    const res = await fetch(`https://tocfastapi.herokuapp.com/chartdata`, {
      method: "GET",
    });
    let data = await res.json();

    setPlayers(data);
  };

  useEffect(() => {
    getPlayer();
  });
  return (
    <ResponsiveContainer width="90%" height="90%">
      <LineChart
        data={players}
        margin={{
          top: 40,
          right: 0,
          left: 30,
          bottom: 5,
        }}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" angle={15} />
        <YAxis />
        <Tooltip />
        <Line
          type="monotoneX"
          dataKey="player"
          stroke="red"
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
