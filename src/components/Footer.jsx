import React, { useEffect, useState } from "react";
import client from "../sanityClient";
import logo from "../assets/images/Group.svg";
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
    workingHours: ""
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
      }`)
    ])
    .then(([link, contact]) => {
      if (link) setPolicyLink(link);
      if (contact) setContactData(contact);
    })
    .catch(console.error);
  }, []);

  const scrollToContactForm = () => {
    navigate('/Contacts');
    setTimeout(() => {
      document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="text-white py-10">
      <footer className="w-[87%] m-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto md:mx-0 w-[200px] md:w-[277px] h-auto mb-4"
            />
            <p className="text-[#757575] visible md:invisible lg:visible text-[30px] mb-6">
              {contactData.workingHours}
            </p>

            {/* <div className="flex space-x-6 justify-center md:justify-start text-[#9d9d9d]">
              <a href="#" className="hover:text-[#8BFF30] transition-colors">
                <FontAwesomeIcon icon={faVk} className="text-2xl sm:text-3xl" />
              </a>
              <a href="#" className="hover:text-[#8BFF30] transition-colors">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-2xl sm:text-3xl"
                />
              </a>
              <a href="#" className="hover:text-[#8BFF30] transition-colors">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl sm:text-3xl"
                />
              </a>
              <a href="#" className="hover:text-[#8BFF30] transition-colors">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl sm:text-3xl"
                />
              </a>
            </div> */}
          </div>

          <div className="text-[18px] md:text-[24px] space-y-3 flex-col md:ml-[-120px]">
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-20 text-center xl:text-left">
              <Link to="/News" className="hover:text-[#8BFF30] transition-colors">НОВОСТИ</Link>
              <Link to="/Prices" className="hover:text-[#8BFF30] transition-colors">УСЛУГИ</Link>
            </div>
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-20 text-center xl:text-left">
              <Link to="/Projects" className="hover:text-[#8BFF30] transition-colors">ПРОЕКТЫ</Link>
              <button 
                onClick={scrollToContactForm}
                className="hover:text-[#8BFF30] transition-colors text-left"
              >
                КОНТАКТЫ
              </button>
            </div>
          </div>

          <div className="text-[18px] md:text-[24px] space-y-2 flex flex-col items-center xl:items-start">
            <a href={`tel:${contactData.phone1?.replace(/[^\d+]/g, '')}`}>
              {contactData.phone1}
            </a>
            <a href={`tel:${contactData.phone2?.replace(/[^\d+]/g, '')}`}>
              {contactData.phone2}
            </a>
            <a href={`mailto:${contactData.email}`}>
              {contactData.email}
            </a>
          </div>
        </div>

        <hr className="border-[#757575] my-6" />
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-4 md:gap-0 text-[#757575] text-[20px]">
          <p>© 2024 Msk Stroy Group</p>
          <p><a href={policyLink} target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a></p>
          <a href="https://biveki.ru/" target="_blank" rel="noopener noreferrer">Разработка сайта</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
