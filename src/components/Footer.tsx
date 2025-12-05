import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/tamilnadunrilegalservices/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61554814514843",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://www.twitter.com/tnnrilegalserve",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tamilnadu-nrilegalservices-66b3a22a7/",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCle39Wr8D4KVeMzF5RCjN2g",
    label: "YouTube",
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Property Management",
  "Litigation Services",
  "Family & Succession",
  "Financial & Tax",
  "Estate Planning",
  "Corporate Services",
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Pre-footer CTA Section */}
      <div className="bg-primary/10 border-t border-primary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Ready to Discuss Your Legal Matter?
              </h3>
              <p className="text-muted-foreground">
                Schedule a free consultation with our experts today.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919994552217"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-gold"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919994552217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-card border-t border-border/30">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 80"
                    className="w-7 h-6 text-primary"
                    fill="currentColor"
                  >
                    <path d="M50 0L10 20v5h80v-5L50 0zM15 30v35h10V30H15zm20 0v35h10V30H35zm20 0v35h10V30H55zm20 0v35h10V30H75zM5 70v10h90V70H5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Tamil Nadu NRI
                  </h3>
                  <p className="text-xs text-primary tracking-wider uppercase">
                    Legal Services
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Specialized in handling legal matters for Indians residing abroad,
                with expertise in Tamil Nadu laws and regulations.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
                Contact Us
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+919994552217"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <Phone className="w-5 h-5 text-primary/60 group-hover:text-primary flex-shrink-0 mt-0.5" />
                  <span>+91 999 455 2217</span>
                </a>
                <a
                  href="mailto:tamilnadunrilegalservices@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <Mail className="w-5 h-5 text-primary/60 group-hover:text-primary flex-shrink-0 mt-0.5" />
                  <span className="break-all">tamilnadunrilegalservices@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-5 h-5 text-primary/60 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>105/51 Rahmat Manzil, 1st Floor,</p>
                    <p>Armenian Street, George Town,</p>
                    <p>Chennai, Tamil Nadu 600001</p>
                    <p className="text-primary/80 text-xs mt-1">Near Madras High Court</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-background border-t border-border/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Tamil Nadu NRI Legal Services. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg border border-border/50 bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
