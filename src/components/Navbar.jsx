import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logoOriginal.jpg";
import ContactPopup from "./ContactPopup";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = ({ onScroll, sections }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const closeBurger = () => {
    setIsBurgerOpen(false);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

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

  return (
    <motion.nav variants={fadeInVariants} initial="initial" animate="animate">
      <div className="flex lg:w-[84%] m-auto justify-around items-center my-3 sm:my-4 font-roadRadio relative z-[30]">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="xl:w-[200px] w-[120px] h-full"
          />
        </Link>

        <motion.button
          className="lg:hidden text-[#6d7cb4] text-2xl p-2"
          onClick={toggleBurger}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faBars} />
        </motion.button>

        <AnimatePresence>
          {(isBurgerOpen || isLargeScreen) && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className={`
                flex flex-col lg:flex-row gap-6 sm:gap-8 text-black transition-all text-lg sm:text-xl
                lg:relative absolute top-full left-0 w-full
                lg:w-auto lg:bg-transparent 
                ${!isLargeScreen ? "backdrop-blur-md bg-black/30" : ""}
                lg:flex items-center py-3 lg:py-0
              `}
            >
              {!isLargeScreen && (
                <div className="absolute inset-0 bg-black/30 -z-10" />
              )}
              <Link
                to="/"
                className="nav-link hover:text-[#6d7cb4] duration-100 ease-in-out text-center text-white lg:text-black"
                onClick={closeBurger}
              >
                ГАЛНАЯ
              </Link>
              <Link
                to="/Prices"
                className="nav-link hover:text-[#6d7cb4] duration-100 ease-in-out text-center text-white lg:text-black"
                onClick={closeBurger}
              >
                УСЛУГИ
              </Link>
              <Link
                to="/News"
                className="nav-link hover:text-[#6d7cb4] duration-100 ease-in-out text-center text-white lg:text-black"
                onClick={closeBurger}
              >
                НОВОСТИ
              </Link>

              <Link
                to="/Projects"
                className="nav-link hover:text-[#6d7cb4] duration-100 ease-in-out text-center text-white lg:text-black"
                onClick={closeBurger}
              >
                ГАЛЕРЕЯ
              </Link>

              <Link
                to="/Contacts"
                className="nav-link hover:text-[#6d7cb4] duration-100 ease-in-out text-center text-white lg:text-black"
                onClick={closeBurger}
              >
                КОНТАКТЫ
              </Link>

              <motion.div
                className="lg:hidden px-3 pb-3"
                whileHover={{ scale: 1.02 }}
              >
                <button
                  onClick={() => {
                    togglePopup();
                    closeBurger();
                  }}
                  className="w-full px-6 py-2 text-lg sm:text-xl bg-[#3D4871] hover:bg-[#7a82ab] ease-in-out transition-all text-white"
                >
                  ЗАКАЗАТЬ ЗВОНОК
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="hidden lg:block" whileHover={{ scale: 1.02 }}>
          <button
            onClick={togglePopup}
            className="px-6 py-2 text-lg sm:text-xl bg-[#3D4871] hover:bg-[#7a82ab] ease-in-out transition-all text-white"
          >
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </motion.div>
      </div>

      {isPopupOpen && <ContactPopup togglePopup={togglePopup} />}
    </motion.nav>
  );
};

export default Navbar;
