"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Star, Shield, Truck } from "lucide-react";
import Link from "next/link";

const TRUST_BADGES = [
  { icon: Shield, label: "Garantía oficial" },
  { icon: Truck, label: "Envíos a todo el país" },
  { icon: Star, label: "+500 clientes satisfechos" },
];

// Simple countdown timer
function useCountdown(hours = 4) {
  const [time, setTime] = useState({ h: hours, m: 59, s: 23 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = hours; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, [hours]);
  return time;
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const countdown = useCountdown(3);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a12] via-[#0c1220] to-[#060d1a]" />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,122,255,0.15) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(88,86,214,0.12) 0%, transparent 70%)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Parallax product image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] hidden lg:block pointer-events-none"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&q=90"
          alt="iPhone 17 Pro"
          className="w-full h-auto object-contain drop-shadow-2xl"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          loading="eager"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-0 lg:w-1/2 lg:pr-16">
        {/* Urgency chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 text-white/80 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Oferta especial finaliza en{" "}
          <span className="font-mono font-bold text-white">
            {pad(countdown.h)}:{pad(countdown.m)}:{pad(countdown.s)}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-extrabold text-display-2xl text-white leading-none mb-6"
        >
          La mejor
          <br />
          tecnología,
          <br />
          <span className="text-gradient-blue">al mejor precio.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-lg text-white/60 mb-10 max-w-sm leading-relaxed"
        >
          iPhone 17, MacBook Neo, AirPods Pro y más. Productos originales, sellados, con garantía oficial.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Link
            href="#catalogo"
            className="btn-liquid group inline-flex items-center gap-2.5 px-7 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-2xl transition-all duration-300 shadow-blue-glow hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Comprar ahora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#catalogo"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Ver catálogo
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-6"
        >
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/50 text-sm">
              <Icon className="w-4 h-4 text-brand-blue" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
