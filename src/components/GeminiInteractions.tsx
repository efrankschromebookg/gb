/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';

// Authentic 4-pointed Google Gemini Sparkle Star Icon
export function GeminiStar({
  size = 18,
  className = '',
  color = 'url(#gemini-rainbow-svg)',
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.5))' }}
    >
      <defs>
        <linearGradient id="gemini-rainbow-svg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="30%" stopColor="#818cf8" />
          <stop offset="60%" stopColor="#c084fc" />
          <stop offset="85%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <path
        d="M12 1.5C12 7.29899 7.29899 12 1.5 12C7.29899 12 12 16.701 12 22.5C12 16.701 16.701 12 22.5 12C16.701 12 12 7.29899 12 1.5Z"
        fill={color}
      />
    </svg>
  );
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  vRot: number;
  opacity: number;
  decay: number;
  colorIndex: number;
}

const RAINBOW_GRADIENTS = [
  '#38bdf8', // Cyan
  '#818cf8', // Indigo
  '#a855f7', // Purple
  '#c084fc', // Light Purple
  '#ec4899', // Pink
  '#fb7185', // Rose
  '#f59e0b', // Amber
];

// Global Sparkle Particle Canvas / Layer for Exploding Gemini Logos
export function GeminiParticleCanvas() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleTriggerBurst = (e: CustomEvent<{ x: number; y: number; count?: number }>) => {
      const { x, y, count = 20 } = e.detail;
      const newParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.5 - 0.25);
        const speed = 1.8 + Math.random() * 6.5;
        newParticles.push({
          id: Date.now() + Math.random() * 1000000,
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5, // initial upward lift
          size: 12 + Math.random() * 20,
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 8,
          opacity: 1,
          decay: 0.005 + Math.random() * 0.0035, // Lasts ~3 to 4+ seconds (~180-250 frames at 60fps)
          colorIndex: Math.floor(Math.random() * RAINBOW_GRADIENTS.length),
        });
      }

      setParticles((prev) => [...prev.slice(-90), ...newParticles]);
    };

    window.addEventListener('gemini-burst' as any, handleTriggerBurst);
    return () => {
      window.removeEventListener('gemini-burst' as any, handleTriggerBurst);
    };
  }, []);

  // Animation Loop with extended, dreamy float physics
  useEffect(() => {
    if (particles.length === 0) return;

    const animate = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vx: p.vx * 0.97, // smooth gentle air resistance
            vy: p.vy * 0.97 - 0.02, // gentle buoyant floating lift instead of quick dropping
            rotation: p.rotation + p.vRot,
            vRot: p.vRot * 0.99,
            opacity: p.opacity - p.decay,
          }))
          .filter((p) => p.opacity > 0)
      );

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [particles.length]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => {
        // Natural scale factor that blooms slightly and then fades out
        const scale = Math.min(1.25, p.opacity * 1.35);
        return (
          <div
            key={p.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              opacity: Math.max(0, p.opacity),
              transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${scale})`,
              transition: 'opacity 0.08s linear',
            }}
          >
            <GeminiStar
              size={p.size}
              color={RAINBOW_GRADIENTS[p.colorIndex]}
            />
          </div>
        );
      })}
    </div>
  );
}

// Dispatch a Gemini explosion event at any page coordinates
export function triggerGeminiExplosion(x: number, y: number, count = 22) {
  const event = new CustomEvent('gemini-burst', {
    detail: { x, y, count },
  });
  window.dispatchEvent(event);
}
