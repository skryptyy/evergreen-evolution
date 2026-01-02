import { Award, Users, Leaf, Target } from "lucide-react";
import aboutImage from "@/assets/about-planting.jpg";

const stats = [
  { number: "800+", label: "Gardens Created" },
  { number: "30+", label: "Years Experience" },
  { number: "100%", label: "Water-Wise Focus" },
  { number: "500+", label: "Happy Clients" },
];

const team = [
  {
    name: "Greg Heathcote-Marks",
    role: "Owner & Lead Horticulturist",
    bio: "Founded Hedgehogs in 1993 and qualified in horticulture and landscape design in 1999. Greg brings vision, expertise, and hands-on dedication to every project.",
    interests: "MMA, volleyball, tennis, and hiking",
  },
  {
    name: "Edson Sithole",
    role: "Landscaping Manager",
    bio: "Joined in 2009 with a background in horticultural retail. Known as the 'academic' of the team, Edson combines careful listening with expert knowledge to achieve exceptional results.",
    interests: "Avid reader and natural ecosystem enthusiast",
  },
  {
    name: "Mike Glenister",
    role: "Maintenance Manager",
    bio: "A valued team member since 2001, Mike oversees our maintenance division with professionalism and a great sense of humor that keeps the team motivated.",
    interests: "General knowledge and team leadership",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-section-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-leaf-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-water font-semibold text-sm tracking-wider uppercase mb-4">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Rooted in Cape Town Since 1993
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For over three decades, Hedgehogs Landscaping has been transforming Cape Town gardens 
            into sustainable, water-wise havens that celebrate our region's unique flora.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Hedgehogs team carefully planting indigenous fynbos"
              className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-elevated">
              <p className="font-serif text-3xl font-bold">800+</p>
              <p className="text-sm text-primary-foreground/80">Gardens Created</p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hedgehogs Landscaping was established in 1993 with a simple mission: to create 
                beautiful gardens that work in harmony with Cape Town's unique climate and ecosystem.
              </p>
              <p>
                We've designed and created over 800 gardens across the Cape Peninsula—from 
                Kommetjie and Noordhoek to Claremont, Constantia, and the CBD. Each garden is 
                unique, reflecting the space, the client's vision, and our commitment to 
                sustainable, water-wise design.
              </p>
              <p>
                Our company operates two specialized divisions: a landscaping team focused on 
                water-wise design and indigenous layouts, and a fully supervised maintenance 
                team that keeps your garden thriving year-round.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft">
                <Leaf className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Sustainability</h4>
                  <p className="text-sm text-muted-foreground">Eco-conscious practices</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft">
                <Target className="w-6 h-6 text-water mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Quality</h4>
                  <p className="text-sm text-muted-foreground">No compromise finishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-shadow"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <span className="inline-block text-water font-semibold text-sm tracking-wider uppercase mb-4">
            Our Team
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            Meet the Experts
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-water rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground text-center mb-2">
                {member.name}
              </h4>
              <p className="text-water font-medium text-sm text-center mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
              <p className="text-xs text-muted-foreground/70 italic text-center">
                Interests: {member.interests}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
