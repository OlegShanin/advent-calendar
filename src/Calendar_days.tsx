import React from "react";
import "./Calendar_days_style.scss";
import daysData from "./daysData.json";

interface DayProps {
  id: string;
  day: number;
  color: string;
  gift: string;
}

const Days: React.FC = () => {
  return (
    <ul className="calendar">
      {daysData.map((dayData: DayProps) => (
        <li key={dayData.id} className="calendar__box" style={{ backgroundColor: dayData.color }}>
          <div className="calendar__day">
            {dayData.day}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Days;
