"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Zap } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#iphone", label: "iPhone" },
  { href: "#mac", label: "Mac" },
  { href: "#airpods", label: "AirPods" },
  { href: "#watch", label: "Apple Watch" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-surface-gray-2/60 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center shadow-blue-glow group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span
              className={cn(
                "font-display font-bold text-lg tracking-tight transition-colors duration-300",
                scrolled ? "text-ink-primary" : "text-white"
              )}
            >
              Tempo<span className="text-brand-blue">Tecno</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/10",
                    scrolled
                      ? "text-ink-secondary hover:text-ink-primary hover:bg-surface-gray-1"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleCart}
              className={cn(
                "relative p-2.5 rounded-full transition-all duration-200",
                scrolled
                  ? "hover:bg-surface-gray-1 text-ink-primary"
                  : "hover:bg-white/10 text-white"
              )}
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="w-5 h-5" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key="badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-blue text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems > 9 ? "9+" : totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "md:hidden p-2.5 rounded-full transition-all duration-200",
                scrolled
                  ? "hover:bg-surface-gray-1 text-ink-primary"
                  : "hover:bg-white/10 text-white"
              )}
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-surface-gray-2/60 shadow-glass md:hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-ink-primary font-medium hover:bg-surface-gray-1 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
