//
import { Link } from "react-router-dom";
import { useState } from "react";

// Icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BadgeIcon from "@mui/icons-material/Badge";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import InventoryIcon from "@mui/icons-material/Inventory";
import EventNoteIcon from "@mui/icons-material/EventNote";
import HubIcon from "@mui/icons-material/Hub";
import HotelIcon from "@mui/icons-material/Hotel";
import PaidIcon from "@mui/icons-material/Paid";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({
  isSidebarOpen,
  closeSidebar,
}: {
  isSidebarOpen: boolean;
  closeSidebar: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const [isDoctorCollapsed, setIsDoctorCollapsed] = useState<boolean>(true);
  const [isPatientCollapsed, setIsPatientCollapsed] = useState<boolean>(true);
  const [isAssetsCollapsed, setIsAssetsCollapsed] = useState<boolean>(true);
  const [isAppointmentsCollapsed, setIsAppointmentsCollapsed] =
    useState<boolean>(true);
  const [isBillingCollapsed, setIsBillingCollapsed] = useState<boolean>(true);
  const [isAuthCollapsed, setIsAuthCollapsed] = useState<boolean>(true);

  const toggleDoctorCollapsed = () => {
    setIsDoctorCollapsed(!isDoctorCollapsed);
    setIsPatientCollapsed(true);
    setIsAssetsCollapsed(true);
    setIsAppointmentsCollapsed(true);
    setIsBillingCollapsed(true);
    setIsAuthCollapsed(true);
  };
  const togglePatientCollapsed = () => {
    setIsDoctorCollapsed(true);
    setIsPatientCollapsed(!isPatientCollapsed);
    setIsAssetsCollapsed(true);
    setIsAppointmentsCollapsed(true);
    setIsBillingCollapsed(true);
    setIsAuthCollapsed(true);
  };
  const toggleAssetsCollapsed = () => {
    setIsDoctorCollapsed(true);
    setIsPatientCollapsed(true);
    setIsAssetsCollapsed(!isAssetsCollapsed);
    setIsAppointmentsCollapsed(true);
    setIsBillingCollapsed(true);
    setIsAuthCollapsed(true);
  };

  const toggleFourCollapsed = () => {
    setIsDoctorCollapsed(true);
    setIsPatientCollapsed(true);
    setIsAssetsCollapsed(true);
    setIsAppointmentsCollapsed(!isAppointmentsCollapsed);
    setIsBillingCollapsed(true);
    setIsAuthCollapsed(true);
  };

  const toggleBillingCollapsed = () => {
    setIsDoctorCollapsed(true);
    setIsPatientCollapsed(true);
    setIsAssetsCollapsed(true);
    setIsAppointmentsCollapsed(true);
    setIsBillingCollapsed(!isBillingCollapsed);
    setIsAuthCollapsed(true);
  };

  const toggleAuthCollapsed = () => {
    setIsDoctorCollapsed(true);
    setIsPatientCollapsed(true);
    setIsAssetsCollapsed(true);
    setIsAppointmentsCollapsed(true);
    setIsBillingCollapsed(true);
    setIsAuthCollapsed(!isAuthCollapsed);
  };

  return (
    <aside
      className={`w-[270px] bg-body h-screen fixed duration-500 ${
        isSidebarOpen ? "" : "translate-x-[-271px]"
      }`}
    >
      <div className="head bg-black text-white flex items-center h-[60px] px-2">
        <div className="logo h-[50px]">
          <img src="/assets/logowhite.png" alt="" className="h-full" />
        </div>
        <strong className="font-bold tracking-wide text-xl ps-2">
          <Link className="text-softteal" to={"/"}>
            GenCare
          </Link>{" "}
          ERP
        </strong>
        <div
          onClick={closeSidebar}
          className="flex-1 flex justify-end cursor-pointer"
        >
          <CloseIcon fontSize="medium" />
        </div>
      </div>
      <div className="h-[calc(100vh-60px)] overflow-y-scroll custom-scrollbar">
        <ul className="text-white">
          <Link to={"/"} className="px-3 py-2 flex items-center">
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <SpaceDashboardIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Dashboard</span>
            </li>
          </Link>
          <button
            className="px-3 py-2 flex items-center justify-between w-full cursor-pointer"
            onClick={toggleDoctorCollapsed}
          >
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <PersonIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Doctor</span>
            </li>
            <span>
              <ExpandMoreIcon
                className={`text-white block !transition-transform !duration-300 ease-in-out ${
                  isDoctorCollapsed ? "rotate-0" : "rotate-180"
                }`}
                fontSize="medium"
              />
            </span>
          </button>
          <div
            className={`flex flex-col px-5 items-start gap-2 w-full rounded-lg ${
              isDoctorCollapsed
                ? "!max-h-0 !py-0 overflow-hidden !transition-all !duration-500"
                : "!max-h-[75px] !py-1"
            }`}
          >
            <Link
              to={"/doctor/list"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Doctor's List</span>
            </Link>
            <Link
              to={"/doctor/add"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Add Doctor</span>
            </Link>
          </div>
          <button
            className="px-3 py-2 flex items-center justify-between w-full cursor-pointer"
            onClick={togglePatientCollapsed}
          >
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <GroupsIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Patient</span>
            </li>
            <span>
              <ExpandMoreIcon
                className={`text-white block !transition-transform !duration-300 ease-in-out ${
                  isPatientCollapsed ? "rotate-0" : "rotate-180"
                }`}
                fontSize="medium"
              />
            </span>
          </button>
          <div
            className={`flex flex-col items-start px-5 gap-2 w-full rounded-lg ${
              isPatientCollapsed
                ? "max-h-0 p-0 overflow-hidden transition-all duration-500"
                : "max-h-[75px] py-1"
            }`}
          >
            <Link
              to={"/patient/list"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Patient's List</span>
            </Link>
            <Link
              to={"/patient/add"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Add Patient</span>
            </Link>
          </div>
          <Link to={"/staff"} className="px-3 py-2 flex items-center">
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <BadgeIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Staff List</span>
            </li>
          </Link>
          <Link to={"/reports"} className="px-3 py-2 flex items-center">
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <InsertDriveFileIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Reports</span>
            </li>
          </Link>
          <button
            className="px-3 py-2 flex items-center justify-between w-full cursor-pointer"
            onClick={toggleAssetsCollapsed}
          >
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <InventoryIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Assets</span>
            </li>
            <span>
              <ExpandMoreIcon
                className={`text-white block !transition-transform !duration-300 ease-in-out ${
                  isAssetsCollapsed ? "rotate-0" : "rotate-180"
                }`}
                fontSize="medium"
              />
            </span>
          </button>
          <div
            className={`flex flex-col px-5 items-start gap-2 w-full rounded-lg ${
              isAssetsCollapsed
                ? "!max-h-0 !py-0 overflow-hidden !transition-all !duration-500"
                : "!max-h-[100px] !py-1"
            }`}
          >
            <Link
              to={"/assets/list"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Asset's List</span>
            </Link>
            <Link
              to={"/assets/add"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Add Assets</span>
            </Link>
            <Link
              to={"/assets/history"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Asset's History</span>
            </Link>
          </div>
          <button
            className="px-3 py-2 flex items-center justify-between w-full cursor-pointer"
            onClick={toggleFourCollapsed}
          >
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <EventNoteIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Appointments</span>
            </li>
            <span>
              <ExpandMoreIcon
                className={`text-white block !transition-transform !duration-300 ease-in-out ${
                  isAppointmentsCollapsed ? "rotate-0" : "rotate-180"
                }`}
                fontSize="medium"
              />
            </span>
          </button>
          <div
            className={`flex flex-col px-5 items-start gap-2 w-full rounded-lg ${
              isAppointmentsCollapsed
                ? "!max-h-0 !py-0 overflow-hidden !transition-all !duration-500"
                : "!max-h-[75px] !py-1"
            }`}
          >
            <Link
              to={"/appointments/list"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Appointment List</span>
            </Link>
            <Link
              to={"/appointments/add"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Add Appointment</span>
            </Link>
          </div>
          <Link to={"/departments"} className="px-3 py-2 flex items-center">
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <HubIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Departments</span>
            </li>
          </Link>
          <Link to={"/rooms"} className="px-3 py-2 flex items-center">
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <HotelIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Rooms / Beds</span>
            </li>
          </Link>
          <button
            className="px-3 py-2 flex items-center justify-between w-full cursor-pointer"
            onClick={toggleBillingCollapsed}
          >
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <PaidIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Billing</span>
            </li>
            <span>
              <ExpandMoreIcon
                className={`text-white block !transition-transform !duration-300 ease-in-out ${
                  isBillingCollapsed ? "rotate-0" : "rotate-180"
                }`}
                fontSize="medium"
              />
            </span>
          </button>
          <div
            className={`flex flex-col px-5 items-start gap-2 w-full rounded-lg ${
              isBillingCollapsed
                ? "!max-h-0 !py-0 overflow-hidden !transition-all !duration-500"
                : "!max-h-[75px] !py-1"
            }`}
          >
            <Link
              to={"/payment/list"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Payment List</span>
            </Link>
            <Link
              to={"/payment/invoice"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Payment Invoice</span>
            </Link>
          </div>
          <button
            className="px-3 py-2 flex items-center justify-between w-full cursor-pointer"
            onClick={toggleAuthCollapsed}
          >
            <li className="flex items-center gap-2 px-3 py-2 w-full rounded-lg">
              <FingerprintIcon className="text-white" fontSize="medium" />
              <span className="text-lg">Authentication</span>
            </li>
            <span>
              <ExpandMoreIcon
                className={`text-white block !transition-transform !duration-300 ease-in-out ${
                  isAuthCollapsed ? "rotate-0" : "rotate-180"
                }`}
                fontSize="medium"
              />
            </span>
          </button>
          <div
            className={`flex flex-col px-5 items-start gap-2 w-full rounded-lg mb-5 ${
              isAuthCollapsed
                ? "!max-h-0 !py-0 overflow-hidden !transition-all !duration-500"
                : "!max-h-[100px] !py-1"
            }`}
          >
            <Link
              to={"/auth/register"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Registeration</span>
            </Link>
            <Link
              to={"/auth/login"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Login</span>
            </Link>
            <Link
              to={"/auth/forgotpassword"}
              className="text-white px-5 py-1 flex items-center"
            >
              <span className="text-sm font-light">Forgot Password</span>
            </Link>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
