import { useEffect, useState } from "react";
import client from "../sanityClient";
import prices from "../assets/images/pricelist.svg";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const PriceList = () => {
  const [priceListData, setPriceListData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "excelFile"][0]{
        title,
        description,
        "fileUrl": file.asset->url
      }`
      )
      .then((data) => {
        if (data) {
          setPriceListData(data);
        }
      })
      .catch(console.error);
  }, []);

  if (!priceListData) return null;

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className=" text-white p-4 sm:p-8 relative mt-5 sm:mt-10 mb-5 sm:mb-10"
    >
      {/* Title Section */}
      <div className="relative text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-[#3D4871] text-4xl sm:text-5xl md:text-7xl font-roadRadio relative z-10">
          НАШИ ЦЕНЫ
        </h2>
        <div className="z-[1] inset-0 flex items-center justify-center">
          <h1 className="text-[35px] sm:text-[60px] md:text-[80px] xl:text-[120px] lg:mt-[-50px]  text-[#757575] font-roadRadio whitespace-nowrap">
            ПРАЙС-ЛИСТ
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        {/* Image */}
        <div className="w-full lg:w-[45%] relative z-[2]">
          <img src={prices} alt="Background" className="w-full h-auto" />
        </div>

        {/* Download Box */}
        <div
          className="w-full lg:w-[600px] bg-[#707070] lg:ml-[-200px] z-[1] p-4 sm:p-6 md:p-8 
                      mt-[-50px] lg:mt-0 
                      min-h-[250px] sm:min-h-[300px] md:min-h-[350px] 
                      text-white flex flex-col justify-center items-center"
        >
          <p
            className="text-2xl sm:text-3xl md:text-4xl text-center lg:text-left 
                      w-full lg:w-[55%] lg:ml-[34%] 
                      font-roadRadio mb-4 sm:mb-5 md:mb-6"
          >
            СКАЧАТЬ ТАБЛИЦУ С АКТУАЛЬНЫМИ ЦЕНАМИ
          </p>

          <a
            href={priceListData.fileUrl}
            download
            className="w-full lg:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="w-full lg:w-auto bg-[#3D4871] text-[#FEFEFF] 
                           px-8 sm:px-12 md:px-20 py-2 sm:py-3 
                           lg:ml-[30%]
                           hover:scale-[1.01] hover:bg-[#7a82ab] transition 
                           font-roadRadio font-bold 
                           text-2xl sm:text-3xl md:text-4xl"
            >
              СКАЧАТЬ
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PriceList;
