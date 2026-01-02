import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceAreas = [
  "Noordhoek", "Kommetjie", "Fish Hoek", "Simons Town", "Glencairn",
  "Lakeside", "Bergvliet", "Constantia", "Kenilworth", "Claremont",
  "Bishopscourt", "Newlands", "Rondebosch", "Cape Town CBD", "Camps Bay",
  "Sea Point", "Bantry Bay"
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your enquiry. We'll be in touch within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-water font-semibold text-sm tracking-wider uppercase mb-4">
            Contact Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Create Your Dream Garden
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to transform your outdoor space? Get in touch for a free consultation 
            and quote. We'd love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Request a Free Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="082 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="landscape-design">Landscape Design</option>
                    <option value="water-wise">Water-Wise Garden</option>
                    <option value="hard-landscaping">Hard Landscaping</option>
                    <option value="water-feature">Water Feature</option>
                    <option value="irrigation">Irrigation System</option>
                    <option value="maintenance">Garden Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                  placeholder="Describe your garden project, size, and any specific requirements..."
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:0214621765" className="text-muted-foreground hover:text-primary transition-colors block">
                      021 462 1765 (Office)
                    </a>
                    <a href="tel:0827320143" className="text-muted-foreground hover:text-primary transition-colors block">
                      082 732 0143 (Greg)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-water/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-water" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:greg@hedgehogs.co.za" className="text-muted-foreground hover:text-water transition-colors">
                      greg@hedgehogs.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-leaf/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-leaf" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Working Hours</p>
                    <p className="text-muted-foreground">Monday - Friday: 7:30 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-earth/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-earth" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Service Areas</h4>
                  <p className="text-muted-foreground text-sm">We serve the greater Cape Town area</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-muted text-muted-foreground text-xs px-3 py-1.5 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-primary to-water rounded-2xl p-6 text-primary-foreground">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-12 h-12" />
                <div>
                  <p className="font-serif text-xl font-bold">Free Consultation</p>
                  <p className="text-primary-foreground/80">
                    We'll visit your property and provide a detailed quote at no obligation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
