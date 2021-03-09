import React from "react";

function Date(props) {
  const showDate = new Date();
  const displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();
  const dateString = showDate.toDateString();
  return (
    <div>
      <input
        className="date-input"
        type="text"
        value={displayTodaysDate}
        readOnly={true}
      />
      {dateString}
    </div>
  );
}

export default Date;
