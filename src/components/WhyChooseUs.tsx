import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    Shield,
    Clock,
    Users,
    Award,
    HeadphonesIcon,
    Globe,
    CheckCircle2
} from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Trusted Expertise",
        description: "Over 20 years of specialized experience in handling NRI legal matters with integrity and professionalism"
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Round-the-clock support across time zones to ensure you're never alone in your legal journey"
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description: "Expert lawyers and legal consultants committed to protecting your interests in Tamil Nadu"
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description: "Successfully resolved over 2000 cases with a 95% success rate in litigation matters"
    },
    {
        icon: HeadphonesIcon,
        title: "Personalized Service",
        description: "Tailored legal solutions designed specifically for your unique situation and requirements"
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Serving NRIs from over 50 countries with seamless communication and transparent processes"
    },
];

const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
                                Why Choose Us
                            </p>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Your Trusted Legal Partner in India
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                We understand the unique challenges NRIs face when managing legal affairs from abroad.
                                Our dedicated team provides comprehensive support, ensuring your interests are protected
                                with the highest standards of professionalism and care.
                            </p>

                            {/* Key Points */}
                            <div className="space-y-4">
                                {[
                                    "Free initial consultation to understand your needs",
                                    "Transparent pricing with no hidden costs",
                                    "Regular updates on case progress",
                                    "Multilingual support for your convenience"
                                ].map((point, index) => (
                                    <motion.div
                                        key={point}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                        <p className="text-foreground/90">{point}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-6 border border-border shadow-card hover:shadow-lg-custom transition-all duration-300 group"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
