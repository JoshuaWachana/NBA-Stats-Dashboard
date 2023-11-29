import { Chart } from 'react-google-charts';
import worldBirthPlaceData from '../data/world-birthplaces.json';

function WorldMap() {
  const formatted_WorldBirthPlaceData = worldBirthPlaceData.map((country) => [
    country.Country,
    country.numOfPlayers,
  ]);
  const options = {
    colorAxis: { colors: ['#00BFFF', '#000000'] },
    backgroundColor: '#F0FFFF',
    datalessRegionColor: '#FFFFFF',
    defaultColor: '#f5f5f5',
  };
  const data = [['Country', 'Players'], ...formatted_WorldBirthPlaceData];
  return (
    <div className='mapChartContainer'>
      <Chart
        className='mapChart'
        chartEvents={[
          {
            eventName: 'select',
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log('Selected : ' + region);
            },
          },
        ]}
        chartType='GeoChart'
        width='100%'
        height='250px'
        data={data}
        options={options}
      />
    </div>
  );
}

export default WorldMap;
