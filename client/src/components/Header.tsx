import { useState } from "react";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

// Components
import SearchSlide from "./SearchSlide";
import MenuSlide from "./MenuSlide";
import MonthPicker from "./MonthPicker";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="flex justify-between mb-[50px]">
      <div className="left pe-5 ">
        {/* Used in Header in Desktop Screen */}
        <div className="md:block hidden greeting">
          {/* Name of User is Signed  */}
          <h2 className="text-lg lg:text-3xl font-semibold py-1">
            Hello Yousef 👋
          </h2>
          {/* Name of Hospital  */}
          <span className="text-sm lg:text-md font-light tracking-wider">
            Royal Hospital Hurghada
          </span>
        </div>
      </div>
      <div className="right flex-1 items-center flex justify-between md:justify-end sm:pe-2 lg:pe-5">
        {/* Menu Icon */}
        <div
          className="menuicon cursor-pointer sm:hidden"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <MenuOpenIcon fontSize="large" />
        </div>
        <div className="search mx-2 lg:mr-[125px]">
          {/* Search Icon For DESKTOP */}
          <form className="hidden flex-1 relative w-[50px] h-[50px] bg-white shadow rounded-[25px] lg:flex justify-center items-center overflow-hidden cursor-pointer hover:w-[250px] duration-700 hover:translate-x-[100px] border">
            <button
              type="submit"
              className="w-[50px] absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer"
            >
              <SearchIcon />
            </button>
            <input
              type="text"
              className="w-[250px] h-[50px] outline-0 indent-5"
              placeholder="Search"
            />
          </form>
          {/* Search Icon For MOBILE */}
          <form className="lg:hidden flex-1 relative w-[70px] sm:w-[150px] h-[50px] bg-white shadow rounded-[25px] flex justify-center items-center overflow-hidden cursor-pointer border">
            <button
              className="w-full cursor-pointer"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setIsSearchOpen(true);
              }}
            >
              <SearchIcon />
            </button>
            <SearchSlide isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
          </form>
        </div>
        <div className="flex gap-3 lg:gap-8 justify-center items-center">
          <div className="cursor-pointer">
            <NotificationsIcon fontSize="large" />
          </div>
          <div className="usericon w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer">
            <img
              src="/assets/userimg.png"
              alt="User Photo"
              className="w-full h-full"
            />
          </div>
          {/* <div className="h-[50px] px-2 lg:px-3 shadow-lg flex justify-center items-center cursor-pointer text-sm lg:text-lg">
            {monthsWords[currentMonth]} {currentYear} 
          </div> */}
          <MonthPicker />
        </div>
      </div>
      <MenuSlide isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
