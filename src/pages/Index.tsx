
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import Testimonials from "@/components/Testimonials";
import UniversityStrip from "@/components/UniversityStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Hero />
      <Services />
      <Founders />
      <Testimonials />
      <UniversityStrip />
      <Footer />
    </div>
  );
};

export default Index;
