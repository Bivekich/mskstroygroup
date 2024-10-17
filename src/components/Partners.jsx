import React from "react";

const PartnerLogos = () => {
  const partners = [
    { name: "Apple", logo: "logo" },
    { name: "Samsung", logo: "logo" },
    { name: "Huawei", logo: "logo" },
  ];

  return (
    <div className="bg-[#393939] text-center min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-[#8BFF30] text-4xl font-bold mb-20">НАШИ ПАРТНЕРЫ</h1>
      <div className="grid grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-[#707070] w-52 h-52 flex justify-center items-center hover:bg-[#9c9c9c] hover:scale-[1.01] hover:shadow-2xl transition-all"
            className="bg-[#707070] w-64 h-64 flex justify-center items-center hover:bg-[#9c9c9c] hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            <span className="text-6xl">{partner.logo}</span>
          </div>
        ))}
        {partners.map((partner, index) => (
          <div
            key={index + partners.length}
            className="bg-[#707070] w-52 h-52 flex justify-center items-center hover:bg-[#9c9c9c] hover:scale-[1.01] hover:shadow-2xl transition-all"
            className="bg-[#707070] w-64 h-64 flex justify-center items-center hover:bg-[#9c9c9c] hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            <span className="text-6xl">{partner.logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
