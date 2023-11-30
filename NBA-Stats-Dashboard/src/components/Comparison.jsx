import '../styles/Comparison.css';
import ComparisonChart from './ComparisonChart';
import { useState } from 'react';

function Comparison() {
  const [statData, setStatData] = useState(defaultStatData);

  const columnChartColor1 = '#5A5A5A';
  const columnChartColor2 = '#10448d';

  function handleSubmit(e) {
    e.preventDefault();
    const formData = e.target.elements;
    const player1NameSubmission = formData.player1.value.split(' ').join('_');
    const player2NameSubmission = formData.player2.value.split(' ').join('_');
    getPlayerId(player1NameSubmission, player2NameSubmission);
    e.target.reset();
  }

  async function getPlayerId(name1, name2) {
    try {
      const response1 = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${name1}`
      );
      const data1 = await response1.json();
      const playersDataObject1 = await data1.data;
      let id1 = playersDataObject1[0].id;
      if (id1 === undefined) {
        id1 = playersDataObject1[0].player_id;
      }

      const response2 = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${name2}`
      );
      const data2 = await response2.json();
      const playersDataObject2 = await data2.data;
      let id2 = playersDataObject2[0].id;
      if (id2 === undefined) {
        id2 = playersDataObject1[0].player_id;
      }
      getPlayerStats({ name1: name1, id1: id1, name2, id2: id2 });
    } catch (error) {
      console.log(error);
    }
  }

  async function getPlayerStats({ name1, id1, name2, id2 }) {
    try {
      const response1 = await fetch(
        `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${id1}`
      );
      const data1 = await response1.json();
      const response2 = await fetch(
        `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${id2}`
      );
      const data2 = await response2.json();
      if (data1.data.length > 0 && data1.data.length > 0) {
        const player1Points = data1.data[0].pts;
        const player2Points = data2.data[0].pts;
        const player1Ast = data1.data[0].ast;
        const player2Ast = data2.data[0].ast;
        const player1Reb = data1.data[0].reb;
        const player2Reb = data2.data[0].reb;
        setStatData({
          player1: {
            playerName: name1.replace('_', ' '),
            playerNameForAPI: name1,
            points: player1Points,
            rebounds: player1Reb,
            assists: player1Ast,
          },
          player2: {
            playerName: name2.replace('_', ' '),
            playerNameForAPI: name2,
            points: player2Points,
            rebounds: player2Reb,
            assists: player2Ast,
          },
        });
      } else {
        alert(
          'Data for one of the players could not be fetched. Please type carefully!'
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  const pointsData = [
    [
      statData.player1.playerName,
      Number(statData.player1.points),
      columnChartColor1,
    ],
    [
      statData.player2.playerName,
      Number(statData.player2.points),
      columnChartColor2,
    ],
  ];

  const assistsData = [
    [
      statData.player1.playerName,
      Number(statData.player1.assists),
      columnChartColor1,
    ],
    [
      statData.player2.playerName,
      Number(statData.player2.assists),
      columnChartColor2,
    ],
  ];

  const reboundsData = [
    [
      statData.player1.playerName,
      Number(statData.player1.rebounds),
      columnChartColor1,
    ],
    [
      statData.player2.playerName,
      Number(statData.player2.rebounds),
      columnChartColor2,
    ],
  ];

  return (
    <div className='comparisonComponentContainer'>
      <div>
        <form className='comparisonForm' onSubmit={handleSubmit}>
          <fieldset>
            <legend>Player Comparison of Season Averages (Per Game)</legend>
            <section className='comparisonInputSection'>
              <div>
                <label htmlFor='player1-inpt'>Player 1: </label>
                <input
                  id='player1-input'
                  type='text'
                  name='player1'
                  placeholder='First Last'
                />{' '}
              </div>
              <div className='bold'>vs.</div>
              <div>
                <label htmlFor='player2-input'>Player 2: </label>{' '}
                <input
                  id='player2-input'
                  type='text'
                  name='player2'
                  placeholder='First Last'
                />{' '}
              </div>
              <div>
                <label htmlFor='seasonCompare'>Select a Season:</label>{' '}
                <select name='seasonCompare' id='seasonCompare'>
                  <option value='2023'>2022-2023</option>
                </select>
              </div>
              <div>
                <input value='Compare' type='submit' />
              </div>
            </section>
            <p className='playerExamples'>
              Examples: James Harden, Chris Paul, Kevin Durant, Steven Adams,
              Jeff Green, Kevin Love, LeBron James
            </p>
          </fieldset>
        </form>
      </div>
      <div className='comparisonChartsSectionContainer'>
        {' '}
        <ComparisonChart statData={pointsData} statCategory='Points' />{' '}
        <ComparisonChart statData={assistsData} statCategory='Assists' />{' '}
        <ComparisonChart statData={reboundsData} statCategory='Rebounds' />
      </div>
    </div>
  );
}

const defaultStatData = {
  player1: {
    playerName: 'Jaylen Brown',
    playerNameForAPI: 'Jaylen_Brown',
    points: '26.6',
    rebounds: '6.9',
    assists: '3.5',
  },
  player2: {
    playerName: 'Steven Adams',
    playerNameForAPI: 'Steven_Adams',
    points: '8.6',
    rebounds: '11.5',
    assists: '2.3',
  },
};

export default Comparison;
