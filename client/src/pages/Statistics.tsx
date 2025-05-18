import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import StatisticsCard from "../components/Cards/StatisticsCard";
import LineChart from "../components/Charts/LineChart";

// Icons
import PeopleIcon from "@mui/icons-material/People";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import DonutChart from "../components/Charts/DonutChart";

const donutData = [
  { id: 0, value: 40, label: "Windows" },
  { id: 1, value: 30, label: "macOS" },
  { id: 2, value: 20, label: "Linux" },
  { id: 3, value: 10, label: "Other" },
];

const Statistics = () => {
  const [activePatientsPeriod, setActivePatientsPeriod] = useState("today");

  return (
    <div>
      {/* Slide 1: Cards */}
      <div className="cards flex flex-wrap gap-4 justify-center items-center">
        <StatisticsCard
          label="Total Patients"
          num={965}
          icon={<PeopleIcon fontSize="large" />}
        />
        <StatisticsCard
          label="Inpatients"
          num={26}
          icon={<LocalHotelIcon fontSize="large" />}
        />
        <StatisticsCard
          label="Outpatients"
          num={526}
          icon={<DirectionsWalkIcon fontSize="large" />}
        />
        <StatisticsCard
          label="Emergency Cases"
          num={12}
          icon={<LocalHospitalIcon fontSize="large" />}
        />
        <StatisticsCard
          label="Surgeries"
          num={100000}
          icon={<VaccinesIcon fontSize="large" />}
        />
      </div>

      {/* -------------------------------------------------------------- */}
      {/* Slide 2: Charts */}
      <div className="charts my-5">
        <div className="left flex gap-3 flex-wrap">
          <div className="linechart flex-1 border shadow-sm p-4 rounded-lg">
            <div className="top flex justify-between items-center">
              <h3 className="text-lg">Total Patients</h3>
              <div className="options flex">
                <button
                  className={`px-3 py-2 border cursor-pointer duration-75 ${
                    activePatientsPeriod === "today"
                      ? "bg-darkcharcoal text-white"
                      : "hover:bg-coolgray"
                  }`}
                  onClick={() => setActivePatientsPeriod("today")}
                >
                  Today
                </button>
                <button
                  className={`px-3 py-2 border  cursor-pointer duration-75 ${
                    activePatientsPeriod === "week"
                      ? "bg-darkcharcoal text-white"
                      : "hover:bg-coolgray"
                  }`}
                  onClick={() => setActivePatientsPeriod("week")}
                >
                  Week
                </button>
                <button
                  className={`px-3 py-2 border cursor-pointer duration-75 ${
                    activePatientsPeriod === "month"
                      ? "bg-darkcharcoal text-white"
                      : "hover:bg-coolgray"
                  }`}
                  onClick={() => setActivePatientsPeriod("month")}
                >
                  Month
                </button>
                <button
                  className={`px-3 py-2 border cursor-pointer duration-75 ${
                    activePatientsPeriod === "year"
                      ? "bg-darkcharcoal text-white"
                      : "hover:bg-coolgray"
                  }`}
                  onClick={() => setActivePatientsPeriod("year")}
                >
                  Year
                </button>
              </div>
            </div>
            <LineChart
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Jan", "Feb", "Mar", "Apr", "May"],
                },
              ]}
              series={[{ data: [2, 5, 2, 4, 7] }]}
            />
          </div>
          <div className="barchart flex-1 border shadow-sm p-4 rounded-lg">
            <div className="top flex justify-between items-center">
              <h3 className="text-lg">Department-wise Revenue per Month</h3>
              <Link
                to={"/statistics/departments"}
                className="border p-2 rounded hover:bg-darkcharcoal hover:text-white duration-300"
              >
                View Details
              </Link>
            </div>
            <BarChart />
          </div>
        </div>
        <div className="right flex gap-3 flex-wrap mt-5">
          <div className="piechart flex-1 border shadow-sm p-4 rounded-lg">
            <div className="top flex justify-between items-center mb-5">
              <h3 className="text-lg">Patient distribution by department</h3>
              <Link
                to={"/statistics/departments"}
                className="border p-2 rounded hover:bg-darkcharcoal hover:text-white duration-300"
              >
                View Details
              </Link>
            </div>
            <PieChart
              data={[
                { label: "Inpatient", value: 13 },
                { label: "Emergency Cases", value: 12 },
                { label: "Outpatients", value: 75 },
              ]}
            />
          </div>
          <div className="donutchart flex-1 border shadow-sm p-4 rounded-lg">
            <div className="top flex justify-between items-center">
              <h3 className="text-lg">Department-wise Revenue per Month</h3>
              <Link
                to={"/statistics/departments"}
                className="border p-2 rounded hover:bg-darkcharcoal hover:text-white duration-300"
              >
                View Details
              </Link>
            </div>
            <DonutChart data={donutData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
