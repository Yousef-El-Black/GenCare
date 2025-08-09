import { BarChart } from "@mui/x-charts/BarChart";

const emergencyData = [55, 141, 129, 171, 162, 88, 66, 58, 78, 1, 9, 96];
const surgicalOperationData = [
  155, 105, 102, 174, 118, 14, 69, 36, 56, 44, 26, 96,
];
const ICUData = [72, 82, 50, 50, 87, 81, 74, 84, 51, 54, 91, 100];
const PICUData = [113, 142, 83, 34, 92, 73, 15, 26, 43, 61, 22, 61];
const NICUData = [94, 84, 167, 178, 155, 60, 34, 90, 32, 64, 65, 58];
const inpatientData = [111, 138, 43, 127, 103, 29, 80, 30, 100, 93, 5, 85];
const laboratoryData = [150, 54, 120, 150, 124, 27, 23, 94, 94, 65, 81, 64];
const radiologyData = [35, 115, 53, 104, 167, 77, 21, 21, 7, 36, 48, 66];
const pharmacyData = [94, 159, 83, 117, 129, 50, 82, 69, 73, 33, 41, 3];
const cathLabData = [144, 143, 65, 186, 132, 20, 78, 94, 63, 4, 69, 1];
const interventionalRadiologyData = [
  49, 58, 82, 140, 44, 47, 15, 92, 15, 36, 72, 79,
];
const ophthalmologyData = [61, 150, 39, 39, 71, 61, 18, 28, 89, 42, 23, 55];
const lithotripsyData = [69, 127, 56, 34, 125, 42, 19, 41, 19, 29, 62, 93];
const EEGandEMGData = [87, 163, 116, 131, 161, 58, 99, 13, 43, 86, 44, 46];

const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const StackedBarChart = () => {
  return (
    <BarChart
      height={300}
      series={[
        {
          data: emergencyData,
          label: "Emergency Dept",
          id: "emergencyvId",
          stack: "total",
        },
        {
          data: surgicalOperationData,
          label: "Surgical Operation",
          id: "surgicalOperationvId",
          stack: "total",
        },
        { data: ICUData, label: "ICU", id: "ICUvId", stack: "total" },
        { data: PICUData, label: "PICU", id: "PICUvId", stack: "total" },
        { data: NICUData, label: "NICU", id: "NICUvId", stack: "total" },
        {
          data: inpatientData,
          label: "Inpatient",
          id: "inpatientvId",
          stack: "total",
        },
        {
          data: laboratoryData,
          label: "Laboratory",
          id: "laboratoryvId",
          stack: "total",
        },
        {
          data: radiologyData,
          label: "Radiology",
          id: "radiologyvId",
          stack: "total",
        },
        {
          data: pharmacyData,
          label: "Pharmacy",
          id: "pharmacyvId",
          stack: "total",
        },
        {
          data: cathLabData,
          label: "Cath Lab",
          id: "cathLabvId",
          stack: "total",
        },
        {
          data: interventionalRadiologyData,
          label: "Interventional Radiology",
          id: "interventionalRadiologyvId",
          stack: "total",
        },
        {
          data: ophthalmologyData,
          label: "Ophthalmology",
          id: "ophthalmologyvId",
          stack: "total",
        },
        {
          data: lithotripsyData,
          label: "Lithotripsy",
          id: "lithotripsyvId",
          stack: "total",
        },
        {
          data: EEGandEMGData,
          label: "EEG & EMG",
          id: "EEGandEMGvId",
          stack: "total",
        },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  );
};

export default StackedBarChart;

/*
Emergency Departement
Surgical Operation Departments
ICU
PICU
NICU
Inpatient Rooms
Laboratory
Radiology
Pharmacy
Cath Lab Department
Interventional Radiology Department
Ophthalmology Department
Lithotripsy Unit
EEG and EMG Unit

*/
