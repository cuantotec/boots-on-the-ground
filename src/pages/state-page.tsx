
import { useParams } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";
import { cities, stateNames } from "@/data/cities";

export default function StatePage() {
  const { state } = useParams<{ state: string }>();
  const stateKey = state as keyof typeof cities;
  const stateCities = cities[stateKey] || [];
  const stateName = stateNames[stateKey] || state;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">
              Service Area
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Property Documentation in {stateName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boots On The Ground provides comprehensive real estate documentation services 
              throughout {stateName}. Your trusted local experts.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Cities We Serve in {stateName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {stateCities.map((city) => (
                <Card key={city.slug} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">{city.name}</h3>
                    </div>
                    <Button variant="outline" size="sm">
                      <Link href={`/city/${state}/${city.slug}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Card className="p-8 bg-blue-50 border-blue-200 inline-block">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started in {stateName}?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for professional property documentation services in your area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact" className="flex items-center gap-2">
                      Get Free Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    (609) 350-4359
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
