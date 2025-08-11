import { useState } from "react";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { Link } from "react-router";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const operations = [
  {
    patientName: "1Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "1Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "1Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "1Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "1Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "1Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "2Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "3Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "4Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "5Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "6Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
  {
    patientName: "7Jon Snow",
    gender: "male",
    doctorTeam: "Adam",
    dateOfOperation: "16/6/2020",
    report: "",
    diseaseses: "Skin Care",
  },
];

const DataTable = () => {
  const [operationsEntries, setOperationsEntries] = useState<number>(4);
  const [operationsPage, setOperationsPage] = useState<number>(1);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [searchVal, setSearchVal] = useState<string>("");
  const [sortBy, setSortBy] = useState("");

  const changeOperationPage = (i: number) => {
    setOperationsPage(operationsPage + i);
  };

  const toggleRow = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div>
      <div className="heading flex flex-col md:flex-row justify-center md:justify-between items-center gap-2">
        <div>
          Show{" "}
          <input
            type="number"
            className="text-center text-lg no-spinner outline-none border-2 rounded mx-2 w-[50px]"
            value={operationsEntries}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOperationsEntries(e.target.value as unknown as number)
            }
          />{" "}
          Entries
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Operation"
            className="outline-none border-coolgray border-1 px-2 py-1 rounded text-lg indent-2"
            onChange={(e) => setSearchVal(e.target.value)}
            value={searchVal}
          />
        </div>
      </div>
      <table className="w-full flex flex-col border-collapse my-3">
        <thead>
          <tr className="border-b-2 border-coolgray flex items-center py-2">
            <th className="flex justify-between gap-2 flex-1">
              <span>Patient Name</span>
              <div className="flex justify-center items-center text-coolgray">
                <SouthIcon
                  fontSize="small"
                  className={`cursor-pointer ${
                    sortBy === "namerev" ? "text-black" : ""
                  }`}
                  onClick={() => setSortBy("namerev")}
                />
                <NorthIcon
                  fontSize="small"
                  className={`cursor-pointer translate-x-[-5px] ${
                    sortBy === "name" ? "text-black" : ""
                  }`}
                  onClick={() => setSortBy("name")}
                />
              </div>
            </th>
            <th className="flex justify-between gap-2 flex-1">
              <span>Doctor Team</span>
              <div className="flex justify-center items-center text-coolgray">
                <SouthIcon
                  fontSize="small"
                  className={`cursor-pointer ${
                    sortBy === "doctorrev" ? "text-black" : ""
                  }`}
                  onClick={() => setSortBy("doctorrev")}
                />
                <NorthIcon
                  fontSize="small"
                  className={`cursor-pointer translate-x-[-5px] ${
                    sortBy === "doctor" ? "text-black" : ""
                  }`}
                  onClick={() => setSortBy("doctor")}
                />
              </div>
            </th>
            <th className="hidden md:flex justify-between gap-2 flex-1">
              <span>Date Of Operation</span>
              <div className="flex justify-center items-center text-coolgray">
                <SouthIcon
                  fontSize="small"
                  className={`cursor-pointer ${
                    sortBy === "daterev" ? "text-black" : ""
                  }`}
                  onClick={() => setSortBy("daterev")}
                />
                <NorthIcon
                  fontSize="small"
                  className={`cursor-pointer translate-x-[-5px] ${
                    sortBy === "date" ? "text-black" : ""
                  }`}
                  onClick={() => setSortBy("date")}
                />
              </div>
            </th>
            <th className="hidden md:flex justify-between gap-2 flex-1">
              <span>Report</span>
            </th>
            <th className="hidden md:flex justify-between gap-2 flex-1">
              <span>Diseaseses</span>
            </th>
          </tr>
        </thead>
        <tbody className="max-h-[240px] overflow-y-scroll">
          {operations
            .filter((operation) => {
              const query = searchVal.toLowerCase();
              return (
                operation.patientName.toLowerCase().includes(query) ||
                operation.doctorTeam.toLowerCase().includes(query) ||
                operation.diseaseses.toLowerCase().includes(query) ||
                operation.dateOfOperation.toLowerCase().includes(query)
              );
            })
            .sort((a, b) => {
              switch (sortBy) {
                case "name":
                  return a.patientName.localeCompare(b.patientName);
                case "namerev":
                  return b.patientName.localeCompare(a.patientName);
                case "doctor":
                  return a.doctorTeam.localeCompare(b.doctorTeam);
                case "doctorrev":
                  return b.doctorTeam.localeCompare(a.doctorTeam);
                case "date":
                  return (
                    new Date(b.dateOfOperation).getTime() -
                    new Date(a.dateOfOperation).getTime()
                  ); // Newest first
                case "daterev":
                  return (
                    new Date(a.dateOfOperation).getTime() -
                    new Date(b.dateOfOperation).getTime()
                  ); // Newest first
                case "":
                  return 0;
                default:
                  return 0;
              }
            })
            .slice(
              operationsPage * operationsEntries - operationsEntries,
              operationsPage * operationsEntries
            )
            .map((operation, index) => {
              const isExpanded = expandedRows.includes(index);
              return (
                <>
                  <tr className="flex justify-between py-3" key={index}>
                    <td className="flex-1 flex justify-center">
                      <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full border overflow-hidden me-3">
                        <img src="/assets/man.png" alt="Man Icon" />
                      </div>
                      {operation.patientName}
                    </td>
                    <td className="flex-1 flex justify-center">
                      <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full border overflow-hidden me-3">
                        <img src="/assets/doctor (1).png" alt="Man Icon" />
                      </div>
                      Dr.{operation.doctorTeam}
                    </td>
                    <td className="flex-1 hidden md:flex justify-center">
                      {operation.dateOfOperation}
                    </td>
                    <td className="flex-1 hidden md:flex justify-center">
                      <Link
                        to={"/reports/" + operation.report}
                        className="w-[25px] cursor-pointer"
                      >
                        <img src="/assets/pdf.png" alt="PDF Icon" />
                      </Link>
                    </td>
                    <td className="flex-1 hidden md:flex justify-center">
                      {operation.diseaseses}
                    </td>
                    {!isExpanded ? (
                      <ControlPointIcon
                        className="md:!hidden cursor-pointer"
                        onClick={() => toggleRow(index)}
                      />
                    ) : (
                      <RemoveCircleOutlineIcon
                        className="md:!hidden cursor-pointer"
                        onClick={() => toggleRow(index)}
                      />
                    )}
                  </tr>
                  <div
                    className={`operation-data md:hidden overflow-hidden ${
                      isExpanded ? "" : "!h-0"
                    }`}
                  >
                    <span>Data Of Operation: {operation.dateOfOperation}</span>
                    <br />
                    <span className="flex">
                      Report:
                      <Link
                        to={"/reports/" + operation.report}
                        className="w-[25px] cursor-pointer"
                      >
                        <img
                          src="/assets/pdf.png"
                          alt="PDF Icon"
                          className="h-[20px] mx-2"
                        />
                      </Link>
                    </span>
                    <span>Diseaseses: {operation.diseaseses}</span>
                  </div>
                </>
              );
            })}
        </tbody>
        <tfoot className="flex justify-between items-center pt-3">
          <div className="left">
            Showing {operationsPage * operationsEntries - operationsEntries + 1}{" "}
            to{" "}
            {operationsPage * operationsEntries > operations.length
              ? operations.length
              : operationsPage * operationsEntries}{" "}
            Of {operations.length} Entries
          </div>
          <div className="right flex">
            <button
              className="h-[50px] rounded-l border-1 px-2 cursor-pointer flex justify-center items-center  hover:bg-coolgray duration-300"
              onClick={() => changeOperationPage(-1)}
              disabled={operationsPage == 1}
            >
              Previous
            </button>
            <span className="h-[50px]  border-1 flex justify-center items-center px-5">
              {operationsPage}
            </span>
            <button
              className="h-[50px] rounded-r border-1 px-2 cursor-pointer flex justify-center items-center hover:bg-coolgray duration-300"
              onClick={() => changeOperationPage(1)}
              disabled={operations.length / operationsEntries < operationsPage}
            >
              Next
            </button>
          </div>
        </tfoot>
      </table>{" "}
    </div>
  );
};

export default DataTable;
