import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowUp,
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
      {/* Main Footer */}
      <div className="bg-navy-deep border-t border-border/30">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-navy-deep"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary">
                    TN NRI Legal
                  </h3>
                  <p className="text-xs text-muted-foreground">Services</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Specialized in handling legal matters for Indians residing abroad, 
                focusing specifically on Tamil Nadu.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
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
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
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
                Contact Info
              </h4>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  105/51 Rahmat Manzil, 1st Floor,
                  <br />
                  Armenian Street, George Town,
                  <br />
                  Chennai, Tamil Nadu 600001
                </p>
                <p>
                  <a
                    href="tel:+917397320417"
                    className="hover:text-primary transition-colors"
                  >
                    +91 7397320417
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:tamilnadunrilegalservices@gmail.com"
                    className="hover:text-primary transition-colors break-all"
                  >
                    tamilnadunrilegalservices@gmail.com
                  </a>
                </p>
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
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
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
