import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient"; // Adjust path as needed
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
      <div className="text-white font-roadRadio text-center text-5xl">
        Loading...
      </div>
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
    <div className="bg-[#393939] text-white p-8 relative mt-10 mb-10 w-[90%] m-auto">
      <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[90px] relative z-10">
        НАШИ ПРОЕКТЫ
      </h2>

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[160px] text-[#757575] font-roadRadio absolute top-0 whitespace-nowrap">
          СТРОЙ ГРУПП
        </h1>
      </div>

      <div className="h-[90vh] flex items-center justify-center relative z-5 ">
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <div className="w-full h-[90vh] relative overflow-hidden">
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

            <div className="flex relative mt-[42%] justify-center cursor-pointer">
              <button
                onClick={handlePrevImage}
                className="text-[#5c5c5c] text-4xl px-3 py-1 size-[100px]  duration-500  bg-[#8BFF30] hover:bg-[#50824a] z-5 shadow-3xl hover:text-gray-300 transition relative"
              >
                &lt;
              </button>
              <button
                onClick={handleNextImage}
                className="text-[#5c5c5c] text-4xl px-3 py-1 size-[100px] duration-500  bg-[#8BFF30] hover:bg-[#50824a] hover:text-gray-300 transition"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
