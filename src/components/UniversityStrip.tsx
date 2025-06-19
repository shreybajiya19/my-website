
const UniversityStrip = () => {
  const universities = [
    { name: "Harvard", logo: "https://logos-world.net/wp-content/uploads/2020/06/Harvard-Logo.png", count: 2 },
    { name: "Stanford", logo: "https://logos-world.net/wp-content/uploads/2020/06/Stanford-Logo.png", count: 4 },
    { name: "MIT", logo: "https://logos-world.net/wp-content/uploads/2020/06/MIT-Logo.png", count: 1 },
    { name: "Yale", logo: "https://logos-world.net/wp-content/uploads/2020/06/Yale-Logo.png", count: 3 },
    { name: "Princeton", logo: "https://logos-world.net/wp-content/uploads/2020/06/Princeton-Logo.png", count: 2 },
    { name: "Columbia", logo: "https://logos-world.net/wp-content/uploads/2020/06/Columbia-Logo.png", count: 3 },
    { name: "UC Berkeley", logo: "https://logos-world.net/wp-content/uploads/2020/06/UC-Berkeley-Logo.png", count: 6 },
    { name: "LSE", logo: "https://1000logos.net/wp-content/uploads/2017/02/LSE-Logo.png", count: 2 }
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
