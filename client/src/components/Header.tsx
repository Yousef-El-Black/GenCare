import { useState } from "react";

// Icons
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header = ({
  toggleSidebar,
}: {
  toggleSidebar: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full px-5 py-4">
      <div className="bg-white rounded-lg text-body h-[70px] flex items-center px-5 justify-between">
        <div className="left flex gap-5">
          <div
            className="icon cursor-pointer text-primary"
            onClick={toggleSidebar}
          >
            <MenuOpenIcon fontSize="large" />
          </div>
          <form className="search bg-bgprimary rounded-lg w-[250px]">
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
            className="icon cursor-pointer text-primary"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? (
              <FullscreenExitIcon fontSize="large" />
            ) : (
              <FullscreenIcon fontSize="large" />
            )}
          </div>
          <div className="notification text-secondary cursor-pointer">
            <NotificationsIcon fontSize="large" />
          </div>
          <div className="user flex gap-2">
            <div className="img-frame overflow-hidden h-[40px] rounded border-1">
              <img
                src="/assets/userimg.png"
                alt="User IMG"
                className="h-[40px]"
              />
            </div>
            <div className="details text-xs flex flex-col justify-between">
              <p className="name font-bold tracking-wide text-sm">Hassan</p>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
