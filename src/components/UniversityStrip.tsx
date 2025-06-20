

const UniversityStrip = () => {
  const universities = [
    { name: "Harvard", logo: "/lovable-uploads/d7bfc3b5-7528-4810-a57a-3eb1682a7b71.png", count: 2 },
    { name: "Stanford", logo: "/lovable-uploads/6bde60e0-176a-4462-be06-ad5b15caed74.png", count: 4 },
    { name: "MIT", logo: "/lovable-uploads/ca6cc274-adb3-43c2-b5a3-82b7a6b0b0ae.png", count: 1 },
    { name: "Yale", logo: "/lovable-uploads/da829a11-133e-4b15-843b-2664f8006056.png", count: 3 },
    { name: "Princeton", logo: "/lovable-uploads/ce16da0f-1291-4726-bbd0-9684bad8e371.png", count: 2 },
    { name: "Columbia", logo: "/lovable-uploads/5df6e037-024b-4bd0-b707-91cbcf853fdb.png", count: 3 },
    { name: "UC Berkeley", logo: "/lovable-uploads/d0ce02b2-f59f-4932-8607-e79326219e4b.png", count: 6 },
    { name: "LSE", logo: "/lovable-uploads/81c10495-c095-42a2-a9ee-fec3fb09fb2a.png", count: 2 },
    { name: "USC", logo: "/lovable-uploads/cfc9b17d-3793-4a23-b56f-770c0427ee29.png", count: 5 },
    { name: "NYU", logo: "/lovable-uploads/a5be959f-6f00-4438-8bf1-ca7dac77fc15.png", count: 3 }
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
          <div className="flex animate-[slide-in-right_50s_linear_infinite] gap-16">
            {[...universities, ...universities, ...universities].map((university, index) => (
              <div key={`${university.name}-${index}`} className="flex-shrink-0 text-center group">
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

