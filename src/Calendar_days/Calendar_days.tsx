import React, { useState } from "react";
import { DayProps, DaysProps } from "../types"; //
import "./calendar_days_style.scss";
import Gift from "../Gift/Gift";

const Days: React.FC<DaysProps> = ({ daysData }) => {
  const [selectedDay, setSelectedDay] = useState<DayProps | null>(null);

  const handleDayClick = (dayData: DayProps) => {
    setSelectedDay(dayData);
  };

  const handleCloseGift = () => {
    setSelectedDay(null);
  }

  return (
    <>
      <ul className="calendar">
        {daysData.map((dayData: DayProps) => (
          <li
            key={dayData.id}
            className="calendar__box"
            style={{ backgroundColor: dayData.color }}
            onClick={() => handleDayClick(dayData)}
          >
            <button className="calendar__day">
              {dayData.day}
            </button>
          </li>
        ))}
      </ul>
      {selectedDay && <Gift gift={selectedDay.gift} onClose={handleCloseGift} />}
    </>
  );
};

export default Days;
