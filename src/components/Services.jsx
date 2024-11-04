import React, { useEffect, useState } from "react";
import client from "../sanityClient";
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const CompanyServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "service"]{
          _id,
          title,
          description,
          "iconUrl": icon.asset->url
        }`
      )
      .then((data) => setServices(data))
      .catch(console.error);
  }, []);

  if (!services.length) return <LoadingSpinner />;

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-[#FEFEFF] p-4 sm:p-6 md:p-8 min-h-screen flex flex-col items-center w-[95%] sm:w-[90%] md:w-[85%] xl:w-[75%] m-auto mb-10 sm:mb-15 md:mb-20"
    >
      {/* Title Section */}
      <div className="relative text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <h2
          className="text-[#3D4871] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-roadRadio 
                      mb-[45px] sm:mb-[60px] md:mb-[75px] lg:mb-[90px] relative z-10"
        >
          УСЛУГИ КОМПАНИИ
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-[40px] top-8 sm:text-[70px] lg:mt-[-30px] sm:top-12 md:text-[100px] md:top-7 
                        lg:text-[130px] lg:top-4 xl:text-[160px] xl:top-0 
                        text-[#757575] font-roadRadio absolute whitespace-nowrap"
          >
            УСЛУГИ
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[80px] w-full text-white">
        {services.map((service, index) => {
          const isEvenRow = Math.floor(index / 2) % 2 === 0;
          const isLeftColumn = index % 2 === 0;
          const iconColor = isEvenRow
            ? isLeftColumn
              ? "bg-[#3D4871] text-black"
              : "bg-white text-[#3D4871]"
            : isLeftColumn
            ? "bg-white text-[#3D4871]"
            : "bg-[#3D4871] text-black";

          return (
            <motion.div
              key={service._id}
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-[#707070] p-4 sm:p-6 md:p-8 text-white hover:shadow-xl transition-all min-h-[500px]"
            >
              <div className="flex mb-4 ml-10">
                <div
                  className={`${iconColor} rounded-full w-[80px] h-[80px] flex justify-center items-center overflow-hidden text-4xl z-[1]`}
                >
                  {service.iconUrl ? (
                    <img
                      src={service.iconUrl}
                      alt={service.title}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  ) : (
                    "📄" // Fallback icon or emoji if icon is missing
                  )}
                </div>
              </div>
              <h3 className="text-4xl font-roadRadio mb-4 ml-10">
                {service.title}
              </h3>
              <p className="text-3xl font-light text-left ml-10 mb-10">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CompanyServices;
