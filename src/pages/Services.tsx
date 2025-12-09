import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import AllServices from "@/components/AllServices";

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services | Tamil Nadu NRI Legal Services</title>
                <meta
                    name="description"
                    content="Comprehensive legal services for NRIs including property management, litigation, family law, taxation, and corporate services in Tamil Nadu."
                />
                <link rel="canonical" href="https://www.tamilnadunrilegalservices.com/services" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <ServicesHero />
                    <AllServices />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Services;
