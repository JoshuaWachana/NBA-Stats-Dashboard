import { useState, useEffect } from "react";
import axios from "axios";
import { LeagueScoreUrl } from "../apiEndpoints";

const PlayerStats = () => {
  const [leagueLeaders, setLeagueLeaders] = useState([]);

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
      <h1>PlayerStats</h1>
    </div>
  );
};

export default PlayerStats;
