
const UniversityStrip = () => {
  const universities = [
    { name: "Harvard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png", count: 5 },
    { name: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Stanford_University.svg/1200px-Seal_of_Stanford_University.svg.png", count: 8 },
    { name: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", count: 6 },
    { name: "Yale", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/1200px-Yale_University_Shield_1.svg.png", count: 4 },
    { name: "Princeton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png", count: 7 },
    { name: "Columbia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Columbia_University.svg/1200px-Seal_of_Columbia_University.svg.png", count: 9 },
    { name: "UC Berkeley", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png", count: 12 },
    { name: "LSE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/LSE_Logo.svg/1200px-LSE_Logo.svg.png", count: 3 }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Students Got Into
          </h2>
          <p className="text-xl text-gray-300">
            Placements across the world's most prestigious universities
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-[slide-in-right_30s_linear_infinite] gap-16">
            {[...universities, ...universities].map((university, index) => (
              <div key={index} className="flex-shrink-0 text-center group">
                <div className="w-24 h-24 bg-white rounded-full p-4 mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={university.logo} 
                    alt={university.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-amber-500 text-black font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  {university.count}
                </div>
                <p className="text-white font-semibold mt-2">{university.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityStrip;
