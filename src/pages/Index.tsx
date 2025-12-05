import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Tamil Nadu NRI Legal Services | Expert Legal Solutions for Overseas Indians</title>
        <meta
          name="description"
          content="Specialized legal services for NRIs in Tamil Nadu. Property disputes, succession, family law, corporate services. Free consultation. Call +91 7397320417"
        />
        <meta
          name="keywords"
          content="NRI legal services, Tamil Nadu lawyer, property dispute lawyer Chennai, succession certificate, NRI divorce lawyer, corporate lawyer Chennai"
        />
        <link rel="canonical" href="https://www.tamilnadunrilegalservices.com/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
