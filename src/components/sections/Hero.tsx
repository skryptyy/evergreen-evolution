import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Leaf, Award } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful water-wise indigenous garden in Cape Town with proteas and fynbos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-water/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-leaf/20 rounded-full blur-xl animate-float animation-delay-200" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Award className="w-4 h-4 text-water-light" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Established 1993 • 800+ Gardens Created
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
            Water-Wise Gardens
            <span className="block text-water-light">for Cape Town</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Transform your outdoor space into a sustainable oasis. Expert landscaping, 
            indigenous plant design, and professional maintenance services for homes 
            and businesses across the Cape Peninsula.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="group">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#portfolio">View Our Work</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              <Droplets className="w-8 h-8 text-water-light" />
              <div className="text-left">
                <p className="text-primary-foreground font-semibold">Water-Wise</p>
                <p className="text-primary-foreground/70 text-sm">Drought-resistant designs</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              <Leaf className="w-8 h-8 text-leaf-light" />
              <div className="text-left">
                <p className="text-primary-foreground font-semibold">Indigenous</p>
                <p className="text-primary-foreground/70 text-sm">Native fynbos specialists</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              <Award className="w-8 h-8 text-sand-light" />
              <div className="text-left">
                <p className="text-primary-foreground font-semibold">30+ Years</p>
                <p className="text-primary-foreground/70 text-sm">Trusted expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
