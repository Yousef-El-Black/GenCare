import { Link } from "react-router";
import StackedBarChart from "../components/Charts/StackedBarChart";
import DashboardCard from "../components/DashboardCard";
import ProgressBar from "../components/ProgressBar";
import { Typography } from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import DataTable from "../components/DataTable";

const Homepage = () => {
  type departmentDataType = {
    dept: string;
    desc: string;
    percent: number;
    trend: boolean;
  }[];

  type departmentDataItemType = {
    dept: string;
    desc: string;
    percent: number;
    trend: boolean;
  };

  const departmentData: departmentDataType = [
    {
      dept: "Radiology",
      desc: "happened island cake easy private indicate closely empty model future topic selection airplane police dull importance newspaper appearance bit myself those garden were send",
      percent: 20,
      trend: true,
    },
    {
      dept: "Laboratory",
      desc: "happened island cake easy private indicate closely empty model future topic selection airplane police dull importance newspaper appearance bit myself those garden were send",
      percent: 35,
      trend: false,
    },
    {
      dept: "Radiology",
      desc: "happened island cake easy private indicate closely empty model future topic selection airplane police dull importance newspaper appearance bit myself those garden were send",
      percent: 20,
      trend: true,
    },
    {
      dept: "Laboratory",
      desc: "happened island cake easy private indicate closely empty model future topic selection airplane police dull importance newspaper appearance bit myself those garden were send",
      percent: 35,
      trend: false,
    },
    {
      dept: "Radiology",
      desc: "happened island cake easy private indicate closely empty model future topic selection airplane police dull importance newspaper appearance bit myself those garden were send",
      percent: 20,
      trend: true,
    },
    {
      dept: "Laboratory",
      desc: "happened island cake easy private indicate closely empty model future topic selection airplane police dull importance newspaper appearance bit myself those garden were send",
      percent: 35,
      trend: false,
    },
    {
      dept: "Radiology",
      desc: "happened island cake easy private indicate closely empty model future topic selection airplane police dull importance newspaper appearance bit myself those garden were send",
      percent: 20,
      trend: true,
    },
    {
      dept: "Laboratory",
      desc: "happened island cake easy private indicate closely empty model future topic selection airplane police dull importance newspaper appearance bit myself those garden were send",
      percent: 35,
      trend: false,
    },
  ];

  return (
    <div className="p-5">
      <div className="dashboard">
        <h1 className="heading text-3xl font-bold mb-5">Dashboard</h1>
        {/* Cards */}
        <ul className="flex justify-between gap-4 flex-wrap">
          <DashboardCard
            title={"Total Appointments"}
            num={2500}
            percent={20}
            isIncreased={true}
            img={"/assets/taimg.svg"}
          />
          <DashboardCard
            title={"Patients"}
            num={3145}
            percent={15}
            isIncreased={false}
            img={"/assets/tp.svg"}
          />
          <DashboardCard
            title={"Total Staffs"}
            num={350}
            percent={10}
            isIncreased={true}
            img={"/assets/tsimg.svg"}
          />
          <DashboardCard
            title={"Total Beds"}
            num={345}
            percent={30}
            isIncreased={false}
            img={"/assets/tbimg.svg"}
          />
        </ul>
        {/* Charts */}
        <div className="charts my-5 flex gap-5 flex-wrap">
          <div className="patient-by-department flex-2 bg-white p-5 rounded-lg min-w-[250px]">
            <h2 className="pb-3 font-semibold text-xl">
              Patient By Department
            </h2>
            <StackedBarChart />
          </div>
          <div className="overall-progress flex-1 bg-white rounded-lg min-w-[250px] p-5 flex flex-col">
            <h2 className="pb-3 font-semibold text-xl">Overall Progress</h2>
            <div className="bars flex-1 flex flex-col justify-around">
              <ProgressBar name={"Radiology"} percent={20} color={"#339b20"} />
              <ProgressBar name={"Emergency"} percent={35} color={"#c10c3c"} />
              <ProgressBar name={"Laboratory"} percent={10} color={"#3c2a3f"} />
              <ProgressBar name={"Cath Lab"} percent={12} color={"#275a8d"} />
              <ProgressBar name={"Dental"} percent={13} color={"#6fe3fd"} />
              <ProgressBar name={"Others"} percent={10} color={"#967b97"} />
            </div>
          </div>
        </div>
        <div className="my-5 flex gap-5 flex-wrap">
          <div className="top-dept flex-1 bg-white p-5 rounded-lg min-w-[250px]">
            <div className="heading flex justify-between items-center pb-3">
              <h2 className="font-semibold text-xl">Top Departments</h2>
              <Link
                to={"/departments"}
                className="font-semibold text-deepblue hover:underline"
              >
                View All
              </Link>
            </div>
            <ul className="content h-[400px] overflow-y-scroll w-full">
              {departmentData.map((data: departmentDataItemType) => {
                return (
                  <li className="flex items-center h-[100px] border-b-1 w-full overflow-hidden">
                    <div className="left flex-3">
                      <span className="pb-2 block font-semibold">
                        {data.dept}
                      </span>
                      <Typography
                        sx={{
                          overflow: "hidden",
                          whiteSpace: "wrap",
                          textOverflow: "ellipsis",
                          width: 200, // Required for truncation
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                        className="!leading-tight"
                      >
                        {data.desc}
                      </Typography>
                    </div>
                    <div
                      className={`right flex-1 ${
                        data.trend ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {data.percent}%{" "}
                      {data.trend ? <TrendingUpIcon /> : <TrendingDownIcon />}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="operations flex-2 bg-white p-5 rounded-lg min-w-[250px]">
            <div className="heading flex justify-between items-center pb-3">
              <h2 className="font-semibold text-xl">Operations</h2>
              <Link
                to={"/operations"}
                className="font-semibold text-deepblue hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="content">
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
