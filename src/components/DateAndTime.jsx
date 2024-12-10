import React from "react";

const DateAndTime = ({ data }) => {
  let datas = data;
  function formateDate(datas) {
    const date = new Date(datas);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",

      hour12: true,
    };
    return date.toLocaleString("en-US", options).replace(",", " ");
  }
  let fromatedDate = formateDate(datas);
  return (
    <small className="absolute bottom-0 sm:left-0 sm:text-xs text-[0.6rem] pl-2 pr-2   text-gray-500 font-bold">
      {fromatedDate}
    </small>
  );
};

export default DateAndTime;
