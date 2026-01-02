import { 
  Droplets, 
  Leaf, 
  TreeDeciduous, 
  Waves, 
  LayoutGrid, 
  Wrench,
  Scissors,
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Droplets,
    title: "Water-Wise Design",
    description: "Drought-resistant garden designs that conserve water while maintaining stunning beauty. Perfect for Cape Town's Mediterranean climate.",
    features: ["Indigenous plant selection", "Efficient irrigation planning", "Mulching strategies"],
  },
  {
    icon: Leaf,
    title: "Indigenous Gardens",
    description: "Create biodiversity havens with native fynbos that attract birds, bees, and butterflies while requiring minimal water.",
    features: ["Fynbos specialists", "Protea collections", "Restio arrangements"],
  },
  {
    icon: LayoutGrid,
    title: "Hard Landscaping",
    description: "Quality paving, pathways, pool surrounds, and driveways with expert craftsmanship and attention to detail.",
    features: ["Brick paving", "Flagstone paths", "Pool coping"],
  },
  {
    icon: Waves,
    title: "Water Features",
    description: "Transform your garden with elegant fountains, ponds, and water walls that create tranquil outdoor spaces.",
    features: ["Natural ponds", "Fountain installations", "Waterfall designs"],
  },
  {
    icon: TreeDeciduous,
    title: "Retaining Walls",
    description: "Functional and beautiful retaining walls that manage slopes and create terraced garden spaces.",
    features: ["Stone walling", "Dry pack construction", "Terracing"],
  },
  {
    icon: Wrench,
    title: "Irrigation Systems",
    description: "Efficient irrigation installations that deliver water precisely where needed, minimizing waste and maximizing plant health.",
    features: ["Drip systems", "Smart controllers", "Sub-soil drainage"],
  },
  {
    icon: Scissors,
    title: "Pruning & Shaping",
    description: "Expert pruning services to maintain plant health, encourage growth, and keep your garden looking its best.",
    features: ["Tree pruning", "Hedge shaping", "Rose care"],
  },
  {
    icon: Calendar,
    title: "Weekly Maintenance",
    description: "Fully supervised maintenance teams providing regular care to keep your garden thriving throughout the year.",
    features: ["Lawn mowing", "Feeding programs", "Soil improvement"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-water font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Landscaping Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From initial design to ongoing maintenance, we offer comprehensive services 
            for both domestic and commercial properties across Cape Town.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-water/10 rounded-xl flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-water/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="w-3 h-3 text-water" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <a href="#contact" className="group">
              Discuss Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
