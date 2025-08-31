
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img src="/logo.svg" alt="BOTG" className="h-8 w-auto mb-4" />
            <p className="text-gray-300 mb-4">
              Professional real estate documentation services across the Tri-State area. 
              Your trusted eyes and ears on the ground.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                (609) 350-4359
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                info@reBootsOnTheGround.com
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Property Photography</li>
              <li>Video Walkthrough</li>
              <li>Property Inspection</li>
              <li>Virtual Tours</li>
              <li>Drone Footage</li>
              <li>Custom Reports</li>
            </ul>
          </div>

          {/* Coverage Area */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Coverage Area</h3>
            <ul className="space-y-2 text-gray-300">
              <li>New Jersey</li>
              <li>Pennsylvania</li>
              <li>New York</li>
              <li>Connecticut</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Boots On The Ground. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
