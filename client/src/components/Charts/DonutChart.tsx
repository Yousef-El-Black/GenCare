import { PieChart } from "@mui/x-charts";
const DonutChart = ({
  data,
}: {
  data: { id: number; value: number; label: string }[];
}) => {
  const valueFormatter = (item: { value: number }) => `${item.value}%`;

  const radius = 60;

  return (
    <PieChart
      height={300}
      width={300}
      series={[
        {
          data: data,
          innerRadius: radius,
          arcLabel: (params) => params.label ?? "",
          arcLabelMinAngle: 20,
          valueFormatter,
        },
      ]}
    />
  );
};

export default DonutChart;
