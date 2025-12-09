import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        details: ["+91 999 455 2217", "+91 944 567 8901"],
        action: "tel:+919994552217"
    },
    {
        icon: Mail,
        title: "Email",
        details: ["info@tamilnadunrilegalservices.com"],
        action: "mailto:info@tamilnadunrilegalservices.com"
    },
    {
        icon: MapPin,
        title: "Office",
        details: ["Chennai, Tamil Nadu", "India"],
        action: null
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: ["Mon - Sat: 9:00 AM - 6:00 PM", "24/7 Emergency Support"],
        action: null
    },
];

const LocationSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Visit Our Office
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Located in the heart of Chennai, we're easily accessible and ready to serve you
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information Cards */}
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            const content = (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-6 border border-border shadow-card hover:shadow-lg-custom transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                                                {info.title}
                                            </h3>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-muted-foreground">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );

                            return info.action ? (
                                <a key={info.title} href={info.action} className="block">
                                    {content}
                                </a>
                            ) : (
                                <div key={info.title}>{content}</div>
                            );
                        })}
                    </div>

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[500px] rounded-2xl overflow-hidden border border-border shadow-lg-custom"
                    >
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                                <p className="text-lg font-semibold text-foreground mb-2">Chennai, Tamil Nadu</p>
                                <p className="text-muted-foreground">Map location placeholder</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    (You can integrate Google Maps here)
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-border shadow-card text-center"
                >
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Serving NRIs Worldwide
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                        While our office is in Chennai, we serve NRI clients across the globe through
                        video consultations, email, and phone support. Distance is no barrier to quality legal service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/80">
                        <div className="px-4 py-2 bg-gray-50 rounded-lg">🇺🇸 USA</div>
                        <div className="px-4 py-2 bg-gray-50 rounded-lg">🇬🇧 UK</div>
                        <div className="px-4 py-2 bg-gray-50 rounded-lg">🇦🇺 Australia</div>
                        <div className="px-4 py-2 bg-gray-50 rounded-lg">🇨🇦 Canada</div>
                        <div className="px-4 py-2 bg-gray-50 rounded-lg">🇸🇬 Singapore</div>
                        <div className="px-4 py-2 bg-gray-50 rounded-lg">🇦🇪 UAE</div>
                        <div className="px-4 py-2 bg-gray-50 rounded-lg">And 40+ more countries</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LocationSection;
