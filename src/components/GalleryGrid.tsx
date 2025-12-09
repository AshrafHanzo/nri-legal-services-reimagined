import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Image } from "lucide-react";

const galleryItems = [
    { title: "Office Space", category: "Office" },
    { title: "Team Meeting", category: "Team" },
    { title: "Client Consultation", category: "Work" },
    { title: "Team Celebration", category: "Events" },
    { title: "Office Interior", category: "Office" },
    { title: "Success Story", category: "Achievement" },
    { title: "Conference Room", category: "Office" },
    { title: "Team Photo", category: "Team" },
    { title: "Award Ceremony", category: "Achievement" },
];

const GalleryGrid = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative"
                        >
                            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-professional hover:shadow-professional-hover transition-all duration-500">
                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                    <Image className="w-16 h-16 text-gray-400" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-overlay p-6">
                                    <p className="text-xs text-white/80 mb-1">{item.category}</p>
                                    <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600">Image placeholders - Replace with actual gallery photos</p>
                </div>
            </div>
        </section>
    );
};

export default GalleryGrid;
