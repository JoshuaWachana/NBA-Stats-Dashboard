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
import AveragePoints from "../data/average-points.json";
import AverageRebounds from "../data/average-rebounds.json";
import AverageAssists from "../data/average-assists.json";
import "../styles/PlayerStats.css";

Chart.register(Tooltip, Legend);

const options = [
  {
    title: "Total Points",
    url: TopScorersUrl,
    dataApiKey: "PTS",
    nameApiKey: "player_name",
  },
  {
    title: "Total Assists",
    url: TopAssistsUrl,
    dataApiKey: "field_goals",
    nameApiKey: "player_name",
  },
  {
    title: "Total Rebounds",
    url: TopReboundsUrl,
    dataApiKey: "field_goals",
    nameApiKey: "player_name",
  },
  {
    title: "Average Points",
    data: AveragePoints,
    dataApiKey: "averagePerGame",
    nameApiKey: "playerName",
  },
  {
    title: "Average Rebounds",
    data: AverageRebounds,
    dataApiKey: "averagePerGame",
    nameApiKey: "playerName",
  },
  {
    title: "Average Assists",
    data: AverageAssists,
    dataApiKey: "averagePerGame",
    nameApiKey: "playerName",
  },
];

const PlayerStats = () => {
  const [leagueLeaders, setLeagueLeaders] = useState([]);
  const [criteria, setCriteria] = useState(options[0]);

  const getLabels = () => {
    return leagueLeaders
      .slice(0, 5)
      .map((player) => player[criteria.nameApiKey]);
  };

  const getGraphData = () => {
    return leagueLeaders
      .slice(0, 5)
      .map((player) => player[criteria.dataApiKey]);
  };

  const chartData = {
    labels: getLabels(),
    datasets: [
      {
        axis: "y",
        label: criteria.title,
        data: getGraphData(),
        fill: true,
        backgroundColor: [
          "#0095ff",
          "#00aaff",
          "#00bfff",
          "#00d4ff",
          "#00eaff",
        ],
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  useEffect(() => {
    const fetchApiData = async () => {
      if (criteria.url) {
        try {
          const response = await axios.get(criteria.url);
          setLeagueLeaders(response.data.results);
        } catch (error) {
          console.log(error);
        }
      } else {
        setLeagueLeaders(criteria.data);
      }
    };

    fetchApiData();
  }, [criteria]);

  return (
    <div className="playerStats">
      <h1 className="playerStats__title">League Leaders</h1>
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
