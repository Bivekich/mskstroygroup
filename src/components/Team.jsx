import { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient";
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
      duration: 1.0,
      ease: "easeOut",
    },
  },
};

// Add container variants for staggered children
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};

const TeamSection = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Fetch team members from Sanity
    client
      .fetch(
        `*[_type == "teamMember"]{
          name,
          logo,
          description
        }`
      )
      .then((data) => setPartners(data))
      .catch(console.error);
  }, []);

  if (!partners.length) return null;

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className=" text-center flex flex-col justify-center items-center w-[85%] sm:w-[80%] m-auto mb-4 sm:mb-8 p-4 sm:p-6"
    >
      {/* Title */}
      <div className="relative mb-5">
        <h2 className="text-center text-[#3D4871] text-4xl sm:text-5xl md:text-7xl font-roadRadio relative z-10">
          НАША КОМАНДА
        </h2>
        <div className="inset-0 flex items-center justify-center">
          <h1 className="text-[35px] sm:text-[60px] md:text-[80px] xl:text-[120px] lg:mt-[-50px] text-[#757575] font-roadRadio whitespace-nowrap">
            ЭКСПЕРТЫ
          </h1>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 w-full"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className="flex flex-col items-center"
          >
            <div className="relative w-full h-0 pb-[100%] bg-black overflow-hidden mb-4 sm:mb-7">
              {/* Grey Tint Overlay */}
              <div className="absolute inset-0 bg-[#FEFEFF] opacity-[0] duration-500 transition-all z-[2]" />

              {/* Image */}
              <img
                src={urlFor(partner.logo).url()}
                alt={partner.name}
                className=" absolute inset-0 w-full h-full object-cover hover:rounded-2xl transition-all duration-700 z-[1]"
              />
            </div>
            <div className="mb-2 sm:mb-3">
              <h2 className="text-2xl sm:text-3xl font-roadRadio">
                {partner.name}
              </h2>
            </div>
            <p className="w-[90%] sm:w-[80%] md:w-[70%] font-light text-lg sm:text-xl md:text-2xl m-auto text-left">
              {partner.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TeamSection;
