import { PieChart as MuiPieChart } from "@mui/x-charts/PieChart";

export default function PieChart({
  data,
}: {
  data: { label: string; value: number }[];
}) {
  const valueFormatter = (value: { value: number }): string => {
    return `${value.value}%`;
  };

  return (
    <MuiPieChart
      series={[
        {
          data,
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          valueFormatter,
          color: "#ffffff",
        },
      ]}
      height={200}
      width={200}
    />
  );
}

/*
Data Structure:
  {
    label: string,
    value: number,
    color?: string,
  }

*/
