import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
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
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", country: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-card" />

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
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Free Legal Consultation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Schedule a free consultation call to discuss your legal needs. Our experts are here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-foreground/80 mb-2 block">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/80 mb-2 block">
                    Country
                  </label>
                  <Input
                    type="text"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary"
                    placeholder="Your country"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-foreground/80 mb-2 block">
                    Phone (WhatsApp)
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary"
                    placeholder="+1 234 567 890"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/80 mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-foreground/80 mb-2 block">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background border-border focus:border-primary min-h-[150px]"
                  placeholder="Describe your legal matter..."
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Process Steps */}
            <div className="bg-gradient-card border border-border/50 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                Simple Step-by-Step Process
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <p className="text-foreground/80 text-sm">
                    Quick discussion to understand your legal issues & collect documents
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <p className="text-foreground/80 text-sm">
                    Paid Consultation (₹5000) - Detailed video call for legal advice
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <p className="text-foreground/80 text-sm">
                    Receive a tailored quote for your legal needs
                  </p>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="tel:+917397320417"
                className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">+91 7397320417</p>
                </div>
              </a>

              <a
                href="https://wa.me/917397320417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">Chat with us</p>
                </div>
              </a>

              <a
                href="mailto:tamilnadunrilegalservices@gmail.com"
                className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground text-sm">
                    tamilnadunrilegalservices@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Office Address</p>
                  <p className="font-semibold text-foreground text-sm">
                    105/51 Rahmat Manzil, 1st Floor, Armenian Street, George Town,
                    Chennai, Tamil Nadu 600001
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Opposite to Madras High Court
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
