import React from "react";
import DateAndTime from "./DateAndTime";

const Card = (props) => {
  return (
    <>
      {props.data.map((data, index) => (
        <div
          key={index}
          className="bg-white sm:w-64 w-40 sm:h-96 h-auto rounded-lg overflow-hidden flex flex-col items-center relative"
        >
          {data.urlToImage == null ? (
            <small className="text-red-600 flex justify-center text-lg items-center italic w-full sm:h-44 h-22 text-center font-bold">
              No image
            </small>
          ) : (
            <img
              src={data.urlToImage}
              alt=""
              className="w-full sm:h-44 h-22 object-cover"
            />
          )}

          <h1 className="sm:text-lg text-sm font-semibold text-center sm:leading-6  leading-none mt-2 mb-2 pl-2 pr-2">
            {data.title}
          </h1>
          <DateAndTime data={data.publishedAt} />
          <a
            href={data.url}
            className="bg-red-500 text-white p-1 sm:pl-3 pl-1 sm:pr-3 pr-1 sm:text-xs text-[0.6rem] capitalize  rounded cursor-pointer font-bold w-fit text-center mt-3 mb-8 "
          >
            read full news
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
