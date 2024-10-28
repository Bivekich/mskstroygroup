import React, { useEffect, useState } from "react";
import Quote from "../assets/images/quote.svg";
import client from "../sanityClient";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "reviews"]{
            name1, description1,
            name2, description2,
            name3, description3,
            name4, description4
          }`
      )
      .then((data) => setTestimonials(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-[#393939] text-white py-10 relative">
      <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[80px] relative z-10">
        МНЕНИЕ ЗАКАЗЧИКОВ
      </h2>

      <div className="absolute right-0 top-45 items-center">
        <div className="text-[#757575] text-[100px] leading-[90px] font-roadRadio -rotate-90">
          ОТЗЫВЫ <br />
          НАШИХ <br />
          КЛИЕНТОВ
        </div>
      </div>

      <div className="flex flex-col space-y-8 w-[90%] mx-auto">
        {/* Testimonial 1 */}
        {testimonials[0] && (
          <div className="bg-[#757575] p-6 flex flex-col w-8/12 space-y-4 pb-20 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all">
            <img
              src={Quote}
              alt="Quote Icon"
              className="text-[#8BFF30] w-[70px]"
            />
            <p className="text-white text-2xl w-[90%] m-auto">
              {testimonials[0].description1 || "Default testimonial text"}
            </p>
            <p className="text-[#8BFF30] font-roadRadio text-2xl pt-5 w-[90%] m-auto">
              — {testimonials[0].name1 || "Anonymous"}
            </p>
          </div>
        )}

        {/* Testimonial 2 */}
        {testimonials[0] && (
          <div className="bg-[#757575] ml-[10%] p-6 flex flex-col w-8/12 space-y-4 pb-20 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all">
            <img
              src={Quote}
              alt="Quote Icon"
              className="text-[#8BFF30] w-[70px]"
            />
            <p className="text-white text-2xl w-[90%] m-auto">
              {testimonials[0].description2 || "Default testimonial text"}
            </p>
            <p className="text-[#8BFF30] font-roadRadio text-2xl pt-5 w-[90%] m-auto">
              — {testimonials[0].name2 || "Anonymous"}
            </p>
          </div>
        )}

        {/* Testimonial 3 */}
        {testimonials[0] && (
          <div className="bg-[#757575] ml-[20%] p-6 flex flex-col w-8/12 space-y-4 pb-20 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all">
            <img
              src={Quote}
              alt="Quote Icon"
              className="text-[#8BFF30] w-[70px]"
            />
            <p className="text-white text-2xl w-[90%] m-auto">
              {testimonials[0].description3 || "Default testimonial text"}
            </p>
            <p className="text-[#8BFF30] font-roadRadio text-2xl pt-5 w-[90%] m-auto">
              — {testimonials[0].name3 || "Anonymous"}
            </p>
          </div>
        )}

        {/* Testimonial 4 */}
        {testimonials[0] && (
          <div className="bg-[#757575] ml-[30%] p-6 flex flex-col w-8/12 space-y-4 pb-20 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all">
            <img
              src={Quote}
              alt="Quote Icon"
              className="text-[#8BFF30] w-[70px]"
            />
            <p className="text-white text-2xl w-[90%] m-auto">
              {testimonials[0].description4 || "Default testimonial text"}
            </p>
            <p className="text-[#8BFF30] font-roadRadio text-2xl pt-5 w-[90%] m-auto">
              — {testimonials[0].name4 || "Anonymous"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsSection;
