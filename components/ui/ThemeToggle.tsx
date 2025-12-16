"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Avoid hydration mismatch
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center text-white"
            >
                <Moon size={20} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? -180 : 0, scale: theme === "dark" ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center text-slate-900"
            >
                <Sun size={20} />
            </motion.div>
        </button>
    );
}
