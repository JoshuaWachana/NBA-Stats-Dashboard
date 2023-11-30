import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TopScorersUrl,
  TopAssistsUrl,
  TopReboundsUrl,
} from '../utils/apiEndpoints';
import { Chart } from 'react-google-charts';
import Dropdown from './Dropdown';
import AveragePoints from '../data/average-points.json';
import AverageRebounds from '../data/average-rebounds.json';
import AverageAssists from '../data/average-assists.json';
import '../styles/PlayerStats.css';

const options = [
  {
    title: 'Total Points',
    url: TopScorersUrl,
    dataApiKey: 'PTS',
    nameApiKey: 'player_name',
  },
  {
    title: 'Total Assists',
    url: TopAssistsUrl,
    dataApiKey: 'field_goals',
    nameApiKey: 'player_name',
  },
  {
    title: 'Total Rebounds',
    url: TopReboundsUrl,
    dataApiKey: 'field_goals',
    nameApiKey: 'player_name',
  },
  {
    title: 'Average Points',
    data: AveragePoints,
    dataApiKey: 'averagePerGame',
    nameApiKey: 'playerName',
  },
  {
    title: 'Average Rebounds',
    data: AverageRebounds,
    dataApiKey: 'averagePerGame',
    nameApiKey: 'playerName',
  },
  {
    title: 'Average Assists',
    data: AverageAssists,
    dataApiKey: 'averagePerGame',
    nameApiKey: 'playerName',
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

  const labels = getLabels();
  const graphData = getGraphData();

  const newChartData = [
    ['Player', criteria.title],
    [labels[0], Number(graphData[0])],
    [labels[1], Number(graphData[1])],
    [labels[2], Number(graphData[2])],
    [labels[3], Number(graphData[3])],
    [labels[4], Number(graphData[4])],
  ];

  const newOptions = {
    chartArea: { width: '50%' },
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
    <div className='playerStats'>
      <div className='dropDownMenuContainer'>
        <h1 className='playerStats__title'>League Leaders</h1>
        <div>
          <Dropdown
            options={options}
            onSelect={(event) => {
              setCriteria(event);
            }}
          />{' '}
        </div>
      </div>
      <div className='playerStatsChartContainer'>
        <Chart
          chartType='BarChart'
          height='150px'
          data={newChartData}
          options={newOptions}
        />
      </div>
    </div>
  );
};

export default PlayerStats;
