import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
    Home,
    Scale,
    Users as UsersIcon,
    CreditCard,
    FileText,
    Briefcase,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: Home,
        title: "Property Management",
        description: "Property purchase, sale, verification, and dispute resolution for NRIs",
        features: ["Title Verification", "Property Documentation", "Dispute Resolution"]
    },
    {
        icon: Scale,
        title: "Litigation Services",
        description: "Expert representation in civil and criminal cases across Tamil Nadu",
        features: ["Court Representation", "Arbitration", "Mediation Services"]
    },
    {
        icon: UsersIcon,
        title: "Family Law",
        description: "Succession certificates, divorce, custody, and marriage registration",
        features: ["Succession Certificates", "Divorce Proceedings", "Legal Heirship"]
    },
    {
        icon: CreditCard,
        title: "Financial & Taxation",
        description: "Tax compliance, financial disputes, and GST matters",
        features: ["Tax Compliance", "Financial Disputes", "GST Services"]
    },
    {
        icon: FileText,
        title: "Estate Planning",
        description: "Will drafting, estate planning, and trust administration",
        features: ["Will Drafting", "Estate Management", "Trust Formation"]
    },
    {
        icon: Briefcase,
        title: "Corporate Services",
        description: "Business setup, corporate advisory, and compliance services",
        features: ["Company Formation", "Corporate Advisory", "Compliance"]
    },
];

const ServicesOverview = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
                        Our Services
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Comprehensive Legal Solutions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        We offer a complete suite of legal services tailored specifically for NRIs
                        managing affairs in Tamil Nadu
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-lg-custom transition-all duration-300 h-full flex flex-col">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-xl bg-gradient-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Link */}
                                    <Link
                                        to="/services"
                                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                        asChild
                    >
                        <Link to="/services" className="flex items-center gap-2">
                            View All Services
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;
