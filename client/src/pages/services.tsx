
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, FileText, Clock, CheckCircle, MapPin, Phone } from "lucide-react";
import { ContactFormModal } from "@/components/ui/contact-form-modal";

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "Photo Documentation",
      description: "Comprehensive visual documentation of property conditions, damages, and features",
      features: ["High-resolution photography", "Interior & exterior shots", "Detailed damage assessment", "Before & after comparisons"],
      price: "Starting at $150",
      turnaround: "24-48 hours",
      popular: false
    },
    {
      icon: FileText,
      title: "Inspection Reports",
      description: "Detailed written reports documenting property conditions and recommended actions",
      features: ["Comprehensive condition reports", "Repair cost estimates", "Priority recommendations", "Professional formatting"],
      price: "Starting at $200",
      turnaround: "48-72 hours",
      popular: true
    },
    {
      icon: MapPin,
      title: "Emergency Documentation",
      description: "Rush documentation services for time-sensitive property assessments",
      features: ["Same-day service available", "Priority scheduling", "Expedited reporting", "Direct client communication"],
      price: "Starting at $300",
      turnaround: "Same day",
      popular: false
    }
  ];

  const serviceAreas = [
    "New Jersey",
    "Pennsylvania", 
    "New York",
    "Connecticut"
  ];

  const process = [
    {
      step: "1",
      title: "Initial Contact",
      description: "Reach out to discuss your property documentation needs and timeline"
    },
    {
      step: "2", 
      title: "Scheduling",
      description: "We schedule a convenient time for our team to visit the property"
    },
    {
      step: "3",
      title: "Documentation",
      description: "Our professionals conduct thorough visual documentation on-site"
    },
    {
      step: "4",
      title: "Report Delivery",
      description: "Receive comprehensive reports and photos within agreed timeline"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Professional property documentation services tailored for real estate investors and professionals.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`relative ${service.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <service.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">{service.price}</p>
                      <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.turnaround}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <ContactFormModal
                      service={service.title}
                      trigger={
                        <Button className="w-full" size="lg">
                          Order Now
                        </Button>
                      }
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple, streamlined workflow designed to get you the documentation you need quickly and efficiently.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
              <p className="text-lg text-muted-foreground">
                We provide professional property documentation services across the Tri-State area.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {serviceAreas.map((area) => (
                <Card key={area} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{area}</h3>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/location/${area.toLowerCase().replace(' ', '-')}`}>
                        View Cities
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your property documentation needs and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:(609) 350-4359" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (609) 350-4359
                </a>
              </Button>
              <ContactFormModal
                trigger={
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                    Request Quote
                  </Button>
                }
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
