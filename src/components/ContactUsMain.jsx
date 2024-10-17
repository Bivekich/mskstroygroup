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
    <div className="bg-[#393939] flex flex-col justify-center items-center">
      <div className="w-full p-8">
        <h1 className="text-[#8BFF30] text-7xl white font-bold text-center mb-6">
          СВЯЗАТЬСЯ С НАМИ
        </h1>
        <div className="max-w-[30%] flex flex-col ">
          <p className="text-white text-lg mb-6">
            Если у вас остались вопросы или предложения — заполните форму, и мы
            с вами свяжемся
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              className="w-full p-3 bg-transparent border border-[#757575] text-gray-300 placeholder-white"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Телефон"
              className="w-full p-3 bg-transparent border border-[#757575] text-gray-300 placeholder-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 bg-transparent border border-[#757575] text-gray-300 placeholder-white"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ваш вопрос"
              className="w-full p-3 bg-transparent border border-[#757575] text-gray-300 placeholder-white h-32"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#8BFF30] hover:bg-[#55b74a] text-black px-8 py-3 font-semibold"
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
