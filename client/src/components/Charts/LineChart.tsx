import { LineChart as MuiLineChart } from "@mui/x-charts";
const LineChart = ({
  xAxis,
  series,
}: {
  xAxis: {
    data: (string | number)[];
    scaleType: "linear" | "band" | "time" | "log" | "point" | "utc";
  }[];
  series: { data: number[]; color?: string }[];
}) => {
  return (
    <div>
      <MuiLineChart xAxis={xAxis} series={series} height={300} />
    </div>
  );
};

export default LineChart;
/*
  Data Structure:
XAxis = [{data: number[]}] => XAxis data points
series = [{data: number[], color?: string}] => Series data points
 */
