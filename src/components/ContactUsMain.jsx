import React, { useState, useEffect } from "react";
import client from "../sanityClient";
import { motion } from "framer-motion";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = "7880849860:AAF23EpxsNYRlCX6ZZ2nIAMby8xduW1upCE";
    const chatId = "-4565147881";

    const message = `
      ВОПРОС СО СТРАНИЦЫ "СВЯЗАТЬСЯ С НАМИ"
      Имя: ${formData.name}
      Телефон: ${formData.phone}
      Комментарий: ${formData.comment}
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert("Сообщение успешно отправлено!");
      setFormData({ name: "", phone: "", comment: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Ошибка отправки. Пожалуйста, попробуйте снова.");
    }
  };

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
    <div className=" flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 mb-10 sm:mb-16 md:mb-20">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] p-4 sm:p-6 md:p-8">
        <h1 className="text-center text-[#3D4871] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-4 sm:mb-6 md:mb-8">
          СВЯЗАТЬСЯ С НАМИ
        </h1>
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto">
          <p className="text-black text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 font-gilroy tracking-wide">
            Если у вас остались вопросы или предложения — заполните форму, и мы
            с вами свяжемся
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 sm:space-y-4 md:space-y-5 font-gilroy"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              className="w-full p-2.5 sm:p-3 md:p-4 bg-transparent border border-[#757575] text-[#3D4871] placeholder-[#3D4871] text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-[#6d7cb4]"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Телефон"
              className="w-full p-2.5 sm:p-3 md:p-4 bg-transparent border border-[#757575] text-[#3D4871] placeholder-[#3D4871] text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-[#6d7cb4]"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ваш вопрос"
              className="w-full p-2.5 sm:p-3 md:p-4 bg-transparent border border-[#757575] text-[#3D4871] placeholder-[#3D4871] h-24 sm:h-28 md:h-32 text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-[#6d7cb4]"
              required
            ></textarea>
            <div className="text-center pt-2 sm:pt-3 md:pt-4">
              <button
                type="submit"
                className="bg-[#3D4871] hover:bg-[#7a82ab] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl transition font-roadRadio w-full sm:w-auto"
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
