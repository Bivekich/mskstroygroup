import { useEffect, useState } from "react";
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
      duration: 2,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  initial: {
    backgroundColor: "#3D4871",
    scale: 1,
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#7a82ab",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 2,
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
    return <LoadingSpinner />;
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
      className="bg-[#FEFEFF] text-[#4c5e9e] p-3 sm:p-4 md:p-6 flex flex-col 2xl:flex-row justify-between w-[85%] md:w-[75%] m-auto mt-4 md:mt-8 mb-4 md:mb-8"
    >
      <div className="w-full 2xl:w-[50%] flex flex-col justify-between">
        <h2 className="text-[28px] md:text-[36px] mb-3 leading-[32px] md:leading-[38px] font-roadRadio">
          {content.title}
        </h2>
        <p className="mb-5 md:mb-6 text-[18px] md:text-[24px] leading-6 md:leading-8 w-full 2xl:w-[85%] font-light">
          {content.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between text-[16px] md:text-[18px] text-[#757575] mb-4 md:mb-6 font-roadRadio leading-6 gap-6 sm:gap-0">
          <div>
            <p className="w-full sm:w-[100px]">{content.experience}</p>
          </div>
          <div className="hidden sm:block w-[1px] h-[90px] bg-[#757575] mt-[-10px]"></div>
          <div>
            <p className="w-full sm:w-[200px]">{content.qualification}</p>
          </div>
          <div className="hidden sm:block w-[1px] h-[90px] bg-[#757575] mt-[-10px]"></div>
          <div>
            <p className="w-full sm:w-[200px]">{content.individualApproach}</p>
          </div>
        </div>
        <div className="hidden 3xl:block">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            onClick={togglePopup}
            className="bg-[#3D4871] text-[#F1F2F3] py-4 md:py-5 w-full 2xl:max-w-[350px] font-roadRadio font-semibold text-lg md:text-xl"
          >
            {content.buttonText}
          </motion.button>
        </div>
      </div>
      <div className="2xl:hidden w-full mt-6">
        <button
          onClick={togglePopup}
          className="bg-[#3D4871] text-[#FEFEFF] py-4 md:py-5 w-full hover:scale-[1.01] hover:bg-[#7a82ab] transition font-roadRadio font-semibold text-lg md:text-xl"
        >
          {content.buttonText}
        </button>
      </div>

      <div className="w-full 2xl:w-[45%] h-[35vh] 2xl:h-[60vh] relative overflow-hidden mt-6 2xl:mt-0">
        {images && images.length > 0 && (
          <motion.div
            key={currentImageIndex}
            initial={{
              x: slideDirection === "next" ? 1000 : -1000,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: slideDirection === "next" ? -1000 : 1000,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
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

        <div className="flex relative mt-[200px] xs:mt-[270px] sm:mt-[220px] 2xl:mt-[60%] justify-center cursor-pointer ">
          <motion.button
            onClick={handlePrevImage}
            className="text-white text-3xl md:text-4xl px-2 md:px-3 py-1 size-[60px] md:size-[80px] bg-[#3D4871] hover:bg-[#7a82ab] z-5 shadow-3xl hover:text-gray-300 transition relative"
          >
            &lt;
          </motion.button>
          <motion.button
            onClick={handleNextImage}
            className="text-white text-3xl md:text-4xl px-2 md:px-3 py-1 size-[60px] md:size-[80px] bg-[#3D4871] hover:bg-[#7a82ab] hover:text-gray-300 transition"
          >
            &gt;
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CommercialRealEstate;
