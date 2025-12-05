import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const heroSlides = [
  {
    subtitle: "Legacy of Excellence",
    title: "SINCE 2 DECADES",
    description: "Trusted legal partner for NRIs worldwide",
  },
  {
    subtitle: "Empathy & Integrity",
    title: "IN EVERY SERVICE",
    description: "Personalized legal solutions with care",
  },
  {
    subtitle: "Delivering Solutions",
    title: "ACROSS TAMIL NADU",
    description: "Pan-India legal expertise at your service",
  },
  {
    subtitle: "Comprehensive Suite",
    title: "OF LEGAL SERVICES",
    description: "Property, Family, Civil & Corporate Law",
  },
  {
    subtitle: "Devoted to Serving",
    title: "OVERSEAS INDIANS",
    description: "Bridging distance with trusted legal support",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-primary/20" />

      {/* Animated Glow Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.08, 0.15] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="font-serif text-lg sm:text-xl tracking-[0.3em] text-primary/80 uppercase">
              Tamil Nadu NRI Legal Services
            </h1>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"
          />

          {/* Animated Text Carousel */}
          <div className="min-h-[280px] sm:min-h-[240px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-center"
              >
                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl text-foreground/60 mb-4 font-light tracking-widest uppercase"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                
                {/* Main Title */}
                <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary tracking-wide mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                </h2>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl text-foreground/50 font-light"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mb-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-12 bg-primary"
                    : "w-4 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 py-6 text-base font-semibold group shadow-gold"
              asChild
            >
              <a href="#contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-6 text-base font-medium group"
              asChild
            >
              <a href="tel:+919994552217">
                <Phone className="mr-2 w-5 h-5" />
                +91 999 455 2217
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
