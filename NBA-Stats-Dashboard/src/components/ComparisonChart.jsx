import { Chart } from 'react-google-charts';

function ComparisonChart({ statData, statCategory }) {
  const data = [['Player', `${statCategory}`, { role: 'style' }], ...statData];
  return (
    <div className='comparisonChartContainer'>
      <div>
        <p className='comparisonChartCategory'>{statCategory}</p>
      </div>
      <Chart chartType='ColumnChart' width='200px' data={data} />
    </div>
  );
}

export default ComparisonChart;
