'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Torus, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function ShoppingCart() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
        }
    });

    // New Vibrant Purple: #8b5cf6 (Violet 500) | Accent: #a78bfa (Violet 400)
    const primaryColor = "#8b5cf6";
    const accentColor = "#a78bfa";
    const glowColor = "#7c3aed";

    return (
        <group ref={groupRef} scale={1.2}>
            {/* Cart Base / Basket */}
            <group position={[0, -0.5, 0]}>
                {/* Bottom Grid */}
                <Box args={[1.5, 0.05, 2]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#4c1d95" metalness={0.5} roughness={0.4} />
                </Box>
                {/* Side Walls using solid colors for Light Theme visibility */}
                <Box args={[0.05, 1, 2]} position={[-0.75, 0.5, 0]}>
                    <meshStandardMaterial color={primaryColor} metalness={0.6} roughness={0.2} />
                </Box>
                <Box args={[0.05, 1, 2]} position={[0.75, 0.5, 0]}>
                    <meshStandardMaterial color={primaryColor} metalness={0.6} roughness={0.2} />
                </Box>
                <Box args={[1.5, 1, 0.05]} position={[0, 0.5, -1]}>
                    <meshStandardMaterial color={primaryColor} metalness={0.6} roughness={0.2} />
                </Box>
                <Box args={[1.5, 1, 0.05]} position={[0, 0.5, 1]}>
                    <meshStandardMaterial color={primaryColor} metalness={0.6} roughness={0.2} />
                </Box>

                {/* Handle */}
                <Box args={[0.1, 1.2, 0.1]} position={[-0.8, 1, 0.8]} rotation={[0.5, 0, 0]}>
                    <meshStandardMaterial color={accentColor} />
                </Box>
                <Box args={[0.1, 1.2, 0.1]} position={[0.8, 1, 0.8]} rotation={[0.5, 0, 0]}>
                    <meshStandardMaterial color={accentColor} />
                </Box>
                <Cylinder args={[0.08, 0.08, 1.8]} position={[0, 1.5, 1.1]} rotation={[0, 0, Math.PI / 2]}>
                    <meshStandardMaterial color="#ddd6fe" emissive={glowColor} emissiveIntensity={0.2} />
                </Cylinder>
            </group>

            {/* Product Boxes Inside - Vibrant Colors */}
            <group position={[0, 0, 0]}>
                {[
                    { pos: [-0.3, 0.2, -0.4], color: "#a78bfa", args: [0.5, 0.6, 0.5] },
                    { pos: [0.4, 0.1, 0.3], color: "#c4b5fd", args: [0.6, 0.4, 0.6] },
                    { pos: [-0.2, 0.4, 0.4], color: "#7c3aed", args: [0.4, 0.8, 0.4] },
                    { pos: [0.3, 0.3, -0.5], color: "#8b5cf6", args: [0.5, 0.5, 0.5] },
                ].map((box, i) => (
                    <Box key={i} args={box.args as [number, number, number]} position={box.pos as [number, number, number]}>
                        <meshStandardMaterial
                            color={box.color}
                            roughness={0.3}
                            metalness={0.2}
                        />
                    </Box>
                ))}
            </group>

            {/* Floating Sparkles - Darker for visibility on white */}
            {[...Array(6)].map((_, i) => (
                <Sphere key={i} args={[0.06]} position={[
                    (Math.random() - 0.5) * 3,
                    (Math.random() - 0.5) * 3 + 1,
                    (Math.random() - 0.5) * 3
                ]}>
                    <meshBasicMaterial color={glowColor} />
                </Sphere>
            ))}

        </group>
    );
}
