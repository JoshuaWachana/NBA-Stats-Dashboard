import { useState, useEffect } from "react";
import axios from "axios";
import {
  TopScorersUrl,
  TopAssistsUrl,
  TopReboundsUrl,
} from "../utils/apiEndpoints";
import "chart.js/auto";
import { Chart, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import Dropdown from "./Dropdown";

Chart.register(Tooltip, Legend);
const options = [
  {
    title: "Total Points",
    url: TopScorersUrl,
  },
  {
    title: "Total Assists",
    url: TopAssistsUrl,
  },
  {
    title: "Total Rebounds",
    url: TopReboundsUrl,
  },
];

const PlayerStats = () => {
  const [leagueLeaders, setLeagueLeaders] = useState([]);
  const [criteria, setCriteria] = useState(options[0]);

  const chartData = {
    labels: leagueLeaders.slice(0, 5).map((player) => player.player_name),
    datasets: [
      {
        axis: "y",
        label: "Goals ",
        data: leagueLeaders.slice(0, 5).map((player) => player.field_goals),
        fill: true,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderWidth: 0,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(criteria.url);
        setLeagueLeaders(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiData();
  }, [criteria.url]);

  return (
    <div className="playerStats">
      <h1 className="title">League Leaders</h1>
      <Dropdown
        options={options}
        onSelect={(event) => {
          setCriteria(event);
        }}
      />
      <div className="playerStats__graph">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            indexAxis: "y",
            maintainAspectRatio: true,
          }}
        />
      </div>
    </div>
  );
};

export default PlayerStats;
