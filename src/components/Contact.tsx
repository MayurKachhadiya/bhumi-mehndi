import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service or API here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 6351102210",
      subinfo: "Available 9 AM - 8 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "mayurkachhadiya373@gmail.com",
      subinfo: "We reply within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Art Street, Beauty District",
      subinfo: "City, State 12345"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon - Sat: 9 AM - 8 PM",
      subinfo: "Sunday: By appointment"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Book Your <span className="text-primary">Mehndi</span> Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Ready to adorn your hands with beautiful henna art? Get in touch with us to 
            schedule your appointment and discuss your design preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 fade-in-up">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Get in Touch
            </h3>
            
            {contactInfo.map((item, index) => (
              <Card key={item.title} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 gradient-gold rounded-full flex-shrink-0">
                      <item.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-primary font-medium">{item.info}</p>
                      <p className="text-sm text-muted-foreground">{item.subinfo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="elegant" size="icon" asChild>
                  <a href="https://www.instagram.com/bhumi.mehndi_art" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="elegant" size="icon" asChild>
                  <a href="https://wa.me/916351102210" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2 fade-in-up stagger-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">
                  Book Your Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type *</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-md bg-background text-foreground"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="bridal">Bridal Mehndi</option>
                      <option value="engagement">Engagement Mehndi</option>
                      <option value="party">Party Mehndi</option>
                      <option value="festival">Festival Mehndi</option>
                      <option value="custom">Custom Design</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements, design preferences, or any special requests..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Calendar className="w-5 h-5" />
                    Book Your Mehndi Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 fade-in-up">
          <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For urgent bookings or quick questions, feel free to call us directly or 
              send us a message on WhatsApp. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+916351102210">
                  <Phone className="w-5 h-5" />
                  Call Now: +91 6351102210
                </a>
              </Button>
              <Button variant="gold" size="lg" asChild>
                <a href="https://wa.me/916351102210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;