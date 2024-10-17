import React from "react";

const WhyTrustUs = () => {
  return (
    <div className="bg-[#393939] text-white p-8 min-h-screen">
      <h2 className="text-center text-[#8BFF30] text-2xl font-bold mb-6">
        ПОЧЕМУ НАМ ДОВЕРЯЮТ
      </h2>

      <div className="grid grid-cols-5 gap-4 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <h1 className="text-6xl text-gray-300 font-bold">ПРЕИМУЩЕСТВА</h1>
        </div>

        <div className="bg-[#4D4D4D] p-4 rounded">
          <div className="text-[#8BFF30] mb-2">
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
        <div className="bg-[#8BFF30] text-gray-900 p-4 rounded">
          <div className="mb-2">
            <i className="fas fa-money-bill-wave"></i>
          </div>
          <h3 className="font-bold text-2xl mb-2">
            БЕСПЛАТНОЕ СОСТАВЛЕНИЕ СМЕТЫ
          </h3>
          <p className="text-2xl">
            Наша компания бесплатно составляет смету, что позволяет клиентам
            заранее оценить затраты на проект и принять обоснованное решение. Мы
            понимаем, что планирование бюджета является важным этапом в любых
            работах, будь то строительство, ремонт или другие услуги.
          </p>
        </div>

        <div className="bg-[#4D4D4D] p-4 rounded">
          <div className="text-[#8BFF30] mb-2">
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

        <div className="bg-[#4D4D4D] p-4 rounded">
          <div className="text-[#8BFF30] mb-2">
            <i className="fas fa-box"></i>
          </div>
          <h3 className="font-bold  text-2xl mb-2">
            ИСПОЛЬЗОВАНИЕ КАЧЕСТВЕННЫХ МАТЕРИАЛОВ
          </h3>
          <p className=" text-2xl">
            Наша компания использует качественные материалы, что гарантирует
            надежность и долговечность всех работ. Мы тщательно отбираем
            партнеров, осознавая, что материалы влияют как на внешний вид, так и
            на устойчи- вость конструкций.
          </p>
        </div>

        <div className="bg-[#4D4D4D] p-4 rounded">
          <div className="text-[#8BFF30] mb-2">
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
