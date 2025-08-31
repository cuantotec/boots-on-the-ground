import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";

export function HeroSection() {
  const { scrollToSection } = useScrollTo();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center text-white relative" style={{ backgroundImage: "url('/assets/hero-background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
          Boots on the ground for your real estate investment needs
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-100" data-testid="text-hero-subtitle">
          Now Servicing the Tri-State Area
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-200" data-testid="text-hero-tagline">
          Experienced Investors Helping Investors
        </p>
        <Button
          onClick={() => scrollToSection("services")}
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold"
          size="lg"
          data-testid="button-view-services"
        >
          View Our Services
        </Button>
      </div>
    </section>
  );
}
