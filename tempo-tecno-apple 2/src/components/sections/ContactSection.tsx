"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export default function ContactSection() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Quería consultar sobre un producto de Apple.")}`;

  return (
    <section id="contacto" className="py-28 bg-surface-gray-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-4">
              Contacto
            </p>
            <h2 className="font-display font-extrabold text-display-xl text-ink-primary mb-6">
              Hablemos.
            </h2>
            <p className="text-ink-secondary text-lg leading-relaxed mb-10">
              ¿Tenés dudas sobre algún producto? ¿Querés saber si tenemos stock de algo puntual? Escribinos por WhatsApp y te respondemos al instante.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 text-ink-secondary">
                <div className="w-10 h-10 rounded-2xl bg-green-100 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-ink-primary text-sm">WhatsApp</p>
                  <p className="text-sm">Atención de lunes a sábado</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-ink-secondary">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-ink-primary text-sm">Instagram</p>
                  <p className="text-sm">@tempotecno</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-ink-secondary">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-ink-primary text-sm">La Plata, Buenos Aires</p>
                  <p className="text-sm">Envíos a todo el país</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-ink-secondary">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-ink-primary text-sm">Horario de atención</p>
                  <p className="text-sm">Lun–Sáb: 9:00 – 20:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-4xl p-10 shadow-card-hover border border-surface-gray-2/60 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-ink-primary mb-3">
                Escribinos ahora
              </h3>
              <p className="text-ink-secondary mb-8 leading-relaxed">
                Respondemos en menos de 5 minutos. Te asesoramos sin compromiso para que elijas el producto ideal.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-liquid inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chatear por WhatsApp
              </a>
              <p className="text-xs text-ink-tertiary mt-6">
                También podés enviarnos un DM en Instagram @tempotecno
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
