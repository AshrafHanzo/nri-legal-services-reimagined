import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Users, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A4823A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 py-32 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with Icon - Gold Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8 shadow-gold"
          >
            <Sparkles className="w-5 h-5 text-primary animate-pulse-gold" />
            <span className="text-sm font-semibold text-black tracking-wide">Trusted Legal Services for NRIs Since 2000</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-6 leading-[1.1]"
          >
            Specialized Legal Services for{" "}
            <motion.span
              className="text-gradient-gold inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Indians Abroad
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Expert legal representation for <span className="text-primary font-semibold">property management</span>,
            <span className="text-primary font-semibold"> family law</span>, and
            <span className="text-primary font-semibold"> financial matters</span> in Tamil Nadu.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <Button
              size="lg"
              className="bg-gradient-gold hover:shadow-gold-lg text-white font-bold px-10 py-7 text-lg rounded-xl shadow-gold group transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-3">
                Get Free Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black hover:bg-black hover:text-white text-black font-bold px-10 py-7 text-lg rounded-xl transition-all duration-300"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, value: "1000+", label: "Satisfied NRI Clients", delay: 0.9 },
              { icon: Shield, value: "20+", label: "Years of Excellence", delay: 1.0 },
              { icon: Award, value: "100%", label: "Client Satisfaction", delay: 1.1 }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-professional hover:shadow-professional-hover transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />

                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="font-serif text-5xl md:text-6xl font-bold text-black mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </h3>

                    <p className="text-base text-gray-700 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
