
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      university: "Harvard University",
      program: "Economics",
      content: "Aureus transformed my application completely. Their essay guidance helped me articulate my passion for economics in a way that truly resonated with admissions officers. The personalized attention was incredible.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      university: "Stanford University", 
      program: "Computer Science",
      content: "The internship opportunities through Aureus were game-changing. I landed a research position that became the centerpiece of my application. Couldn't have done it without their network.",
      rating: 5
    },
    {
      name: "Emily Thompson",
      university: "MIT",
      program: "Engineering",
      content: "Shrey and Divyansh didn't just help with my application - they helped me discover my true interests and build a coherent narrative. The extracurricular guidance was particularly valuable.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who transformed their dreams into acceptances at top universities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Quote className="h-8 w-8 text-amber-500 opacity-60" />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="text-center border-t pt-4">
                  <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                  <p className="text-amber-600 font-semibold">{testimonial.university}</p>
                  <p className="text-gray-500 text-sm">{testimonial.program}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
