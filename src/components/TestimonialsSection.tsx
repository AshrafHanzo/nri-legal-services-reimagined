import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Houston, USA",
    rating: 5,
    text: "Exceptional service! They handled my property dispute in Chennai while I was in the US. Regular updates and professional approach throughout. Highly recommend for any NRI legal needs.",
  },
  {
    name: "Priya Venkatesh",
    location: "London, UK",
    rating: 5,
    text: "The team helped me with succession certificate for my father's property. Their knowledge of Tamil Nadu laws and systematic approach made a complex process smooth.",
  },
  {
    name: "Srinivasan Iyer",
    location: "Singapore",
    rating: 5,
    text: "Professional, transparent, and always available. They resolved my tenant dispute efficiently. The video call consultations were very convenient.",
  },
  {
    name: "Lakshmi Narayan",
    location: "Sydney, Australia",
    rating: 5,
    text: "Best legal service for NRIs! They handled my divorce proceedings with utmost sensitivity and kept me informed at every step despite the time difference.",
  },
  {
    name: "Karthik Subramanian",
    location: "Dubai, UAE",
    rating: 5,
    text: "Very impressed with their property verification service. They identified issues that could have cost me lakhs. Transparent pricing and excellent communication.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-primary/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-16 h-[2px] bg-primary mx-auto mb-6"
          />
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Large Quote Mark */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-0">
              <Quote className="w-24 h-24 text-primary/10" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="bg-background/50 backdrop-blur border border-border/30 rounded-2xl p-10 md:p-14 text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1.5 mb-8">
                    {Array.from({ length: testimonials[current].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      )
                    )}
                  </div>

                  {/* Quote Text */}
                  <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-10 font-light italic">
                    "{testimonials[current].text}"
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mb-4">
                      <span className="font-serif text-xl font-bold text-primary">
                        {testimonials[current].name.charAt(0)}
                      </span>
                    </div>
                    <p className="font-serif text-xl font-semibold text-primary">
                      {testimonials[current].name}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === current
                      ? "w-10 bg-primary"
                      : "w-4 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
