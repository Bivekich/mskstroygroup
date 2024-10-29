import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient";
import { motion } from "framer-motion";

const Partners = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "partners"][0]`)
      .then((data) => setContent(data))
      .catch(console.error);
  }, []);

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

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  if (!content) {
    return null;
  }

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-[#393939] text-white p-4 sm:p-8 relative mt-5 sm:mt-10 mb-5 sm:mb-10 w-[95%] sm:w-[90%] m-auto"
    >
      <h2 className="text-center text-[#8BFF30] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-[45px] sm:mb-[90px] relative z-10">
        {content.title}
      </h2>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
      >
        {content.partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className="bg-[#757575] p-4 flex items-center justify-center"
          >
            <img
              src={urlFor(partner.image).url()}
              alt={partner.name}
              className="max-w-full h-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Partners;
