import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPrecedenceHero from "@/components/LegalPrecedenceHero";
import PrecedenceCases from "@/components/PrecedenceCases";

const LegalPrecedence = () => {
    return (
        <>
            <Helmet>
                <title>Legal Precedence | Tamil Nadu NRI Legal Services</title>
                <meta
                    name="description"
                    content="Explore our successful legal precedents and landmark cases in NRI legal matters in Tamil Nadu."
                />
                <link rel="canonical" href="https://www.tamilnadunrilegalservices.com/legal-precedence" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <LegalPrecedenceHero />
                    <PrecedenceCases />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default LegalPrecedence;
