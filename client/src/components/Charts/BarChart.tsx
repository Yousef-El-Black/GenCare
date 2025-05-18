import { BarChart as MuiBarChart } from "@mui/x-charts";
import { randomFiveNum } from "../../utils/random";

const BarChart = () => {
  const chartSetting = {
    yAxis: [
      {
        label: "Monthly Profit (EGP)",
        width: 80,
      },
    ],
    height: 300,
  };

  function valueFormatter(value: number | null) {
    return `${value} EGP`;
  }

  return (
    <MuiBarChart
      dataset={[
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          outclinics: randomFiveNum(),
          inpatients: randomFiveNum(),
          lab: randomFiveNum(),
          month: "Jan",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          outclinics: randomFiveNum(),
          inpatients: randomFiveNum(),
          lab: randomFiveNum(),
          month: "Feb",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          outclinics: randomFiveNum(),
          lab: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "Mar",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          lab: randomFiveNum(),
          outclinics: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "Apr",
        },
        {
          emergency: randomFiveNum(),
          lab: randomFiveNum(),
          radiology: randomFiveNum(),
          outclinics: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "May",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          lab: randomFiveNum(),
          outclinics: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "Jun",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          lab: randomFiveNum(),
          outclinics: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "Jul",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          lab: randomFiveNum(),
          outclinics: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "Aug",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          outclinics: randomFiveNum(),
          lab: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "Sep",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          lab: randomFiveNum(),
          outclinics: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "Oct",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          lab: randomFiveNum(),
          outclinics: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "Nov",
        },
        {
          emergency: randomFiveNum(),
          radiology: randomFiveNum(),
          outclinics: randomFiveNum(),
          lab: randomFiveNum(),
          inpatients: randomFiveNum(),
          month: "Dec",
        },
      ]}
      xAxis={[{ dataKey: "month" }]}
      series={[
        { dataKey: "emergency", label: "Emergency", valueFormatter },
        { dataKey: "radiology", label: "Radiology", valueFormatter },
        { dataKey: "outclinics", label: "Out Clinics", valueFormatter },
        { dataKey: "inpatients", label: "Inpatients", valueFormatter },
        { dataKey: "lab", label: "Lab Tests", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
};

export default BarChart;

/*
  Data Structure:
  {
    emergency: 59,
    radiology: 57,
    outclinics: 86,
    inpatients: 21,
    month: 'Jan',
  },
*/
