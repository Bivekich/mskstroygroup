import logo from "../assets/images/Group.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
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
              с 9:00 до 20:00 без выходных
            </p>

            <div className="flex space-x-6 justify-center md:justify-start text-[#9d9d9d]">
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
            </div>
          </div>

          <div className="text-[18px] md:text-[24px] space-y-3 flex-col md:ml-[-120px]">
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-[50%] text-center xl:text-left">
              <p>ГЛАВНАЯ</p>
              <p>УСЛУГИ</p>
            </div>
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-[70%] text-center xl:text-left">
              <p>ЦЕНЫ</p>
              <p>КОНТАКТЫ</p>
            </div>
            <div className="flex justify-center xl:justify-start">
              <p>ПРОЕКТЫ</p>
            </div>
          </div>

          <div className="text-[18px] md:text-[24px] space-y-2 flex flex-col items-center xl:items-start">
            <a href="tel:+79608605348">8 (960) 860-53-48</a>
            <a href="tel:+74959741419">8 (495) 974-14-19</a>
            <a href="mailto:info@mskstroygroup.ru">info@mskstroygroup.ru</a>
          </div>
        </div>

        <hr className="border-[#757575] my-6" />
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-4 md:gap-0 text-[#757575] text-[14px]">
          <p>© 2024 Msk Stroy Group</p>
          <p>Политика конфиденциальности</p>
          <a href="https://biveki.ru/">Разработка сайта</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
