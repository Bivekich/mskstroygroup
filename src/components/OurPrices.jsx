import React, { useEffect, useState } from "react";
import client from "../sanityClient";
import prices from "../assets/images/pricelist.svg";

const PriceList = () => {
  const [priceListFile, setPriceListFile] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "priceList"][0]`)
      .then((data) => {
        if (data && data.file) {
          console.log("File URL:", data.file.asset.url);
          setPriceListFile(data.file.asset.url);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-[#393939] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 w-[97%] m-auto mb-10 sm:mb-15 md:mb-20">
      {/* Title Section */}
      <div className="relative text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-[#8BFF30] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-[45px] sm:mb-[60px] md:mb-[90px] relative z-10">
          НАШИ ЦЕНЫ
        </h2>
        <div className="absolute z-[1] inset-0 flex items-center justify-center">
          <h1 className="text-[40px] top-8 sm:text-[70px] sm:top-12 md:text-[100px] md:top-7 xl:text-[160px] xl:top-0 text-[#757575] font-roadRadio absolute whitespace-nowrap">
            ПРАЙС-ЛИСТ
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center w-full">
        {/* Image */}
        <div className="w-full lg:w-[70%] relative z-[2]">
          <img 
            src={prices} 
            alt="Background" 
            className="w-full h-auto"
          />
        </div>

        {/* Download Box */}
        <div className="w-full lg:w-[700px] bg-[#707070] lg:ml-[-280px] z-[1] p-6 sm:p-8 md:p-10 
                      mt-[-50px] lg:mt-0 
                      min-h-[250px] sm:min-h-[300px] md:min-h-[350px] 
                      text-white flex flex-col justify-center items-center">
          <p className="text-2xl sm:text-3xl md:text-4xl text-center lg:text-left 
                      w-full lg:w-[55%] lg:ml-[34%] 
                      font-roadRadio mb-4 sm:mb-5 md:mb-6">
            СКАЧАТЬ ТАБЛИЦУ С АКТУАЛЬНЫМИ ЦЕНАМИ
          </p>

          <a href="../assets/prais.xlsx" download className="w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-[#8BFF30] text-[#393939] 
                           px-8 sm:px-12 md:px-20 py-2 sm:py-3 
                           lg:ml-[30%]
                           hover:scale-[1.01] hover:bg-[#55b74a] transition 
                           font-roadRadio font-bold 
                           text-2xl sm:text-3xl md:text-4xl">
              СКАЧАТЬ
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
