import React from "react";
import Quote from "../assets/images/quote.svg";

const TestimonialsSection = () => {
  return (
    <div className="bg-[#393939] text-white py-10 relative">
      {/* Title on the top */}
      <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[80px] relative z-10">
        МНЕНИЕ ЗАКАЗЧИКОВ
      </h2>

      {/* Vertical title on the right side */}
      <div className="absolute right-0 top-45  items-center">
        <div className="text-[#757575] text-[100px] leading-[90px] font-roadRadio -rotate-90">
          ОТЗЫВЫ <br />
          НАШИХ <br />
          КЛИЕНТОВ
        </div>
      </div>

      {/* Testimonials container */}
      <div className="flex flex-col space-y-8 w-[90%] mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-[#757575] p-6 flex flex-col w-8/12 space-y-4 pb-20 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all">
          {/* Quote Icon */}
          <img
            src={Quote}
            alt="Quote Icon"
            className=" text-[#8BFF30] w-[70px]"
          />
          {/* Testimonial Text */}
          <p className="text-white text-2xl w-[90%] m-auto">
            Felis sodales laoreet fermentum laoreet suspendisse mattis lacinia
            risus. Sollicitudin vulputate ultrices hendrerit tempor facilisis
            ligula. Curabitur leo ridiculus, etiam non amet quetant et fringilla
            non sagittis. Curae pretium montes ac accumsan habitant.
          </p>
          {/* Author */}
          <p className="text-[#8BFF30] font-roadRadio text-2xl pt-5 w-[90%] m-auto">
            — Кирилл Лугович
          </p>
        </div>

        <div className="bg-[#757575] ml-[10%] p-6 flex flex-col w-8/12 space-y-4 pb-20 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all">
          {/* Quote Icon */}
          <img
            src={Quote}
            alt="Quote Icon"
            className=" text-[#8BFF30] w-[70px]"
          />
          <p className="text-white text-2xl w-[90%] m-auto">
            Felis sodales laoreet fermentum laoreet suspendisse mattis lacinia
            risus. Sollicitudin vulputate ultrices hendrerit tempor facilisis
            ligula. Curabitur leo ridiculus, etiam non amet quetant et fringilla
            non sagittis. Curae pretium montes ac accumsan habitant.
          </p>
          <p className="text-[#8BFF30] font-roadRadio text-2xl pt-5 w-[90%] m-auto">
            — Кирилл Лугович
          </p>
        </div>

        <div className="bg-[#757575] ml-[20%] p-6 flex flex-col w-8/12 space-y-4 pb-20 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all">
          {/* Quote Icon */}
          <img
            src={Quote}
            alt="Quote Icon"
            className=" text-[#8BFF30] w-[70px]"
          />
          <p className="text-white text-2xl w-[90%] m-auto">
            Felis sodales laoreet fermentum laoreet suspendisse mattis lacinia
            risus. Sollicitudin vulputate ultrices hendrerit tempor facilisis
            ligula. Curabitur leo ridiculus, etiam non amet quetant et fringilla
            non sagittis. Curae pretium montes ac accumsan habitant.
          </p>
          <p className="text-[#8BFF30] font-roadRadio text-2xl pt-5 w-[90%] m-auto">
            — Кирилл Лугович
          </p>
        </div>

        <div className="bg-[#757575] ml-[30%] p-6 flex flex-col w-8/12 space-y-4 pb-20 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all">
          {/* Quote Icon */}
          <img
            src={Quote}
            alt="Quote Icon"
            className=" text-[#8BFF30] w-[70px]"
          />
          <p className="text-white text-2xl w-[90%] m-auto">
            Felis sodales laoreet fermentum laoreet suspendisse mattis lacinia
            risus. Sollicitudin vulputate ultrices hendrerit tempor facilisis
            ligula. Curabitur leo ridiculus, etiam non amet quetant et fringilla
            non sagittis. Curae pretium montes ac accumsan habitant.
          </p>
          <p className="text-[#8BFF30] font-roadRadio text-2xl pt-5 w-[90%] m-auto">
            — Кирилл Лугович
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
