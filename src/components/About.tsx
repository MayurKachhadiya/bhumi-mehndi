import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Clock, Sparkles, Star } from "lucide-react";
import patternsImage from "@/assets/mehndi-patterns-1.jpg";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Mastering the art of mehndi with years of dedicated practice"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Creating beautiful memories for brides and families"
    },
    {
      icon: Star,
      title: "4.9 Star Rating",
      description: "Consistently delivering exceptional service and artistry"
    },
    {
      icon: Heart,
      title: "Passionate Artist",
      description: "Every design is crafted with love and attention to detail"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                About <span className="text-primary">Our Artisan</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Mehndi by Artisan, where traditional art meets contemporary elegance. 
                I'm passionate about creating beautiful henna designs that celebrate your most 
                precious moments.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                With over 5 years of experience in the art of mehndi, I specialize in creating 
                intricate designs that blend traditional motifs with modern aesthetics. Every pattern 
                I create tells a unique story, reflecting the personality and dreams of my clients.
              </p>
              
              <p className="text-muted-foreground">
                From elaborate bridal designs that span across hands and feet to delicate party patterns, 
                I ensure each creation is a masterpiece. My commitment to quality, attention to detail, 
                and use of premium, natural henna paste guarantees not just beautiful designs, 
                but also deep, long-lasting color.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 gradient-gold rounded-full flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                <Clock className="w-5 h-5" />
                Book Consultation
              </Button>
              <Button variant="elegant" size="lg">
                <Sparkles className="w-5 h-5" />
                View Certificates
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative fade-in-up lg:fade-in-up stagger-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={patternsImage} 
                  alt="Professional mehndi artist creating intricate henna patterns" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-card p-4 rounded-lg shadow-gold">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-card p-4 rounded-lg shadow-gold">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 gradient-primary rounded-full">
                    <Heart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Passionate</div>
                    <div className="text-xs text-muted-foreground">Artist</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 gradient-gold rounded-full opacity-20 blur-sm"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-primary rounded-full opacity-20 blur-sm"></div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Philosophy</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              "Mehndi is not just body art; it's a celebration of culture, love, and life's beautiful moments. 
              Every swirl, every pattern, every design carries the essence of tradition while embracing 
              the dreams of today. I believe in creating art that not only adorns your hands but also 
              touches your heart."
            </p>
            <div className="flex justify-center">
              <div className="gradient-gold p-0.5 rounded-full">
                <div className="bg-card rounded-full px-6 py-2">
                  <span className="text-foreground font-serif italic">- Your Mehndi Artisan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;