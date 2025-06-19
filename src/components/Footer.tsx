
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join 50+ students who have achieved their dream university admissions with Aureus Mentorship Program.
            </p>
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={() => window.open('https://form.typeform.com/to/JzjPOmfZ', '_blank')}
            >
              Apply Now - Limited Spots Available
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center gap-2 mb-6">
              <Award className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold text-amber-400">AUREUS MENTORSHIP PROGRAM</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium college application mentorship program dedicated to helping students achieve their dreams of attending world-class universities.
            </p>
            <div className="space-y-3">
              <div className="flex justify-center items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>shreybajiya19@gmail.com</span>
              </div>
              <div className="flex justify-center items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+91 7678044282</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Aureus Mentorship Program. All rights reserved. Transforming dreams into acceptances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
