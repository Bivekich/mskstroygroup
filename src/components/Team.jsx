
const TeamSection = () => {
  return (
    <div className="bg-[#393939] text-white py-10 relative">
      {/* Title */}
      <h2 className="text-center text-lime-400 text-xl font-bold mb-5">НАША КОМАНДА</h2>
      {/* Background text */}
      <div className="text-center text-gray-500 text-6xl font-bold absolute inset-x-0 top-20">ЭКСПЕРТЫ</div>

      {/* Team members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {/* First team member */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gray-600 h-60 w-60"></div>
          <h3 className="text-lg font-semibold">ЭМИЛЬ АНАНЬЕВ</h3>
          <p className="text-sm text-gray-300 text-center px-4">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Fringilla montes pharetra risus massa accumsan.
            Pharetra est quam libero nunc eget penatibus rhoncus in. Sagittis dapibus ultrices natoque condimentum.
          </p>
        </div>

        {/* Second team member */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gray-600 h-60 w-60"></div>
          <h3 className="text-lg font-semibold">ДАНИЛ ЯКОВЛЕВ</h3>
          <p className="text-sm text-gray-300 text-center px-4">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Fringilla montes pharetra risus massa accumsan.
            Pharetra est quam libero nunc eget penatibus rhoncus in. Sagittis dapibus ultrices natoque condimentum.
          </p>
        </div>

        {/* Third team member (same as second one) */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gray-600 h-60 w-60"></div>
          <h3 className="text-lg font-semibold">ДАНИЛ ЯКОВЛЕВ</h3>
          <p className="text-sm text-gray-300 text-center px-4">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Fringilla montes pharetra risus massa accumsan.
            Pharetra est quam libero nunc eget penatibus rhoncus in. Sagittis dapibus ultrices natoque condimentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
