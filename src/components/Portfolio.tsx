import { useState } from "react";
import { Button } from "@/components/ui/button";
import bridalImage from "@/assets/bridal-mehndi-hero.jpg";
import patternsImage from "@/assets/mehndi-patterns-1.jpg";
import engagementImage from "@/assets/engagement-mehndi.jpg";
import festivalImage from "@/assets/festival-mehndi.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Designs" },
    { id: "bridal", label: "Bridal" },
    { id: "engagement", label: "Engagement" },
    { id: "party", label: "Party" },
    { id: "festival", label: "Festival" }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "bridal",
      title: "Intricate Bridal Mehndi",
      description: "Traditional paisley and floral motifs with groom's name",
      image: bridalImage,
      tags: ["Bridal", "Traditional", "Full Hand"]
    },
    {
      id: 2,
      category: "party",
      title: "Contemporary Patterns",
      description: "Modern geometric designs perfect for parties",
      image: patternsImage,
      tags: ["Modern", "Geometric", "Quick"]
    },
    {
      id: 3,
      category: "engagement",
      title: "Romantic Engagement Design",
      description: "Delicate hearts and couple names in Arabic calligraphy",
      image: engagementImage,
      tags: ["Romantic", "Calligraphy", "Elegant"]
    },
    {
      id: 4,
      category: "festival",
      title: "Festival Special Mehndi",
      description: "Traditional motifs celebrating cultural heritage",
      image: festivalImage,
      tags: ["Traditional", "Cultural", "Festive"]
    },
    {
      id: 5,
      category: "bridal",
      title: "Elaborate Bridal Set",
      description: "Full hand and feet designs with intricate details",
      image: bridalImage,
      tags: ["Bridal", "Full Set", "Elaborate"]
    },
    {
      id: 6,
      category: "party",
      title: "Modern Party Mehndi",
      description: "Stylish contemporary patterns for special occasions",
      image: patternsImage,
      tags: ["Contemporary", "Stylish", "Party"]
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our collection of exquisite mehndi designs that showcase the beauty 
            of traditional artistry and contemporary innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "hero" : "elegant"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="min-w-[120px]"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.title} - Professional mehndi design`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 bg-card">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 fade-in-up">
          <p className="text-muted-foreground mb-6">
            Want to see more of our work? Follow us on social media for daily updates 
            and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              View on Instagram
            </Button>
            <Button variant="elegant" size="lg">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;