import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { ServicesSection } from "@/components/sections/services-section";
import { CTABanner } from "@/components/sections/cta-banner";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <CTABanner />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
