import React from "react";

const Pills = ({ categoryName, pills }) => {
  return (
    <div className="mt-10 flex justify-center items-center gap-10 w-4/5 m-auto">
      {categoryName.map((category, index) => (
        <button
          key={index}
          onClick={() => pills(category)}
          className="bg-red-800 text-white p-1 pl-4 pr-4 rounded-full text-xs capitalize"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Pills;
