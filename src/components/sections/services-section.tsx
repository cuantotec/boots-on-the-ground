
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, Search, Globe, Plane, FileText, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Camera,
    title: "Property Photography",
    price: "$150",
    description: "High-quality interior and exterior photography showcasing property conditions and unique features.",
    image: "/assets/property-photography.jpg"
  },
  {
    icon: Video,
    title: "Video Walkthrough",
    price: "$200", 
    description: "Comprehensive video tours providing detailed property assessments and condition reporting.",
    image: "/assets/video-walkthrough.jpg"
  },
  {
    icon: Search,
    title: "Property Inspection",
    price: "$300",
    description: "Detailed on-site inspections with comprehensive reports documenting property conditions.",
    image: "/assets/property-inspection.jpg"
  },
  {
    icon: Globe,
    title: "Virtual Tours",
    price: "$250",
    description: "Interactive 360-degree virtual tours allowing complete remote property exploration.",
    image: "/assets/virtual-tours.jpg"
  },
  {
    icon: Plane,
    title: "Drone Footage",
    price: "$175",
    description: "Professional aerial photography and videography providing comprehensive property overviews.",
    image: "/assets/drone-footage.jpg"
  },
  {
    icon: FileText,
    title: "Custom Reports",
    price: "$400",
    description: "Tailored assessment reports with detailed analysis and expert investment recommendations.",
    image: "/assets/custom-reports.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Comprehensive Documentation Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic photography to comprehensive reports, we offer the complete range 
            of property documentation services you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg-white/90 rounded-full p-2">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {service.price}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <Button variant="outline" className="w-full group">
                    <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                      Get Quote
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
