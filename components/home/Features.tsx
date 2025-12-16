'use client';

import { motion } from 'framer-motion';
import { Brain, Cuboid, Handshake } from 'lucide-react';

const features = [
    {
        icon: Brain,
        title: 'AI Manufacturer Matcher',
        description: 'Uses Computer Vision to map visual inputs (sketches) to seller capability datasets.',
    },
    {
        icon: Cuboid,
        title: 'Interactive 3D Engine',
        description: 'Browser-based 3D configurator allowing instant texture mapping and design validation.',
    },
    {
        icon: Handshake,
        title: 'Smart Bidding System',
        description: 'A structured \'Bid-Counteroffer-Accept\' workflow to finalize prices without email clutter.',
    },
];

import AmbientBackground from "@/components/ui/AmbientBackground";

export default function Features() {
    return (
        <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
            <AmbientBackground />
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tighter mb-4">
                    Core <span className="text-violet-600">Technology</span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto font-medium">
                    Powered by advanced AI and real-time rendering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:border-violet-200 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 mb-6 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                            <feature.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
