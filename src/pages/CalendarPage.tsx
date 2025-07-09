import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage: React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());

  const handleChange = (date: Date) => {
    setValue(date);
  };

  return (
    <div className="calendar-wrapper">
      <h2>Calendar</h2>
      <Calendar
        onChange={(value) => handleChange(value as Date)}
        value={value}
        selectRange={false}
      />
      <p>Selected Date: {value.toLocaleDateString()}</p>
    </div>
  );
};

export default CalendarPage;
