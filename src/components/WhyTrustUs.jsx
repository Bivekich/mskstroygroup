import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faMoneyBillWave,
  faCompassDrafting,
  faLayerGroup,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { client } from "../sanityClient";

const WhyTrustUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch('*[_type == "whyTrustUs"][0]');
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <div className="bg-[#393939] text-white p-8 mb-8 relative">
      <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[90px] relative z-10">
        ПОЧЕМУ НАМ ДОВЕРЯЮТ
      </h2>
      <div className="absolute inset-0 flex items-center justify-center  ">
        <h1 className="text-[160px] text-[#757575] font-roadRadio absolute top-0  whitespace-nowrap">
          ПРИЕМУЩЕСТВА
        </h1>
      </div>

      <div className="grid grid-cols-5 relative">
        <div className="bg-[#757575] p-4 pb-8 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[5]">
          <div className="w-[90%] m-auto ">
            <div className="text-[#393939] text-center my-4 mb-6">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className=" bg-[#8BFF30] text-5xl rounded-full p-6"
              />
            </div>

            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide ">
              {data.title1}
            </h3>
            <p className=" text-2xl tracking-wide font-gilroy">
              {data.description1}
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-[#8BFF30] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[4]">
          <div className="w-[85%] m-auto">
            <div className=" text-white text-center my-4 mb-5">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className=" bg-[#757575] text-5xl rounded-full p-5 py-[24px]"
              />
            </div>
            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide text-[#393939]">
              {data.title2}
            </h3>
            <p className="text-2xl font-gilroy tracking-wide text-[#393939]">
              {data.description2}
            </p>
          </div>
        </div>

        <div className="bg-[#757575] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[3]">
          <div className="w-[85%] m-auto">
            <div className="text-[#393939] text-center my-4 mb-5">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                className=" bg-[#8BFF30] text-5xl rounded-full p-6"
              />
            </div>
            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide">
              {data.title3}
            </h3>
            <pc className=" text-2xl font-gilroy tracking-wide">
              {data.description3}
            </pc>
          </div>
        </div>

        <div className="bg-[#8BFF30] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[2]">
          <div className="w-[85%] m-auto">
            <div className="text-white text-center my-4 mb-5">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className=" bg-[#757575] text-5xl rounded-full p-6 px-5"
              />
            </div>
            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide text-[#393939]">
              {data.title4}
            </h3>
            <p className=" text-2xl font-gilroy tracking-wide text-[#393939]">
              {data.description4}
            </p>
          </div>
        </div>

        <div className="bg-[#757575] p-4">
          <div className="w-[85%] m-auto">
            <div className="text-[#393939] text-center my-4 mb-5">
              <FontAwesomeIcon
                icon={faFileContract}
                className=" bg-[#8BFF30] text-5xl rounded-full p-6 px-[30px]"
              />
            </div>
            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide flex justify-center">
              {data.title5}
            </h3>
            <p className=" text-2xl font-gilroy tracking-wide">
              {data.description5}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTrustUs;
