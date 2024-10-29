import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient";

const TeamSection = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Fetch team members from Sanity
    client
      .fetch(
        `*[_type == "teamMember"]{
          name,
          logo,
          description
        }`
      )
      .then((data) => setPartners(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-[#393939] text-center flex flex-col justify-center items-center w-[95%] sm:w-[97%] m-auto mb-10 sm:mb-20 p-4 sm:p-8">
      {/* Title */}
      <div className="relative mb-8 sm:mb-12">
        <h2 className="text-center text-[#8BFF30] text-4xl sm:text-5xl md:text-7xl font-roadRadio mb-[30px] sm:mb-[50px] md:mb-[90px] relative z-10">
          НАША КОМАНДА
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[40px] top-4 sm:text-[70px] sm:top-6 md:text-[100px] md:top-4 xl:text-[160px] xl:top-0 text-[#757575] font-roadRadio absolute whitespace-nowrap">
            ЭКСПЕРТЫ
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-20 w-full text-white">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full h-0 pb-[100%] bg-[#707070] overflow-hidden mb-4 sm:mb-7">
              {/* Grey Tint Overlay */}
              <div className="absolute inset-0 bg-[#393939] opacity-[0] duration-500 transition-all z-[2]" />

              {/* Image */}
              <img
                src={urlFor(partner.logo).url()}
                alt={partner.name}
                className="absolute inset-0 w-full h-full object-cover hover:rounded-2xl transition-all duration-700 z-[1]"
              />
            </div>
            <div className="mb-2 sm:mb-3">
              <h2 className="text-2xl sm:text-3xl font-roadRadio">{partner.name}</h2>
            </div>
            <p className="w-[90%] sm:w-[80%] md:w-[70%] font-light text-lg sm:text-xl md:text-2xl m-auto text-left">
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
