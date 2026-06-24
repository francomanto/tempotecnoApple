import HeroSection from "@/components/sections/HeroSection";
import DollarTicker from "@/components/ui/DollarTicker";
import FeaturedSection from "@/components/sections/FeaturedSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CatalogSection from "@/components/sections/CatalogSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DollarTicker />
      <FeaturedSection />
      <FeaturesSection />
      <CatalogSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
