import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-[#393939] flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 mb-10 sm:mb-16 md:mb-20">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] p-4 sm:p-6 md:p-8">
        <h1 className="text-center text-[#8BFF30] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-4 sm:mb-6 md:mb-8">
          СВЯЗАТЬСЯ С НАМИ
        </h1>
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto">
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 font-gilroy tracking-wide">
            Если у вас остались вопросы или предложения — заполните форму, и мы
            с вами свяжемся
          </p>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5 font-gilroy">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              className="w-full p-2.5 sm:p-3 md:p-4 bg-transparent border border-[#757575] text-gray-300 placeholder-white text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Телефон"
              className="w-full p-2.5 sm:p-3 md:p-4 bg-transparent border border-[#757575] text-gray-300 placeholder-white text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2.5 sm:p-3 md:p-4 bg-transparent border border-[#757575] text-gray-300 placeholder-white text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ваш вопрос"
              className="w-full p-2.5 sm:p-3 md:p-4 bg-transparent border border-[#757575] text-gray-300 placeholder-white h-24 sm:h-28 md:h-32 text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            ></textarea>
            <div className="text-center pt-2 sm:pt-3 md:pt-4">
              <button
                type="submit"
                className="bg-[#8BFF30] hover:bg-[#55b74a] text-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl font-semibold transition font-roadRadio w-full sm:w-auto"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
