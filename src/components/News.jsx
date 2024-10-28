import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient"; // Adjust the path as needed

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "news"] | order(date desc) {
          _id,
          title,
          content,
          date,
          image
        }`
      )
      .then((data) => setNews(data))
      .catch(console.error);
  }, []);

  if (!news.length) {
    return <p className="text-white text-3xl text-center">Loading news...</p>;
  }

  return (
    <div className="bg-[#393939] font-gilroy text-white p-8 flex flex-col items-center w-[90%] m-auto mt-10 mb-10">
      <div className="relative text-center">
        <h2 className="text-[#8BFF30] text-7xl font-roadRadio mb-[90px] relative z-10">
          НОВОСТИ
        </h2>
        <div className="absolute z-[1] inset-0 flex items-center justify-center">
          <h1 className="text-[160px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
            СТРОЙ ГРУПП
          </h1>
        </div>
      </div>

      {news.map((item) => (
        <div
          key={item._id}
          className="bg-[#757575] shadow-top relative mt-[-50px] z-[2] text-white p-[65px] flex w-full md:flex-row flex-col mb-20"
        >
          <div className="bg-white w-full md:w-[40%] h-[300px] md:h-auto mb-4 md:mb-0">
            {item.image && (
              <img
                src={urlFor(item.image).url()}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <div className="w-full md:w-[60%] text-white md:pl-8">
            <h2 className="text-5xl font-roadRadio mb-4">{item.title}</h2>
            <p className="text-3xl leading-7 mb-4">{item.content}</p>
            <p className="text-3xl mt-4 font-bold">
              {new Date(item.date).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
