import { Chart } from 'react-google-charts';

function WorldMap() {
  const data = [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
  ];
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
