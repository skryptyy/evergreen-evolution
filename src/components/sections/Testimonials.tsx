import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Greg and Hedgehogs developed our garden from being a building site to the beginnings of a lush garden. He has the vision and foresight to know what will grow well in different areas and what it will look like once it has grown. Today we are reaping the rewards of a well-planned garden.",
    author: "Guy Lundy",
    location: "Claremont",
    rating: 5,
  },
  {
    quote:
      "Many thanks for landscaping my garden in Kommetjie. It has changed the look and feel of the house entirely and has added much value to the property. The work was done with enthusiasm, great sense of style and it was very clear to me that you are vastly experienced in this field.",
    author: "Greg Balfour",
    location: "Kommetjie",
    rating: 5,
  },
  {
    quote:
      "Hedgehogs Landscaping provide a comprehensive range of garden services... I have had a relationship with the management and staff for the past 10 years and have nothing but praise for the wealth of experience, integrity, commitment to quality they have shown. They are specialists in indigenous, water-wise plants.",
    author: "Mohamed Baba",
    location: "Newlands",
    rating: 5,
  },
  {
    quote:
      "We recently relocated premises, and my vision for my new workshop was indoor plants. Greg suggested the most amazing plants to suit my new space, my budget and colours. He had the plants and pots delivered promptly, and did the transplanting himself. I was amazed.",
    author: "Craig Sabotker",
    location: "Rondebosch",
    rating: 5,
  },
  {
    quote:
      "Thank you SO much for the beautiful clean up job done by your team led by Edson. He combines a willingness to listen carefully with openness to other considerations I bring up, resulting in decisions that please me very much. He used the term 'a natural ecosystem' to describe what I'm trying to achieve.",
    author: "Satisfied Customer",
    location: "Cape Town",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-water/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-water font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Over 30 years of creating beautiful gardens has earned us the trust 
            of hundreds of happy clients across Cape Town.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 ${
                index === 2 ? "lg:row-span-2" : ""
              }`}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-water text-water" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
