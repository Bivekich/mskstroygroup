
const partners = [
  { name: "Эмиль Ананьев", logo: "picture", description: "uries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore"  },
  { name: "Эмиль Ананьев", logo: "picture", description: "uries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore"},
  { name: "Даниил Яковлев", logo: "picture", description: "uries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore" },
];

const TeamSection = () => {
  return (
    <div className="bg-[#393939] text-center flex flex-col justify-center items-center w-[97%] m-auto mb-20">
      {/* Title */}
      <div className="relative">
        <h2 className="text-center text-[#8BFF30] text-7xl font-roadRadio mb-[90px] relative z-10">
        НАША КОМАНДА
      </h2>
      <div className="absolute inset-0 flex items-center justify-center ">
    <h1 className="text-[160px] text-[#757575] font-roadRadio absolute whitespace-nowrap">
      ЭКСПЕРТЫ
    </h1>
  </div></div>
      
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 w-full text-white">
        {partners.map((partner, index) => (
          <div><div
          key={index}
          className="bg-[#707070] flex h-[56vh] justify-center items-center hover:shadow-xl transition-all mb-7"
        >
          <span className="text-6xl">{partner.logo}</span>
        </div>
        <div className="mb-3"><h className="text-3xl font-roadRadio">{partner.name}</h></div>
        <p className="w-[70%] font-light text-2xl m-auto text-left">{partner.description}</p></div>
          
          
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
