export function IntroSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" data-testid="text-intro-title">
          Professional Property Documentation Services
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-description">
          At BOTG we specialize in capturing the unique character of distressed properties, providing real estate 
          professionals with comprehensive visual documentation and on-site assessments. Our experienced team 
          understands the unique challenges of property investment and delivers the detailed insights you need 
          to make informed decisions.
        </p>
      </div>
    </section>
  );
}
