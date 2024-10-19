import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="bg-[#393939] text-white py-10 relative">
      {/* Title on the top */}
      <h2 className="text-center text-lime-400 text-xl font-bold mb-10">МНЕНИЕ ЗАКАЗЧИКОВ</h2>

      {/* Vertical title on the right side */}
      <div className="absolute right-0 top-0 h-full flex items-center">
        <div className="text-gray-500 text-3xl font-bold rotate-90">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</div>
      </div>

      {/* Testimonials container */}
      <div className="flex flex-col space-y-8 max-w-5xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-[#757575] p-6 flex flex-col space-y-4">
          {/* Quote Icon */}
          <div className="text-lime-400 text-5xl">“</div>
          {/* Testimonial Text */}
          <p className="text-gray-300 text-sm">
            Felis sodales laoreet fermentum laoreet suspendisse mattis lacinia risus. Sollicitudin vulputate ultrices
            hendrerit tempor facilisis ligula. Curabitur leo ridiculus, etiam non amet quetant et fringilla non sagittis.
            Curae pretium montes ac accumsan habitant.
          </p>
          {/* Author */}
          <p className="text-lime-400 font-semibold">— Кирилл Лугович</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-[#757575] p-6 flex flex-col space-y-4">
          <div className="text-lime-400 text-5xl">“</div>
          <p className="text-gray-300 text-sm">
            Felis sodales laoreet fermentum laoreet suspendisse mattis lacinia risus. Sollicitudin vulputate ultrices
            hendrerit tempor facilisis ligula. Curabitur leo ridiculus, etiam non amet quetant et fringilla non sagittis.
            Curae pretium montes ac accumsan habitant.
          </p>
          <p className="text-lime-400 font-semibold">— Кирилл Лугович</p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-[#757575] p-6 flex flex-col space-y-4">
          <div className="text-lime-400 text-5xl">“</div>
          <p className="text-gray-300 text-sm">
            Felis sodales laoreet fermentum laoreet suspendisse mattis lacinia risus. Sollicitudin vulputate ultrices
            hendrerit tempor facilisis ligula. Curabitur leo ridiculus, etiam non amet quetant et fringilla non sagittis.
            Curae pretium montes ac accumsan habitant.
          </p>
          <p className="text-lime-400 font-semibold">— Кирилл Лугович</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
