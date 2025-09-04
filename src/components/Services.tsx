import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles, Music, Flower2, Crown, Gift, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Bridal Mehndi",
      description: "Elaborate and intricate designs perfect for your wedding day. From traditional motifs to personalized patterns with names and dates.",
      features: ["Full hand & feet designs", "Groom's name integration", "Custom motifs", "Professional consultation"],
      price: "Starting from $150",
      popular: true
    },
    {
      icon: Heart,
      title: "Engagement Mehndi",
      description: "Romantic and elegant patterns celebrating your engagement. Beautiful designs featuring couple names and love symbols.",
      features: ["Couple name designs", "Heart & love motifs", "Delicate patterns", "Photo-worthy results"],
      price: "Starting from $80",
      popular: false
    },
    {
      icon: Music,
      title: "Party Mehndi",
      description: "Festive and contemporary designs for any celebration. Perfect for birthdays, festivals, and special gatherings.",
      features: ["Quick application", "Modern patterns", "Group bookings", "Flexible timing"],
      price: "Starting from $40",
      popular: false
    },
    {
      icon: Flower2,
      title: "Festival Mehndi",
      description: "Traditional patterns celebrating cultural festivals. Authentic designs that honor heritage and tradition.",
      features: ["Traditional motifs", "Cultural patterns", "Bulk bookings", "Festival specials"],
      price: "Starting from $35",
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-primary">Mehndi</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            From intimate celebrations to grand weddings, we offer specialized mehndi services 
            tailored to make your special moments unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 fade-in-up ${
                service.popular ? 'ring-2 ring-primary/20 shadow-gold' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-gold text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 gradient-primary rounded-full mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-serif text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <Sparkles className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <div className="text-lg font-semibold text-primary mb-3">
                    {service.price}
                  </div>
                  <Button 
                    variant={service.popular ? "hero" : "elegant"} 
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-card rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center space-x-3">
                <Gift className="w-6 h-6 text-secondary" />
                <span className="text-foreground">Group Bookings</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-secondary" />
                <span className="text-foreground">Henna Parties</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-secondary" />
                <span className="text-foreground">Home Service</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              We also offer specialized packages for corporate events, baby showers, 
              and cultural celebrations. Contact us for custom pricing.
            </p>
            <Button variant="gold" onClick={scrollToContact}>
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;