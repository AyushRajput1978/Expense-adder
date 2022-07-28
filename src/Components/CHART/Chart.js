import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const datapointValue = props.datapoints.map((datapoint) => datapoint.value);
  const maxHeight = Math.max(...datapointValue);

  return (
    <div className="chart">
      {props.datapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxHeight}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
