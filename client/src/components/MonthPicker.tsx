import { useState } from "react";
import { MonthPicker } from "react-lite-month-picker";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MonthPickerComponent() {
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

  const monthsShortWords = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [selectedMonthData, setSelectedMonthData] = useState<{
    month: number;
    year: number;
    monthName: string;
    monthShortName: string;
  }>({
    month: currentMonth,
    year: currentYear,
    monthName: monthsWords[currentMonth],
    monthShortName: monthsShortWords[currentMonth],
  });
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <>
      <div className="">
        <div
          className="h-[50px] px-2 lg:px-3 shadow-lg flex justify-center items-center cursor-pointer text-sm lg:text-lg relative"
          onClick={() => setIsPickerOpen(!isPickerOpen)}
        >
          {selectedMonthData.monthShortName} {selectedMonthData.year}
          <ExpandMoreIcon />
        </div>
        {isPickerOpen ? (
          <>
            <div>
              <div
                className="absolute top-0 right-0 cursor-pointer p-2 z-11"
                onClick={() => setIsPickerOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
            <MonthPicker
              className=" translate-x-[100px]"
              style={{ position: "relative !important" }}
              setIsOpen={setIsPickerOpen}
              selected={selectedMonthData}
              onChange={setSelectedMonthData}
            />
          </>
        ) : null}
      </div>
    </>
  );
}

export default MonthPickerComponent;
