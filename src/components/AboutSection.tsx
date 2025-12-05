import { motion } from "framer-motion";
import { CheckCircle, Phone, MessageCircle, Award, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Clock,
    title: "Swift Solutions",
    description: "Quick and effective legal actions with timely resolutions",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "Clear, upfront costs without any hidden fees",
  },
  {
    icon: Users,
    title: "Regular Updates",
    description: "Timely communication to keep you informed always",
  },
  {
    icon: Award,
    title: "Personalized Support",
    description: "Dedicated attention to each client's unique needs",
  },
];

const process = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Schedule a call with our experienced lawyers for comprehensive review of your case and documents.",
  },
  {
    step: "02",
    title: "Case Engagement",
    description:
      "Once engaged, we handle your legal matters with full dedication including court representation.",
  },
  {
    step: "03",
    title: "Regular Updates",
    description:
      "Continuous communication via your preferred channels - email, WhatsApp, or video calls.",
  },
  {
    step: "04",
    title: "Case Resolution",
    description:
      "We work diligently until your case reaches a satisfactory conclusion with complete documentation.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-16 h-[2px] bg-primary mx-auto mb-6"
          />
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            About Us
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Your Trusted Legal Partner
          </h2>
        </motion.div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl" />
              <div className="relative bg-background/50 backdrop-blur border border-border/50 rounded-2xl p-8 md:p-10">
                <h3 className="font-serif text-3xl font-bold text-foreground mb-6">
                  About the Founder
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  <span className="font-semibold text-primary">Abirami Radhakrishnan</span>, Advocate, 
                  having lived in the USA for over 5 years, understands the unique challenges faced by 
                  NRIs in managing legal matters in India.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  This personal experience, coupled with years of legal expertise, inspired the creation 
                  of <span className="text-foreground font-medium">Tamil Nadu NRI Legal Services</span>—a 
                  firm dedicated to providing reliable, tailored legal solutions for Indians abroad with 
                  special focus on Tamil Nadu matters.
                </p>

                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold"
                    asChild
                  >
                    <a href="tel:+919994552217">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 999 455 2217
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
                    asChild
                  >
                    <a
                      href="https://wa.me/919994552217"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              Why Choose Us?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-background/30 border border-border/30 rounded-xl hover:border-primary/30 hover:bg-background/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              How We Support You
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures you get the best legal support from anywhere in the world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                
                <div className="bg-background/30 border border-border/30 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                    <span className="font-serif text-xl font-bold text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NRI Needs Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
            <div className="relative p-8 md:p-12 text-center">
              <h4 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Understanding NRI Legal Challenges
              </h4>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Indians overseas face unique challenges managing legal matters—inability to travel frequently, 
                difficulty coordinating with relatives, time zone barriers, and the need to protect assets in India. 
                We bridge this gap with technology-enabled legal services and dedicated NRI support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
