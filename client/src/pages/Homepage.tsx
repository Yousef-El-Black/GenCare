import { Link } from "react-router";
import * as timeago from "timeago.js";
import StackedBarChart from "../components/Charts/StackedBarChart";
import DashboardCard from "../components/DashboardCard";
import ProgressBar from "../components/ProgressBar";
import { Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import DataTable from "../components/DataTable";
import PieChart from "../components/Charts/PieChart";

const notificaionsData = [
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: Date.now() - 11 * 1000 * 60 * 60,
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor (1).png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. John",
      img: "/assets/man.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
  {
    person: {
      name: "Dr. Mark",
      img: "/assets/doctor.png",
    },
    data: "added new task patient appointment booking",
    date: new Date(),
    link: "/",
  },
];

const recentActivityData = [
  {
    title: "Invoice has been issued",
    color: "green",
    desc: "Lorem ipsum dolor sit amet adipiscing elit",
    date: Date.now() - 11 * 1000 * 60 * 60,
  },
  {
    title: "Bill paid",
    color: "red",
    desc: "Lorem ipsum dolor sit amet adipiscing elit",
    date: Date.now() - 11 * 1000 * 60 * 60,
  },
  {
    title: "Bill Due",
    color: "green",
    desc: "Lorem ipsum dolor sit amet adipiscing elit",
    date: Date.now() - 11 * 1000 * 60 * 60,
  },
  {
    title: "Bill paid",
    color: "red",
    desc: "Lorem ipsum dolor sit amet adipiscing elit",
    date: Date.now() - 11 * 1000 * 60 * 60,
  },
  {
    title: "Bill Due",
    color: "green",
    desc: "Lorem ipsum dolor sit amet adipiscing elit",
    date: Date.now() - 11 * 1000 * 60 * 60,
  },
];

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
        <div className="my-5 flex gap-5 flex-wrap">
          <div className="earnings flex-1 bg-white p-5 rounded-lg min-w-[250px]">
            <h2 className="pb-3 font-semibold text-xl">
              Earnings <span className="text-xs font-light">in thousand</span>
            </h2>
            <PieChart
              data={[
                { label: "Radiology", value: 72 },
                { label: "Emergency", value: 60 },
                { label: "Laboratory", value: 49 },
                { label: "Inpatient", value: 55 },
                { label: "Cath Lab", value: 83 },
              ]}
            />
          </div>
          <div className="notification flex-2 bg-white p-5 rounded-lg min-w-[250px]">
            <div className="heading flex justify-between items-center pb-3">
              <h2 className="font-semibold text-xl">Notifications</h2>
              <Link
                to={"/notifications"}
                className="font-semibold text-deepblue hover:underline"
              >
                View All
              </Link>
            </div>
            <ul className="h-[250px] overflow-y-scroll">
              {notificaionsData.map((notification) => {
                return (
                  <Link
                    to={notification.link}
                    className="flex py-2 my-3 border-b-1 border-coolgray duration-300 hover:bg-coolgray cursor-pointer rounded"
                  >
                    <div className="left w-[50px] mx-4">
                      <img src={notification.person.img} alt="" />
                    </div>
                    <div className="right flex-1">
                      <p className="leading-5">
                        <span className="font-bold">
                          {notification.person.name}
                        </span>{" "}
                        {notification.data}
                      </p>
                      <span className="block text-end text-xs">
                        {timeago.format(notification.date)}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="recent-activity flex-2 bg-white p-5 rounded-lg min-w-[250px]">
            <div className="heading flex justify-between items-center pb-3">
              <h2 className="font-semibold text-xl">Recent Activity</h2>
              <Link
                to={"/recentactivity"}
                className="font-semibold text-deepblue hover:underline"
              >
                View All
              </Link>
            </div>
            <ul className="h-[250px] overflow-y-scroll">
              {recentActivityData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="mx-3 px-3 pb-5 relative border-l-2 border-coolgray"
                  >
                    <div
                      className={`w-[20px] h-[20px] rounded-full border-3 absolute top-0 left-0 translate-x-[-50%] bg-white ${
                        item.color == "red"
                          ? "border-orange-500"
                          : "border-green-500"
                      }`}
                    ></div>
                    <div className="ps-2">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.desc}</p>
                      <span className="block text-xs text-end">
                        {timeago.format(item.date)}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
