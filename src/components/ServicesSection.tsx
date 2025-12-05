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
      "Title Verification & Due Diligence",
      "Encumbrance Certificate",
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
      "High Court & Supreme Court",
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
      "Legal Heir Certificate",
      "Divorce & Custody",
      "Marriage Registration",
    ],
  },
  {
    icon: Briefcase,
    title: "Financial & Tax",
    description:
      "Guidance on Indian tax laws, GST compliance, and representation in financial disputes.",
    items: [
      "Income Tax Compliance",
      "GST Registration & Filing",
      "Tax Disputes",
      "Financial Planning",
    ],
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Professional will drafting, estate planning, and trust formation services for overseas Indians.",
    items: [
      "Will Drafting & Registration",
      "Estate Management",
      "Trust Formation",
      "Power of Attorney",
    ],
  },
  {
    icon: Landmark,
    title: "Corporate Services",
    description:
      "Company formation, corporate law compliance, contract drafting, and IP protection.",
    items: [
      "Company Registration",
      "Contract Drafting",
      "Trademark & IP",
      "Business Compliance",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-16 h-[2px] bg-primary mx-auto mb-6"
          />
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Comprehensive Legal Services
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Tailored legal solutions for Non-Resident Indians with expertise in Tamil Nadu laws.
            From property matters to corporate compliance, we handle it all.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full bg-card border border-border/30 rounded-xl p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(201,162,39,0.15)] relative overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon with number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="font-serif text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-foreground/70 group-hover:text-foreground/80 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold group/link"
                  >
                    <span className="relative">
                      Get Consultation
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-card/50 border border-border/30 rounded-2xl">
            <p className="text-muted-foreground mb-4 text-lg">
              Looking for a specific legal service?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-primary font-semibold text-lg hover:gap-4 transition-all duration-300"
            >
              <span>Contact us for custom legal solutions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
