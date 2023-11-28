import { useState, useEffect } from "react";
import axios from "axios";
import { LeagueScoreUrl } from "../apiEndpoints";
import 'chart.js/auto';
import { Chart, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(Tooltip, Legend);

const PlayerStats = () => {
  const [leagueLeaders, setLeagueLeaders] = useState([]);

  const chartData = {
    labels: leagueLeaders.slice(0, 5).map(player => player.player_name),
    datasets: [
      {
        axis: "y",
        label: 'Goals: ',
        data: leagueLeaders.slice(0, 5).map(player => player.field_goals),
        fill: true,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(201, 203, 207, 0.2)",
        ],
        // borderColor: [
        //   "rgb(255, 99, 132)",
        //   "rgb(255, 159, 64)",
        //   "rgb(255, 205, 86)",
        //   "rgb(75, 192, 192)",
        //   "rgb(54, 162, 235)",
        //   // "rgb(153, 102, 255)",
        //   // "rgb(201, 203, 207)",
        // ],
        borderWidth: 0,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      },
    ],
  };

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(LeagueScoreUrl);
        const data = response.data;
        setLeagueLeaders(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiData();
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          indexAxis: "y",
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default PlayerStats;
