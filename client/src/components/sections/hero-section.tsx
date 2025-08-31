import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";
import BlurText from "@/../../src/TextAnimations/BlurText/BlurText";

export function HeroSection() {
  const { scrollToSection } = useScrollTo();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center text-white relative" style={{ backgroundImage: "url('/assets/hero-background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurText 
          text="Boots on the ground for your real estate investment needs"
          className="hero-title text-4xl md:text-6xl font-bold mb-6"
          data-testid="text-hero-title"
          delay={100}
          animateBy="words"
          direction="top"
        />
        <BlurText 
          text="Now Servicing the Tri-State Area"
          className="text-xl md:text-2xl mb-4 text-gray-100"
          data-testid="text-hero-subtitle"
          delay={150}
          animateBy="words"
          direction="bottom"
        />
        <BlurText 
          text="Experienced Investors Helping Investors"
          className="text-lg md:text-xl mb-8 text-gray-200"
          data-testid="text-hero-tagline"
          delay={200}
          animateBy="words"
          direction="top"
        />
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
