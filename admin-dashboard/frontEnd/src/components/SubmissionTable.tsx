import React, { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTable, useFilters, Column, Row, TableInstance } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

interface SubmissionData {
  id: number;
  name: string;
  email: string;
  submissionDate: string;
  // ... other fields
}

const SubmissionTable: React.FC = () => {
  const dummyData: SubmissionData[] = [];

  // Generate dummy data for 20 users
  for (let i = 1; i <= 20; i++) {
    const user: SubmissionData = {
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      submissionDate: generateRandomDate(),
      // ... other fields
    };

    dummyData.push(user);
  }

  // Function to generate a random date within a range
  function generateRandomDate() {
    const start = new Date(2018, 0, 1); // January 1, 2022
    const end = new Date();
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    // Format the date as "YYYY-MM-DD"
    const formattedDate = `${randomDate.getFullYear()}-${(
      randomDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${randomDate.getDate().toString().padStart(2, "0")}`;

    return formattedDate;
  }

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [tableData, setTableData] = useState<SubmissionData[]>(dummyData);

  const columns: Column<SubmissionData>[] = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Submission Date", accessor: "submissionDate" },
      // ... other columns
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<SubmissionData>(
      { columns, data: tableData },
      useFilters
    ) as TableInstance<SubmissionData>;

  const handleDateFilter = () => {
    // Filter logic based on date range (startDate and endDate)
    const filteredData = dummyData.filter((submission: SubmissionData) => {
      const submissionDate = new Date(submission.submissionDate);
      return (
        (!startDate || submissionDate >= startDate) &&
        (!endDate || submissionDate <= endDate)
      );
    });

    // Update the rows with the filtered data
    setTableData(filteredData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 via-purple-600 to-purple-800">
      <div className="bg-black bg-opacity-30 p-8 rounded-lg shadow-md max-w-4xl w-full relative">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Submission Table
        </h2>

        <div className="flex justify-evenly space-x-4 mb-8">
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 rounded-md text-base text-white"
          />
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="End Date"
            className="p-3 border-b-2 border-white bg-transparent focus:outline-none focus:border-teal-900 rounded-md text-base text-white"
          />
          <button
            onClick={handleDateFilter}
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            Apply Date Filter
          </button>
        </div>
        <table
          {...getTableProps()}
          className="min-w-full border border-gray-900 divide-y divide-gray-300 "
        >
          <thead className="bg-gray-600 ">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="py-2 px-4 font-semibold text-left text-white"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: Row<SubmissionData>, index) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="py-2 px-4">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SubmissionTable;
