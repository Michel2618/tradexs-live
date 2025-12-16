'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Brain, Eye } from 'lucide-react';

const tabs = [
    { id: 'find', label: 'Find Products', icon: Box, content: 'Access millions of wholesale products instantly with our global sourcing network.' },
    { id: 'ai', label: 'AI Matching', icon: Brain, content: 'Smart algorithms match your requirements with the perfect suppliers in seconds.' },
    { id: 'preview', label: '3D Preview', icon: Eye, content: 'Interactive 3D visualization of products before you even place an order.' },
];

export default function SmartInterface() {
    // --- THESE WERE MISSING ---
    const activeColor = "text-violet-400";
    const activeBg = "bg-white/5";
    const activeBorder = "bg-violet-500";
    const shadow = "shadow-[0_0_10px_rgba(139,92,246,0.5)]"; 

    const [activeTab, setActiveTab] = useState('find');

    return (
        <div className="w-full max-w-4xl mx-auto mt-12 p-1">
            <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden">
                <div className="grid grid-cols-3 border-b border-white/10">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-center gap-3 py-4 md:py-6 text-sm md:text-base font-medium transition-all relative outline-none ${isActive ? `${activeColor} ${activeBg}` : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                                    }`}
                            >
                                <Icon size={20} />
                                <span className="hidden md:inline">{tab.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${activeBorder} ${shadow}`}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="p-8 min-h-[200px] flex items-center justify-center text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-lg"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">
                                {tabs.find(t => t.id === activeTab)?.label}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {tabs.find(t => t.id === activeTab)?.content}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}