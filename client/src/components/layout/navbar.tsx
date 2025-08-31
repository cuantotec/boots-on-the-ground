import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState<string | null>(null);
  const { scrollToSection } = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  const locations = {
    "New Jersey": ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton", "Camden", "Atlantic City", "Clifton", "Passaic", "Union City", "Bayonne", "East Orange", "Vineland", "New Brunswick", "Hoboken"],
    "Pennsylvania": ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York", "Wilkes-Barre", "Chester", "Norristown", "Upper Darby", "Levittown"],
    "New York": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica", "White Plains", "Hempstead", "Troy", "Niagara Falls", "Binghamton"],
    "Connecticut": ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury", "Norwalk", "Danbury", "New Britain", "West Hartford", "Greenwich", "Hamden", "Meriden", "Bristol", "Manchester", "West Haven"]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center"
              data-testid="button-logo"
            >
              <img 
                src="/logo.svg" 
                alt="Boots On The Ground Logo" 
                className="h-12 w-auto" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  data-testid={`link-nav-${item.href.replace('/', '')}`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Locations Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                  Locations
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {Object.entries(locations).map(([state, cities]) => (
                    <DropdownMenuSub key={state}>
                      <DropdownMenuSubTrigger>
                        {state}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="w-48">
                        <DropdownMenuItem asChild>
                          <a href={`/location/${state.toLowerCase().replace(' ', '-')}`} className="font-semibold">
                            View {state}
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {cities.map((city) => (
                          <DropdownMenuItem key={city} asChild>
                            <a href={`/location/${state.toLowerCase().replace(' ', '-')}/${city.toLowerCase().replace(/\s+/g, '-')}`}>
                              {city}
                            </a>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-md text-sm font-semibold"
              data-testid="button-order-now"
            >
              <a href="/services">Order Now</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                data-testid={`link-mobile-${item.href.replace('/', '')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Locations Section */}
            <div className="space-y-1">
              <div className="text-foreground px-3 py-2 text-base font-medium">
                Locations
              </div>
              {Object.entries(locations).map(([state, cities]) => (
                <div key={state} className="ml-3">
                  <button
                    onClick={() => setMobileLocationsOpen(mobileLocationsOpen === state ? null : state)}
                    className="text-foreground hover:text-primary flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {state}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileLocationsOpen === state ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileLocationsOpen === state && (
                    <div className="ml-3 space-y-1">
                      <a
                        href={`/location/${state.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-600 hover:text-primary block px-3 py-1 text-sm font-semibold"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        View {state}
                      </a>
                      {cities.map((city) => (
                        <a
                          key={city}
                          href={`/location/${state.toLowerCase().replace(' ', '-')}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-600 hover:text-primary block px-3 py-1 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {city}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-4"
              data-testid="button-mobile-order-now"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="/services">Order Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
