import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/home/Hero";
import WhatIsTradexs from "@/components/home/WhatIsTradexs";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Team from "@/components/home/Team";
import Preloader from "@/components/ui/Preloader";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 overflow-x-hidden selection:bg-violet-200 selection:text-violet-900">
      <Preloader />
      <Navbar />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: What is TradeXS */}
      <WhatIsTradexs />

      {/* Section 3: How It Works */}
      <HowItWorks />

      {/* Section 4: Core Technology */}
      <Features />

      {/* Section 5: Meet the Innovators */}
      <Team />

      <BackToTop />

      {/* Light Background Gradient */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-50" />
    </main>
  );
}
