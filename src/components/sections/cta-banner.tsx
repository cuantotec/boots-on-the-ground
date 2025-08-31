
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTABanner() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Need Property Documentation Today?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Same-day service available. Get professional property assessments 
          when you need them most.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="px-8 py-3">
            <Link href="/contact" className="flex items-center gap-2">
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="px-8 py-3 flex items-center gap-2 border-white text-white hover:bg-white hover:text-blue-600">
            <Phone className="h-5 w-5" />
            Call (609) 350-4359
          </Button>
        </div>
      </div>
    </section>
  );
}
