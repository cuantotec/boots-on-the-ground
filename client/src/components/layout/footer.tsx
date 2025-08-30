import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll-to";

export function Footer() {
  const { scrollToSection } = useScrollTo();

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Contact Us", href: "contact" },
  ];

  const locations = {
    "New Jersey": ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"],
    "Pennsylvania": ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"],
    "New York": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
    "Connecticut": ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"]
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://placehold.co/400x100/1E3A8A/FFFFFF?text=BOTG+Logo" 
              alt="Boots On The Ground Logo" 
              className="h-12 w-auto" 
            />
            <p className="text-sm text-muted-foreground">
              Professional real estate documentation services across the Tri-State area.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {Object.keys(locations).map((state) => (
                <li key={state}>
                  <a
                    href={`/location/${state.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {state}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">info@bootsontheground.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Boots On The Ground. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

  const locations = {
    "New Jersey": ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"],
    "Pennsylvania": ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"],
    "New York": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
    "Connecticut": ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"]
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://placehold.co/400x100/FFFFFF/1E3A8A?text=BOTG+Logo" 
              alt="Boots On The Ground Logo" 
              className="h-12 w-auto mb-4" 
            />
            <p className="text-gray-300 mb-4">
              Professional visual documentation services for distressed properties in the Tri-State area. 
              Helping real estate professionals make informed investment decisions.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-social-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-social-instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                    data-testid={`link-footer-${item.href}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span data-testid="text-phone">(609) 350-4359</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span data-testid="text-email">info@reBootsOnTheGround.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm" data-testid="text-copyright">
            Copyright © 2024 Boots on the Ground - All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="link-privacy-policy"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="link-terms-of-service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
