import { Calendar, ArrowRight, Leaf, Droplets, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    icon: Droplets,
    title: "10 Water-Wise Plants Perfect for Cape Town Gardens",
    excerpt:
      "Discover the best indigenous and drought-resistant plants that thrive in our Mediterranean climate while saving water and supporting local wildlife.",
    date: "Coming Soon",
    category: "Plant Guide",
  },
  {
    icon: Leaf,
    title: "Creating a Fynbos Haven: A Beginner's Guide",
    excerpt:
      "Learn how to transform your garden into a biodiversity hotspot with native fynbos species that attract birds, bees, and butterflies.",
    date: "Coming Soon",
    category: "Gardening Tips",
  },
  {
    icon: Sun,
    title: "Summer Garden Maintenance: Essential Tips",
    excerpt:
      "Expert advice on keeping your garden healthy through Cape Town's hot, dry summers with smart watering schedules and care techniques.",
    date: "Coming Soon",
    category: "Maintenance",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-section-gradient relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-water font-semibold text-sm tracking-wider uppercase mb-4">
            Garden Tips
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Our Blog
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Expert insights, gardening tips, and inspiration for creating 
            sustainable, beautiful outdoor spaces.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Icon Header */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-water/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-water/20 transition-colors">
                <post.icon className="w-20 h-20 text-primary/40 group-hover:text-primary/60 transition-colors" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block bg-water/10 text-water text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                  Coming Soon
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive gardening tips, seasonal advice, and inspiration 
            for your water-wise garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button variant="default" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
