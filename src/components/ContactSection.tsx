import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", country: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

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
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Free Legal Consultation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Schedule a free consultation call to discuss your legal needs. 
            Our experts are available across all time zones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-card/50 border border-border/30 rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-foreground/80 mb-2 block font-medium">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background/50 border-border/50 focus:border-primary h-12"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-foreground/80 mb-2 block font-medium">
                      Country of Residence *
                    </label>
                    <Input
                      type="text"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="bg-background/50 border-border/50 focus:border-primary h-12"
                      placeholder="e.g., USA, UK, UAE"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-foreground/80 mb-2 block font-medium">
                      Phone (WhatsApp) *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background/50 border-border/50 focus:border-primary h-12"
                      placeholder="+1 234 567 890"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-foreground/80 mb-2 block font-medium">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background/50 border-border/50 focus:border-primary h-12"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-foreground/80 mb-2 block font-medium">
                    Describe Your Legal Matter *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background/50 border-border/50 focus:border-primary min-h-[140px]"
                    placeholder="Please provide brief details about your legal matter..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 text-base shadow-gold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Request Free Consultation
                </Button>

                <p className="text-muted-foreground text-sm text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Consultation Process */}
            <div className="bg-card/50 border border-border/30 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                Consultation Process
              </h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </span>
                  <div>
                    <p className="text-foreground font-medium text-sm">Free Initial Call</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Quick discussion to understand your case
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </span>
                  <div>
                    <p className="text-foreground font-medium text-sm">Document Review</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Share relevant documents for analysis
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </span>
                  <div>
                    <p className="text-foreground font-medium text-sm">Detailed Consultation</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      In-depth video call with legal advice
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+919994552217"
                className="flex items-center gap-4 p-5 bg-card/50 rounded-xl border border-border/30 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Call Us</p>
                  <p className="font-semibold text-foreground text-lg">+91 999 455 2217</p>
                </div>
              </a>

              <a
                href="https://wa.me/919994552217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card/50 rounded-xl border border-border/30 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                  <p className="font-semibold text-foreground">Chat with us 24/7</p>
                </div>
              </a>

              <a
                href="mailto:tamilnadunrilegalservices@gmail.com"
                className="flex items-center gap-4 p-5 bg-card/50 rounded-xl border border-border/30 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-semibold text-foreground text-sm">
                    tamilnadunrilegalservices@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-card/50 rounded-xl border border-border/30">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Office</p>
                  <p className="font-semibold text-foreground text-sm">
                    105/51 Rahmat Manzil, 1st Floor
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Armenian Street, George Town, Chennai - 600001
                  </p>
                  <p className="text-primary text-xs mt-1 font-medium">
                    Near Madras High Court
                  </p>
                </div>
              </div>
            </div>

            {/* Global Support Badge */}
            <div className="p-5 bg-primary/10 border border-primary/20 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-primary" />
                <p className="font-semibold text-foreground">Global NRI Support</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Serving clients in USA, UK, UAE, Singapore, Australia, Canada & more
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
