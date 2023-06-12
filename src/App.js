import React, { useCallback, useEffect, useMemo, useState } from "react";

import './App.css';
import CardComponent from './components/card';
// import DataTable from './components/table';
import Navbar from './navbar';
import DateRangeFilter from './components/date_range_filter';

import { createColumnHelper } from "@tanstack/react-table";
import DataTable from "./components/table";
import Data from "./data.json"

function App() {
  const [tableData, setTableData] = useState([]);
  const filterData = (startDate, endDate) => {
    const filteredData = Data.filter((item) => {
      const createdDate = new Date(item.created_date);
      const startDate_date = new Date(startDate);
      const endDate_date = new Date(endDate);
      console.log(createdDate, typeof(startDate))
      return createdDate >= startDate_date && createdDate <= endDate_date;
    });
    setTableData(filteredData);
  };
  useEffect(() => {
    setTableData(Data)
  }, [])
  const columnHelper = createColumnHelper();
  const columns = useMemo(() => [
    columnHelper.accessor("name", { header: "NAME", cell: (info) => info.getValue()}),
    columnHelper.accessor("created_date", { header: "CREATED DATE", cell: (info) => info.getValue()}),
    columnHelper.accessor("calendars", { header: "CALENDARS", cell: (info) => info.getValue()}),
    columnHelper.accessor("recordings", { header: "RECORDINGS", cell: (info) => info.getValue()}),
    columnHelper.accessor("attendance", { header: "ATTENDANCE", cell: (info) => info.getValue()})
  ], []);
  return (
    <>
      <Navbar />
      
      <div className="wrapper">
        <DateRangeFilter className="wrapper-items" filterData={filterData} />
        <div className="card-row wrapper-items">
          <CardComponent title="Groups" totalCount="68" increment="↑ 51" days="7" icon={"nimbus:user-group"} />
          <CardComponent title="Calendars" totalCount="3947" increment="↑ 2571" days="7" icon={"bi:calendar"} />
          <CardComponent title="Recordings" totalCount="1869" increment="↑ 1446" days="7" icon={"uil:camera"}/>
          <CardComponent title="Attendance Reports" totalCount="571" increment="↑ 368" days="7" icon={"iconamoon:copy"} />
        </div>

        <div className='base-color wrapper-items' style={{ padding: '1.5em' }}>
          <b>All Groups data</b>
        </div>

        {/* Table */}
        <div>
          <DataTable columns={columns} data={tableData} />
        </div>
      </div>
    </>
  );
}

export default App;
