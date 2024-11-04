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
import { motion } from "framer-motion";

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

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-[#FEFEFF] text-white p-4 sm:p-8 mb-4 sm:mb-8 relative">
      <h2 className="text-center text-[#3D4871] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-[45px] sm:mb-[90px] relative z-10">
        ПОЧЕМУ НАМ ДОВЕРЯЮТ
      </h2>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[40px] mt-10 rwrap:mt-0 top-8 sm:text-[70px] sm:top-12 md:text-[100px] md:top-7 xl:top-0 xl:text-[160px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
          ПРИЕМУЩЕСТВА
        </h1>
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 m:gap-6"
      >
        {/* Column 1 */}
        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#757575] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[5]"
        >
          <div className="w-[95%] sm:w-[90%] m-auto">
            <div className="text-[#FEFEFF] text-center my-3 sm:my-4 mb-4 sm:mb-6">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="bg-[#3D4871] text-3xl sm:text-4xl md:text-5xl rounded-full p-4 sm:p-6"
              />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-2 font-roadRadio tracking-wide text-center sm:text-left">
              {data.title1}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl tracking-wide font-gilroy">
              {data.description1}
            </p>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#3D4871] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[4]"
        >
          <div className="w-[95%] sm:w-[85%] m-auto">
            <div className="text-white text-center my-3 sm:my-4 mb-4 sm:mb-5">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="bg-[#757575] text-3xl sm:text-4xl md:text-5xl rounded-full p-4 sm:p-5 py-[20px] sm:py-[24px]"
              />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-2 font-roadRadio tracking-wide text-[#FEFEFF] text-center sm:text-left">
              {data.title2}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-gilroy tracking-wide text-[#FEFEFF]">
              {data.description2}
            </p>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#757575] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[3]"
        >
          <div className="w-[95%] sm:w-[85%] m-auto">
            <div className="text-[#FEFEFF] text-center my-3 sm:my-4 mb-4 sm:mb-5">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                className="bg-[#3D4871] text-3xl sm:text-4xl md:text-5xl rounded-full p-4 sm:p-6"
              />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-2 font-roadRadio tracking-wide text-center sm:text-left">
              {data.title3}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-gilroy tracking-wide">
              {data.description3}
            </p>
          </div>
        </motion.div>

        {/* Column 4 */}
        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#3D4871] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[2]"
        >
          <div className="w-[95%] sm:w-[85%] m-auto">
            <div className="text-white text-center my-3 sm:my-4 mb-4 sm:mb-5">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="bg-[#757575] text-3xl sm:text-4xl md:text-5xl rounded-full p-4 sm:p-6 px-4 sm:px-5"
              />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-2 font-roadRadio tracking-wide text-[#FEFEFF] text-center sm:text-left">
              {data.title4}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-gilroy tracking-wide text-[#FEFEFF]">
              {data.description4}
            </p>
          </div>
        </motion.div>

        {/* Column 5 */}
        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#757575] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[1]"
        >
          <div className="w-[95%] sm:w-[85%] m-auto">
            <div className="text-[#FEFEFF] text-center my-3 sm:my-4 mb-4 sm:mb-5">
              <FontAwesomeIcon
                icon={faFileContract}
                className="bg-[#3D4871] text-3xl sm:text-4xl md:text-5xl rounded-full p-4 sm:p-6 px-[20px] sm:px-[30px]"
              />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-2 font-roadRadio tracking-wide text-center sm:text-left">
              {data.title5}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-gilroy tracking-wide">
              {data.description5}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyTrustUs;
