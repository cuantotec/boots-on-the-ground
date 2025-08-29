import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Clock } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Honest and transparent service"
    },
    {
      icon: Zap,
      title: "Expertise", 
      description: "Professional knowledge and experience"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Dependable and timely service"
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-about-title">
            About Boots On The Ground
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-about-subtitle">
            Your trusted partner in real estate investment documentation
          </p>
        </div>

        <div className="space-y-12">
          {/* Our Vision */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-card-foreground" data-testid="text-vision-title">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-vision-description">
                Our vision at Boots on the Ground is to be the leading investment real estate service provider 
                in the Tri-State area. We strive to empower real estate professionals with the comprehensive 
                property intelligence they need to make confident investment decisions, regardless of their 
                physical location.
              </p>
            </CardContent>
          </Card>

          {/* Our Values */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-card-foreground" data-testid="text-values-title">
                Our Values
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-values-description">
                We are committed to upholding the highest standards of integrity, honesty, and transparency 
                in all our professional relationships. Our team brings decades of combined experience in 
                real estate investment, property assessment, and professional documentation services.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="text-center" data-testid={`card-value-${value.title.toLowerCase()}`}>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground" data-testid={`text-value-title-${value.title.toLowerCase()}`}>
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1" data-testid={`text-value-description-${value.title.toLowerCase()}`}>
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Our Services Summary */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-card-foreground" data-testid="text-services-summary-title">
                Our Services
              </h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-services-summary-description">
                We are your eyes and ears in any situation where you need professional property documentation 
                and assessment. Whether you're evaluating a potential investment property, need comprehensive 
                condition reporting, or require detailed visual documentation for insurance or legal purposes, 
                our experienced team delivers the insights you need to make informed decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
