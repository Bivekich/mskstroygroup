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
    <div className="bg-[#393939] flex flex-col justify-center items-center mb-20">
      <div className="w-full p-8">
        <h1 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-6">
          СВЯЗАТЬСЯ С НАМИ
        </h1>
        <div className="max-w-[35%] flex flex-col m-auto">
          <p className="text-white text-2xl mb-6 font-gilroy tracking-wide">
            Если у вас остались вопросы или предложения — заполните форму, и мы
            с вами свяжемся
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 font-gilroy">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              className="w-full p-3 bg-transparent border border-[#757575]  text-gray-300 placeholder-white placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Телефон"
              className="w-full p-3 bg-transparent border border-[#757575] text-gray-300 placeholder-white placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 bg-transparent border border-[#757575] text-gray-300 placeholder-white placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ваш вопрос"
              className="w-full p-3 bg-transparent border border-[#757575] text-gray-300 placeholder-white h-32 placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#8BFF30] hover:bg-[#55b74a] m text-black px-10 py-3 text-xl font-semibold transition font-roadRadio"
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
