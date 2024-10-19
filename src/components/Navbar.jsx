import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Group2.svg";
import ContactPopup from "./ContactPopup"; // Import the popup component

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <nav>
      <div className="flex justify-around items-center my-5 font-roadRadio">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[277px] h-full" />
        </Link>

        <div className="flex gap-10 text-white transition-all text-xl">
          <Link
            to=""
            className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out"
          >
            НОВОСТИ
          </Link>
          <Link
            to=""
            className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out"
          >
            ЦЕНЫ
          </Link>
          <Link
            to=""
            className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out"
          >
            ПРОЕКТЫ
          </Link>
          <Link
            to=""
            className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out"
          >
            УСЛУГИ
          </Link>
          <Link
            to=""
            className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out"
          >
            ОТЗЫВЫ
          </Link>
          <Link
            to=""
            className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out"
          >
            КОНТАКТЫ
          </Link>
        </div>

        <div>
          {/* Button that toggles the popup */}
          <button
            onClick={togglePopup}
            className="px-10 py-3 text-[22px] bg-[#8BFF30] hover:bg-[#55b74a] hover:scale-[1.01] ease-in-out duration-300 transition-all"
          >
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>
      </div>

      {/* Contact Popup */}
      {isPopupOpen && <ContactPopup togglePopup={togglePopup} />}
    </nav>
  );
};

export default Navbar;
