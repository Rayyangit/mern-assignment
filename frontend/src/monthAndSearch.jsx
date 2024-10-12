import React from "react";

const MonthAndSearch = ({
  selectedMonth,
  onSearchChange,
  value,
  onMonthChange,
  onClear,
}) => {
  const months = [
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

  return (
    <div className="flex justify-between m-5">
      {/* Search Box */}
      <div className="bg-[#e0f7fa] font-semibold rounded-xl p-2 flex items-center"> {/* Light blue background */}
        <input
          className="bg-[#ffffff] rounded-l-xl p-3 focus:outline-none border border-gray-300 transition duration-200 ease-in-out hover:bg-[#e0f7fa]" // Updated input styling without shadow
          type="text"
          value={value}
          onChange={onSearchChange}
          placeholder="Search transactions..."
        />
        <button
          className="bg-[#ff4d4d] text-white rounded-r-xl p-3 ml-2 transition duration-200 ease-in-out hover:bg-[#ff1a1a]" // Updated button styling
          onClick={onClear}
        >
          Clear
        </button>
      </div>

      {/* Month Changer */}
      <div className="container max-w-max bg-[#1d7b51] rounded-xl px-2"> {/* Updated background color to a light greenish shade */}
        <select
          className="bg-[#5c4545] font-semibold rounded-xl p-3 focus:outline-none border border-gray-300 transition duration-200 ease-in-out hover:bg-[#e0f7fa] focus:bg-[#e0f7fa]" // Light blue on hover and when focused
          value={selectedMonth}
          onChange={onMonthChange}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthAndSearch;
