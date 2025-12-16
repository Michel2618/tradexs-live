'use client';

import { motion } from 'framer-motion';
import { UploadCloud, ScanSearch, Box, Gavel } from 'lucide-react';

const steps = [
    {
        icon: UploadCloud,
        title: "Upload",
        description: "Upload your raw sketch or reference image."
    },
    {
        icon: ScanSearch,
        title: "Match",
        description: "Our AI analyzes the image to find manufacturers with the exact matching capabilities."
    },
    {
        icon: Box,
        title: "Customize",
        description: "Visualize your product in 3D, adding logos and textures in real-time."
    },
    {
        icon: Gavel,
        title: "Negotiate",
        description: "Place a bid and negotiate bulk pricing through our secure portal."
    }
];

import AmbientBackground from "@/components/ui/AmbientBackground";

export default function HowItWorks() {
    return (
        <section className="relative py-24 px-6 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <AmbientBackground />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tighter mb-4">
                        From Sketch to Bulk Order in 4 Steps
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.4 }}
                            className="relative flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-24 h-24 mb-6 rounded-full bg-white border-4 border-violet-100 flex items-center justify-center z-10 shrink-0">
                                <div className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg">
                                    <step.icon size={32} />
                                </div>
                            </div>

                            <div className="absolute top-6 left-6 text-6xl font-black text-slate-100 -z-10 select-none">
                                {index + 1}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
