import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Calendar, MapPin, CheckCircle } from "lucide-react";

const precedenceCases = [
    {
        title: "NRI Property Dispute Resolution",
        year: "2023",
        court: "Madras High Court",
        description: "Successfully resolved a complex property dispute involving NRI property rights, establishing clear precedent for future cases.",
        outcome: "Favorable verdict for NRI client"
    },
    {
        title: "Succession Certificate Case",
        year: "2022",
        court: "District Court, Chennai",
        description: "Landmark case establishing streamlined process for NRIs obtaining succession certificates remotely.",
        outcome: "New procedural guidelines established"
    },
    {
        title: "Cross-Border Family Law Matter",
        year: "2023",
        court: "Family Court, Chennai",
        description: "Important case involving custody rights for NRI parents, setting precedent for international custody matters.",
        outcome: "Custody rights protected"
    },
    {
        title: "Commercial Property Transaction",
        year: "2021",
        court: "Civil Court, Tamil Nadu",
        description: "Complex case involving commercial property rights and NRI investment protection.",
        outcome: "Full recovery of investment"
    },
    {
        title: "Tax Dispute Resolution",
        year: "2022",
        court: "Income Tax Tribunal",
        description: "Successful resolution of tax matters for NRI, establishing important precedent for similar cases.",
        outcome: "Tax liability reduced significantly"
    },
    {
        title: "Land Acquisition Case",
        year: "2023",
        court: "High Court, Chennai",
        description: "Important case regarding fair compensation for NRI landowners in government acquisition.",
        outcome: "Enhanced compensation awarded"
    },
];

const PrecedenceCases = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Notable Legal Precedents
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our successful cases that have set important legal precedents for NRI matters in Tamil Nadu
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {precedenceCases.map((precedent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-professional hover:shadow-professional-hover transition-all duration-500 h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                                        <FileText className="w-7 h-7 text-black group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                        {precedent.year}
                                    </span>
                                </div>

                                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-black transition-colors">
                                    {precedent.title}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                    <MapPin className="w-4 h-4" />
                                    <span>{precedent.court}</span>
                                </div>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {precedent.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-semibold text-black bg-black/5 px-4 py-2 rounded-lg">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>{precedent.outcome}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrecedenceCases;
