import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

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


const ContactForm = () => {
  return (
    <motion.div 
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
      className="bg-white relative"
    >
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c2437b4c89a02f758b02d092a191df0092fb0faf3c8569e485938c5f9448cb8&amp;source=constructor"
        width="1280"
        height="720"
        frameBorder="0"
        className="absolute z-[2] w-full h-full"
      ></iframe>

      <div className="py-8 sm:py-12 md:py-16 lg:py-20 flex items-center w-[95%] sm:w-[90%] lg:w-[87%] justify-between m-auto z-[5]">
        <div className="flex flex-col xl:flex-row justify-between w-full gap-6 lg:gap-8">
          <div className="w-full xl:w-[550px] z-[5] bg-[#757575] text-xl sm:text-2xl lg:text-3xl p-6 sm:p-8 md:p-12 lg:p-[90px] max-h-[600px] overflow-y-auto text-white">
            <h2 className="text-[#8BFF30] text-4xl sm:text-5xl lg:text-7xl font-roadRadio mb-3 sm:mb-4 lg:mb-5">
              КОНТАКТЫ
            </h2>
            <p>8 (960) 860–53–48</p>
            <p>8 (495) 974–14–19</p>
            <p className="mt-2 lg:mt-3">info@mskstroygroupp.ru</p>
            <p className="mt-3 lg:mt-5 text-[#393939]">
              с 9:00 до 20:00 без выходных
            </p>

            <div className="flex mt-4 sm:mt-6 lg:mt-8 space-x-4 lg:space-x-5 text-[#8BFF30]">
              <a href="#">
                <FontAwesomeIcon
                  icon={faVk}
                  size="lg"
                  className="sm:text-2xl lg:text-3xl"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="lg"
                  className="sm:text-2xl lg:text-3xl"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="sm:text-2xl lg:text-3xl"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  className="sm:text-2xl lg:text-3xl"
                />
              </a>
            </div>
          </div>

          <div className="bg-[#757575] text-lg sm:text-xl lg:text-2xl w-full xl:w-[650px] p-6 sm:p-8 md:p-12 lg:p-[100px] text-white z-[5]">
            <h2 className="text-2xl sm:text-3xl lg:text-[41px] mb-4 sm:mb-6 lg:mb-10 font-roadRadio">
              ОСТАЛИСЬ ВОПРОСЫ?
            </h2>
            <p className="mb-4 sm:mb-6 lg:mb-8 font-light text-xl sm:text-2xl lg:text-[30px]">
              Оставьте заявку, а наш эксперт ответит на все ваши вопросы
            </p>

            <form className="space-y-3 sm:space-y-4 lg:space-y-5 font-light">
              <input
                type="text"
                placeholder="Имя"
                className="w-full p-2 sm:p-3 bg-[#757575] border border-gray-800 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <input
                type="text"
                placeholder="Телефон"
                className="w-full p-2 sm:p-3 bg-[#757575] border border-gray-900 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <textarea
                placeholder="Комментарий"
                className="w-full p-2 sm:p-3 bg-[#757575] border border-gray-800 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-lime-500 h-24 sm:h-28 lg:h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 sm:p-3 py-3 sm:py-4 font-bold font-roadRadio bg-[#8BFF30] text-gray-800 hover:bg-[#55b74a] hover:scale-[1.01] ease-in-out duration-300 transition-all text-lg sm:text-xl lg:text-2xl"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
