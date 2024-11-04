import React, { useState } from "react";
import axios from "axios";

const ContactPopup = ({ togglePopup }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  // Update form data as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your Telegram bot token
    const botToken = "7880849860:AAF23EpxsNYRlCX6ZZ2nIAMby8xduW1upCE";
    // Replace with the chat ID you provided
    const chatId = "-4565147881";

    const message = `
      ЗАКАЗ ЗВОНКА
      Имя: ${formData.name}
      Телефон: ${formData.phone}
      Комментарий: ${formData.comment}
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert("Message sent successfully!");
      togglePopup(); // Close popup on success
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4"
      onClick={togglePopup}
    >
      <div
        className="bg-[#505050] py-8 sm:py-12 md:py-16 lg:py-[75px] shadow-lg text-white relative 
                 w-full sm:w-[85%] md:w-[70%] lg:w-[50%] xl:w-[30%] 
                 text-center flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-3 sm:mb-4 lg:mb-6 text-2xl sm:text-3xl md:text-4xl font-roadRadio px-4">
          ЗАКАЗАТЬ ЗВОНОК
        </h2>
        <p
          className="mb-4 sm:mb-5 lg:mb-6 font-light text-lg sm:text-xl md:text-2xl 
                    w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] m-auto px-4"
        >
          Оставьте заявку, и наш эксперт ответит на все ваши вопросы
        </p>

        {/* Form */}
        <form
          className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[85%] m-auto px-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-3 sm:mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 sm:py-3 text-white border-[2px] border-[#272727] 
                       bg-[#505050] text-base sm:text-lg md:text-xl
                       placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl 
                       placeholder:text-white placeholder:font-light 
                       focus:outline-none focus:ring-2 focus:ring-[#6d7cb4]"
              placeholder="Имя"
              required
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 sm:py-3 text-white border-[2px] border-[#272727] 
                       bg-[#505050] text-base sm:text-lg md:text-xl
                       placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl 
                       placeholder:text-white placeholder:font-light 
                       focus:outline-none focus:ring-2 focus:ring-[#6d7cb4]"
              placeholder="Телефон"
              required
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-3 py-2 sm:py-3 text-white border-[2px] border-[#272727] 
                       bg-[#505050] text-base sm:text-lg md:text-xl
                       placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl 
                       placeholder:text-white placeholder:font-light 
                       focus:outline-none focus:ring-2 focus:ring-[#6d7cb4]
                       min-h-[100px] resize-none"
              placeholder="Комментарий"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#3D4871] hover:bg-[#7a82ab] transition 
                     text-lg sm:text-xl md:text-2xl text-white  
                     py-3 sm:py-4 px-4 font-roadRadio"
          >
            Отправить
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={togglePopup}
          className="absolute top-2 right-4 text-gray-400 hover:text-[#3D4871] transition 
                   text-3xl sm:text-4xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
