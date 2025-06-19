
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Briefcase, Trophy, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <PenTool className="h-12 w-12 text-amber-500" />,
      title: "Premium Essay Editing",
      description: "Transform your personal statements and supplemental essays with expert guidance from Ivy League graduates. We help you craft compelling narratives that stand out.",
      features: ["Personal Statement Perfection", "Supplemental Essay Strategy", "Multiple Revision Rounds", "Voice & Style Development"]
    },
    {
      icon: <Briefcase className="h-12 w-12 text-blue-500" />,
      title: "Exclusive Internships",
      description: "Access our curated network of premium internship opportunities at top companies and research institutions. Build experience that impresses admissions officers.",
      features: ["Tech & Finance Internships", "Research Opportunities", "Startup Placements", "Government Programs"]
    },
    {
      icon: <Trophy className="h-12 w-12 text-purple-500" />,
      title: "Extracurricular Building",
      description: "Develop a strategic extracurricular profile that demonstrates leadership, impact, and passion. We help you create activities that tell your unique story.",
      features: ["Leadership Development", "Community Impact Projects", "Competition Strategy", "Passion Project Guidance"]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support across every aspect of your college application journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-700">
                      <Target className="h-4 w-4 text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
