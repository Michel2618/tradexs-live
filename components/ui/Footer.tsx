'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-slate-100 text-slate-500 py-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <div className="relative h-8 w-8 opacity-80">
                            <Image
                                src="/Logo.png"
                                alt="Tradexs Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-bold text-slate-700">TradeXS</span>
                    </Link>
                    <p className="text-sm leading-relaxed">
                        The intelligent B2B marketplace bridging design and delivery.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-violet-600 transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-violet-600 transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-violet-600 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-violet-600 transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                        {/* TODO: Paste TradeXS Facebook Link below inside href="" */}
                        <Link href="#" target="_blank" className="hover:text-violet-600 transition-colors">
                            <Facebook size={20} />
                        </Link>

                        {/* TODO: Paste TradeXS Instagram Link below inside href="" */}
                        <Link href="#" target="_blank" className="hover:text-violet-600 transition-colors">
                            <Instagram size={20} />
                        </Link>

                        {/* TODO: Paste TradeXS YouTube Link below inside href="" */}
                        <Link href="#" target="_blank" className="hover:text-violet-600 transition-colors">
                            <Youtube size={20} />
                        </Link>

                        {/* TODO: Paste TradeXS LinkedIn Link below inside href="" */}
                        <Link href="#" target="_blank" className="hover:text-violet-600 transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} TradeXS. All rights reserved.</p>
            </div>
        </footer>
    );
}
