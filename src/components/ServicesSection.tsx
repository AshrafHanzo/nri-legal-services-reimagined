import { motion } from "framer-motion";
import {
  Building2,
  Scale,
  Users,
  Briefcase,
  FileText,
  Landmark,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Property purchase, sale, verification, due diligence, and dispute resolution for NRIs in Tamil Nadu.",
    items: [
      "Property Purchase & Sale",
      "Property Verification",
      "Dispute Resolution",
    ],
  },
  {
    icon: Scale,
    title: "Litigation Services",
    description:
      "Comprehensive representation in civil, criminal cases, arbitration, and consumer protection matters.",
    items: [
      "Civil & Criminal Cases",
      "Arbitration Services",
      "Consumer Protection",
    ],
  },
  {
    icon: Users,
    title: "Family & Succession",
    description:
      "Expert handling of succession certificates, divorce matters, marriage registration, and adoption.",
    items: [
      "Succession Certificates",
      "Divorce & Custody",
      "Marriage Registration",
    ],
  },
  {
    icon: Briefcase,
    title: "Financial & Tax",
    description:
      "Guidance on Indian tax laws, GST compliance, and representation in financial disputes.",
    items: ["Tax Compliance", "GST Matters", "Financial Disputes"],
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Professional will drafting, estate planning, and trust formation services for overseas Indians.",
    items: ["Will Drafting", "Estate Management", "Trust Formation"],
  },
  {
    icon: Landmark,
    title: "Corporate Services",
    description:
      "Company formation, corporate law compliance, contract drafting, and IP protection.",
    items: ["Company Formation", "Contract Drafting", "IP Protection"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-navy" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Suite of Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive legal solutions tailored for Indians residing abroad,
            with special focus on Tamil Nadu matters.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full bg-gradient-card border border-border/50 rounded-lg p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-gold relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Didn't find your relevant service?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
          >
            Contact us for custom legal solutions
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
