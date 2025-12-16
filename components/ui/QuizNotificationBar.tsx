'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock } from 'lucide-react';
import Link from 'next/link';

export default function QuizNotificationBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number } | null>(null);
    const [isDismissed, setIsDismissed] = useState(false);

    // Target Date: December 15, 2025, 00:01 AM
    const targetDate = new Date('2025-12-16T00:01:00');

    useEffect(() => {
        // Show after 2 seconds
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                setIsVisible(false);
                return null;
            }

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const m = Math.floor((difference / 1000 / 60) % 60);

            return { d, h, m };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            const remaining = calculateTimeLeft();
            setTimeLeft(remaining);
            if (!remaining) clearInterval(timer);
        }, 60000);

        return () => {
            clearTimeout(showTimer);
            clearInterval(timer);
        };
    }, []);

    if (!timeLeft || isDismissed) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4"
                >
                    <div className="flex items-center justify-between gap-4 bg-slate-900 border border-white/10 rounded-full py-2 px-3 pl-4 shadow-2xl backdrop-blur-md">

                        {/* Content Left */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                                </span>
                                TradeXS Survey ending soon.
                            </div>

                            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-violet-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                                <Clock size={12} />
                                <span>{timeLeft.d}d {timeLeft.h}h {timeLeft.m}m</span>
                            </div>
                        </div>

                        {/* Actions Right */}
                        <div className="flex items-center gap-2">
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLScZ_e16PBXJnTQ5S48oNoXsyYkz7hTL9M7ubiHz6xyeegiuyQ/viewform?usp=dialog"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1.5 rounded-full bg-violet-600 text-white text-xs font-bold hover:bg-violet-500 transition-colors shadow-lg shadow-violet-900/20"
                            >
                                Take Quiz
                            </Link>
                            <button
                                onClick={() => setIsDismissed(true)}
                                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                                aria-label="Dismiss"
                            >
                                <X size={14} />
                            </button>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
