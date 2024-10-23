import logo from "../assets/images/Group.svg";

const Footer = () => {
  return (
    <div className=" text-white py-10">
      <footer className="w-[87%] m-auto">
        <div className="flex justify-between items-start">
          <div>
            <img src={logo} alt="Logo" className="w-[277px] h-auto mb-4" />
            <p className="text-[#757575] text-[30px] mb-6">
              с 9:00 до 20:00 без выходных
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
              >
                <img src="/path/to/vk-icon.svg" alt="VK" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
              >
                <img
                  src="/path/to/youtube-icon.svg"
                  alt="YouTube"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
              >
                <img
                  src="/path/to/instagram-icon.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
              >
                <img
                  src="/path/to/facebook-icon.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <div className="text-[24px] space-y-3 flex-col ml-[-120px]">
            <div className="flex gap-[50%]">
              <p>ГЛАВНАЯ</p>
              <p>УСЛУГИ</p>
            </div>
            <div className="flex gap-[70%]">
              {" "}
              <p>ЦЕНЫ</p>
              <p>КОНТАКТЫ</p>
            </div>
            <div className="flex gap-[50%]">
              {" "}
              <p>ПРОЕКТЫ</p>
            </div>
          </div>

          <div className="text-[24px] space-y-2 flex flex-col">
            <a href="tel:+79608605348">8 (960) 860-53-48</a>
            <a href="tel:+74959741419">8 (495) 974-14-19</a>
            <a href="mailto:info@mskstroygroup.ru">info@mskstroygroup.ru</a>
          </div>
        </div>

        <hr className="border-[#757575] my-6" />
        <div className="flex justify-between text-[#757575] text-[14px]">
          <p>© 2024 Msk Stroy Group</p>
          <p>Политика конфиденциальности</p>
          <a href="https://biveki.ru/">Разработка сайта</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
