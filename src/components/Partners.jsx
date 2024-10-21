import React from "react";

const PartnerLogos = () => {
  const partners = [
    { name: "Apple", logo: "logo" },
    { name: "Samsung", logo: "logo" },
    { name: "Huawei", logo: "logo" },
  ];

  return (
    <div className="bg-[#393939] text-center flex flex-col justify-center items-center w-[97%] m-auto mb-20">
      <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[50px] relative z-10">
        НАШИ ПАРТНЕРЫ
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 w-full">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-[#707070] flex h-[56vh] justify-center items-center hover:bg-[#9c9c9c] hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            <span className="text-6xl">{partner.logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
