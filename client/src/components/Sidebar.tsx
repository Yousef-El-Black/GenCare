import { Link } from "react-router";

// Icons
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EventIcon from "@mui/icons-material/Event";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";

const Sidebar = () => {
  return (
    <aside className="flex justify-center items-center h-screen fixed w-[200px] top-0 left-0">
      <div className="bg-darkcharcoal flex items-center flex-col w-[150px] h-[95%] rounded-lg box-content">
        <div className="logo bg-linear-to-b to-lightskyblue from-softteal w-[75px] h-[75px] rounded-xl flex justify-center items-center my-8">
          <img src="/assets/logo.png" alt="Logo" className="w-2/3 h-2/3" />
        </div>
        <ul className="flex flex-col justify-center items-center w-full">
          <li className="py-5 w-full flex justify-center items-center cursor-pointer text-white duration-300 hover:text-darkcharcoal hover:bg-coolgray hover:opacity-70 menuitem-active">
            <Link to={"/"}>
              <HomeFilledIcon fontSize="large" />
            </Link>
          </li>
          <li className="py-5 w-full flex justify-center items-center cursor-pointer text-white duration-300 hover:text-darkcharcoal hover:bg-coolgray hover:opacity-70">
            <Link to={"/statistics"}>
              <AssessmentIcon fontSize="large" />
            </Link>
          </li>
          <li className="py-5 w-full flex justify-center items-center cursor-pointer text-white duration-300 hover:text-darkcharcoal hover:bg-coolgray hover:opacity-70">
            <Link to={"/calender"}>
              <EventIcon fontSize="large" />
            </Link>
          </li>
          <li className="py-5 w-full flex justify-center items-center cursor-pointer text-white duration-300 hover:text-darkcharcoal hover:bg-coolgray hover:opacity-70">
            <Link to={"/staff"}>
              <PeopleAltIcon fontSize="large" />
            </Link>
          </li>
          <li className="py-5 w-full flex justify-center items-center cursor-pointer text-white duration-300 hover:text-darkcharcoal hover:bg-coolgray hover:opacity-70">
            <Link to={"/settings"}>
              <DisplaySettingsIcon fontSize="large" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
