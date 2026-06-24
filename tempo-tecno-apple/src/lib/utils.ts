import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// WhatsApp number for Tempo Tecno
export const WHATSAPP_NUMBER = "5492215000000"; // Reemplazar con número real

export function generateWhatsAppMessage(items: { name: string; subtitle: string; qty: number }[], totalARS: string): string {
  const lines = items.map((i) => `• ${i.name} ${i.subtitle} x${i.qty}`).join("\n");
  return encodeURIComponent(
    `Hola! Quiero comprar los siguientes productos:\n\n${lines}\n\nTotal: ${totalARS}\n\n¿Tienen stock disponible?`
  );
}
