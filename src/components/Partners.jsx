import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";

// Configure Sanity client
const client = sanityClient({
  projectId: "d3jxz1tr", // Replace with your project ID
  dataset: "production",
  useCdn: true,
});

// Image URL builder function
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

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

const PartnerLogos = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "partnerLogo"]{name, logo, link}`)
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
      className="bg-[#393939] text-center flex flex-col justify-center items-center w-[95%] sm:w-[97%] m-auto mb-5 sm:mb-10 p-4 sm:p-8"
    >
      {/* Title */}
      <div className="relative  mb-5">
        <h2 className="text-center text-[#8BFF30] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-[30px] sm:mb-[50px] md:mb-[90px] relative z-10">
          НАШИ ПАРТНЕРЫ
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[40px] top-4 sm:text-[70px] lg:mt-[-20px] sm:top-6 md:text-[100px] md:top-4 xl:text-[160px] xl:top-0 text-[#757575] font-roadRadio absolute whitespace-nowrap">
            ПАРТНЕРЫ
          </h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 w-full">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center items-center duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            {partner.logo ? (
              <a
                href={partner.link}
                target="_blank"
                className="relative w-full h-0 pb-[100%] bg-black overflow-hidden"
              >
                {/* Grey Tint Overlay */}
                <div className="absolute inset-0 bg-[#393939] opacity-30 hover:opacity-10 duration-500 transition-all z-[2]" />

                {/* Image */}
                <img
                  src={urlFor(partner.logo).url()}
                  alt={partner.name}
                  className="p-10 absolute inset-0 w-full h-full object-cover hover:rounded-2xl transition-all duration-700 z-[1]"
                />
              </a>
            ) : (
              <span className="text-6xl text-white font-roadRadio text-center">
                {partner.name}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PartnerLogos;
