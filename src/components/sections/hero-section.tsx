
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: 'url(/assets/hero-background.jpg)'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Professional Real Estate
          <span className="block text-blue-600">Documentation Services</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your trusted eyes and ears on the ground. Comprehensive property assessments 
          across the Tri-State area for investors, agents, and property managers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            <Link href="/contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="px-8 py-3 flex items-center gap-2">
            <Phone className="h-5 w-5" />
            (609) 350-4359
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          Serving New Jersey • Pennsylvania • New York • Connecticut
        </div>
      </div>
    </section>
  );
}
