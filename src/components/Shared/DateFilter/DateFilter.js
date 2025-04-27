import React, { useState } from 'react';
import './DateFilter.css';

const DateFilter = ({ onFilterChange }) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const weeks = [
    'Week 1 (1st - 7th)',
    'Week 2 (8th - 14th)',
    'Week 3 (15th - 21st)',
    'Week 4 (22nd - 28th)',
    'Week 5 (29th - 31st)',
  ];

  const handleMonthChange = (e) => {
    const month = e.target.value;
    setSelectedMonth(month);
    onFilterChange({ month, week: selectedWeek });
  };

  const handleWeekChange = (e) => {
    const week = e.target.value;
    setSelectedWeek(week);
    onFilterChange({ month: selectedMonth, week });
  };

  return (
    <div className="date-filter-container">
      <div className="filter-group">
        <label htmlFor="month-select">Filter by Month:</label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="filter-select"
        >
          <option value="">Select a Month</option>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="week-select">Filter by Week:</label>
        <select
          id="week-select"
          value={selectedWeek}
          onChange={handleWeekChange}
          className="filter-select"
        >
          <option value="">Select a Week</option>
          {weeks.map((week, index) => (
            <option key={index} value={week}>
              {week}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateFilter;