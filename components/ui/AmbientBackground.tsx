'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AmbientBackground() {
    const [orbs, setOrbs] = useState<Array<{ id: number; color: string; size: number; x: number; y: number; duration: number }>>([]);

    useEffect(() => {
        const colors = [
            'bg-rose-400',
            'bg-red-400',
            'bg-emerald-400',
            'bg-green-400',
            'bg-amber-400',
            'bg-cyan-400'
        ];

        const newOrbs = Array.from({ length: 4 }).map((_, i) => ({
            id: i,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.floor(Math.random() * 200) + 300, // 300px - 500px
            x: Math.random() * 100, // 0-100%
            y: Math.random() * 100, // 0-100%
            duration: Math.floor(Math.random() * 10) + 15 // 15s - 25s
        }));

        setOrbs(newOrbs);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-50 ${orb.color}`}
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                    }}
                />
            ))}
        </div>
    );
}
