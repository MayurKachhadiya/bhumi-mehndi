import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Bride",
      rating: 5,
      text: "Absolutely stunning work! The intricate bridal mehndi design was beyond my expectations. Every detail was perfect, and the color came out beautifully dark. My wedding photos look amazing thanks to this artistry!",
      occasion: "Wedding"
    },
    {
      id: 2,
      name: "Meera Patel",
      role: "Party Host",
      rating: 5,
      text: "Booked for my daughter's engagement party and everyone was amazed by the beautiful designs. Professional, punctual, and incredibly talented. The guests are still talking about the mehndi art!",
      occasion: "Engagement"
    },
    {
      id: 3,
      name: "Anita Singh",
      role: "Festival Celebrant",
      rating: 5,
      text: "The festival mehndi designs were authentic and gorgeous. Quick application but stunning results. The traditional patterns really made our Diwali celebration special. Highly recommend!",
      occasion: "Festival"
    },
    {
      id: 4,
      name: "Kavya Reddy",
      role: "Bride",
      rating: 5,
      text: "From consultation to final result, everything was perfect. The artist understood exactly what I wanted and created the most beautiful bridal mehndi. The design included our names so elegantly!",
      occasion: "Wedding"
    },
    {
      id: 5,
      name: "Riya Gupta",
      role: "Birthday Girl",
      rating: 5,
      text: "Such a wonderful experience! The party mehndi was exactly what I wanted - modern yet elegant. The artist was so friendly and made the whole process enjoyable. Will definitely book again!",
      occasion: "Birthday Party"
    },
    {
      id: 6,
      name: "Sunita Joshi",
      role: "Mother of Bride",
      rating: 5,
      text: "Exceptional service and artistry! Booked for my daughter's wedding and the entire bridal party was thrilled. Beautiful designs, professional service, and wonderful memories created.",
      occasion: "Wedding"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Don't just take our word for it. Here's what our happy clients have to say 
            about their mehndi experience with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="relative bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-secondary opacity-50" />
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                    {testimonial.occasion}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-foreground font-serif font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 fade-in-up">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-serif font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-serif font-bold text-primary">4.9</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-serif font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-serif font-bold text-primary">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
            Ready to Create Your Own Beautiful Memory?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join our family of satisfied clients and let us create stunning mehndi art 
            that you'll treasure forever.
          </p>
          <div className="flex items-center justify-center">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-secondary fill-current" />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              Rated 4.9/5 by 500+ clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;