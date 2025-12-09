import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Globe, FileCheck, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 2000,
    suffix: "+",
    label: "Cases Handled",
    description: "Successfully resolved legal matters"
  },
  {
    icon: Globe,
    value: 50,
    suffix: "+",
    label: "Countries",
    description: "Serving NRIs worldwide"
  },
  {
    icon: FileCheck,
    value: 95,
    suffix: "%",
    label: "Success Rate",
    description: "In litigation and dispute resolution"
  },
  {
    icon: Clock,
    value: 247,
    suffix: "",
    label: "24/7 Support",
    description: "Always available for your needs"
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startValue = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(startValue));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-gold rounded-full mx-auto" />
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Our <span className="text-gradient-gold">Track Record</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for our commitment and excellence in serving NRIs across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-professional hover:shadow-professional-hover transition-all duration-500 h-full">
                  <motion.div
                    className="w-20 h-20 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-3 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h3>

                  <div className="relative inline-block mb-3">
                    <p className="text-xl font-bold text-black">
                      {stat.label}
                    </p>
                    <motion.div
                      className="h-0.5 bg-gradient-gold mt-1"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                    />
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 h-1 bg-gradient-gold rounded-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default StatsSection;
