import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Configure Sanity client
const client = sanityClient({
  projectId: "d3jxz1tr", // Replace with your project ID
  dataset: "production",
  useCdn: true,
});

// Image URL builder function
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const PartnerLogos = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "partnerLogo"]{name, logo, link}`)
      .then((data) => setPartners(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-[#393939] text-center flex flex-col justify-center items-center w-[97%] m-auto mb-20">
      <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[50px] relative z-10">
        НАШИ ПАРТНЕРЫ
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 w-full">
        {partners.map((partner, index) => (
          <div
            key={index}
            className=" flex  justify-center items-center duration-500 hover:scale-[1.01] hover:shadow-2xl transition-all"
          >
            {partner.logo ? (
              <a
                href={partner.link}
                target="_blank"
                className="relative w-full h-0 pb-[100%] bg-black overflow-hidden"
              >
                {/* Grey Tint Overlay */}
                <div className="absolute inset-0 bg-[#393939] opacity-30 hover:opacity-10 duration-500 transition-all z-[2]" />

                {/* Image */}
                <img
                  src={urlFor(partner.logo).url()}
                  alt={partner.name}
                  className="p-10 absolute inset-0 w-full h-full object-cover hover:rounded-2xl transition-all duration-700 z-[1]"
                />
              </a>
            ) : (
              <span className="text-6xl text-white font-roadRadio text-center">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
