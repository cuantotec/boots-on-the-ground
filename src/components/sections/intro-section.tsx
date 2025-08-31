
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Trusted by Real Estate Professionals
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Boots On The Ground?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2015, we've been the premier choice for professional property documentation 
            in the Tri-State area, serving investors, agents, and property managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Assessment</h3>
            <p className="text-gray-600">
              Professional analysis backed by years of real estate experience and local market knowledge.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tri-State Coverage</h3>
            <p className="text-gray-600">
              Comprehensive service across New Jersey, Pennsylvania, New York, and Connecticut.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-10 w-10 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response</h3>
            <p className="text-gray-600">
              Same-day service options available with flexible scheduling to meet your timeline.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Service</h3>
            <p className="text-gray-600">
              Transparent pricing, honest reporting, and dependable service you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
