import React from "react";

const Card = (props) => {
  return (
    <>
      {props.data.map((data, index) => (
        <div
          key={index}
          className="bg-white w-64 h-96 rounded-lg overflow-hidden flex flex-col items-center relative"
        >
          <img
            src={data.urlToImage}
            alt=""
            className="w-full h-44 object-cover"
          />
          <h1 className="text-lg font-semibold text-left leading-6 mt-2 mb-2 pl-2 pr-2">
            {data.title}
          </h1>
          <small className="absolute bottom-0 left-0 text-[0.7rem] pl-2 pr-2  text-gray-500 font-bold">
            {data.publishedAt}
          </small>
          <a
            href={data.url}
            className="bg-red-500 text-white p-1 pl-3 pr-3 text-xs capitalize  rounded cursor-pointer font-bold w-fit text-center mt-3 mb-8 "
          >
            read full news
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
