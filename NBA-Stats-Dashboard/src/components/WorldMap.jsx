import { Chart } from 'react-google-charts';
import worldBirthPlaceData from '../data/world-birthplaces.json';

function WorldMap() {
  const formatted_WorldBirthPlaceData = worldBirthPlaceData.map((country) => [
    country.Country,
    country.numOfPlayers,
  ]);
  const data = [['Country', 'Players'], ...formatted_WorldBirthPlaceData];
  return (
    <div>
      <h2>World Map - Birthplaces</h2>
      <Chart
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
        width='50%'
        height='200px'
        data={data}
      />
    </div>
  );
}

export default WorldMap;
