
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
              Join hundreds of students who have achieved their dream university admissions with Aureus Mentorship Program.
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
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold text-amber-400">AUREUS</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Premium college application mentorship program dedicated to helping students achieve their dreams of attending world-class universities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span>contact@aureusmentorship.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Essay Editing</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Internship Placement</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Extracurricular Building</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Application Strategy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Universities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Ivy League</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Top 50 US</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">UK Universities</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">International</li>
              </ul>
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
