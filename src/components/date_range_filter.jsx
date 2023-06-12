import React, { useEffect, useState } from 'react';

const DateRangeFilter = ({ filterData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleApplyFilter = () => {
    filterData(startDate, endDate);
  };

  return (
    <div className="date-range-filter wrapper-items">
      <div>
        <label htmlFor="startDate">From:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          placeholder="Start Date"
        />
      </div>
      <div>
        <label htmlFor="endDate">To:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          placeholder="End Date"
        />
      </div>
      <div>
        <p></p>
        <button onClick={handleApplyFilter}>Apply Filter</button>
      </div>
    </div>
  );
};

export default DateRangeFilter;
