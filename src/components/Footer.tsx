import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-primary flex items-center gap-2">
              <Heart className="h-5 w-5 fill-primary" />
              Party City
            </h3>
            <p className="text-sm text-muted-foreground">
              Where love meets celebration. Your destination for romantic gifts, beautiful flowers, and everything to make your special moments unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=gifts" className="text-muted-foreground hover:text-primary transition-colors">
                  Romantic Gifts
                </Link>
              </li>
              <li>
                <Link to="/products?category=flowers" className="text-muted-foreground hover:text-primary transition-colors">
                  Fresh Flowers
                </Link>
              </li>
              <li>
                <Link to="/products?category=decor" className="text-muted-foreground hover:text-primary transition-colors">
                  Party Decorations
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  Couple Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>310A Galle Rd, Moratuwa 10400</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span> 071 177 7555</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>vondi@partycity.com</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Party City. All rights reserved. Made with for lovers.</p>
        </div>
      </div>
    </footer>
  );
};
