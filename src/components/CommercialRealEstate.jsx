import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient"; // Adjust the path as needed
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

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#55b74a",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const CommercialRealEstate = ({ togglePopup }) => {
  const [content, setContent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  useEffect(() => {
    client
      .fetch(`*[_type == "commercialRealEstate"][0]`)
      .then((data) => setContent(data))
      .catch(console.error);
  }, []);

  if (!content) {
    return (
      <LoadingSpinner />
    );
  }

  const { images } = content;

  const handlePrevImage = () => {
    setSlideDirection("prev");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setSlideDirection("next");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-[#393939] text-white p-4 sm:p-6 md:p-8 flex flex-col xl:flex-row justify-between items-center w-[95%] md:w-[90%] m-auto mt-5 md:mt-10 mb-5 md:mb-10"
    >
      <div className="w-full xl:w-[50%] flex flex-col justify-between">
        <h2 className="text-[32px] md:text-[43px] mb-4 leading-[36px] md:leading-[42px] font-roadRadio">
          {content.title}
        </h2>
        <p className="mb-6 md:mb-8 text-[24px] md:text-[32px] leading-7 md:leading-9 w-full xl:w-[90%] font-light">
          {content.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between text-[20px] md:text-[25px] text-[#757575] mb-6 md:mb-8 font-roadRadio leading-6 gap-6 sm:gap-0">
          <div>
            <p className="w-full sm:w-[150px]">{content.experience}</p>
          </div>
          <div className="hidden sm:block w-[1px] h-[90px] bg-[#757575] mt-[-10px]"></div>
          <div>
            <p className="w-full sm:w-[200px]">{content.qualification}</p>
          </div>
          <div className="hidden sm:block w-[1px] h-[90px] bg-[#757575] mt-[-10px]"></div>
          <div>
            <p className="w-full sm:w-[300px]">{content.individualApproach}</p>
          </div>
        </div>
        <div className="hidden xl:block">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            onClick={togglePopup}
            className="bg-[#8BFF30] text-[#393939] py-4 md:py-5 w-full xl:max-w-[350px] font-roadRadio font-semibold text-lg md:text-xl"
          >
            {content.buttonText}
          </motion.button>
        </div>
      </div>
      <div className="xl:hidden w-full mt-6">
        <button 
          onClick={togglePopup}
          className="bg-[#8BFF30] text-[#393939] py-4 md:py-5 w-full hover:scale-[1.01] hover:bg-[#55b74a] transition font-roadRadio font-semibold text-lg md:text-xl"
        >
          {content.buttonText}
        </button>
      </div>

      <div className="w-full xl:w-[50%] h-[40vh] xl:h-[65vh] relative overflow-hidden mt-6 xl:mt-0">
        {images && images.length > 0 && (
          <motion.div
            key={currentImageIndex}
            initial={{ 
              x: slideDirection === "next" ? 1000 : -1000,
              opacity: 0 
            }}
            animate={{ 
              x: 0,
              opacity: 1 
            }}
            exit={{ 
              x: slideDirection === "next" ? -1000 : 1000,
              opacity: 0 
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.img
              variants={imageVariants}
              whileHover="hover"
              src={urlFor(images[currentImageIndex]).url()}
              alt={`Carousel image ${currentImageIndex + 1}`}
              className="object-cover h-full w-full"
            />
          </motion.div>
        )}

        <div className="flex relative mt-[200px] xs:mt-[270px] sm:mt-[220px] xl:mt-[60%] justify-center cursor-pointer ">
          <motion.button
        
            onClick={handlePrevImage}
            className="text-[#5c5c5c] text-3xl md:text-4xl px-2 md:px-3 py-1 size-[60px] md:size-[80px] bg-[#8BFF30] hover:bg-[#50824a] z-5 shadow-3xl hover:text-gray-300 transition relative"
          >
            &lt;
          </motion.button>
          <motion.button
            onClick={handleNextImage}
            className="text-[#5c5c5c] text-3xl md:text-4xl px-2 md:px-3 py-1 size-[60px] md:size-[80px] bg-[#8BFF30] hover:bg-[#50824a] hover:text-gray-300 transition"
          >
            &gt;
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CommercialRealEstate;
