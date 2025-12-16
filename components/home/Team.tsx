'use client';

// ************************************************************************************************
// INSTRUCTIONS FOR UPDATING TEAM IMAGES:
// 1. Create a folder named 'team' inside the 'public' folder of your project (public/team).
// 2. Add your team member images to that folder.
// 3. Name them exactly as mapped below: michel.jpg, dhanuja.jpg, etc.
// 4. If an image is missing, the code will automatically show the "Initial Circle" fallback.
// ************************************************************************************************

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

// TODO: Replace the dummy URLs below with the real profile links for each member
const teamMembers = [
    {
        name: 'Michel',
        role: 'Team Leader & Full Stack',
        image: '/team/michel.avif',
        linkedin: 'https://www.linkedin.com/in/michel-ruwishka',
        twitter: 'https://x.com/ruwishka?s=21',
        github: 'https://github.com/Michel2618'
    },
    {
        name: 'Dhanuja',
        role: 'Frontend Developer',
        image: '/team/dhanuja.avif',
        linkedin: 'https://www.linkedin.com/in/dhanuja-rajamanthri-69a5b434a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: 'https://x.com/DhanujaRaja',
        github: 'https://github.com/dhanu-raja'
    },
    {
        name: 'Heshan',
        role: 'AI Engineer',
        image: '/team/heshan.avif',
        linkedin: 'https://www.linkedin.com/in/heshan-rusiru-9a350932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        twitter: 'https://x.com/',
        github: 'https://github.com/heshan-modz'
    },
    {
        name: 'Fazarath',
        role: 'Backend Developer',
        image: '/team/fazarath.avif',
        linkedin: 'https://www.linkedin.com/in/fazarath-shathaff',
        twitter: 'https://x.com/',
        github: 'https://github.com/Fazarath0508'
    },
    {
        name: 'Dasuni',
        role: 'Business Analyst',
        image: '/team/dasuni.avif',
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://x.com/',
        github: 'https://github.com/dasuni222'
    },
    {
        name: 'Yasasi',
        role: 'QA Engineer',
        image: '/team/yasasi.avif',
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://x.com/',
        github: 'https://github.com/Yasasi-Dissanayaka'
    },
];

function TeamCard({ member, index }: { member: any, index: number }) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:border-violet-200 transition-all duration-300"
        >
            <div className="relative z-10 flex flex-col items-center text-center">

                {/* Image / Avatar Logic */}
                <div className="w-24 h-24 mb-6 rounded-full overflow-hidden relative shadow-inner bg-slate-50 border-2 border-slate-100 group-hover:border-violet-200 transition-colors">
                    {!imageError ? (
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        // Fallback: Initial Circle if image is missing
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-100 to-fuchsia-100 text-3xl font-bold text-violet-700">
                            {member.name.charAt(0)}
                        </div>
                    )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-violet-600 text-sm font-semibold mb-6">{member.role}</p>

                {/* Social Media Links - Dynamically loaded from array */}
                <div className="flex gap-4">
                    <Link href={member.linkedin} target="_blank" className="p-2 rounded-full bg-slate-50 hover:bg-violet-600 hover:text-white text-slate-500 transition-all">
                        <Linkedin size={18} />
                    </Link>
                    <Link href={member.twitter} target="_blank" className="p-2 rounded-full bg-slate-50 hover:bg-violet-600 hover:text-white text-slate-500 transition-all">
                        <Twitter size={18} />
                    </Link>
                    <Link href={member.github} target="_blank" className="p-2 rounded-full bg-slate-50 hover:bg-violet-600 hover:text-white text-slate-500 transition-all">
                        <Github size={18} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

import AmbientBackground from "@/components/ui/AmbientBackground";

export default function Team() {
    return (
        <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
            <AmbientBackground />
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tighter mb-4">
                    Built by Group <span className="text-violet-600">SE-23</span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto font-medium">
                    Meet the Innovators.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <TeamCard key={member.name} member={member} index={index} />
                ))}
            </div>
        </section>
    );
}