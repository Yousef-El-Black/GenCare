import { Link } from "react-router";

// Icons
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EventIcon from "@mui/icons-material/Event";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import CloseIcon from "@mui/icons-material/Close";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";

const MenuSlide = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="sm:hidden">
      <div
        className={`overlay fixed top-0 left-0 w-screen h-screen duration-700 cursor-pointer ${
          isOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
        onClick={() => {
          setIsOpen(false);
          console.log(isOpen);
        }}
      ></div>
      <div
        className={`menu fixed top-0 left-0 w-[80vw] max-w-[250px] bg-white h-screen duration-700 cursor-pointer ${
          isOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div
          className="close flex justify-center py-5 hover:bg-darkcharcoal hover:text-white duration-700"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon fontSize="large" />
        </div>

        <ul className="w-full py-5 flex flex-col font-headings text-deepblue text-xl">
          {/* FIXME: If Home Page put Underline Effect */}
          <li>
            <Link
              className="flex justify-start items-center gap-4  px-3 py-6  hover:bg-darkcharcoal hover:text-white duration-400"
              to={"/"}
            >
              <HomeFilledIcon fontSize="large" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start items-center gap-4  px-3 py-6  hover:bg-darkcharcoal hover:text-white duration-400"
              to={"/statistics"}
            >
              <AssessmentIcon fontSize="large" />
              <span>Statistics</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start items-center gap-4  px-3 py-6  hover:bg-darkcharcoal hover:text-white duration-400"
              to={"/calender"}
            >
              <EventIcon fontSize="large" />
              <span>Calender</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start items-center gap-4  px-3 py-6  hover:bg-darkcharcoal hover:text-white duration-400"
              to={"/staff"}
            >
              <PeopleAltIcon fontSize="large" />
              <span>Staff</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start items-center gap-4  px-3 py-6  hover:bg-darkcharcoal hover:text-white duration-400"
              to={"/inventory"}
            >
              <InventoryIcon fontSize="large" />
              <span>Inventory</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start items-center gap-4  px-3 py-6  hover:bg-darkcharcoal hover:text-white duration-400"
              to={"/settings"}
            >
              <DisplaySettingsIcon fontSize="large" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-start items-center gap-4  px-3 py-6  hover:bg-darkcharcoal hover:text-white duration-400"
              to={"/logout"}
            >
              <LogoutIcon fontSize="large" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuSlide;
