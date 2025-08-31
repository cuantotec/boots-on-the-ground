
import { useParams } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { cities, stateNames } from "@/data/cities";

export default function CityPage() {
  const { state, city } = useParams<{ state: string; city: string }>();
  const stateKey = state as keyof typeof cities;
  const stateCities = cities[stateKey] || [];
  const cityData = stateCities.find(c => c.slug === city);
  const stateName = stateNames[stateKey] || state;

  if (!cityData) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">City Not Found</h1>
            <Button>
              <Link href={`/state/${state}`}>
                Back to {stateName}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">
              Local Service Area
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Property Documentation Services in {cityData.name}, {stateName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional real estate documentation services in {cityData.name}. 
              Local expertise, reliable service, and comprehensive property assessments.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Local Expertise in {cityData.name}
                </h2>
                <p className="text-gray-600 mb-8">
                  Our team knows {cityData.name} and the surrounding {stateName} area intimately. 
                  We understand local market conditions, property types, and investment opportunities 
                  that make each area unique.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Local market knowledge</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Same-day service available</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Direct communication</span>
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started in {cityData.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Call or Text</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Immediate response for {cityData.name} properties
                  </p>
                  <a href="tel:6093504359" className="text-blue-600 font-semibold hover:text-blue-700 text-lg">
                    (609) 350-4359
                  </a>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Send property details for custom quote
                  </p>
                  <a href="mailto:info@reBootsOnTheGround.com" className="text-green-600 font-semibold hover:text-green-700">
                    info@reBootsOnTheGround.com
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
