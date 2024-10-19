import React from "react";

const ContactPopup = ({ togglePopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-[#505050] py-[75px] shadow-lg text-white relative w-[27%] text-center flex flex-col justify-center">
        <h2 className=" mb-4 text-4xl font-roadRadio">ЗАКАЗАТЬ ЗВОНОК</h2>
        <p className="mb-6 font-light text-2xl w-[70%] m-auto">
          Оставьте заявку, и наш эксперт ответит на все ваши вопросы
        </p>

        {/* Form */}
        <form className="w-[70%] m-auto">
          <div className="mb-4">
            
            <input
              type="text"
              className="w-full px-3 py-2 text-gray-900 border-[2px] border-[#272727] bg-[#505050] placeholder:text-xl placeholder:text-white placeholder:font-light focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Имя"
            />
          </div>
          <div className="mb-4">
            
            <input
              type="tel"
              className="w-full px-3 py-2 text-gray-900 border-[2px] border-[#272727] bg-[#505050] placeholder:text-xl placeholder:text-white placeholder:font-light focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Телефон"
            />
          </div>
          <div className="mb-4">
            
            <input
              type="email"
              className="w-full px-3 py-2 text-gray-900 border-[2px] border-[#272727] bg-[#505050] placeholder:text-xl placeholder:text-white placeholder:font-light focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8BFF30] hover:bg-[#55b74a] transition text-xl text-[#272727] font-bold py-4 px-4"
          >
            Отправить
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={togglePopup}
          className="absolute top-2 right-4 text-gray-400 hover:text-[#8BFF30] transition text-4xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
