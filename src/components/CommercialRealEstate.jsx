import React from "react";

const CommercialRealEstate = () => {
  return (
    <div className="bg-[#393939] text-white p-8 flex justify-between items-center w-[90%] m-auto mt-10 mb-10">
      <div className="w-[50%] flex flex-col justify-between h-[65vh]">
        <h2 className="text-[44px] mb-4 leading-[42px] font-roadRadio">
          РЕМОНТ, ОТДЕЛКА, РЕКОНСТРУКЦИЯ КОММЕРЧЕСКОЙ НЕДВИЖИМОСТИ
        </h2>
        <p className="mb-8 text-4xl w-[90%] font-light">
        Наша компания выполняет полный комплекс
строительных работ на объектах коммерческого
назначения: торговые, развлекательные, офисные
центры. Реализация проектов от проектирования
до сдачи объектов в эксплуатацию.
        </p>
        <div className="flex justify-between text-[25px] text-[#757575] mb-8 font-roadRadio leading-6">
          <div>
            <p className="w-[150px]">БОЛЕЕ 5 ЛЕТ ОПЫТА</p>
          </div>
          <div className="w-[1px] h-[90px] bg-[#757575] mt-[-10px]"></div>
          <div>
            <p className="w-[200px]">ВЫСОКАЯ КВАЛИФИКАЦИЯ СОТРУДНИКОВ</p>
          </div>
          <div className="w-[1px] h-[90px] bg-[#757575] mt-[-10px]"></div>
          <div>
            <p className="w-[300px]">ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ ОБЪЕКТУ</p>
          </div>
        </div>
        <button className="bg-[#8BFF30] text-gray-900 py-5 max-w-[350px] hover:scale-[1.01] hover:bg-[#55b74a] transition font-roadRadio text-xl">
          КОНСУЛЬТАЦИЯ ЭКСПЕРТА
        </button>
      </div>

      <div className="w-[50%] bg-white h-[65vh]  flex items-center justify-center ">
        <div className="flex relative shadow-2xl mt-[400px]">
          <button className="text-white text-4xl px-3 py-1 size-[100px] bg-[#757575] hover:bg-[#575757] z-5 shadow-3xl hover:text-gray-300 transition relative">
            &lt;
          </button>
          <button className="text-white text-4xl px-3 py-1 size-[100px] bg-[#757575] hover:bg-[#575757] hover:text-gray-300 transition">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommercialRealEstate;
