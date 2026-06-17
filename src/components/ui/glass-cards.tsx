"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import {
  Code2, Smartphone, TrendingUp, Server,
  Zap, Users, Lightbulb, ArrowRight, type LucideIcon,
} from 'lucide-react';
import { cardData } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<number, LucideIcon> = {
  1: Code2,
  2: Smartphone,
  3: TrendingUp,
  4: Server,
  5: Zap,
  6: Users,
  7: Lightbulb,
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  index: number;
  totalCards: number;
  color: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, index, totalCards, color, href }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const Icon = iconMap[id];

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.05;

    gsap.set(card, {
      scale: 1,
      transformOrigin: 'center top',
    });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);
        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: 'center top',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [index, totalCards]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
      }}
    >
      <div
        ref={cardRef}
        style={{
          position: 'relative',
          width: '70%',
          height: '450px',
          borderRadius: '24px',
          isolation: 'isolate',
          top: `calc(-5vh + ${index * 25}px)`,
          transformOrigin: 'top',
        }}
      >
        {/* Electric Border */}
        <div
          style={{
            position: 'absolute',
            inset: '-3px',
            borderRadius: '27px',
            padding: '3px',
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              ${color} 60deg,
              ${color.replace('0.8', '0.6')} 120deg,
              transparent 180deg,
              ${color.replace('0.8', '0.4')} 240deg,
              transparent 360deg
            )`,
            zIndex: -1,
          }}
        />

        {/* Main Card Content */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '24px',
            background: `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
            backdropFilter: 'blur(25px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `
              0 8px 32px rgba(0,0,0,0.3),
              0 2px 8px rgba(0,0,0,0.2),
              inset 0 1px 0 rgba(255,255,255,0.3),
              inset 0 -1px 0 rgba(255,255,255,0.1)
            `,
            overflow: 'hidden',
          }}
        >
          {/* Glass reflection overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              pointerEvents: 'none',
              borderRadius: '24px 24px 0 0',
            }}
          />
          {/* Glass shine */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              right: '10px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
              borderRadius: '1px',
              pointerEvents: 'none',
            }}
          />
          {/* Side reflection */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '2px',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%)',
              borderRadius: '24px 0 0 24px',
              pointerEvents: 'none',
            }}
          />
          {/* Frosted texture */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 2px),
                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 1px, transparent 2px),
                radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 1px, transparent 2px)
              `,
              backgroundSize: '30px 30px, 25px 25px, 35px 35px',
              pointerEvents: 'none',
              borderRadius: '24px',
              opacity: 0.7,
            }}
          />

          {/* Card Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              padding: '2.5rem 3rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {Icon && (
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: '#ffffff',
                  flexShrink: 0,
                }}
              >
                <Icon size={22} />
              </div>
            )}
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '520px',
              }}
            >
              {description}
            </p>
            <Link
              href={href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '13px',
                fontWeight: 600,
                color: 'rgba(220, 200, 255, 1)',
                textDecoration: 'none',
                transition: 'gap 0.15s ease',
              }}
            >
              Explore <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} style={{ background: '#0a0a0a' }}>
      {cardData.map((card, index) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          index={index}
          totalCards={cardData.length}
          color={card.color}
          href={card.href}
        />
      ))}
    </div>
  );
};
