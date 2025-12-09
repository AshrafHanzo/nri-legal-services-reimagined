import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsHero from "@/components/TestimonialsHero";
import TestimonialsGrid from "@/components/TestimonialsGrid";

const Testimonials = () => {
    return (
        <>
            <Helmet>
                <title>Client Testimonials | Tamil Nadu NRI Legal Services</title>
                <meta
                    name="description"
                    content="Read what our NRI clients say about our legal services. Real testimonials from satisfied clients across the globe."
                />
                <link rel="canonical" href="https://www.tamilnadunrilegalservices.com/testimonials" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <TestimonialsHero />
                    <TestimonialsGrid />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Testimonials;
