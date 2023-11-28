import { Chart } from 'react-google-charts';
import usBirthPlaceData from '../data/us-birthplaces.json';

function USMap() {
  const formatted_USBirthPlaceData = usBirthPlaceData.map((state) => [
    state.State,
    state.numOfPlayers,
  ]);

  const data = [['State', 'Players'], ...formatted_USBirthPlaceData];

  const options = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
    backgroundColor: '#81d4fa',
    datalessRegionColor: '#f8bbd0',
    defaultColor: '#f5f5f5',
  };
  return (
    <div>
      <h2>US Map - Birthplaces</h2>{' '}
      <div>
        <Chart
          chartType='GeoChart'
          width='50%'
          height='200px'
          data={data}
          options={options}
        />
      </div>{' '}
    </div>
  );
}

export default USMap;
