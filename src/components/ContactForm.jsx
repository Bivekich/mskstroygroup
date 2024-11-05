import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import client from "../sanityClient"; // Adjust the path as needed

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
  const [contactData, setContactData] = useState({
    phone1: "",
    phone2: "",
    email: "",
    workingHours: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  useEffect(() => {
    client
      .fetch(
        `*[_type == "contactDetails"][0]{
        phone1,
        phone2,
        email,
        workingHours
      }`
      )
      .then((data) => {
        if (data) {
          setContactData(data);
        }
      })
      .catch(console.error);
  }, []);

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
      ВОПРОС С КОНТАКТНОЙ ФОРМЫ
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

  return (
    <motion.div
      id="contactForm"
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

      <div className="py-6 sm:py-8 md:py-12 flex items-center w-[90%] sm:w-[85%] lg:w-[80%] justify-between m-auto z-[5]">
        <div className="flex flex-col xl:flex-row justify-between w-full gap-4 lg:gap-6">
          <div className="w-full flex flex-col xl:w-[450px] z-[5] bg-[#757575] text-lg sm:text-xl lg:text-2xl p-4 sm:p-6 md:p-20 max-h-[500px] overflow-y-auto text-white">
            <h2 className="text-[#3D4871] text-3xl sm:text-4xl lg:text-5xl font-roadRadio mb-3 sm:mb-4">
              КОНТАКТЫ
            </h2>
            <p>
              <a href={`tel:${contactData.phone1?.replace(/[^\d+]/g, "")}`}>
                {contactData.phone1}
              </a>
            </p>
            <p>
              <a href={`tel:${contactData.phone2?.replace(/[^\d+]/g, "")}`}>
                {contactData.phone2}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            </p>
            <p className="mt-2 lg:mt-4 text-[#FEFEFF]">
              {contactData.workingHours}
            </p>
          </div>

          <div className="bg-[#757575] text-base sm:text-lg lg:text-xl w-full xl:w-[550px] p-4 sm:p-6 md:p-20 text-white z-[5]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 lg:mb-6 font-roadRadio">
              ОСТАЛИСЬ ВОПРОСЫ?
            </h2>
            <p className="mb-3 sm:mb-4 lg:mb-6 font-light text-lg sm:text-xl lg:text-2xl">
              Оставьте заявку, а наш эксперт ответит на все ваши вопросы
            </p>

            <form
              className="space-y-2 sm:space-y-3 lg:space-y-4 font-light"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-[#757575] border border-gray-800 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#6d7cb4]"
              />
              <input
                type="text"
                placeholder="Телефон"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 bg-[#757575] border border-gray-900 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#6d7cb4]"
              />
              <textarea
                placeholder="Комментарий"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full p-2 bg-[#757575] border border-gray-800 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#6d7cb4] h-20 sm:h-24 lg:h-28"
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 py-2 sm:py-3 font-roadRadio bg-[#3D4871] text-white hover:bg-[#7a82ab] hover:scale-[1.01] ease-in-out duration-300 transition-all text-base sm:text-lg lg:text-xl"
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
