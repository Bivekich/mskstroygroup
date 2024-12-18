import { useEffect, useState } from "react";
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
      className="text-center flex flex-col justify-center items-center w-[85%] sm:w-[80%] m-auto mb-4 sm:mb-8 p-4 sm:p-6"
    >
      {/* Title */}
      <div className="relative  mb-5">
        <h2 className="text-center text-[#3D4871] text-4xl sm:text-5xl md:text-7xl font-roadRadio relative z-10">
          НАШИ ПАРТНЕРЫ
        </h2>
        <div className=" inset-0 flex items-center justify-center">
          <h1 className="text-[35px] sm:text-[60px] md:text-[80px] xl:text-[120px] lg:mt-[-50px]  text-[#757575] font-roadRadio whitespace-nowrap">
            ПАРТНЕРЫ
          </h1>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 w-full"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className="flex justify-center items-center duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            {partner.logo ? (
              <a
                href={partner.link}
                target="_blank"
                className="relative w-full h-0 pb-[100%] bg-black overflow-hidden"
              >
                {/* Grey Tint Overlay */}
                <div className="absolute inset-0 bg-[#FEFEFF] opacity-30 hover:opacity-10 duration-500 transition-all z-[2]" />

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
      </motion.div>
    </motion.div>
  );
};

export default PartnerLogos;
