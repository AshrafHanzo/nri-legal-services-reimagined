import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Legal Precedence", href: "/legal-precedence" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-card/80 backdrop-blur-sm border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2.5">
            <p className="text-sm text-muted-foreground">
              Specialized Legal Services for NRIs in Tamil Nadu
            </p>
            <div className="flex items-center gap-6">
              <a
                href="tel:+919994552217"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 999 455 2217</span>
              </a>
              <a
                href="https://wa.me/919994552217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-background/80 backdrop-blur-sm"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 80"
                      className="w-7 h-6 text-primary"
                      fill="currentColor"
                    >
                      <path d="M50 0L10 20v5h80v-5L50 0zM15 30v35h10V30H15zm20 0v35h10V30H35zm20 0v35h10V30H55zm20 0v35h10V30H75zM5 70v10h90V70H5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h1 className="font-serif text-lg sm:text-xl font-bold text-foreground leading-tight">
                    Tamil Nadu NRI
                  </h1>
                  <p className="text-xs text-primary tracking-[0.15em] uppercase font-medium">
                    Legal Services
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                  >
                    <motion.div
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${isActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                        }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.label}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ${isActive ? 'w-[60%]' : 'w-0 group-hover:w-[60%]'
                        }`} />
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-blue group"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Free Consultation
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground rounded-lg hover:bg-card transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border/50 overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`text-lg font-medium transition-all py-3 px-4 rounded-lg ${isActive
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 mt-2 border-t border-border/50 space-y-3">
                  <a
                    href="tel:+919994552217"
                    className="flex items-center gap-3 text-muted-foreground py-2 px-4"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+91 999 455 2217</span>
                  </a>
                  <a
                    href="https://wa.me/919994552217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground py-2 px-4"
                  >
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>WhatsApp Us</span>
                  </a>
                  <Button
                    className="w-full bg-primary text-primary-foreground mt-2"
                    asChild
                  >
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Free Consultation
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
