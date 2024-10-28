import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
  return (
    <div className=" bg-white relative">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c2437b4c89a02f758b02d092a191df0092fb0faf3c8569e485938c5f9448cb8&amp;source=constructor"
        width="1280"
        height="720"
        frameborder="0"
        className="absolute z-[2] w-full h-full"
      ></iframe>

      <div className="py-20 flex items-center w-[87%] justify-between m-auto z-[5]">
        <div className=" flex justify-between w-full">
          <div className="w-[550px] z-[5] bg-[#757575] text-3xl h-[600px] p-[90px] text-white">
            <h2 className="text-[#8BFF30] text-7xl font-roadRadio mb-5">
              КОНТАКТЫ
            </h2>
            <p>8 (960) 860–53–48</p>
            <p>8 (495) 974–14–19</p>
            <p className="mt-3">info@mskstroygroupp.ru</p>
            <p className="mt-5 text-[#393939]">с 9:00 до 20:00 без выходных</p>

            <div className="flex mt-8 space-x-5 text-[#8BFF30]">
              <a href="#">
                <FontAwesomeIcon icon={faVk} size="2x" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
          </div>

          <div className="bg-[#757575] text-2xl w-[650px] p-[100px] text-white z-[5]">
            <h2 className="text-[41px] mb-10 font-roadRadio">
              ОСТАЛИСЬ ВОПРОСЫ?
            </h2>
            <p className="mb-8 font-light text-[30px]">
              Оставьте заявку, а наш эксперт ответит на все ваши вопросы
            </p>

            <form className="space-y-5 font-light">
              <input
                type="text"
                placeholder="Имя"
                className="w-full p-2 bg-[#757575] border border-gray-800 text-white placeholder-white  focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <input
                type="text"
                placeholder="Телефон"
                className="w-full p-2 bg-[#757575] border border-gray-900 text-white placeholder-white  focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <textarea
                placeholder="Комментарий"
                className="w-full p-2 bg-[#757575] border border-gray-800 text-white placeholder-white  focus:outline-none focus:ring-2 focus:ring-lime-500"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 py-4 font-bold font-roadRadio bg-[#8BFF30] text-gray-800 hover:bg-[#55b74a] hover:scale-[1.01] ease-in-out duration-300 transition-all"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
