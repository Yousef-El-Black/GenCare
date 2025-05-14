import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Icons
import PaidIcon from "@mui/icons-material/Paid";
import PeopleIcon from "@mui/icons-material/People";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import StarIcon from "@mui/icons-material/Star";
import PieChart from "../components/PieChart";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const Homepage = () => {
  const doctorsData: doctorDataType = [
    {
      img: "/assets/userimg.png",
      name: "Dr. John Doe",
      role: "Cardiologist",
      rate: 4,
      id: "doctorid",
    },
    {
      img: "/assets/userimg.png",
      name: "Dr. Jane Doe",
      role: "Orthopedic Surgeon",
      rate: 5,
      id: "doctorid",
    },
    {
      img: "/assets/userimg.png",
      name: "Dr. Mary Smith",
      role: "Pediatrician",
      rate: 4,
      id: "doctorid",
    },
  ];

  type doctorDataType = {
    img: string;
    name: string;
    role: string;
    rate: number;
    id: string;
  }[];

  const data = {
    // FIXME: the days in the month
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    datasets: [
      {
        label: "Visitors",
        // FIXME: Bring Data from DB
        data: Array.from({ length: 31 }, () =>
          Math.floor(Math.random() * (199 - 7 + 1) + 7)
        ),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labTestsData = [
    {
      label: "Complete blood count (CBC)",
      value: 26,
    },
    {
      label: "Basic metabolic panel (BMP)",
      value: 34,
    },
    {
      label: "Blood enzyme tests",
      value: 22,
    },
    {
      label: "Blood tests to check for heart disease",
      value: 15,
    },
    {
      label: "Blood clotting tests",
      value: 13,
    },
  ];

  const inventoryData = [
    {
      label: "Medical Supplies",
      value: 72.72,
    },
    {
      label: "Medications & Drugs",
      value: 16.38,
    },
    {
      label: "Medical Equipment",
      value: 3.83,
    },
    {
      label: "Personal Protective Equipment (PPE)",
      value: 2.42,
    },
    {
      label: "Housekeeping & Janitorial Supplies",
      value: 2.65,
    },
    {
      label: "Laboratory Supplies",
      value: 2,
    },
  ];

  const surgicalOperationsData = [
    {
      label: "Cardiac Surgery",
      value: 20,
    },
    {
      label: "Orthopedic Surgery",
      value: 15,
    },
    {
      label: "General Surgery",
      value: 25,
    },
    {
      label: "Neurosurgery",
      value: 10,
    },
    {
      label: "Plastic Surgery",
      value: 8,
    },
    {
      label: "Urology Surgery",
      value: 7,
    },
    {
      label: "Gastrointestinal Surgery",
      value: 2,
    },
    {
      label: "Obstetrics and Gynecology Surgery",
      value: 3,
    },
  ];

  return (
    <div>
      <div className="cards flex flex-wrap justify-center items-center gap-5 mt-10 min-h-[175px] me-3">
        <div className="card min-w-[200px] min-h-[150px] flex-1 bg-[#0066FF] h-full rounded-xl p-3 flex flex-col justify-around text-white">
          <div className="icon">
            <PaidIcon fontSize="large" />
          </div>
          <h2 className="font-light">Hospital Earnings</h2>
          {/* FIXME: Add a function to get the earnings */}
          <p className="text-2xl font-headings">$100,000</p>
        </div>
        <div className="card min-w-[200px] min-h-[150px] flex-1 bg-[#FF0000] h-full rounded-xl p-3 flex flex-col justify-around text-white ">
          <div className="icon">
            <PeopleIcon fontSize="large" />
          </div>
          <h2 className="font-light">Total Patients</h2>
          {/* FIXME: Add a function to get the Total Patients */}
          <p className="text-2xl font-headings">500</p>
        </div>
        <div className="card min-w-[200px] min-h-[150px] flex-1 bg-[#00CC00] h-full rounded-xl p-3 flex flex-col justify-around text-white">
          <div className="icon">
            <MonitorHeartIcon fontSize="large" />
          </div>
          <h2 className="font-light">Operations</h2>
          {/* FIXME: Add a function to get the Operations */}
          <p className="text-2xl font-headings">50</p>
        </div>
        <div className="card min-w-[200px] min-h-[150px] flex-1 bg-[#FFD810] h-full rounded-xl p-3 flex flex-col justify-around text-white  ">
          <div className="icon">
            <CalendarMonthIcon fontSize="large" />
          </div>
          <h2 className="font-light">Appointments</h2>
          {/* FIXME: Add a function to Appoinments */}
          <p className="text-2xl font-headings">200</p>
        </div>
      </div>
      {/* Second Slide */}
      <div className="secondSlide flex gap-5 py-5 flex-col lg:flex-row flex-wrap max-w-screen">
        <div className="doctors lg:flex-1 bg-darkcharcoal rounded-xl p-5 text-white h-fit">
          <div className="heading flex justify-between items-center pb-3">
            <h2 className="text-2xl">Best Doctors's</h2>
            <Link
              to={"/doctors"}
              className="text-softteal hover:border-b flex justify-center items-center gap-1"
            >
              View All <ArrowOutwardIcon fontSize="small" />
            </Link>
          </div>
          <ul className="flex gap-3">
            {doctorsData.map((doctor, index: number) => {
              return (
                <li key={index}>
                  <div className="image w-full">
                    <img
                      src={doctor.img}
                      alt={`${doctor.name} Image`}
                      className="aspect-[1/1] w-full"
                    />
                  </div>
                  <div className="text-center flex flex-col gap-4">
                    <div className="h-[70px]">
                      <h3 className="text-md sm:text-lg mt-1">{doctor.name}</h3>
                      <span className="text-sm font-extralight">
                        {doctor.role}
                      </span>
                    </div>
                    <span>
                      {Array.from({ length: doctor.rate }, (_, i) => (
                        <StarIcon key={i} fontSize="small" />
                      ))}
                    </span>
                    <Link
                      to={`doctor/${doctor.id}`}
                      className="bg-softteal p-2 rounded-md text-center text-darkcharcoal hover:opacity-80 transition-all duration-200 flex-1"
                    >
                      View Doctor
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-1 bg-darkcharcoal rounded-xl p-5 text-white">
          <div className="heading flex justify-between items-center pb-3">
            <h2 className="text-2xl">Visitors</h2>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Line data={data} options={options as unknown as never} />
          </div>
        </div>
      </div>
      <div className="thirdSlide flex justify-center gap-5 py-3 flex-col md:flex-row flex-wrap">
        <div className="inventory p-4 rounded-xl bg-lightskyblue text-darkcharcoal flex-1">
          <h2 className="text-2xl">Inventory</h2>
          <PieChart data={inventoryData} />
        </div>
        <div className="inventory p-4 rounded-xl bg-coolgray text-darkcharcoal flex-1">
          <h2 className="text-2xl">Lab Test</h2>
          <PieChart data={labTestsData} />
        </div>
        <div className="inventory p-4 rounded-xl bg-[#fffddf] text-darkcharcoal flex-1">
          <h2 className="text-2xl">Surgical Operations</h2>
          <PieChart data={surgicalOperationsData} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
