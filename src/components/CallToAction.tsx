import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <section ref={ref} className="py-24 bg-gradient-blue relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Ready to Resolve Your Legal Matters?
                        </h2>
                        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Get expert legal advice from our experienced team. We're here to help you
                            navigate complex legal procedures from anywhere in the world.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Button
                                size="lg"
                                className="bg-white hover:bg-white/90 text-primary font-semibold px-8 py-6 text-lg shadow-lg group"
                                asChild
                            >
                                <Link to="/contact" className="flex items-center gap-2">
                                    Schedule Free Consultation
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg"
                                asChild
                            >
                                <Link to="/services">Explore Services</Link>
                            </Button>
                        </div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
                        >
                            <a
                                href="tel:+919994552217"
                                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                            >
                                <Phone className="w-6 h-6 text-white" />
                                <div className="text-left">
                                    <p className="text-sm text-white/80">Call Us</p>
                                    <p className="text-lg font-semibold text-white">+91 999 455 2217</p>
                                </div>
                            </a>
                            <a
                                href="mailto:info@tamilnadunrilegalservices.com"
                                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                            >
                                <Mail className="w-6 h-6 text-white" />
                                <div className="text-left">
                                    <p className="text-sm text-white/80">Email Us</p>
                                    <p className="text-lg font-semibold text-white">Get in Touch</p>
                                </div>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white/10 rounded-full" />
        </section>
    );
};

export default CallToAction;
