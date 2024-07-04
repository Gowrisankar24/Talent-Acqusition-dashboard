import React from 'react'
import Calendar from 'react-calendar'

export const CalendarInfo = () => {
  const tilesClass = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDate();
      if (day > 9 && day < 19) {
        return 'highlight';
      } else if (day === 9 || day === 19) {
        return 'highlight-round';
      }
    }
    return null;
  };
  return (
    <>
      <div className="rounded-none shadow-2xl">
        <Calendar tileClassName={tilesClass} showDoubleView={false} showNavigation={true} />
      </div>
    </>
  )
}
