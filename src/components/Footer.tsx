import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center">
                <span className="text-foreground font-serif font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Mehndi by Artisan</h3>
                <p className="text-xs text-primary-foreground/80">Traditional Art Studio</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Creating beautiful henna art that celebrates your most precious moments. 
              Traditional designs with contemporary elegance.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://www.instagram.com/bhumi.mehndi_art" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://wa.me/916351102210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Bridal Mehndi</li>
              <li>Engagement Designs</li>
              <li>Party Mehndi</li>
              <li>Festival Patterns</li>
              <li>Custom Designs</li>
              <li>Group Bookings</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p>123 Art Street</p>
                  <p>Beauty District, City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/80 flex-shrink-0" />
                <a href="tel:+916351102210" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 6351102210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/80 flex-shrink-0" />
                <a href="mailto:mayurkachhadiya373@gmail.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  mayurkachhadiya373@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 Mehndi by Artisan. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for beautiful celebrations</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;