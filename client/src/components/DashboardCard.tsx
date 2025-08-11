import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const DashboardCard = ({
  title,
  num,
  percent,
  isIncreased,
  img,
}: {
  title: string;
  num: number;
  percent: number;
  isIncreased: boolean;
  img: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-3 flex justify-between items-center flex-1 min-w-[250px] min-h-[150px]">
      <div className="text flex flex-col gap-2">
        <div className="title text-lg text-darkcharcoal">{title}</div>
        <div className="num font-extrabold text-2xl text-deepblue md:px-2">
          {num}
        </div>
        <div className="percent flex gap-2 text-xs items-center">
          <div
            className={`icon rounded-full flex justify-center items-center text-white ${
              isIncreased ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isIncreased ? (
              <NorthEastIcon fontSize="small" className="scale-75" />
            ) : (
              <SouthEastIcon fontSize="small" className="scale-75" />
            )}
          </div>
          <div
            className={`number ${
              isIncreased ? "text-green-500" : "text-red-500"
            }`}
          >
            {isIncreased ? "+" : "-"}
            {percent}%
          </div>
          <span>{isIncreased ? "Increased" : "Decreased"}</span>
        </div>
      </div>
      <div className="img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default DashboardCard;
