import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Contact Us", href: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center"
              data-testid="button-logo"
            >
              <img 
                src="https://placehold.co/400x100/1E3A8A/FFFFFF?text=BOTG+Logo" 
                alt="Boots On The Ground Logo" 
                className="h-12 w-auto" 
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  data-testid={`link-nav-${item.href}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick("services")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-md text-sm font-semibold"
              data-testid="button-order-now"
            >
              Order Now
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
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                data-testid={`link-mobile-${item.href}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("services")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-4"
              data-testid="button-mobile-order-now"
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
