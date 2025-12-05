import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence", description: "Serving NRIs since 2004" },
  { value: 1500, suffix: "+", label: "Clients Served", description: "Across 30+ countries" },
  { value: 50, suffix: "+", label: "Legal Experts", description: "Specialized team" },
  { value: 95, suffix: "%", label: "Success Rate", description: "Case resolution" },
];

interface CounterProps {
  value: number;
  suffix: string;
}

const Counter = ({ value, suffix }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Our Track Record
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="relative p-8 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,162,39,0.1)]">
                {/* Number */}
                <div className="font-serif text-5xl sm:text-6xl font-bold text-primary mb-3">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-primary/30 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
