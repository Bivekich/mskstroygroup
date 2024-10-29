import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/Group2.svg";
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
      <div className="flex justify-around items-center my-5 font-roadRadio relative z-[30]">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="xl:w-[277px] w-[150px] h-full"
          />
        </Link>

        <motion.button
          className="lg:hidden text-white text-3xl p-2"
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
                flex flex-col lg:flex-row gap-10 text-white transition-all text-2xl
                lg:relative absolute top-full left-0 w-full
                lg:w-auto lg:bg-transparent bg-black/90
                lg:flex items-center py-4 lg:py-0
              `}
            >
              <Link
                to="/News"
                className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out text-center"
                onClick={closeBurger}
              >
                НОВОСТИ
              </Link>

              <Link
                to="/Projects"
                onClick={() => {
                  closeBurger();
                }}
                className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out text-center"
              >
                ПРОЕКТЫ
              </Link>
              <Link
                to="/Prices"
                className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out text-center"
                onClick={closeBurger}
              >
                УСЛУГИ
              </Link>

              <Link
                to="/Contacts"
                className="nav-link hover:text-[#d6d6d6] duration-100 ease-in-out text-center"
                onClick={closeBurger}
              >
                КОНТАКТЫ
              </Link>

              <motion.div
                className="lg:hidden px-4 pb-4"
                whileHover={{ scale: 1.02 }}
              >
                <button
                  onClick={() => {
                    togglePopup();
                    closeBurger();
                  }}
                  className="w-full px-10 py-3 text-[22px] bg-[#8BFF30] hover:bg-[#55b74a] ease-in-out transition-all text-black"
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
            className="px-10 py-3 text-[22px] bg-[#8BFF30] hover:bg-[#55b74a] ease-in-out transition-all"
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
