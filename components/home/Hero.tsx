'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import ShoppingCart from '@/components/3d/ShoppingCart';


export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto pointer-events-none overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center flex-1">
                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 pointer-events-auto"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-sm font-bold tracking-wide">
                        FUTURE OF WHOLESALE
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-slate-900 mb-6">
                        Sourcing Made <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                            Intelligent
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed font-medium">
                        The first AI-powered B2B marketplace bridging the gap between custom sketches and verified manufacturing capabilities.
                    </p>
                </motion.div>

                {/* Right Side: 3D Visualization */}
                <div className="h-[400px] lg:h-[600px] w-full relative z-0 pointer-events-auto rounded-3xl">
                    <Canvas
                        shadows
                        camera={{ position: [3, 2, 4], fov: 45 }}
                        gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
                        className="w-full h-full rounded-3xl"
                    >
                        {/* Bright Studio Lighting */}
                        <ambientLight intensity={0.8} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} castShadow />
                        <pointLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />

                        <ShoppingCart />

                        {/* Studio Environment */}
                        <Environment preset="studio" />

                        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#000000" />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                    </Canvas>

                    {/* Subtle Glow behind the cart */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-200/50 blur-[100px] rounded-full pointer-events-none -z-10" />
                </div>
            </div>
        </section>
    );
}
