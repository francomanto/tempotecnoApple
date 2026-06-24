// useDollarRate.ts — Cotización del dólar con cache de 5 minutos
"use client";

import { useState, useEffect, useCallback } from "react";

interface DolarResponse {
  compra: number;
  venta: number;
  nombre: string;
}

interface DollarRateState {
  rate: number | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

const CACHE_KEY = "tempo_dolar_rate";
const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutos

interface CachedRate {
  rate: number;
  timestamp: number;
}

function getCachedRate(): number | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached: CachedRate = JSON.parse(raw);
    const isValid = Date.now() - cached.timestamp < CACHE_DURATION_MS;
    return isValid ? cached.rate : null;
  } catch {
    return null;
  }
}

function setCachedRate(rate: number) {
  if (typeof window === "undefined") return;
  try {
    const data: CachedRate = { rate, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // silently fail
  }
}

export function useDollarRate() {
  const [state, setState] = useState<DollarRateState>({
    rate: null,
    loading: true,
    error: null,
    lastUpdated: null,
  });

  const fetchRate = useCallback(async () => {
    // Intentar desde cache primero
    const cached = getCachedRate();
    if (cached) {
      setState({ rate: cached, loading: false, error: null, lastUpdated: new Date() });
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // API principal: dolarapi.com
      const response = await fetch("https://dolarapi.com/v1/dolares/blue", {
        next: { revalidate: 300 },
      });

      if (!response.ok) throw new Error("API no disponible");

      const data: DolarResponse = await response.json();
      const rate = data.venta;

      setCachedRate(rate);
      setState({ rate, loading: false, error: null, lastUpdated: new Date() });
    } catch {
      // Fallback: usar cotización manual del PDF ($1,510)
      const fallbackRate = 1510;
      setState({
        rate: fallbackRate,
        loading: false,
        error: "Usando cotización de referencia",
        lastUpdated: new Date(),
      });
    }
  }, []);

  useEffect(() => {
    fetchRate();
  }, [fetchRate]);

  // Formatear precio ARS
  const formatARS = useCallback(
    (usd: number): string => {
      if (!state.rate) return "Calculando…";
      const ars = usd * state.rate;
      return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
      }).format(ars);
    },
    [state.rate]
  );

  const formatUSD = (usd: number): string =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(usd);

  return { ...state, formatARS, formatUSD, refresh: fetchRate };
}
