import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

const team = [
    {
        name: "Senior Advocate",
        role: "Managing Partner",
        expertise: "Property Law & Litigation",
        description: "25+ years of experience in handling complex NRI legal matters",
    },
    {
        name: "Legal Consultant",
        role: "Family Law Specialist",
        expertise: "Family & Succession Law",
        description: "Expert in succession certificates and family disputes",
    },
    {
        name: "Corporate Lawyer",
        role: "Corporate Affairs",
        expertise: "Business & Tax Law",
        description: "Specialized in corporate compliance and taxation",
    },
    {
        name: "Property Expert",
        role: "Real Estate Division",
        expertise: "Property Management",
        description: "Dedicated to property verification and documentation",
    },
];

const TeamSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
                        Our Team
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Meet Our Legal Experts
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        A dedicated team of experienced professionals committed to providing
                        exceptional legal services to NRIs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-lg-custom transition-all duration-300">
                                {/* Image Placeholder */}
                                <div className="relative h-72 bg-gradient-blue overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="w-16 h-16 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <Linkedin className="w-5 h-5 text-primary" />
                                        </a>
                                        <a
                                            href={`mailto:info@tamilnadunrilegalservices.com`}
                                            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                                        >
                                            <Mail className="w-5 h-5 text-primary" />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-semibold text-sm mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-foreground/70 mb-3 font-medium">
                                        {member.expertise}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
