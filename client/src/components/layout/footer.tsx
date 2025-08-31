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
    "New Jersey": [
      "Newark",
      "Jersey City",
      "Paterson",
      "Elizabeth",
      "Trenton",
      "Camden",
      "Atlantic City",
      "Clifton",
      "Passaic",
      "Union City",
      "Bayonne",
      "East Orange",
      "Vineland",
      "New Brunswick",
      "Hoboken",
    ],
    Pennsylvania: [
      "Philadelphia",
      "Pittsburgh",
      "Allentown",
      "Erie",
      "Reading",
      "Scranton",
      "Bethlehem",
      "Lancaster",
      "Harrisburg",
      "York",
      "Wilkes-Barre",
      "Chester",
      "Norristown",
      "Upper Darby",
      "Levittown",
    ],
    "New York": [
      "New York City",
      "Buffalo",
      "Rochester",
      "Yonkers",
      "Syracuse",
      "Albany",
      "New Rochelle",
      "Mount Vernon",
      "Schenectady",
      "Utica",
      "White Plains",
      "Hempstead",
      "Troy",
      "Niagara Falls",
      "Binghamton",
    ],
    Connecticut: [
      "Bridgeport",
      "New Haven",
      "Hartford",
      "Stamford",
      "Waterbury",
      "Norwalk",
      "Danbury",
      "New Britain",
      "West Hartford",
      "Greenwich",
      "Hamden",
      "Meriden",
      "Bristol",
      "Manchester",
      "West Haven",
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img
              src="/logo.svg"
              alt="Boots On The Ground Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Professional visual documentation services for distressed
              properties in the Tri-State area. Helping real estate
              professionals make informed investment decisions.
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

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {Object.keys(locations).map((state) => (
                <li key={state}>
                  <a
                    href={`/location/${state.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {state}
                  </a>
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
                <a
                  href="tel:+16093504359"
                  className="hover:text-white transition-colors"
                  data-testid="text-phone"
                >
                  (609) 350-4359
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:info@reBootsOnTheGround.com"
                  className="hover:text-white transition-colors"
                  data-testid="text-email"
                >
                  info@reBootsOnTheGround.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-300 text-sm" data-testid="text-copyright">
              Copyright © 2025 Boots on the Ground - All Rights Reserved
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Developed by{" "}
              <a
                href="https://cuantotec.com?ref=bootsontheground"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                data-testid="link-developer"
              >
                Cuanto Technologies
              </a>
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <a
              href="/privacy-policy"
              className="text-gray-300 hover:text-white transition-colors"
              data-testid="link-privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
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