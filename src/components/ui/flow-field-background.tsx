"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NeuralBackgroundProps {
  className?: string;
  /**
   * Color of the particles. 
   * Defaults to a cyan/indigo mix if not specified.
   */
  color?: string;
  /**
   * The opacity of the trails (0.0 to 1.0).
   * Lower = longer trails. Higher = shorter trails.
   * Default: 0.15
   */
  trailOpacity?: number;
  /**
   * Number of particles. Default: 600
   */
  particleCount?: number;
  /**
   * Speed multiplier. Default: 1
   */
  speed?: number;
  /**
   * Visual theme ("light" or "dark").
   * Default: "light"
   */
  theme?: "light" | "dark";
  /**
   * Bounding box of the currently hovered card relative to the canvas container.
   */
  hoveredCardRect?: { x: number; y: number; width: number; height: number } | null;
}

export default function NeuralBackground({
  className,
  color = "#06b6d4", // Default Cyan-500
  trailOpacity = 0.15,
  particleCount = 600,
  speed = 1,
  theme = "light",
  hoveredCardRect = null,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoveredCardRectRef = useRef(hoveredCardRect);

  useEffect(() => {
    hoveredCardRectRef.current = hoveredCardRect;
  }, [hoveredCardRect]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- CONFIGURATION ---
    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 }; // Start off-screen

    // --- PARTICLE CLASS ---
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      age: number;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        // Random lifespan to create natural recycling
        this.life = Math.random() * 200 + 100; 
      }

      update() {
        // 1. Flow Field Math (Simplex-ish noise)
        // We calculate an angle based on position to create the "flow"
        const angle = (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI;
        
        // 2. Add force from flow field
        this.vx += Math.cos(angle) * 0.2 * speed;
        this.vy += Math.sin(angle) * 0.2 * speed;

        // 3. Mouse Repulsion/Attraction
        const dx = this.x - mouse.x; // Vector pointing away from mouse
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 160;

        if (distance < interactionRadius && distance > 0) {
          const force = (interactionRadius - distance) / interactionRadius;
          const nx = dx / distance;
          const ny = dy / distance;
          // Apply a highly responsive push force
          const strength = 1.8;
          this.vx += nx * force * strength * speed;
          this.vy += ny * force * strength * speed;
        }

        // 3.5 Card Outline Flow/Attraction
        const rect = hoveredCardRectRef.current;
        if (rect) {
          // Get closest point on card's boundary
          const cx = Math.max(rect.x, Math.min(this.x, rect.x + rect.width));
          const cy = Math.max(rect.y, Math.min(this.y, rect.y + rect.height));

          const dl = Math.abs(this.x - rect.x);
          const dr = Math.abs(this.x - (rect.x + rect.width));
          const dt = Math.abs(this.y - rect.y);
          const db = Math.abs(this.y - (rect.y + rect.height));
          const minD = Math.min(dl, dr, dt, db);

          let px = cx;
          let py = cy;

          if (this.x > rect.x && this.x < rect.x + rect.width && this.y > rect.y && this.y < rect.y + rect.height) {
            if (minD === dl) { px = rect.x; py = this.y; }
            else if (minD === dr) { px = rect.x + rect.width; py = this.y; }
            else if (minD === dt) { px = this.x; py = rect.y; }
            else { px = this.x; py = rect.y + rect.height; }
          }

          const outDx = px - this.x;
          const outDy = py - this.y;
          const outDist = Math.sqrt(outDx * outDx + outDy * outDy);

          // We widen the attraction zone, but weaken the pull force significantly
          // This creates a soft halo effect instead of a tight crayon outline.
          if (outDist < 120 && outDist > 0) {
            const pullForce = Math.min(0.24, outDist * 0.0035);
            this.vx += (outDx / outDist) * pullForce * speed;
            this.vy += (outDy / outDist) * pullForce * speed;
          }

          // Gentle tangential orbiting slide (clockwise flow) in a wider band (up to 80px)
          if (outDist < 80) {
            let tx = 0;
            let ty = 0;
            if (minD === dt) { // Top edge -> move right
              tx = 1.0; ty = 0;
            } else if (minD === dr) { // Right edge -> move down
              tx = 0; ty = 1.0;
            } else if (minD === db) { // Bottom edge -> move left
              tx = -1.0; ty = 0;
            } else { // Left edge -> move up
              tx = 0; ty = -1.0;
            }
            
            const slideSpeed = 0.45;
            this.vx += tx * slideSpeed * speed;
            this.vy += ty * slideSpeed * speed;
            
            // Introduce organic noise/turbulence to prevent the rigid rectangle look
            const noiseStrength = 0.35;
            const noiseAngle = (this.x * 0.03 + this.y * 0.03 + this.age * 0.02) * Math.PI;
            this.vx += Math.cos(noiseAngle) * noiseStrength * speed;
            this.vy += Math.sin(noiseAngle) * noiseStrength * speed;
          }
        }

        // 4. Apply Velocity & Friction
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.92; // Slightly higher damping for a snappier feel
        this.vy *= 0.92;

        // 5. Aging
        if (rect) {
          // If the particle is far away from the card, age it 3x faster to recycle it to the card quickly
          const isNearCard =
            this.x >= rect.x - 60 &&
            this.x <= rect.x + rect.width + 60 &&
            this.y >= rect.y - 60 &&
            this.y <= rect.y + rect.height + 60;
          
          if (!isNearCard) {
            this.age += 3; // Age 4x faster total
          }
        }
        this.age++;

        if (this.age > this.life) {
          this.reset();
        }

        // 6. Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      reset() {
        const rect = hoveredCardRectRef.current;
        if (rect) {
          // Spawn around the hovered card's perimeter with a wider, softer dispersion
          const side = Math.floor(Math.random() * 4);
          const offset = Math.random() * 64 - 32; // Wide -32px to +32px belt for a soft aura

          if (side === 0) { // Top
            this.x = rect.x + Math.random() * rect.width;
            this.y = rect.y + offset;
          } else if (side === 1) { // Bottom
            this.x = rect.x + Math.random() * rect.width;
            this.y = rect.y + rect.height + offset;
          } else if (side === 2) { // Left
            this.x = rect.x + offset;
            this.y = rect.y + Math.random() * rect.height;
          } else { // Right
            this.x = rect.x + rect.width + offset;
            this.y = rect.y + Math.random() * rect.height;
          }

          // Initial tangential speed (clockwise flow) to start the outline flow immediately
          const dl = Math.abs(this.x - rect.x);
          const dr = Math.abs(this.x - (rect.x + rect.width));
          const dt = Math.abs(this.y - rect.y);
          const db = Math.abs(this.y - (rect.y + rect.height));
          const minD = Math.min(dl, dr, dt, db);

          if (minD === dt) { this.vx = (1.0 + Math.random() * 0.4) * speed; this.vy = (Math.random() * 0.4 - 0.2) * speed; }
          else if (minD === dr) { this.vx = (Math.random() * 0.4 - 0.2) * speed; this.vy = (1.0 + Math.random() * 0.4) * speed; }
          else if (minD === db) { this.vx = (-1.0 - Math.random() * 0.4) * speed; this.vy = (Math.random() * 0.4 - 0.2) * speed; }
          else { this.vx = (Math.random() * 0.4 - 0.2) * speed; this.vy = (-1.0 - Math.random() * 0.4) * speed; }

          // Slightly longer lifespan so they can trace a good portion of the outline
          this.life = Math.random() * 160 + 60;
        } else {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = 0;
          this.vy = 0;
          this.life = Math.random() * 200 + 100;
        }
        this.age = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        // Fade in and out based on age
        const alpha = 1 - Math.abs((this.age / this.life) - 0.5) * 2;
        context.globalAlpha = alpha * 0.85; // Soften maximum opacity slightly for elegant blend
        context.fillStyle = color;
        context.beginPath();
        context.arc(this.x, this.y, 1.1, 0, Math.PI * 2);
        context.fill();
      }
    }

    // --- INITIALIZATION ---
    const init = () => {
      // Handle High-DPI screens (Retina)
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // --- ANIMATION LOOP ---
    const animate = () => {
      // "Fade" effect: Instead of clearing the canvas, we draw a semi-transparent rect
      // This creates the "Trails" look.
      if (theme === "light") {
        ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity})`;
      } else {
        ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
      }
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // --- RESIZE OBSERVER ---
    const resizeObserver = new ResizeObserver(() => {
      width = container.clientWidth;
      height = container.clientHeight;
      init();
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Track mouse position relative to canvas with bounds check
      if (
        x >= -100 &&
        x <= rect.width + 100 &&
        y >= -100 &&
        y <= rect.height + 100
      ) {
        mouse.x = x;
        mouse.y = y;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    // Start
    init();
    animate();

    resizeObserver.observe(container);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, trailOpacity, particleCount, speed, theme]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-hidden",
        theme === "light" ? "bg-white" : "bg-black",
        className
      )}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
