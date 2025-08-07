import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Icons
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

const Header = ({
  toggleSidebar,
}: {
  toggleSidebar: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState("");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const HeaderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position on scroll
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={HeaderRef}
      className={`sticky top-0 left-0 w-full px-5 py-4 duration-200 ${
        scrollY > 100 ? "bg-white" : ""
      }`}
    >
      <div className="bg-white rounded-lg text-body h-[70px] flex items-center px-5 justify-between">
        <div className="left flex gap-5">
          <div
            className="icon cursor-pointer text-primary"
            onClick={toggleSidebar}
          >
            <MenuOpenIcon fontSize="large" />
          </div>
          {/* TODO: Logo & Name + Search of Mobile */}
          <form className="hidden md:block search bg-bgprimary rounded-lg w-[250px]">
            <div className="h-full flex items-center text-sm font-normal">
              <div className="icon w-[35px] h-[35px] flex justify-center items-center opacity-50 text-body cursor-pointer">
                <SearchIcon fontSize="medium" />
              </div>
              <input
                type="text"
                placeholder="Search Here ..."
                className="outline-0 border-0 flex-1"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <div
                className={`icon text-body px-2 cursor-pointer ${
                  searchVal ? "visible" : "invisible"
                }`}
                onClick={() => setSearchVal("")}
              >
                <CloseIcon fontSize="small" />
              </div>
            </div>
          </form>
        </div>
        <div className="right flex gap-4 items-center">
          <div
            className="hidden md:block icon cursor-pointer text-primary"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? (
              <FullscreenExitIcon fontSize="large" />
            ) : (
              <FullscreenIcon fontSize="large" />
            )}
          </div>
          <div className="hidden md:block notification text-secondary cursor-pointer">
            <NotificationsIcon fontSize="large" />
          </div>
          <div className="user flex gap-2">
            <div className="img-frame overflow-hidden h-[40px] rounded border-1">
              <img
                src="/assets/userimg.png"
                alt="User IMG"
                className="h-[40px] hidden md:block"
              />
              <img
                onClick={() => toggleProfileMenu()}
                src="/assets/userimg.png"
                alt="User IMG"
                className="h-[40px] md:hidden cursor-pointer"
              />
            </div>
            <div className="hidden md:flex details text-xs flex-col justify-between">
              <p className="name font-bold tracking-wide text-sm">Hassan</p>
              <span>Admin</span>
            </div>
            <div className="profile-menu h-full flex justify-center items-center">
              <ExpandMoreIcon
                fontSize="large"
                className={`!hidden md:!block cursor-pointer duration-300 !transition-transform ${
                  isProfileMenuOpen ? "rotate-[-180deg]" : ""
                }`}
                onClick={() => toggleProfileMenu()}
              />
              <div
                className={`profile-menu-content shadow shadow-black rounded-lg absolute top-[100px] bg-white right-[50px] w-[200px] z-999 overflow-hidden ${
                  isProfileMenuOpen ? "block" : "hidden"
                }`}
                onClick={() => toggleProfileMenu()}
              >
                {/* FIXME: Here you will add name Variable */}
                <div className="greeting py-3 px-2 flex flex-col gap-[5px] bg-[#eee] text-sm">
                  <span>Hello, Name</span>
                  <span className="text-green-500">Available</span>
                </div>
                <ul className="buttons py-3">
                  <Link to={"/profile/id"}>
                    <li className="flex p-1 m-1 text-xs gap-2 items-center hover:bg-bgprimary duration-300">
                      <div className="icon bg-[#eee] rounded p-1 m-0">
                        <PersonIcon fontSize="large" />
                      </div>
                      <div className="text">
                        <h4 className="font-semibold">My Profile</h4>
                        <span>View Profile Details</span>
                      </div>
                    </li>
                  </Link>
                </ul>
                <div className="logout-btn flex justify-center mb-3">
                  <button className="bg-primary text-white rounded-full py-1 px-2">
                    Logout <LogoutIcon fontSize="large" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-10 h-screen w-screen top-0 left-0 ${
          isProfileMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => toggleProfileMenu()}
      ></div>
    </header>
  );
};

export default Header;
