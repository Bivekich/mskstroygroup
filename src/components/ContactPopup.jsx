import React, { useState } from "react";
import axios from "axios";

const ContactPopup = ({ togglePopup }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
      Email: ${formData.email}
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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
      onClick={togglePopup}
    >
      <div
        className="bg-[#505050] py-[75px] shadow-lg text-white relative w-[27%] text-center flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className=" mb-4 text-4xl font-roadRadio">ЗАКАЗАТЬ ЗВОНОК</h2>
        <p className="mb-6 font-light text-2xl w-[70%] m-auto">
          Оставьте заявку, и наш эксперт ответит на все ваши вопросы
        </p>

        {/* Form */}
        <form className="w-[70%] m-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 border-[2px] border-[#272727] bg-[#505050] placeholder:text-xl placeholder:text-white placeholder:font-light focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Имя"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 border-[2px] border-[#272727] bg-[#505050] placeholder:text-xl placeholder:text-white placeholder:font-light focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Телефон"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 border-[2px] border-[#272727] bg-[#505050] placeholder:text-xl placeholder:text-white placeholder:font-light focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Email"
              required
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
