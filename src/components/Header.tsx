
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";
import salloumLogo from "@/assets/salloum-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-muted/50 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+963 950 090 590</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Damascus, Syria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/9484fc27-3615-4dac-b2fa-ba066fce7efa.png" 
                alt="Salloum Wash Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a 
                href="https://wa.me/963950090590" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('tel:0950090590', '_self')}
              >
                Get Estimate
              </Button>
              <Button 
                variant="hero" 
                size="lg"
                className="font-bold shadow-glow border-2 border-primary/50 text-black"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                aria-label="احجز الان - اتصال هاتفي"
                onClick={() => window.open('tel:0950090590', '_self')}
              >
                احجز الان
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border/50">
            <div className="px-4 pt-2 pb-3 space-y-3">
              <a href="#home" className="block text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="#services" className="block text-foreground hover:text-primary transition-colors py-2">
                Services
              </a>
              <a href="#about" className="block text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
              <a 
                href="https://wa.me/963950090590" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </a>
              <div className="flex space-x-3 pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => window.open('tel:0950090590', '_self')}
                >
                  Get Estimate
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1 font-bold shadow-glow border-2 border-primary/50 text-black"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                  aria-label="احجز الان - اتصال هاتفي"
                  onClick={() => window.open('tel:0950090590', '_self')}
                >
                  احجز الان
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
