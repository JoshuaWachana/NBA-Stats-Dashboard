import '../styles/Comparison.css';
import ComparisonChart from './ComparisonChart';
import { useState } from 'react';

function Comparison() {
  const [statData, setStatData] = useState({
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
  });

  const columnChartColor1 = '#5A5A5A';
  const columnChartColor2 = '#10448d';

  function handleSubmit(e) {
    e.preventDefault();
    const formData = e.target.elements;
    const player1NameSubmission = formData.player1.value.split(' ').join('_');
    const player2NameSubmission = formData.player2.value.split(' ').join('_');
    setStatData({
      player1: {
        playerName: formData.player1.value,
        playerNameForAPI: player1NameSubmission,
        points: '26.6',
        rebounds: '6.9',
        assists: '3.5',
      },
      player2: {
        playerName: formData.player2.value,
        playerNameForAPI: player2NameSubmission,
        points: '8.6',
        rebounds: '11.5',
        assists: '2.3',
      },
    });
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

export default Comparison;
