import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Gallery | Tamil Nadu NRI Legal Services</title>
                <meta
                    name="description"
                    content="View our gallery showcasing our office, team events, and successful case celebrations."
                />
                <link rel="canonical" href="https://www.tamilnadunrilegalservices.com/gallery" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <GalleryHero />
                    <GalleryGrid />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Gallery;
