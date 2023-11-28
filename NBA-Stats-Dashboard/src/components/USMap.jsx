import { Chart } from 'react-google-charts';

function USMap() {
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
      <div>US Map - Birthplaces</div>{' '}
      <div>
        <Chart
          chartType='GeoChart'
          width='100%'
          height='400px'
          data={data}
          options={options}
        />
      </div>{' '}
    </div>
  );
}

export default USMap;
