import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient"; // Adjust path as needed
import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";

const OurProjects = () => {
  const [content, setContent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  useEffect(() => {
    client
      .fetch(`*[_type == "project"][0]`)
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
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-[#FEFEFF] text-white p-4 sm:p-8 relative mt-5 sm:mt-10 mb-5 sm:mb-10 w-[95%] sm:w-[90%] m-auto"
    >
      <motion.h2
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center text-[#3D4871] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-[45px] sm:mb-[90px] relative z-10"
      >
        НАШИ ПРОЕКТЫ
      </motion.h2>

      <motion.div
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h1 className="text-[40px] top-8 sm:text-[70px] sm:top-12 md:text-[100px] md:top-7 xl:top-0 xl:text-[160px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
          СТРОЙ ГРУПП
        </h1>
      </motion.div>

      <motion.div
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-[50vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center relative z-5"
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 sm:gap-8">
          <div className="w-full h-full relative overflow-hidden">
            {images && images.length > 0 && (
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex}
                  initial={{
                    x: slideDirection === "next" ? "100%" : "-100%",
                    opacity: 1,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: slideDirection === "next" ? "-100%" : "100%",
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 50,
                    mass: 1,
                    duration: 0.1,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={urlFor(images[currentImageIndex]).url()}
                    alt={`Carousel image ${currentImageIndex + 1}`}
                    className="object-cover h-full w-full"
                  />
                </motion.div>
              </AnimatePresence>
            )}

            <motion.div
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="absolute bottom-4 sm:bottom-8 w-full flex justify-center items-center"
            >
              <div className="flex">
                <motion.button
                  onClick={handlePrevImage}
                  className="text-white text-2xl sm:text-4xl px-2 sm:px-3 py-1 size-[70px] sm:size-[70px] md:size-[100px] duration-500 bg-[#3D4871] hover:bg-[#7a82ab] z-5 shadow-3xl hover:text-gray-300 transition relative"
                >
                  &lt;
                </motion.button>
                <motion.button
                  onClick={handleNextImage}
                  className="text-white text-2xl sm:text-4xl px-2 sm:px-3 py-1 size-[70px] sm:size-[70px] md:size-[100px] duration-500 bg-[#3D4871] hover:bg-[#7a82ab] hover:text-gray-300 transition"
                >
                  &gt;
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OurProjects;
