
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
            Started by LSE and UC Berkeley admits, they have a proven track record in admissions success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/18b83c54-c811-4015-aca2-f896df0ba148.png" 
                    alt="Shrey Bajiya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Shrey Bajiya</h3>
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <img src="/lovable-uploads/81c10495-c095-42a2-a9ee-fec3fb09fb2a.png" alt="LSE" className="h-6 w-6 object-contain" />
                    LSE Admit
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Also got into:</p>
                  <div className="flex justify-center items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="/lovable-uploads/dfc2f5af-3e80-4652-be3a-adbf8c6fc15f.png" alt="UCL" className="h-4 w-4 object-contain" />
                      UCL
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="/lovable-uploads/b7b705b1-b1f1-45f9-99c0-a9c9594226c0.png" alt="St Andrews" className="h-4 w-4 object-contain" />
                      St Andrews
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="/lovable-uploads/e920c3c7-d950-4465-b7b9-213bc604f285.png" alt="KCL" className="h-4 w-4 object-contain" />
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
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/74b02a6a-82c1-4110-ab7d-79b69827ced2.png" 
                    alt="Divyansh Koowal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Divyansh Koowal</h3>
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <img src="/lovable-uploads/d0ce02b2-f59f-4932-8607-e79326219e4b.png" alt="UC Berkeley" className="h-6 w-6 object-contain" />
                    UC Berkeley Admit
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Also got into:</p>
                  <div className="flex justify-center items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="/lovable-uploads/173b5f15-a2bd-4dc3-a8f4-eb110a0db0cf.png" alt="UCSD" className="h-4 w-4 object-contain" />
                      UCSD
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="/lovable-uploads/3756ca46-e4d8-4699-b7e4-3ffcc29bb69d.png" alt="USC" className="h-4 w-4 object-contain" />
                      USC
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
                      <img src="/lovable-uploads/0e2e5c92-144c-4c66-9603-bfe43e4ee4b0.png" alt="Purdue" className="h-4 w-4 object-contain" />
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
