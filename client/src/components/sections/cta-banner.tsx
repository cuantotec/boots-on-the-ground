import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";

export function CTABanner() {
  const { scrollToSection } = useScrollTo();

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
          Get a Clear View of Your Next Investment
        </h2>
        <p className="text-lg mb-8 opacity-90" data-testid="text-cta-description">
          Don't make investment decisions in the dark. Let our experienced team provide the comprehensive 
          property documentation you need.
        </p>
        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold"
          size="lg"
          data-testid="button-contact-us-today"
        >
          Contact Us Today
        </Button>
      </div>
    </section>
  );
}
