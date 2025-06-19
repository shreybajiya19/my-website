
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Lightbulb, Briefcase, MessageSquare, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <PenTool className="h-12 w-12 text-amber-500" />,
      title: "Premium Essay Crafting",
      description: "Premium essay crafting that grabs the admission officer's interest and makes your application stand out. Unlimited edit suggestions and reviews!",
      features: ["Personal Statement Perfection", "Unlimited Revisions", "Admission Officer Appeal", "Voice & Style Development"]
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-purple-500" />,
      title: "Passion Project Development",
      description: "Extracurricular passion project development. Your ECs show your interests and your commitments, and we'll help you develop projects that make an impact on the reader!",
      features: ["Impact-Focused Projects", "Interest Alignment", "Reader Engagement", "Commitment Demonstration"]
    },
    {
      icon: <Briefcase className="h-12 w-12 text-blue-500" />,
      title: "Multinational Internships",
      description: "Internship at a multinational company in applicant's intended major field of 1-2 months duration, with certificate.",
      features: ["Major-Specific Placement", "1-2 Month Duration", "Certificate Provided", "Multinational Company"]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-green-500" />,
      title: "Interview Preparation",
      description: "Interview prep as required. 5 preparation/mock interview sessions to ensure you're confident and ready for any admissions interview.",
      features: ["5 Mock Sessions", "Personalized Feedback", "Confidence Building", "Strategy Development"]
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
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Harvard Admissions Review - Emphasized Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-4 border-amber-400 shadow-2xl bg-gradient-to-br from-amber-50 to-white">
            <CardHeader className="text-center pb-4 bg-gradient-to-r from-amber-100 to-amber-50">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-white rounded-full p-2 shadow-lg">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png" 
                    alt="Harvard" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800 mb-2">Harvard Admissions Review</CardTitle>
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
                EXCLUSIVE OFFERING
              </div>
            </CardHeader>
            <CardContent className="text-center p-8">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                1 final full-profile review before submitting application by a former HARVARD ADMISSIONS OFFICER.
              </p>
              <ul className="space-y-3">
                {["Former Harvard Officer", "Complete Profile Review", "Pre-Submission Check", "Expert Final Assessment"].map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-2 text-gray-700 font-semibold">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
