import React, { useEffect, useState } from "react";
import client from "../sanityClient";
import logo from "../assets/images/logoOriginal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [policyLink, setPolicyLink] = useState("");
  const [contactData, setContactData] = useState({
    phone1: "",
    phone2: "",
    email: "",
    workingHours: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch both policy link and contact details in parallel
    Promise.all([
      client.fetch(`*[_type == "privacyPolicy"][0].policyLink`),
      client.fetch(`*[_type == "contactDetails"][0]{
        phone1,
        phone2,
        email,
        workingHours
      }`),
    ])
      .then(([link, contact]) => {
        if (link) setPolicyLink(link);
        if (contact) setContactData(contact);
      })
      .catch(console.error);
  }, []);

  const scrollToContactForm = () => {
    navigate("/Contacts");
    setTimeout(() => {
      document
        .getElementById("contactForm")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="text-gray-800 py-6 sm:py-8">
      <footer className="w-[85%] sm:w-[80%] m-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto md:mx-0 w-[140px] md:w-[200px] h-auto mb-3"
            />
            <p className="text-[#757575] visible md:invisible lg:visible text-xl sm:text-2xl mb-4">
              {contactData.workingHours}
            </p>
          </div>

          <div className="text-base sm:text-lg md:text-xl space-y-2 font-semibold text-[#3D4871] flex-col md:ml-[-60px]">
            <div className="flex flex-col xl:flex-row gap-3 xl:gap-12 text-center xl:text-left">
              <Link
                to="/"
                className="hover:text-[#3D4871] transition-colors"
              >
                ГЛАВНАЯ
              </Link>
              <Link
                to="/Prices"
                className="hover:text-[#3D4871] transition-colors"
              >
                УСЛУГИ
              </Link>
              <Link
                to="/News"
                className="hover:text-[#3D4871] transition-colors"
              >
                НОВОСТИ
              </Link>
             
            </div>
            <div className="flex flex-col justify-center xl:flex-row gap-3 xl:gap-12 text-center xl:text-left">
              <Link
                to="/Projects"
                className="hover:text-[#3D4871] transition-colors"
              >
                ГАЛЕРЕЯ
                </Link>
              <button
                onClick={scrollToContactForm}
                className="hover:text-[#3D4871] transition-colors text-left"
              >
                КОНТАКТЫ
              </button>
            </div>
          </div>

          <div className="text-base sm:text-lg md:text-xl space-y-1 flex flex-col items-center font-normal xl:items-start text-[#3D4871]">
            <a href={`tel:${contactData.phone1?.replace(/[^\d+]/g, "")}`}>
              {contactData.phone1}
            </a>
            <a href={`tel:${contactData.phone2?.replace(/[^\d+]/g, "")}`}>
              {contactData.phone2}
            </a>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
          </div>
        </div>

        <hr className="border-[#757575] my-4 sm:my-5" />
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-2 md:gap-3 text-[#757575] text-sm sm:text-base">
          <p>© 2024 Msk Stroy Group</p>
          <p>
            <a href={policyLink} target="_blank" rel="noopener noreferrer">
              Политика конфиденциальности
            </a>
          </p>
          <a
            href="https://biveki.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Разработка сайта
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
