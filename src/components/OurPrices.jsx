import React, { useEffect, useState } from "react";
import client from "../sanityClient"; // Adjust path as needed
import prices from "../assets/images/pricelist.svg"; // Default image or graphic

const PriceList = () => {
  const [priceListFile, setPriceListFile] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "priceList"][0]`)
      .then((data) => {
        if (data && data.file) {
          console.log("File URL:", data.file.asset.url);
          setPriceListFile(data.file.asset.url); // Get the URL for the file
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-[#393939] flex flex-col items-center justify-center p-8  w-[97%] m-auto mb-20">
      <div className="relative text-center">
        <h2 className="text-[#8BFF30] text-7xl font-roadRadio mb-[90px] relative z-10">
          НАШИ ЦЕНЫ
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[160px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
            ПРАЙС-ЛИСТ
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <img src={prices} alt="Background" className="w-[70%] z-[2]" />
        <div className="bg-[#707070] ml-[-280px] z-[1] p-10 w-[700px] h-[350px] text-white flex flex-col justify-center items-center">
          <p className="text-4xl w-[55%] ml-[34%] font-roadRadio mb-6">
            СКАЧАТЬ ТАБЛИЦУ С АКТУАЛЬНЫМИ ЦЕНАМИ
          </p>

          {/* <a href={priceListFile} download> */}
          <a href="../assets/prais.xlsx" download>
            <button className="bg-[#8BFF30] ml-[30%] text-[#393939] px-20 py-3 max-w-[350px] hover:scale-[1.01] hover:bg-[#55b74a] transition font-roadRadio font-bold text-4xl">
              СКАЧАТЬ
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
