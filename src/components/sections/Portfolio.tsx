import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    id: 1,
    image: portfolio1,
    title: "Water-Wise Fynbos Garden",
    location: "Constantia",
    category: "Indigenous Design",
    description: "A stunning water-wise garden featuring indigenous proteas, restios, and fynbos with natural stone pathways and a serene water feature. This garden has become a haven for local birds and butterflies.",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Contemporary Desert Patio",
    location: "Noordhoek",
    category: "Hard Landscaping",
    description: "Modern brick paving design with drought-tolerant succulents and ornamental grasses. A low-maintenance outdoor living space perfect for the coastal lifestyle.",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Natural Stone Waterfall",
    location: "Claremont",
    category: "Water Features",
    description: "A cascading natural stone waterfall surrounded by lush ferns and shade-loving plants. Creates a peaceful meditation space in this family garden.",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Commercial Terraced Gardens",
    location: "Cape Town CBD",
    category: "Commercial",
    description: "Multi-level terraced landscaping for a commercial property featuring decorative stone retaining walls and drought-tolerant ornamental grasses.",
  },
];

const categories = ["All", "Indigenous Design", "Hard Landscaping", "Water Features", "Commercial"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-section-gradient relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-water font-semibold text-sm tracking-wider uppercase mb-4">
            Our Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Portfolio of Excellence
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore a selection of our 800+ completed projects across the Cape Peninsula. 
            Each garden tells a unique story of sustainable design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-water/80 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <a href="#contact" className="group">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card rounded-2xl overflow-hidden max-w-3xl w-full shadow-elevated animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-foreground/50 text-primary-foreground rounded-full flex items-center justify-center hover:bg-foreground/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="inline-block bg-water/20 text-water text-xs font-medium px-3 py-1 rounded-full mb-3">
                {selectedProject.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{selectedProject.location}</p>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
