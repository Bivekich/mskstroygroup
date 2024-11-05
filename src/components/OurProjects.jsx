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
        duration: 1,
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
      className=" text-white p-3 sm:p-6 relative mt-4 sm:mt-8 mb-4 sm:mb-8 w-[85%] sm:w-[75%] m-auto"
    >
      <motion.h2
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center text-[#3D4871] text-3xl sm:text-4xl md:text-5xl font-roadRadio mb-[35px] sm:mb-[70px] relative z-10"
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
        <h1 className="text-[35px] top-8 sm:text-[60px] sm:top-10 md:text-[80px] md:top-6 xl:top-0 xl:text-[120px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
          СТРОЙ ГРУПП
        </h1>
      </motion.div>

      <motion.div
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-[40vh] sm:h-[60vh] md:h-[75vh] flex items-center justify-center relative z-5"
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 sm:gap-6">
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
              className="absolute bottom-3 sm:bottom-6 w-full flex justify-center items-center"
            >
              <div className="flex">
                <motion.button
                  onClick={handlePrevImage}
                  className="text-white text-xl sm:text-3xl px-2 sm:px-3 py-1 size-[50px] sm:size-[60px] md:size-[80px] duration-500 bg-[#3D4871] hover:bg-[#7a82ab] z-5 shadow-3xl hover:text-gray-300 transition relative"
                >
                  &lt;
                </motion.button>
                <motion.button
                  onClick={handleNextImage}
                  className="text-white text-xl sm:text-3xl px-2 sm:px-3 py-1 size-[50px] sm:size-[60px] md:size-[80px] duration-500 bg-[#3D4871] hover:bg-[#7a82ab] hover:text-gray-300 transition"
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
