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
    <div className="bg-[#393939] font-gilroy text-white p-4 sm:p-6 md:p-8 flex flex-col items-center w-[95%] sm:w-[90%] m-auto mt-5 sm:mt-8 md:mt-10 mb-5 sm:mb-8 md:mb-10">
      <div className="relative text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-[#8BFF30] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-[45px] sm:mb-[60px] md:mb-[90px] relative z-10">
          НОВОСТИ
        </h2>
        <div className="absolute z-[1] inset-0 flex items-center justify-center">
          <h1 className="text-[40px] top-12 sm:text-[70px] sm:top-12  md:text-[100px] md:top-7 xl:text-[160px] xl:top-0 mt-[-35px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
            СТРОЙ ГРУПП
          </h1>
        </div>
      </div>

      {news.map((item) => (
        <div
          key={item._id}
          className="bg-[#757575] shadow-top relative mt-[-25px] sm:mt-[-35px] md:mt-[-50px] z-[2] text-white p-4 sm:p-8 md:p-[65px] flex flex-col xl:flex-row w-full mb-8 sm:mb-12 md:mb-20"
        >
          <div className="w-full xl:w-[40%] mb-4 xl:mb-0">
            <div className="relative pt-[100%] xl:pt-[120%]">
              {item.image && (
                <img
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="w-full xl:w-[60%] text-white xl:pl-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-roadRadio mb-2 sm:mb-3 md:mb-4">
              {item.title}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-normal sm:leading-relaxed md:leading-7 mb-2 sm:mb-3 md:mb-4">
              {item.content}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-3 md:mt-4 font-bold">
              {new Date(item.date).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
