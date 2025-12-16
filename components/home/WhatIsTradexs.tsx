'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import AmbientBackground from "@/components/ui/AmbientBackground"; // 1. Import it

const benefits = [
    "Instant AI Manufacturer Matching",
    "Real-time 3D Product Customization",
    "Transparent Bidding & Negotiation",
    "Verified Supplier Capability Data"
];

export default function WhatIsTradexs() {
    return (
        // 2. Add 'relative' and 'overflow-hidden' to the section wrapper
        <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">

            {/* 3. Insert the Background Component Here */}
            <AmbientBackground />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-6">
                        Revolutionizing <br />
                        <span className="text-violet-600">Wholesale Trade</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        TradeXS removes the friction from B2B sourcing. We replace fragmented WhatsApp chats and trust issues with a streamlined, AI-driven pipeline that connects retailers directly to manufacturers who can actually build what you design.
                    </p>
                </motion.div>

                {/* Right Side: Key Benefits List */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    // Added backdrop-blur to make the card semi-transparent so you can see the blobs behind it!
                    className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
                >
                    <ul className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="flex items-center gap-4 text-lg font-medium text-slate-700"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                                    <CheckCircle2 size={20} className="stroke-[3px]" />
                                </div>
                                {benefit}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}