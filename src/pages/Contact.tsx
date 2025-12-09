import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Tamil Nadu NRI Legal Services</title>
                <meta
                    name="description"
                    content="Get in touch with our legal experts. Free consultation available. We're here to help with all your legal matters in Tamil Nadu."
                />
                <link rel="canonical" href="https://www.tamilnadunrilegalservices.com/contact" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <ContactHero />
                    <ContactSection />
                    <LocationSection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Contact;
