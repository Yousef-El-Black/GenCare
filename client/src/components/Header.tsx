// Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const date = new Date();

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const monthsWords = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <header className="flex justify-between mb-[50px]">
      <div className="left pe-5 ">
        <div className="greeting">
          {/* Name of User is Signed  */}
          <h2 className="text-3xl font-semibold py-1">Hello Yousef 👋</h2>
          {/* Name of Hospital  */}
          <span className="font-light tracking-wider">
            Royal Hospital Hurghada
          </span>
        </div>
      </div>
      <div className="right flex-1 items-center flex justify-end pe-5">
        <div className="search mr-[125px]">
          <form className="flex-1 relative w-[50px] h-[50px] bg-white shadow rounded-[25px] flex justify-center items-center overflow-hidden cursor-pointer hover:w-[250px] duration-700 hover:translate-x-[100px] border">
            <button
              type="submit"
              className="w-[50px] absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer"
            >
              <SearchIcon />
            </button>
            <input
              type="text"
              className="w-[250px] h-[50px] cursor-pointer outline-0 indent-5"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <div className="cursor-pointer">
            <NotificationsIcon fontSize="large" />
          </div>
          <div className="usericon w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer">
            <img src="/assets/userimg.png" alt="User Photo" />
          </div>
          <div className="h-[50px] px-3 shadow shadow-lg flex justify-center items-center cursor-pointer">
            {monthsWords[currentMonth]} {currentYear} <ExpandMoreIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
