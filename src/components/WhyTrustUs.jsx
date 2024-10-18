import React from "react";

const WhyTrustUs = () => {
  return (
    <div className="bg-[#393939] text-white p-8 min-h-screen relative">
      <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[90px] relative z-10">
        ПОЧЕМУ НАМ ДОВЕРЯЮТ
      </h2>
      <div className="absolute inset-0 flex items-center justify-center ">
    <h1 className="text-[160px] text-[#757575] font-roadRadio absolute top-0  whitespace-nowrap">
      ПРИЕМУЩЕСТВА
    </h1>
  </div>

      <div className="grid grid-cols-5 relative">

        <div className="bg-[#757575] p-4">
          <div className="text-[#393939] mb-2">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="font-bold  text-2xl mb-2">
            ГАРАНТИЯ НА ВСЕ ВИДЫ РАБОТ - 2 ГОДА
          </h3>
          <p className=" text-2xl">
            Наша компания дает гарантию на все виды работ на 2 года, что
            свидетельствует о высоком качестве предоставляемых услуг и доверии к
            своим специалистам. Эта гарантия позволяет нашим клиентам быть
            уверенными, что мы готовы поддерживать качество нашего труда и
            исправлять любые недочёты, если они возникнут в течение гарантийного
            срока.
          </p>
        </div>

        {/* Column 2 */}
        <div className="bg-[#8BFF30] p-4 ">
          <div className="mb-2 text-white ">
            <i className="fas fa-money-bill-wave bg-[#8BFF30]"></i>
          </div>
          <h3 className="font-bold text-2xl mb-2 text-[#393939]">
            БЕСПЛАТНОЕ СОСТАВЛЕНИЕ СМЕТЫ
          </h3>
          <p className="text-2xl text-[#393939]">
            Наша компания бесплатно составляет смету, что позволяет клиентам
            заранее оценить затраты на проект и принять обоснованное решение. Мы
            понимаем, что планирование бюджета является важным этапом в любых
            работах, будь то строительство, ремонт или другие услуги.
          </p>
        </div>

        <div className="bg-[#757575] p-4">
          <div className="text-[#393939] mb-2">
            <i className="fas fa-drafting-compass"></i>{" "}
          </div>
          <h3 className="font-bold  text-2xl mb-2">СОЗДАНИЕ ДИЗАЙН ПРОЕКТА</h3>
          <pc className=" text-2xl">
            Наша компания создает дизайн- проект, который учитывает индиви-
            дуальные потреб- ности и пожелания клиента. Мы настраиваем каждый
            элемент, чтобы гармонично вписать его в общую концепцию, создавая
            эстетически прият- ные и функциональ- ные пространства.
          </pc>
        </div>

        <div className="bg-[#8BFF30] p-4 ">
          <div className="text-white mb-2">
            <i className="fas fa-box"></i>
          </div>
          <h3 className="font-bold  text-2xl mb-2">
            ИСПОЛЬЗОВАНИЕ КАЧЕСТВЕННЫХ МАТЕРИАЛОВ
          </h3>
          <p className=" text-2xl text-[#393939]">
            Наша компания использует качественные материалы, что гарантирует
            надежность и долговечность всех работ. Мы тщательно отбираем
            партнеров, осознавая, что материалы влияют как на внешний вид, так и
            на устойчи- вость конструкций.
          </p>
        </div>

        <div className="bg-[#757575] p-4 ">
          <div className="text-[#393939] mb-2">
            <i className="fas fa-file-contract"></i>
          </div>
          <h3 className="font-bold  text-2xl mb-2">РАБОТАЕМ ПО ДОГОВОРУ</h3>
          <p className=" text-2xl">
            Наша компания работает по договору, что обеспечивает прозрачность
            сотрудничества и четкое опре- деление ролей и обязанностей сторон.
            Мы ценим доверие клиентов, гарантируя фиксацию всех условий,включая
            сроки, оплату и изменения в проекте.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyTrustUs;
