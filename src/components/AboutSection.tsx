import { motion } from "framer-motion";
import { CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Swift Solutions - Quick and effective legal actions",
  "Transparent Pricing - Clear, upfront costs without hidden fees",
  "Regular Updates - Timely communication to keep you informed",
  "Honest Communication - Clear explanations of legal matters",
  "Personalized Support - Dedicated attention to each client",
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Experienced lawyers offer consultations with comprehensive review of facts and documents.",
  },
  {
    step: "02",
    title: "Engagement",
    description:
      "Full range of services to monitor and manage legal matters with court representation.",
  },
  {
    step: "03",
    title: "Resolution",
    description:
      "Continuous communication and regular updates via your preferred channels until resolution.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Your Trusted Legal Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <span className="font-semibold text-foreground">Abirami Radhakrishnan</span>, Advocate, having lived in the USA for over 5 years, 
              understands the unique challenges faced by NRIs in managing legal matters in India. 
              This personal experience, coupled with years of legal expertise, inspired the creation 
              of Tamil Nadu NRI Legal Services—a firm dedicated to providing reliable, tailored 
              legal solutions for Indians abroad.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Contact Options */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="tel:+917397320417">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a
                  href="https://wa.me/917397320417"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
                How We Support You
              </h3>

              <div className="space-y-8">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <span className="font-serif text-xl font-bold text-primary">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* NRI Needs Card */}
              <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h4 className="font-serif text-lg font-semibold text-primary mb-3">
                  NRI Legal Needs
                </h4>
                <p className="text-sm text-muted-foreground">
                  Indians overseas face challenges managing legal matters due to inability 
                  to travel frequently, neglect of cases by relatives, and need for protection 
                  of assets in India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
