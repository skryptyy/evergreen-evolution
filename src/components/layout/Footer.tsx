import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">H</span>
              </div>
              <div>
                <span className="font-serif text-xl font-bold">Hedgehogs</span>
                <span className="block text-xs tracking-widest uppercase text-primary-foreground/70">
                  Landscaping
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Creating sustainable, water-wise gardens across Cape Town since 1993. 
              Over 800 gardens designed and built with passion.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/hedgehogslandscaping/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Portfolio", "Testimonials", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Water-Wise Design",
                "Indigenous Gardens",
                "Hard Landscaping",
                "Irrigation Systems",
                "Garden Maintenance",
                "Water Features",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-water-light" />
                <div>
                  <a href="tel:0214621765" className="block hover:text-water-light transition-colors">
                    021 462 1765
                  </a>
                  <a href="tel:0827320143" className="block hover:text-water-light transition-colors">
                    082 732 0143
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-water-light" />
                <a href="mailto:greg@hedgehogs.co.za" className="hover:text-water-light transition-colors">
                  greg@hedgehogs.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-water-light" />
                <span className="text-primary-foreground/80">
                  Serving Cape Town: Noordhoek, Kommetjie, Fish Hoek, Constantia, CBD & surrounds
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Hedgehogs Landscaping. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Est. 1993 • Over 800 gardens created
          </p>
        </div>
      </div>
    </footer>
  );
}
