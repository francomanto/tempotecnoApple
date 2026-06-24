"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export default function WhatsAppFAB() {
  const [open, setOpen] = useState(false);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Quería consultar sobre productos Apple.")}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Tooltip/popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-card-hover p-4 max-w-[220px] border border-surface-gray-2"
          >
            <p className="font-semibold text-ink-primary text-sm mb-1">¿Necesitás ayuda?</p>
            <p className="text-ink-secondary text-xs leading-relaxed mb-3">
              Escribinos y te respondemos al instante 🙌
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-white bg-green-500 hover:bg-green-600 px-4 py-2.5 rounded-xl transition-colors"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              Abrir WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-colors"
        style={{ animation: "pulseBlue 3s infinite" }}
        aria-label="Contactar por WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
