'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/ui/Navbar';
import Team from '@/components/home/Team';
import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import AmbientBackground from '@/components/ui/AmbientBackground';

export default function About() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-violet-200 selection:text-violet-900 relative overflow-hidden">
            <AmbientBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-sm font-bold tracking-wide">
                        OUR MISSION
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-8 bg-clip-text">
                        Empowering Sri Lankan <br /><span className="text-violet-600">Manufacturing</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        We are bridging the gap between innovative designers and skilled local manufacturers to revitalize the wholesale industry.
                    </p>
                </motion.div>
            </section>

            {/* The Problem & Solution */}
            <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
                    >
                        <div className="w-12 h-12 mb-6 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                            <Zap size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Challenge</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Currently, Sri Lanka's wholesale market relies on fragmented communication channels like WhatsApp. This leads to miscommunication, lack of trust, and no standardized way to verify if a manufacturer can actually produce a complex custom design. Small retailers often struggle to find reliable suppliers.
                        </p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-3xl shadow-xl border border-violet-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-bl-[100px] -z-0 opacity-50" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
                                <ShieldCheck size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Solution</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                TradeXS introduces a <span className="font-bold text-violet-700">Design-to-Delivery</span> pipeline. Our AI instantly matches sketches to verified capability datasets, while our 3D visualization tool ensures both parties see the exact same product before a single rupee is exchanged.
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-violet-700 font-bold hover:gap-2 transition-all">
                                Join the Network <ArrowRight size={20} className="ml-2" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Team Section (Reused) */}
            <div className="bg-white border-y border-slate-100">
                <Team />
            </div>

            {/* Light Background Gradient */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-50" />
        </main>
    );
}
