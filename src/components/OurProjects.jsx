import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient"; // Adjust path as needed
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion } from "framer-motion";

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
    return (
      <div className="text-white font-roadRadio text-center text-5xl"></div>
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

  const fadeInVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-[#393939] text-white p-4 sm:p-8 relative mt-5 sm:mt-10 mb-5 sm:mb-10 w-[95%] sm:w-[90%] m-auto"
    >
      <h2 className="text-center text-[#8BFF30] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-[45px] sm:mb-[90px] relative z-10">
        НАШИ ПРОЕКТЫ
      </h2>

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[40px] top-8 sm:text-[70px] sm:top-12 md:text-[100px] md:top-7 xl:top-0 xl:text-[160px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
          СТРОЙ ГРУПП
        </h1>
      </div>

      <div className="h-[50vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center relative z-5">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 sm:gap-8">
          <div className="w-full h-full relative overflow-hidden">
            {images && images.length > 0 && (
              <TransitionGroup component={null}>
                <CSSTransition
                  key={currentImageIndex}
                  timeout={500}
                  classNames={
                    slideDirection === "next" ? "slide-next" : "slide-prev"
                  }
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={urlFor(images[currentImageIndex]).url()}
                      alt={`Carousel image ${currentImageIndex + 1}`}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </CSSTransition>
              </TransitionGroup>
            )}

            <div className="flex absolute bottom-4 sm:bottom-8 left-1/2 transform  -translate-x-1/2 justify-center cursor-pointer">
              <button
                onClick={handlePrevImage}
                className="text-[#5c5c5c] text-2xl sm:text-4xl px-2 sm:px-3 py-1 size-[70px] sm:size-[70px] md:size-[100px] duration-500 bg-[#8BFF30] hover:bg-[#50824a] z-5 shadow-3xl hover:text-gray-300 transition relative"
              >
                &lt;
              </button>
              <button
                onClick={handleNextImage}
                className="text-[#5c5c5c] text-2xl sm:text-4xl px-2 sm:px-3 py-1 size-[70px] sm:size-[70px] md:size-[100px] duration-500 bg-[#8BFF30] hover:bg-[#50824a] hover:text-gray-300 transition"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurProjects;
