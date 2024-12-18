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
        staggerChildren: 0.3,
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
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className=" text-white p-3 sm:p-6 mb-3 sm:mb-6 relative w-[85%] sm:w-[80%] m-auto">
      <h2 className="text-center text-[#3D4871] text-4xl sm:text-5xl md:text-7xl font-roadRadio relative z-10">
        ПОЧЕМУ НАМ ДОВЕРЯЮТ
      </h2>
      <div className="inset-0 flex items-center justify-center">
        <h1 className="text-[35px] sm:text-[60px] md:text-[80px] xl:text-[120px] text-[#757575] lg:mt-[-50px] font-roadRadio whitespace-nowrap ">
          ПРИЕМУЩЕСТВА
        </h1>
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5  "
      >
        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#757575] p-3 shadow-[8px_8px_16px_rgba(0,0,0,0.25)] z-[5]"
        >
          <div className="w-[90%] sm:w-[85%] m-auto">
            <div className="text-[#FEFEFF] text-center my-2 sm:my-3 mb-3 sm:mb-4">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="bg-[#3D4871] text-2xl sm:text-3xl md:text-4xl rounded-full p-3 sm:p-4 scale-[1.1] "
              />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2 font-roadRadio tracking-wide text-center sm:text-left">
              {data.title1}
            </h3>
            <p className="text-base sm:text-lg md:text-xl tracking-wide font-gilroy">
              {data.description1}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#3D4871] p-3 shadow-[8px_8px_16px_rgba(0,0,0,0.25)] z-[4]"
        >
          <div className="w-[90%] sm:w-[85%] m-auto">
            <div className="text-white text-center my-2 sm:my-3 mb-3 sm:mb-4">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="bg-[#757575] text-2xl sm:text-3xl md:text-4xl rounded-full p-3 sm:p-4 py-[14px] sm:py-[18px]"
              />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2 font-roadRadio tracking-wide text-[#FEFEFF] text-center sm:text-left">
              {data.title2}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-gilroy tracking-wide text-[#FEFEFF]">
              {data.description2}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#757575] p-3 shadow-[8px_8px_16px_rgba(0,0,0,0.25)] z-[3]"
        >
          <div className="w-[90%] sm:w-[85%] m-auto">
            <div className="text-[#FEFEFF] text-center my-2 sm:my-3 mb-3 sm:mb-4">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                className="bg-[#3D4871] text-2xl sm:text-3xl md:text-4xl scale-[1.10] rounded-full p-3 sm:p-4"
              />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2 font-roadRadio tracking-wide text-center sm:text-left">
              {data.title3}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-gilroy tracking-wide">
              {data.description3}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#3D4871] p-3 shadow-[8px_8px_16px_rgba(0,0,0,0.25)] z-[2]"
        >
          <div className="w-[90%] sm:w-[85%] m-auto">
            <div className="text-white text-center my-2 sm:my-3 mb-3 sm:mb-4">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="bg-[#757575] text-2xl sm:text-3xl md:text-4xl rounded-full p-3 sm:p-4 px-3 sm:px-[14px] scale-[1.07]"
              />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2 font-roadRadio tracking-wide text-[#FEFEFF] text-center sm:text-left">
              {data.title4}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-gilroy tracking-wide text-[#FEFEFF]">
              {data.description4}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#757575] p-3 shadow-[8px_8px_16px_rgba(0,0,0,0.25)] z-[1]"
        >
          <div className="w-[90%] sm:w-[85%] m-auto">
            <div className="text-[#FEFEFF] text-center my-2 sm:my-3 mb-3 sm:mb-4">
              <FontAwesomeIcon
                icon={faFileContract}
                className="bg-[#3D4871] text-2xl sm:text-3xl md:text-4xl rounded-full p-3 sm:p-4 px-[16px] scale-[1.07] sm:px-[21px]"
              />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2 font-roadRadio tracking-wide text-center sm:text-left">
              {data.title5}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-gilroy tracking-wide">
              {data.description5}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyTrustUs;
