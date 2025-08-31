
import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    services: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Boots On The Ground
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get professional property documentation? Reach out today for 
              a free consultation and quote.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="property">Property Address</Label>
                    <Input
                      id="property"
                      type="text"
                      value={formData.property}
                      onChange={(e) => setFormData({...formData, property: e.target.value})}
                      className="mt-1"
                      placeholder="Street address, city, state"
                    />
                  </div>

                  <div>
                    <Label htmlFor="services">Services Needed</Label>
                    <Input
                      id="services"
                      type="text"
                      value={formData.services}
                      onChange={(e) => setFormData({...formData, services: e.target.value})}
                      className="mt-1"
                      placeholder="Photography, inspection, virtual tour, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-1"
                      placeholder="Tell us about your project and timeline..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Call or Text</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Available for calls and text messages during business hours. 
                    Emergency services available.
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
                    Send us detailed project requirements and we'll respond promptly 
                    with a customized quote.
                  </p>
                  <a href="mailto:info@reBootsOnTheGround.com" className="text-green-600 font-semibold hover:text-green-700">
                    info@reBootsOnTheGround.com
                  </a>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Comprehensive coverage across the Tri-State area:
                  </p>
                  <ul className="text-purple-600 font-medium space-y-1">
                    <li>• New Jersey</li>
                    <li>• Pennsylvania</li>
                    <li>• New York</li>
                    <li>• Connecticut</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Rapid response to inquiries with same-day service options available.
                  </p>
                  <p className="text-orange-600 font-semibold">
                    Typically within 2-4 hours
                  </p>
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
