import { Button } from "@/components/ui/button";
import { Calendar, Star, Award, Users } from "lucide-react";
import heroImage from "@/assets/bridal-mehndi-hero.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero henna-pattern">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 stagger-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">Trusted by 500+ Brides</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight text-balance stagger-2">
                Exquisite <span className="text-primary">Mehndi</span> Artistry for Your Special Moments
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl text-balance stagger-3">
                Transform your celebrations with our traditional and contemporary henna designs. 
                From intricate bridal patterns to elegant party motifs, we create art that tells your story.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 stagger-4">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                <Calendar className="w-5 h-5" />
                Book Your Mehndi Now
              </Button>
              <Button variant="elegant" size="lg" onClick={scrollToPortfolio}>
                View Our Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 stagger-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 gradient-gold rounded-full mx-auto mb-2">
                  <Award className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-2xl font-serif font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 gradient-gold rounded-full mx-auto mb-2">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-2xl font-serif font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 gradient-gold rounded-full mx-auto mb-2">
                  <Star className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-2xl font-serif font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Star Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative fade-in-up stagger-3">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Beautiful bridal mehndi design showcasing intricate henna patterns" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-gold max-w-xs">
              <h3 className="font-serif font-semibold text-foreground mb-2">Bridal Specialist</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Creating unforgettable henna art for your most precious moments
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-secondary rounded-full border-2 border-card"></div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-card"></div>
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-card"></div>
                </div>
                <span className="text-xs text-muted-foreground">+500 satisfied clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;