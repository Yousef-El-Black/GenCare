import { useState } from "react";

import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { Link } from "react-router";

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

  const changeOperationPage = (i: number) => {
    setOperationsPage(operationsPage + i);
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
          />
        </div>
      </div>
      <table className="w-full flex flex-col border-collapse my-3">
        <thead>
          <tr className="border-b-2 border-coolgray flex items-center py-2">
            <th className="flex justify-between gap-2 flex-1">
              <span>Patient Name</span>
              <div className="flex justify-center items-center text-coolgray">
                <SouthIcon fontSize="small" className="cursor-pointer" />
                <NorthIcon
                  fontSize="small"
                  className="cursor-pointer translate-x-[-5px]"
                />
              </div>
            </th>
            <th className="flex justify-between gap-2 flex-1">
              <span>Doctor Team</span>
              <div className="flex justify-center items-center text-coolgray">
                <SouthIcon fontSize="small" className="cursor-pointer" />
                <NorthIcon
                  fontSize="small"
                  className="cursor-pointer translate-x-[-5px]"
                />
              </div>
            </th>
            <th className="hidden md:flex justify-between gap-2 flex-1">
              <span>Date Of Operation</span>
              <div className="flex justify-center items-center text-coolgray">
                <SouthIcon fontSize="small" className="cursor-pointer" />
                <NorthIcon
                  fontSize="small"
                  className="cursor-pointer translate-x-[-5px]"
                />
              </div>
            </th>
            <th className="hidden md:flex justify-between gap-2 flex-1">
              <span>Report</span>
              <div className="flex justify-center items-center text-coolgray">
                <SouthIcon fontSize="small" className="cursor-pointer" />
                <NorthIcon
                  fontSize="small"
                  className="cursor-pointer translate-x-[-5px]"
                />
              </div>
            </th>
            <th className="hidden md:flex justify-between gap-2 flex-1">
              <span>Diseaseses</span>
              <div className="flex justify-center items-center text-coolgray">
                <SouthIcon fontSize="small" className="cursor-pointer" />
                <NorthIcon
                  fontSize="small"
                  className="cursor-pointer translate-x-[-5px]"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="max-h-[240px] overflow-y-scroll">
          {operations
            .slice(
              operationsPage * operationsEntries - operationsEntries,
              operationsPage * operationsEntries
            )
            .map((operation, index) => (
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
                <td className="flex-1 flex justify-center">
                  {operation.dateOfOperation}
                </td>

                <td className="flex-1 flex justify-center">
                  <Link
                    to={"/reports/" + operation.report}
                    className="w-[25px] cursor-pointer"
                  >
                    <img src="/assets/pdf.png" alt="PDF Icon" />
                  </Link>
                </td>
                <td className="flex-1 flex justify-center">
                  {operation.diseaseses}
                </td>
              </tr>
            ))}
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
