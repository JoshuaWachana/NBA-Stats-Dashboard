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
    colorAxis: { colors: ['#0096FF', '#000000'] },
    backgroundColor: '#F0FFFF',
    datalessRegionColor: '#FFFFFF',
    defaultColor: '#f5f5f5',
  };
  return (
    <div className='mapChartContainer'>
      <Chart
        className='mapChart'
        chartType='GeoChart'
        width='100%'
        height='300px'
        data={data}
        options={options}
      />
    </div>
  );
}

export default USMap;
