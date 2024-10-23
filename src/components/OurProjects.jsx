import React from "react";

const OurProjects = () => {
  return (
    <div className="bg-[#393939] text-white p-8 relative mt-10 mb-10 w-[90%] m-auto">
      <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[90px] relative z-10">
        НАШИ ПРОЕКТЫ
      </h2>

      <div className="absolute inset-0 flex items-center justify-center ">
        <h1 className="text-[160px] text-[#757575] font-roadRadio absolute top-0 mt-[] whitespace-nowrap">
          СТРОЙ ГРУПП
        </h1>
      </div>

      <div className="bg-white h-[90vh] flex items-center justify-center relative z-5">
        <div className="w-[48%] bg-white h-[65vh] flex items-center justify-center ">
          <div className="flex relative shadow-2xl mt-[650px]">
            <button className="text-white text-4xl px-3 py-1 size-[90px] bg-[#757575] hover:bg-[#575757] z-5 shadow-3xl hover:text-gray-300 transition relative">
              &lt;
            </button>
            <button className="text-white text-4xl px-3 py-1 size-[90px] bg-[#757575] hover:bg-[#575757] hover:text-gray-300 transition">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
