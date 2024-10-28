import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient"; // Adjust the path as needed
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CommercialRealEstate = () => {
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
    <div className="bg-[#393939] text-white p-8 flex justify-between items-center w-[90%] m-auto mt-10 mb-10">
      <div className="w-[50%] flex flex-col justify-between h-[65vh]">
        <h2 className="text-[44px] mb-4 leading-[42px] font-roadRadio">
          {content.title}
        </h2>
        <p className="mb-8 text-4xl w-[90%] font-light">
          {content.description}
        </p>
        <div className="flex justify-between text-[25px] text-[#757575] mb-8 font-roadRadio leading-6">
          <div>
            <p className="w-[150px]">{content.experience}</p>
          </div>
          <div className="w-[1px] h-[90px] bg-[#757575] mt-[-10px]"></div>
          <div>
            <p className="w-[200px]">{content.qualification}</p>
          </div>
          <div className="w-[1px] h-[90px] bg-[#757575] mt-[-10px]"></div>
          <div>
            <p className="w-[300px]">{content.individualApproach}</p>
          </div>
        </div>
        <button className="bg-[#8BFF30] text-[#393939] py-5 max-w-[350px] hover:scale-[1.01] hover:bg-[#55b74a] transition font-roadRadio font-semibold text-xl">
          {content.buttonText}
        </button>
      </div>

      <div className="w-[50%] h-[65vh] relative overflow-hidden">
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

        <div className="flex relative mt-[60%] justify-center cursor-pointer">
          <button
            onClick={handlePrevImage}
            className="text-[#5c5c5c] text-4xl px-3 py-1 size-[80px]  duration-500  bg-[#8BFF30] hover:bg-[#50824a] z-5 shadow-3xl hover:text-gray-300 transition relative"
          >
            &lt;
          </button>
          <button
            onClick={handleNextImage}
            className="text-[#5c5c5c] text-4xl px-3 py-1 size-[80px] duration-500  bg-[#8BFF30] hover:bg-[#50824a] hover:text-gray-300 transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommercialRealEstate;
