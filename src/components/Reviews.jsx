import { useEffect, useState } from "react";
import Quote from "../assets/images/quote.svg";
import client from "../sanityClient";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

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

  if (!testimonials.length) return null;

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className=" text-white py-5 sm:py-8 md:py-10 relative"
    >
      <h2 className="text-center text-[#3D4871] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-[40px] sm:mb-[60px] md:mb-[80px] relative z-10">
        МНЕНИЕ ЗАКАЗЧИКОВ
      </h2>

      {/* Background Text - Hidden below lg screens */}
      <div className="hidden lg:block absolute right-0 top-45 items-center">
        <div className="text-[#757575] mr-[35%] text-[80px] lg:text-[100px] leading-[1.1] font-roadRadio -rotate-90">
          ОТЗЫВЫ <br />
          НАШИХ <br />
          КЛИЕНТОВ
        </div>
      </div>

      <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 w-[95%] sm:w-[85%] md:w-[80%] mx-auto">
        {/* Testimonial 1 */}
        {testimonials[0] && (
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#757575] p-3 sm:p-4 md:p-5 flex flex-col w-full lg:w-7/12 space-y-2 sm:space-y-3 pb-6 sm:pb-8 md:pb-16 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            <img
              src={Quote}
              alt="Quote Icon"
              className="text-[#3D4871] w-[40px] sm:w-[55px] md:w-[70px]"
            />
            <p className="text-white text-base sm:text-lg md:text-xl w-[90%] sm:w-[85%] md:w-[80%] m-auto">
              {testimonials[0].description1 || "Default testimonial text"}
            </p>
            <p className="text-[#3D4871] font-roadRadio text-xl sm:text-xl md:text-2xl pt-3 sm:pt-4 md:pt-5 w-[95%] sm:w-[92%] md:w-[90%] m-auto">
              — {testimonials[0].name1 || "Anonymous"}
            </p>
          </motion.div>
        )}

        {/* Testimonial 2 */}
        {testimonials[0] && (
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#757575] lg:ml-[10%] p-3 sm:p-4 md:p-5 flex flex-col w-full lg:w-7/12 space-y-2 sm:space-y-3 pb-6 sm:pb-8 md:pb-16 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            <img
              src={Quote}
              alt="Quote Icon"
              className="text-[#3D4871] w-[40px] sm:w-[55px] md:w-[70px]"
            />
            <p className="text-white text-base sm:text-lg md:text-xl w-[90%] sm:w-[85%] md:w-[80%] m-auto">
              {testimonials[0].description2 || "Default testimonial text"}
            </p>
            <p className="text-[#3D4871] font-roadRadio text-xl sm:text-xl md:text-2xl pt-3 sm:pt-4 md:pt-5 w-[95%] sm:w-[92%] md:w-[90%] m-auto">
              — {testimonials[0].name2 || "Anonymous"}
            </p>
          </motion.div>
        )}

        {/* Testimonial 3 */}
        {testimonials[0] && (
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#757575] lg:ml-[20%] p-3 sm:p-4 md:p-5 flex flex-col w-full lg:w-7/12 space-y-2 sm:space-y-3 pb-6 sm:pb-8 md:pb-16 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            <img
              src={Quote}
              alt="Quote Icon"
              className="text-[#3D4871] w-[40px] sm:w-[55px] md:w-[70px]"
            />
            <p className="text-white text-base sm:text-lg md:text-xl w-[90%] sm:w-[85%] md:w-[80%] m-auto">
              {testimonials[0].description3 || "Default testimonial text"}
            </p>
            <p className="text-[#3D4871] font-roadRadio text-xl sm:text-xl md:text-2xl pt-3 sm:pt-4 md:pt-5 w-[95%] sm:w-[92%] md:w-[90%] m-auto">
              — {testimonials[0].name3 || "Anonymous"}
            </p>
          </motion.div>
        )}

        {/* Testimonial 4 */}
        {testimonials[0] && (
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#757575] lg:ml-[30%] p-3 sm:p-4 md:p-5 flex flex-col w-full lg:w-7/12 space-y-2 sm:space-y-3 pb-6 sm:pb-8 md:pb-16 duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            <img
              src={Quote}
              alt="Quote Icon"
              className="text-[#3D4871] w-[40px] sm:w-[55px] md:w-[70px]"
            />
            <p className="text-white text-base sm:text-lg md:text-xl w-[90%] sm:w-[85%] md:w-[80%] m-auto">
              {testimonials[0].description4 || "Default testimonial text"}
            </p>
            <p className="text-[#3D4871] font-roadRadio text-xl sm:text-xl md:text-2xl pt-3 sm:pt-4 md:pt-5 w-[95%] sm:w-[92%] md:w-[90%] m-auto">
              — {testimonials[0].name4 || "Anonymous"}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
