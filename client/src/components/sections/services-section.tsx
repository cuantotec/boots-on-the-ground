import { ServiceCard } from "@/components/ui/service-card";

export function ServicesSection() {
  const services = [
    {
      title: "Property Photography",
      description: "High-quality interior and exterior photos showcasing property condition and unique features.",
      price: 150,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      imageAlt: "Professional property photography services"
    },
    {
      title: "Video Walkthrough",
      description: "Comprehensive video tours providing detailed property assessments and condition reporting.",
      price: 200,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      imageAlt: "Professional video walkthrough services"
    },
    {
      title: "Property Inspection",
      description: "Detailed on-site inspections with comprehensive reports on property condition and potential issues.",
      price: 300,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      imageAlt: "Professional property inspection services"
    },
    {
      title: "Virtual Tours",
      description: "Interactive 360° virtual tours allowing remote property exploration and assessment.",
      price: 250,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      imageAlt: "360-degree virtual tour services"
    },
    {
      title: "Drone Footage",
      description: "Aerial photography and videography providing comprehensive property overviews and neighborhood context.",
      price: 175,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      imageAlt: "Professional drone aerial photography services"
    },
    {
      title: "Custom Reports",
      description: "Tailored property assessment reports with detailed analysis and investment recommendations.",
      price: 400,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      imageAlt: "Custom property reporting services"
    }
  ];

  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive property documentation services tailored for real estate professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
              image={service.image}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
