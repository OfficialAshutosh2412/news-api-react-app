import React from "react";

const Pills = ({ categoryName, pills, activeness }) => {
  return (
    <div className="mt-10 flex justify-start items-center gap-5 w-4/5 m-auto flex-wrap">
      {categoryName.map((category, index) => (
        <button
          key={index}
          onClick={() => pills(category)}
          className={`text-white p-1 pl-4 pr-4 rounded-full text-xs capitalize
            ${activeness === category ? "bg-black" : "bg-red-800"}
            `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Pills;
