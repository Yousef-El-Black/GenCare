// Icons
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EventIcon from "@mui/icons-material/Event";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import SideBarItem from "./SideBarItem";

const Sidebar = () => {
  return (
    <aside className="hidden sm:flex justify-center items-center h-screen fixed w-[200px] top-0 left-0">
      <div className="bg-darkcharcoal flex items-center flex-col w-[150px] h-[95%] rounded-lg box-content">
        <div className="logo bg-linear-to-b to-lightskyblue from-softteal w-[75px] h-[75px] rounded-xl flex justify-center items-center my-8">
          <img src="/assets/logo.png" alt="Logo" className="w-2/3 h-2/3" />
        </div>
        <ul className="flex flex-col justify-center items-center w-full">
          <SideBarItem
            label={"Homepage"}
            icon={<HomeFilledIcon fontSize="large" />}
            link={"/"}
          />
          <SideBarItem
            label={"Statistics"}
            icon={<AssessmentIcon fontSize="large" />}
            link={"/statistics"}
          />
          <SideBarItem
            label={"Calendar"}
            icon={<EventIcon fontSize="large" />}
            link={"/calendar"}
          />
          <SideBarItem
            label={"Staff"}
            icon={<PeopleAltIcon fontSize="large" />}
            link={"/staff"}
          />
          <SideBarItem
            label={"Inventory"}
            icon={<InventoryIcon fontSize="large" />}
            link={"/inventory"}
          />
          <SideBarItem
            label={"Settings"}
            icon={<DisplaySettingsIcon fontSize="large" />}
            link={"/settings"}
          />
          <SideBarItem
            label={"Logout"}
            icon={<LogoutIcon fontSize="large" />}
            link={"/logout"}
          />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
