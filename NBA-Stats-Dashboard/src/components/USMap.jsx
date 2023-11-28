import { Chart } from 'react-google-charts';
import usBirthPlaceData from '../data/us-birthplaces.json';

function USMap() {
  console.log(usBirthPlaceData);
  const data = [
    ['State', 'Latitude'],
    ['California', 200],
    ['WA', 500],
  ];

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
