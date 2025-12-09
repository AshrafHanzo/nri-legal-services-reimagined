import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Tamil Nadu NRI Legal Services</title>
                <meta
                    name="description"
                    content="Learn about our team of experienced legal professionals dedicated to serving NRIs across Tamil Nadu with integrity and empathy."
                />
                <link rel="canonical" href="https://www.tamilnadunrilegalservices.com/about" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <AboutHero />
                    <AboutSection />
                    <TeamSection />
                    <TestimonialsSection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default About;
