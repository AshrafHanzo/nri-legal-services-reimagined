import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Tamil Nadu NRI Legal Services | Expert Legal Solutions for Overseas Indians</title>
                <meta
                    name="description"
                    content="Specialized legal services for NRIs in Tamil Nadu. Property disputes, succession, family law, corporate services. Free consultation."
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
                    <ServicesOverview />
                    <WhyChooseUs />
                    <CallToAction />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Home;
