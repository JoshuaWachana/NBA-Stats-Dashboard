import { Chart } from "react-google-charts";
import PropTypes from "prop-types";

function ComparisonChart({ statData, statCategory }) {
  const data = [["Player", `${statCategory}`, { role: "style" }], ...statData];
  return (
    <div className="comparisonChartContainer">
      <div>
        <h1 className="comparisonChartCategory">{statCategory}</h1>
      </div>
      <Chart chartType="ColumnChart" width="200px" data={data} />
    </div>
  );
}

ComparisonChart.propTypes = {
  statData: PropTypes.array.isRequired,
  statCategory: PropTypes.string.isRequired,
};

export default ComparisonChart;
