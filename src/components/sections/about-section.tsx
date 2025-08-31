
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Handshake, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Boots On The Ground
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Trusted Real Estate Documentation Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2015, we bridge the gap between remote real estate professionals 
            and on-site property assessment needs across the Tri-State area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At Boots On The Ground, we specialize in capturing the unique character of distressed 
              properties through professional visual documentation services. We serve as your trusted 
              eyes and ears on the ground, providing detailed property assessments that enable confident 
              investment decisions regardless of your physical location.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Integrity</h4>
                <p className="text-sm text-gray-600">Honest and transparent service</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Eye className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Expertise</h4>
                <p className="text-sm text-gray-600">Professional knowledge and experience</p>
              </div>
              
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Handshake className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Reliability</h4>
                <p className="text-sm text-gray-600">Dependable and timely service</p>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">9+</div>
              <div className="text-gray-600">Years of Experience</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600">States Covered</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-600">Properties Documented</div>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24hr</div>
              <div className="text-gray-600">Response Time</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
