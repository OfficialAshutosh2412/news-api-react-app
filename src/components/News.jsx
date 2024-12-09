import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import Pills from "./Pills";
//component
const News = () => {
  //search state
  const [search, setSearch] = useState("");
  //news state
  const [news, setNews] = useState([]);
  //error message state
  const [error, setError] = useState("");
  //loader on click
  const [loader, setLoader] = useState(false);
  const category = [
    "all",
    "sports",
    "politics",
    "entertainment",
    "health",
    "fitness",
    "market",
    "trading",
    "bitcoin",
    "rupee",
    "jobs",
  ];
  //get news on load
  const getNews = async () => {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=india&apiKey=56838e8f8b76477c99d24dd2c84c1a4c`
    );
    let jsonRes = await res.json();
    let fillterData = jsonRes.articles.filter(
      (item) => item.title != "[Removed]"
    );
    setNews(fillterData);
    console.log(fillterData);
  };
  //calling get news function on load
  useEffect(() => {
    getNews();
  }, []);
  //getting news from search input
  const customInputSearch = async (input) => {
    setLoader(true);
    try {
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${input}&apiKey=56838e8f8b76477c99d24dd2c84c1a4c`
      );
      let jsonRes = await res.json();
      let fillterData = jsonRes.articles.filter(
        (item) => item.title != "[Removed]"
      );
      if (fillterData.length === 0) {
        setNews([]);
        setError("No data found");
        return;
      }
      setError("");
      setNews(fillterData);
    } catch (error) {
      setError("failed to fetch data...");
    } finally {
      setLoader(false);
    }
  };
  //sending input to search method
  const handleSearch = () => {
    if (search === "") {
      setNews([]);
      setError("type something to search");
      return;
    }
    customInputSearch(search);
  };
  //pills function
  const pills = (query) => {
    customInputSearch(query);
  };
  //returning
  return (
    <>
      <section className=" text-gray-200 flex justify-between items-center p-3 shadow-md shadow-blue-950 ">
        <h1 className="font-bold w-full pl-20">Trendy News</h1>
        <div className="flex gap-5 justify-center text-sm w-full">
          <a href="#">All News</a>
          <a href="#">Trending</a>
        </div>
        <div className="w-full text-right pr-20 flex items-center justify-center">
          <input
            type="text"
            placeholder="search topic"
            className="rounded-tl-full rounded-bl-full h-8 p-5 outline-none text-sm bg-indigo-900 shadow-sm shadow-indigo-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white shadow-sm shadow-indigo-500 rounded-tr-full rounded-br-full  capitalize h-8 p-5 text-sm flex items-center justify-center"
            onClick={handleSearch}
          >
            search
          </button>
        </div>
      </section>
      <section className="mt-10">
        <h3 className="text-white capitalize text-4xl text-center font-light">
          stay updated with trendy news
        </h3>
        <Pills categoryName={category} pills={pills} />
        {/* <div className="mt-10 flex justify-center items-center gap-10">
          <button
            onClick={() => pills("all")}
            className="bg-red-800 text-white p-1 pl-4 pr-4 rounded-full text-xs capitalize"
          >
            all
          </button>
          <button
            onClick={() => pills("sports")}
            className="bg-red-800 text-white p-1 pl-4 pr-4 rounded-full text-xs capitalize"
          >
            sports
          </button>
          <button
            className="bg-red-800 text-white p-1 pl-4 pr-4 rounded-full text-xs capitalize"
            onClick={() => pills("politics")}
          >
            politics
          </button>
          <button
            className="bg-red-800 text-white p-1 pl-4 pr-4 rounded-full text-xs capitalize"
            onClick={() => pills("entertainment")}
          >
            entertainment
          </button>
          <button
            className="bg-red-800 text-white p-1 pl-4 pr-4 rounded-full text-xs capitalize"
            onClick={() => pills("health")}
          >
            health
          </button>
          <button
            className="bg-red-800 text-white p-1 pl-4 pr-4 rounded-full text-xs capitalize"
            onClick={() => pills("fitness")}
          >
            fitness
          </button>
          <button
            className="bg-red-800 text-white p-1 pl-4 pr-4 rounded-full text-xs capitalize"
            onClick={() => pills("stock market")}
          >
            stock market
          </button>
        </div> */}
      </section>

      {loader ? (
        <Loader />
      ) : (
        <section className="flex justify-center items-center gap-10 flex-wrap p-5">
          {error ? (
            <h1 className="text-red-400 font-bold text-4xl">{error}</h1>
          ) : (
            <Card data={news} />
          )}
        </section>
      )}
    </>
  );
};

export default News;
