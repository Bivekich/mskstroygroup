import React from "react";

const OurProjects = () => {
  return (
    <div className="bg-[#393939] text-white p-8 relative">
     
      <h2 className="text-center text-[#8BFF30] text-2xl font-bold mb-6">
        НАШИ ПРОЕКТЫ
      </h2>

      <div className="bg-white h-72 flex items-center justify-center relative">

        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <h1 className="text-[100px]  font-bold absolute top-0 mt-[-90px]">
            СТРОЙ ГРУПП
          </h1>
        </div>


        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
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
    </div>
  );
};

export default OurProjects;
