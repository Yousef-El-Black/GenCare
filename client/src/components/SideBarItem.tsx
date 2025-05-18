import { useRef } from "react";
import { Link } from "react-router-dom";
// Icons

const SideBarItem = ({
  label,
  icon,
  link,
}: {
  label: string;
  icon: React.ReactNode;
  link: string;
}) => {
  const iconRef = useRef<HTMLSpanElement>(null);
  const itemLabelRef = useRef<HTMLSpanElement>(null);
  const handleMouseEnter = () => {
    if (iconRef.current) {
      iconRef.current.classList.add("text-transparent");
      itemLabelRef.current?.classList.add("text-white");
      iconRef.current.classList.remove("text-white");
      itemLabelRef.current?.classList.remove("text-transparent");
    }
  };
  const handleMouseLeave = () => {
    if (iconRef.current) {
      iconRef.current.classList.remove("text-transparent");
      iconRef.current.classList.add("text-white");
      itemLabelRef.current?.classList.add("text-transparent");
      itemLabelRef.current?.classList.remove("text-white");
    }
  };

  return (
    <li
      className="py-5 w-full flex justify-center items-center cursor-pointer text-white duration-700 hover:text-darkcharcoal hover:bg-[#ffffff1a]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={link} className="relative h-[25px] w-full">
        <span
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white duration-500 font-headings"
          ref={iconRef}
        >
          {icon}
        </span>
        <span
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-transparent duration-500 font-headings"
          ref={itemLabelRef}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};

export default SideBarItem;
