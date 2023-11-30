import '../styles/Comparison.css';
import ComparisonChart from './ComparisonChart';

function Comparison() {
  const pointsData = [
    ['Player 1', 20, '#5A5A5A'],
    ['Player 2', 23.4, '#10448d'],
  ];

  const assistsData = [
    ['Player 1', 11, '#5A5A5A'],
    ['Player 2', 8, '#10448d'],
  ];

  const reboundsData = [
    ['Player 1', 5, '#5A5A5A'],
    ['Player 2', 6.2, '#10448d'],
  ];
  return (
    <div className='comparisonComponentContainer'>
      <div>
        <form className='comparisonForm'>
          <fieldset>
            <legend>Player Comparison of Season Averages (Per Game)</legend>
            <section className='comparisonInputSection'>
              <div>
                <label htmlFor='player1-inpt'>Player 1: </label>
                <input
                  id='player1-input'
                  type='text'
                  placeholder='First Last'
                />{' '}
              </div>
              <div>
                <label htmlFor='player2-input'>Player 2: </label>{' '}
                <input
                  id='player2-input'
                  type='text'
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
