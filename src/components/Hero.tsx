
import { Button } from "@/components/ui/button";
import { Star, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Award className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-bold tracking-wider text-amber-400">AUREUS MENTORSHIP PROGRAM</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-amber-200 bg-clip-text text-transparent leading-tight">
            Premium College<br />
            Application Mentorship
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elite guidance from top university admits. Transform your college application into a masterpiece with personalized mentorship that gets results.
          </p>
          
          <div className="flex justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={() => window.open('https://form.typeform.com/to/JzjPOmfZ', '_blank')}
            >
              Apply Now
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-amber-400" />
              <span className="text-gray-300">50+ Students Mentored</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-400" />
              <span className="text-gray-300">20 Students per Application Cycle</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" />
              <span className="text-gray-300">Top 50 Universities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
