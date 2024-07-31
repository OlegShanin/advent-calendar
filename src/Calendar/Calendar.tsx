import React from "react";
import Days from "../Calendar_days/Calendar_days";
import daysData from "../daysData.json"; 
import "./calendar_style.scss";

const Calendar: React.FC = () => {
  return (
    <>
      <h1 className="calendar__title">Advent calendar</h1>
      <Days daysData={daysData} />
    </>
  );
};

export default Calendar;
