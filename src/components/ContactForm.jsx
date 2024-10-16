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
    <div className=" bg-white">
      <div className="flex items-center w-[87%] justify-between m-auto">
        {/* Container */}
        <div className=" flex justify-between w-full">
          {/* Left Section - Contact Info */}
          <div className="bg-[#757575] p-10 text-white">
            <h2 className="text-[#8BFF30] text-3xl font-bold mb-5">КОНТАКТЫ</h2>
            <p>8 (960) 860–53–48</p>
            <p>8 (495) 974–14–19</p>
            <p className="mt-3">info@mskstroygroupp.ru</p>
            <p className="mt-5">с 9:00 до 20:00 без выходных</p>
            {/* Social Icons */}
            <div className="flex mt-10 space-x-5 text-[#8BFF30]">
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

          {/* Right Section - Form */}
          <div className="bg-[#757575] p-10 text-white">
            <h2 className="text-2xl font-bold mb-5">ОСТАЛИСЬ ВОПРОСЫ?</h2>
            <p className="mb-8">
              Оставьте заявку, а наш эксперт ответит на все ваши вопросы
            </p>

            {/* Form */}
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Имя"
                className="w-full p-2 bg-[#757575] border border-gray-800 text-white placeholder-white"
              />
              <input
                type="text"
                placeholder="Телефон"
                className="w-full p-2 bg-[#757575] border border-gray-900 text-white placeholder-white"
              />
              <textarea
                placeholder="Комментарий"
                className="w-full p-2 bg-[#757575] border border-gray-800 text-white placeholder-white"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-[#8BFF30] text-gray-800 hover:bg-[#55b74a] hover:scale-[1.01] ease-in-out duration-300 transition-all"
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
