'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Edges } from '@react-three/drei';
import * as THREE from 'three';

export default function ShippingContainer() {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Main Container Body */}
            <Box args={[2.5, 1, 1]} castShadow receiveShadow>
                <meshStandardMaterial
                    color="#0f172a"
                    roughness={0.3}
                    metalness={0.8}
                />
                <Edges color="#22d3ee" threshold={15} />
            </Box>

            {/* Detail ridges to make it look like a container */}
            {[...Array(5)].map((_, i) => (
                <Box key={i} args={[0.05, 1, 1.05]} position={[-1 + i * 0.5, 0, 0]}>
                    <meshStandardMaterial color="#1e293b" metalness={0.9} />
                </Box>
            ))}

            {/* Glowing details/Logo placeholder */}
            <Box args={[0.8, 0.4, 0.05]} position={[0, 0, 0.51]}>
                <meshBasicMaterial color="#22d3ee" toneMapped={false} />
            </Box>

            {/* Point Light attached to the object for local glow */}
            <pointLight position={[0, 0, 1]} distance={2} intensity={2} color="#22d3ee" />
        </group>
    );
}
