"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Truck, CreditCard, MessageCircle, Star, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Garantía oficial",
    description: "Todos nuestros productos tienen garantía oficial Apple de 12 meses.",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: Truck,
    title: "Envíos a todo el país",
    description: "Enviamos a cualquier provincia por correo o moto. Rápido y seguro.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: CreditCard,
    title: "Múltiples medios de pago",
    description: "Efectivo, transferencia, 3 y 6 cuotas con tarjeta. Sin complicaciones.",
    color: "bg-purple-50 text-purple-500",
  },
  {
    icon: MessageCircle,
    title: "Atención por WhatsApp",
    description: "Respondemos al instante. Asesoramiento personalizado antes y después de tu compra.",
    color: "bg-orange-50 text-orange-500",
  },
  {
    icon: Star,
    title: "Productos originales",
    description: "100% originales, sellados de fábrica. Con IMEI verificable y sin cuentas activas.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Zap,
    title: "Stock disponible",
    description: "Contamos con stock real. Lo que ves en el catálogo está disponible para entrega inmediata.",
    color: "bg-red-50 text-red-500",
  },
];

const STATS = [
  { label: "Clientes satisfechos", value: 500, suffix: "+" },
  { label: "Productos vendidos", value: 1200, suffix: "+" },
  { label: "Años de experiencia", value: 5, suffix: "" },
  { label: "Calificación promedio", value: 4.9, suffix: "★", isDecimal: true },
];

function AnimatedNumber({ target, suffix, isDecimal }: { target: number; suffix: string; isDecimal?: boolean }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(isDecimal ? parseFloat((eased * target).toFixed(1)) : Math.round(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? current.toFixed(1) : current.toLocaleString("es-AR")}
      {suffix}
    </span>
  );
}

export default function FeaturesSection() {
  return (
    <>
      {/* Stats bar */}
      <section className="bg-ink-primary py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-black text-4xl text-white mb-1">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                </div>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-28 bg-surface-gray-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-4">
              ¿Por qué elegirnos?
            </p>
            <h2 className="font-display font-extrabold text-display-xl text-ink-primary">
              Comprar bien, sin vueltas.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-surface-gray-2/60"
              >
                <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-5`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-ink-primary text-lg mb-2">{feature.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
