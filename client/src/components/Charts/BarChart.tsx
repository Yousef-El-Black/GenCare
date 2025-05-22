import { BarChart as MuiBarChart } from "@mui/x-charts";

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
          emergency: 55,
          radiology: 55,
          outclinics: 55,
          inpatients: 55,
          lab: 55,
          month: "Jan",
        },
        {
          emergency: 55,
          radiology: 55,
          outclinics: 55,
          inpatients: 55,
          lab: 55,
          month: "Feb",
        },
        {
          emergency: 55,
          radiology: 55,
          outclinics: 55,
          lab: 55,
          inpatients: 55,
          month: "Mar",
        },
        {
          emergency: 55,
          radiology: 55,
          lab: 55,
          outclinics: 55,
          inpatients: 55,
          month: "Apr",
        },
        {
          emergency: 55,
          lab: 55,
          radiology: 55,
          outclinics: 55,
          inpatients: 55,
          month: "May",
        },
        {
          emergency: 55,
          radiology: 55,
          lab: 55,
          outclinics: 55,
          inpatients: 55,
          month: "Jun",
        },
        {
          emergency: 55,
          radiology: 55,
          lab: 55,
          outclinics: 55,
          inpatients: 55,
          month: "Jul",
        },
        {
          emergency: 55,
          radiology: 55,
          lab: 55,
          outclinics: 55,
          inpatients: 55,
          month: "Aug",
        },
        {
          emergency: 55,
          radiology: 55,
          outclinics: 55,
          lab: 55,
          inpatients: 55,
          month: "Sep",
        },
        {
          emergency: 55,
          radiology: 55,
          lab: 55,
          outclinics: 55,
          inpatients: 55,
          month: "Oct",
        },
        {
          emergency: 55,
          radiology: 55,
          lab: 55,
          outclinics: 55,
          inpatients: 55,
          month: "Nov",
        },
        {
          emergency: 55,
          radiology: 55,
          outclinics: 55,
          lab: 55,
          inpatients: 55,
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
