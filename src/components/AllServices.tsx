import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
    Home,
    FileText,
    Scale,
    Users,
    Building2,
    CreditCard,
    FileCheck,
    Briefcase,
    UserCheck,
    Calculator,
    ShoppingCart,
    TrendingUp,
    ArrowRight
} from "lucide-react";

const allServices = [
    {
        category: "Property Management and Disputes",
        icon: Home,
        services: [
            {
                title: "Property Purchase and Sale",
                description: "Complete assistance in buying and selling property in Tamil Nadu, including documentation and legal verification"
            },
            {
                title: "Property Verification and Due Diligence",
                description: "Thorough background checks and verification of property documents to ensure clear ownership"
            },
            {
                title: "Obtaining Property Documents",
                description: "Help in acquiring encumbrance certificates, patta, chitta, and other essential documents"
            },
            {
                title: "Landlord-Tenant Dispute Resolution",
                description: "Expert mediation and legal support for resolving rental agreements and eviction matters"
            },
            {
                title: "Property Disputes Resolution",
                description: "Representation in property litigation, boundary disputes, and ownership claims"
            },
            {
                title: "Land and Property Development Issues",
                description: "Legal support for property development, construction approvals, and compliance"
            }
        ]
    },
    {
        category: "Litigation and Dispute Resolution",
        icon: Scale,
        services: [
            {
                title: "Representation in Civil and Criminal Cases",
                description: "Expert legal representation across all courts in Tamil Nadu for civil and criminal matters"
            },
            {
                title: "Arbitration and Mediation Services",
                description: "Alternative dispute resolution to save time and costs in resolving conflicts"
            },
            {
                title: "Consumer Protection and Disputes",
                description: "Filing and representation in consumer court for defective products and services"
            },
            {
                title: "Resolution of Commercial Disputes",
                description: "Handling business disputes, contract breaches, and commercial litigation"
            },
            {
                title: "Landlord Tenant Disputes",
                description: "Legal support for eviction proceedings and tenancy agreement disputes"
            }
        ]
    },
    {
        category: "Family and Succession Matters",
        icon: Users,
        services: [
            {
                title: "Succession Certificates and Legal Heirship",
                description: "Assistance in obtaining succession certificates from the court of law"
            },
            {
                title: "Divorce and Child Custody Matters",
                description: "Compassionate handling of divorce proceedings and custody arrangements"
            },
            {
                title: "NRI Marriage Registration",
                description: "Complete support for marriage registration and documentation for NRIs"
            },
            {
                title: "Adoption Procedures",
                description: "Legal guidance through the adoption process in Tamil Nadu"
            },
            {
                title: "Partition and Settlement of Family Property",
                description: "Fair division of family assets and property partition suits"
            }
        ]
    },
    {
        category: "Financial, Taxation and Compliance",
        icon: CreditCard,
        services: [
            {
                title: "Handling Financial Disputes",
                description: "Resolution of disputes with banks and financial institutions"
            },
            {
                title: "Guidance on Compliance with Tax Laws",
                description: "Expert advice on Indian tax compliance for NRIs"
            },
            {
                title: "Compliance with GST and Other Tax Laws",
                description: "GST registration, filing, and compliance services"
            },
            {
                title: "Representation in Tax Disputes",
                description: "Legal representation before tax authorities and tribunals"
            }
        ]
    },
    {
        category: "Estate Planning and Will Drafting",
        icon: FileCheck,
        services: [
            {
                title: "Drafting and Execution of Wills",
                description: "Legally sound will drafting to ensure your wishes are honored"
            },
            {
                title: "Estate Planning and Management",
                description: "Comprehensive planning for the transfer and management of your estate"
            },
            {
                title: "Trust Formation and Administration",
                description: "Setting up and managing trusts for asset protection"
            }
        ]
    },
    {
        category: "Business and Corporate Services",
        icon: Briefcase,
        services: [
            {
                title: "Company Formation and Registration",
                description: "Complete assistance in setting up businesses in India"
            },
            {
                title: "Corporate Advisory Services",
                description: "Strategic legal advice for corporate governance and compliance"
            },
            {
                title: "Contract Drafting and Review",
                description: "Professional drafting and vetting of business contracts"
            },
            {
                title: "NCLT Matters",
                description: "Representation in National Company Law Tribunal cases"
            }
        ]
    }
];

const AllServices = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section ref={ref} className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {allServices.map((category, catIndex) => {
                    const CategoryIcon = category.icon;
                    return (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            className="mb-20 last:mb-0"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 rounded-xl bg-gradient-blue flex items-center justify-center flex-shrink-0">
                                    <CategoryIcon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                                        {category.category}
                                    </h2>
                                    <div className="h-1 w-20 bg-primary mt-2 rounded-full" />
                                </div>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.services.map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: catIndex * 0.1 + index * 0.05 }}
                                        className="group"
                                    >
                                        <div className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-lg-custom transition-all duration-300 h-full flex flex-col">
                                            <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                                                {service.description}
                                            </p>
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:gap-3 transition-all duration-300 text-sm"
                                            >
                                                Get Started
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center bg-gray-50 rounded-2xl p-12"
                >
                    <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                        Don't See What You're Looking For?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We handle a wide range of legal matters for NRIs. Contact us to discuss your specific requirements.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                    >
                        Contact Us Today
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AllServices;
