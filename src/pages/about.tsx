
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Handshake, Users, Award, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">
              About Our Company
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Real Estate Documentation Since 2015
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boots On The Ground stands as the premier professional real estate documentation 
              service provider in the Tri-State area, specializing in comprehensive visual 
              documentation for distressed properties.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-8">
                  At Boots On The Ground, we specialize in capturing the unique character of 
                  distressed properties through professional visual documentation services. We serve 
                  as your trusted eyes and ears on the ground, providing detailed property assessments 
                  that enable confident investment decisions regardless of your physical location.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600">
                  Our vision is to be the leading investment real estate service provider in the 
                  Tri-State area, empowering real estate professionals with comprehensive property 
                  intelligence needed to make informed investment decisions.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
                  </div>
                  <p className="text-gray-600">
                    Honest and transparent service delivery with no hidden agendas or fees.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Expertise</h3>
                  </div>
                  <p className="text-gray-600">
                    Professional knowledge backed by years of real estate experience.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Handshake className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Reliability</h3>
                  </div>
                  <p className="text-gray-600">
                    Dependable and timely service you can count on for critical investment decisions.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Professionals
              </h2>
              <p className="text-xl text-gray-600">
                Our track record speaks for itself
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">9+</div>
                <div className="text-gray-600">Years of Experience</div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">4</div>
                <div className="text-gray-600">States Covered</div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
                <div className="text-gray-600">Properties Documented</div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">24hr</div>
                <div className="text-gray-600">Average Response Time</div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get professional property documentation services today.
            </p>
            <Button size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center gap-2">
                Get Your Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
