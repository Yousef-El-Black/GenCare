import { ScatterChart as MuiScatterChart } from "@mui/x-charts";

const ScatterChart = ({
  data,
}: {
  data: { id: string; x1: number; y1: number; y2: number }[];
}) => {
  return (
    <MuiScatterChart
      series={[
        {
          label: "Series A",
          data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
        },
        {
          label: "Series B",
          data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
        },
      ]}
    />
  );
};

export default ScatterChart;

/*
Data Structure:
  [{
      id: string;
      x1: number;
      y1: number;
      y2: number;
  }]
*/
