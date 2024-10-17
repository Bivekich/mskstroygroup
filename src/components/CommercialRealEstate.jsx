import React from "react";

const CommercialRealEstate = () => {
  return (
    <div className="bg-[#393939] text-white p-8 flex justify-between items-center w-[90%] m-auto">
      <div className="w-[48%]">
        <h2 className="text-3xl font-bold mb-4">
          РЕМОНТ, ОТДЕЛКА, РЕКОНСТРУКЦИЯ КОММЕРЧЕСКОЙ НЕДВИЖИМОСТИ
        </h2>
        <p className="mb-8">
          Наша компания выполняет полный комплекс строительных работ на объектах
          коммерческого назначения: торговые, развлекательные, офисные центры.
          Реализация проектов от проектирования до сдачи объектов в
          эксплуатацию.
        </p>
        <div className="flex justify-between text-[#757575] mb-8">
          <div>
            <p className="w-[200px]">БОЛЕЕ 5 ЛЕТ ОПЫТА</p>
          </div>
          <div>
            <p className="w-[200px]">ВЫСОКАЯ КВАЛИФИКАЦИЯ СОТРУДНИКОВ</p>
          </div>
          <div>
            <p className="w-[200px]">ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ ОБЪЕКТУ</p>
          </div>
        </div>
        <button className="bg-[#8BFF30] text-gray-900 px-6 py-2 hover:scale-[1.01] hover:bg-[#55b74a] transition">
          КОНСУЛЬТАЦИЯ ЭКСПЕРТА
        </button>
      </div>

      <div className="w-[48%] bg-white h-80 flex items-center justify-center">
        <div className="flex">
          <button className="text-gray-700 px-3 py-1 hover:text-black transition">
            &lt;
          </button>
          <button className="text-gray-700 px-3 py-1 hover:text-black transition">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommercialRealEstate;
