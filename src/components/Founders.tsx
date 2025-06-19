
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Founders = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Meet Our Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Admits from world's top universities with proven track records in admissions success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Shrey</h3>
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/LSE_Logo.svg/1200px-LSE_Logo.svg.png" alt="LSE" className="h-6 w-6 object-contain" />
                    LSE Admit
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Also got into:</p>
                  <div className="flex justify-center items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/University_College_London_logo.svg/1200px-University_College_London_logo.svg.png" alt="UCL" className="h-4 w-4 object-contain" />
                      UCL
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/University_of_St_Andrews_arms.svg/1200px-University_of_St_Andrews_arms.svg.png" alt="St Andrews" className="h-4 w-4 object-contain" />
                      St Andrews
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/King%27s_College_London_logo.svg/1200px-King%27s_College_London_logo.svg.png" alt="KCL" className="h-4 w-4 object-contain" />
                      KCL
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Economics admit from London School of Economics with expertise in quantitative analysis and strategic thinking. Specializes in helping students craft compelling narratives for top-tier programs.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Economics</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Essay Strategy</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">Research</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-16 w-16 text-amber-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Divyansh</h3>
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" alt="UC Berkeley" className="h-6 w-6 object-contain" />
                    UC Berkeley Admit
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Also got into:</p>
                  <div className="flex justify-center items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/UCSD_Seal.svg/1200px-UCSD_Seal.svg.png" alt="UCSD" className="h-4 w-4 object-contain" />
                      UCSD
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/University_of_Southern_California_seal.svg/1200px-University_of_Southern_California_seal.svg.png" alt="USC" className="h-4 w-4 object-contain" />
                      USC
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_University_seal.svg/1200px-Purdue_University_seal.svg.png" alt="Purdue" className="h-4 w-4 object-contain" />
                      Purdue
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Computer Science admit from UC Berkeley with extensive experience in tech industry placements. Focuses on STEM applications and extracurricular development strategies.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Computer Science</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Tech Industry</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">STEM Focus</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Founders;
