import React, { useEffect, useState } from "react";
import client from "../sanityClient"; // Adjust the path as needed

const CompanyServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "service"]{
          _id,
          title,
          description,
          "iconUrl": icon.asset->url // Fetch icon URL
        }`
      )
      .then((data) => setServices(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-[#393939] p-8 min-h-screen flex flex-col items-center w-[75%] m-auto mb-20">
      <div className="relative text-center mb-10">
        <h2 className="text-[#8BFF30] text-7xl font-roadRadio mb-[90px] relative z-10">
          УСЛУГИ КОМПАНИИ
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[160px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
            УСЛУГИ
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[80px] w-full text-white">
        {services.map((service, index) => {
          // Determine row and column based on index in 2-column grid
          const isEvenRow = Math.floor(index / 2) % 2 === 0;
          const isLeftColumn = index % 2 === 0;
          const iconColor = isEvenRow
            ? isLeftColumn
              ? "bg-[#8BFF30] text-black" // Green for left column in even rows
              : "bg-white text-[#8BFF30]" // White for right column in even rows
            : isLeftColumn
            ? "bg-white text-[#8BFF30]" // White for left column in odd rows
            : "bg-[#8BFF30] text-black"; // Green for right column in odd rows

          return (
            <div
              key={service._id}
              className="bg-[#707070] p-8 text-white hover:shadow-xl transition-all min-h-[500px]"
            >
              <div className="flex mb-4 ml-10">
                <div
                  className={`${iconColor} rounded-full w-[80px] h-[80px] flex justify-center items-center overflow-hidden text-4xl z-[1]`}
                >
                  {service.iconUrl ? (
                    <img
                      src={service.iconUrl}
                      alt={service.title}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  ) : (
                    "📄" // Fallback icon or emoji if icon is missing
                  )}
                </div>
              </div>
              <h3 className="text-4xl font-roadRadio mb-4 ml-10">
                {service.title}
              </h3>
              <p className="text-3xl font-light text-left ml-10 mb-10">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyServices;
