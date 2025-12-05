import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "USA",
    rating: 5,
    text: "Exceptional service! They handled my property dispute in Chennai while I was in the US. Regular updates and professional approach throughout. Highly recommend for any NRI legal needs.",
  },
  {
    name: "Priya Venkatesh",
    location: "UK",
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
    location: "Australia",
    rating: 5,
    text: "Best legal service for NRIs! They handled my divorce proceedings with utmost sensitivity and kept me informed at every step despite the time difference.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
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
            Testimonials
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-card border border-border/50 rounded-2xl p-8 md:p-12 text-center"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-primary/30" />
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    )
                  )}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-light">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-serif text-xl font-semibold text-primary">
                    {testimonials[current].name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[current].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-primary"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
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
