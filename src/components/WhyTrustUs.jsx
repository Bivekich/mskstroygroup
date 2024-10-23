import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faMoneyBillWave,
  faCompassDrafting,
  faLayerGroup,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

const WhyTrustUs = () => {
  return (
    <div className="bg-[#393939] text-white p-8 mb-8 relative">
      <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[90px] relative z-10">
        ПОЧЕМУ НАМ ДОВЕРЯЮТ
      </h2>
      <div className="absolute inset-0 flex items-center justify-center  ">
        <h1 className="text-[160px] text-[#757575] font-roadRadio absolute top-0  whitespace-nowrap">
          ПРИЕМУЩЕСТВА
        </h1>
      </div>

      <div className="grid grid-cols-5 relative">
        <div className="bg-[#757575] p-4 pb-8 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[5]">
          <div className="w-[90%] m-auto ">
            <div className="text-[#393939] text-center my-4 mb-6">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className=" bg-[#8BFF30] text-5xl rounded-full p-6"
              />
            </div>

            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide ">
              ГАРАНТИЯ НА ВСЕ ВИДЫ РАБОТ - 2 ГОДА
            </h3>
            <p className=" text-2xl tracking-wide font-gilroy">
              Наша компания дает гарантию на все виды работ на 2 года, что
              свидетельствует о высоком качестве предоставляемых услуг и доверии
              к своим специалистам. Эта гарантия позволяет нашим клиентам быть
              уверенными, что мы готовы поддерживать качество нашего труда и
              исправлять любые недочёты, если они возникнут в течение
              гарантийного срока.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-[#8BFF30] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[4]">
          <div className="w-[85%] m-auto">
            <div className=" text-white text-center my-4 mb-5">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className=" bg-[#757575] text-5xl rounded-full p-5 py-[24px]"
              />
            </div>
            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide text-[#393939]">
              БЕСПЛАТНОЕ СОСТАВЛЕНИЕ СМЕТЫ
            </h3>
            <p className="text-2xl font-gilroy tracking-wide text-[#393939]">
              Наша компания бесплатно составляет смету, что позволяет клиентам
              заранее оценить затраты на проект и принять обоснованное решение.
              Мы понимаем, что планирование бюджета является важным этапом в
              любых работах, будь то строительство, ремонт или другие услуги.
            </p>
          </div>
        </div>

        <div className="bg-[#757575] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[3]">
          <div className="w-[85%] m-auto">
            <div className="text-[#393939] text-center my-4 mb-5">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                className=" bg-[#8BFF30] text-5xl rounded-full p-6"
              />
            </div>
            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide">
              СОЗДАНИЕ ДИЗАЙН ПРОЕКТА
            </h3>
            <pc className=" text-2xl font-gilroy tracking-wide">
              Наша компания создает дизайн- проект, который учитывает индиви-
              дуальные потреб- ности и пожелания клиента. Мы настраиваем каждый
              элемент, чтобы гармонично вписать его в общую концепцию, создавая
              эстетически прият- ные и функциональ- ные пространства.
            </pc>
          </div>
        </div>

        <div className="bg-[#8BFF30] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] z-[2]">
          <div className="w-[85%] m-auto">
            <div className="text-white text-center my-4 mb-5">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className=" bg-[#757575] text-5xl rounded-full p-6 px-5"
              />
            </div>
            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide text-[#393939]">
              ИСПОЛЬЗОВАНИЕ КАЧЕСТВЕННЫХ МАТЕРИАЛОВ
            </h3>
            <p className=" text-2xl font-gilroy tracking-wide text-[#393939]">
              Наша компания использует качественные материалы, что гарантирует
              надежность и долговечность всех работ. Мы тщательно отбираем
              партнеров, осознавая, что материалы влияют как на внешний вид, так
              и на устойчи- вость конструкций.
            </p>
          </div>
        </div>

        <div className="bg-[#757575] p-4">
          <div className="w-[85%] m-auto">
            <div className="text-[#393939] text-center my-4 mb-5">
              <FontAwesomeIcon
                icon={faFileContract}
                className=" bg-[#8BFF30] text-5xl rounded-full p-6 px-[30px]"
              />
            </div>
            <h3 className="font-bold text-2xl mb-2 font-roadRadio tracking-wide flex justify-center">
              РАБОТАЕМ ПО ДОГОВОРУ
            </h3>
            <p className=" text-2xl font-gilroy tracking-wide">
              Наша компания работает по договору, что обеспечивает прозрачность
              сотрудничества и четкое опре- деление ролей и обязанностей сторон.
              Мы ценим доверие клиентов, гарантируя фиксацию всех
              условий,включая сроки, оплату и изменения в проекте.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTrustUs;
