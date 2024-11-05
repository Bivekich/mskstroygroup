import { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient"; // Adjust the path as needed
import { motion } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

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
    return <LoadingSpinner />;
  }

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="font-gilroy text-white p-3 sm:p-4 md:p-6 flex flex-col items-center w-[85%] sm:w-[80%] m-auto mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8"
    >
      <div className="relative text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-[#3D4871] text-3xl sm:text-4xl md:text-5xl font-roadRadio mb-[35px] sm:mb-[45px] md:mb-[60px] relative z-10">
          НОВОСТИ
        </h2>
        <div className="absolute z-[1] inset-0 flex items-center justify-center">
          <h1 className="text-[35px] top-8 sm:text-[60px] sm:top-8 md:text-[80px] md:top-6 xl:text-[120px] xl:top-0 mt-[-25px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
            СТРОЙ ГРУПП
          </h1>
        </div>
      </div>

      {news.map((item) => (
        <motion.div
          key={item._id}
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-[#757575] shadow-top relative mt-[-20px] sm:mt-[-25px] md:mt-[-35px] z-[2] text-white p-3 sm:p-6 md:p-8 flex flex-col xl:flex-row w-full mb-12 md:mb-20"
        >
          <div className="w-full xl:w-[35%] mb-3 xl:mb-0">
            <div className="relative pt-[80%] xl:pt-[100%]">
              {item.image && (
                <img
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="w-full xl:w-[65%] text-white xl:pl-6">
            <h2 className="text-xl text-[#3D4871] sm:text-2xl md:text-3xl font-roadRadio mb-2 sm:mb-3">
              {item.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-normal sm:leading-relaxed md:leading-7 mb-2">
              {item.content}
            </p>
            <p className="text-base sm:text-lg text-[#3D4871] md:text-xl mt-2 font-bold">
              {new Date(item.date).toLocaleString()}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NewsComponent;
