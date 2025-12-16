'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/ui/Navbar';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';
import AmbientBackground from '@/components/ui/AmbientBackground';

export default function Contact() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-violet-200 selection:text-violet-900 relative overflow-hidden">
            <AmbientBackground />
            <Navbar />

            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                >
                    {/* Left: Contact Info */}
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900 tracking-tighter mb-6">
                            Get in <span className="text-violet-600">Touch</span>
                        </h1>
                        <p className="text-slate-600 text-lg mb-12 max-w-lg leading-relaxed">
                            Have questions about TradeXS or want to join our network of manufacturers? Reach out to us directly.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white border border-slate-100 shadow-sm text-violet-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                    <a href="mailto:michel.20232043@iit.ac.lk" className="text-slate-600 hover:text-violet-600 transition-colors">
                                        michel.20232043@iit.ac.lk
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white border border-slate-100 shadow-sm text-violet-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Call / WhatsApp</h3>
                                    <p className="text-slate-600">+94 71 110 8984</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white border border-slate-100 shadow-sm text-violet-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                                    <p className="text-slate-600 max-w-xs">
                                        Informatics Institute of Technology,<br />
                                        No. 57 Ramakrishna Rd,<br />
                                        Colombo 00600
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                {/* TODO: Paste TradeXS Facebook Link below inside href="" */}
                                <Link href="#" target="_blank" className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-violet-600 hover:border-violet-200 transition-all">
                                    <Facebook size={20} />
                                </Link>

                                {/* TODO: Paste TradeXS Instagram Link below inside href="" */}
                                <Link href="#" target="_blank" className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-violet-600 hover:border-violet-200 transition-all">
                                    <Instagram size={20} />
                                </Link>

                                {/* TODO: Paste TradeXS YouTube Link below inside href="" */}
                                <Link href="#" target="_blank" className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-violet-600 hover:border-violet-200 transition-all">
                                    <Youtube size={20} />
                                </Link>

                                {/* TODO: Paste TradeXS LinkedIn Link below inside href="" */}
                                <Link href="#" target="_blank" className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-violet-600 hover:border-violet-200 transition-all">
                                    <Linkedin size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-slate-900" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-slate-900" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-slate-900" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-slate-900 resize-none" placeholder="Your inquiry..." />
                            </div>

                            <button type="button" className="w-full py-4 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200">
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </section>

            {/* Light Background Gradient */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-50" />
        </main>
    );
}
