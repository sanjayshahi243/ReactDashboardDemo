import React, { useState } from 'react';

const DateRangeFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleApplyFilter = () => {
    // Apply filter logic here using startDate and endDate
    console.log('Filter applied:', startDate, endDate);
  };

  return (
    <div className="date-range-filter wrapper-items">
      <input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        placeholder="Start Date"
      />
      <input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        placeholder="End Date"
      />
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>    
  );
};

export default DateRangeFilter;
