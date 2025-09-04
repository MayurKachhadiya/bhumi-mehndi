import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Award, Users, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/bridal-mehndi-hero.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const heroTexts = [
    "Beautiful Mehndi for Every Occasion",
    "Exquisite Bridal Henna Artistry", 
    "Traditional Patterns, Modern Elegance",
    "Where Culture Meets Creativity"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero henna-pattern overflow-hidden">
      {/* Floating Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 text-gold-rich opacity-20 float-animation"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>
      <motion.div 
        className="absolute top-32 right-16 text-gold-rich opacity-15 float-delayed"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: -2 }}
      >
        <Heart className="w-10 h-10" />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-20 text-gold-rich opacity-10"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: -4 }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div className="space-y-6" variants={itemVariants}>
              {/* Rating Stars */}
              <motion.div 
                className="flex items-center space-x-3"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1 + 1, duration: 0.5 }}
                    >
                      <Star className="w-5 h-5 text-secondary fill-current" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  Trusted by 500+ Brides
                </span>
              </motion.div>
              
              {/* Animated Headlines */}
              <div className="relative h-32 lg:h-40">
                {heroTexts.map((text, index) => (
                  <motion.h1
                    key={index}
                    className={`absolute inset-0 text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight text-balance ${
                      index === currentText ? 'opacity-100' : 'opacity-0'
                    }`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ 
                      y: index === currentText ? 0 : -50, 
                      opacity: index === currentText ? 1 : 0 
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-primary">Beautiful Mehndi</span>{" "}
                    <span className="text-reveal">
                      {text.split("Beautiful Mehndi")[1] || text}
                    </span>
                  </motion.h1>
                ))}
              </div>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-xl text-balance leading-relaxed"
                variants={itemVariants}
              >
                Transform your celebrations with our exquisite henna artistry. 
                From intricate bridal patterns to elegant party motifs, we create 
                timeless beauty that tells your unique story.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              variants={itemVariants}
            >
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToContact}
                className="group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Your Mehndi Now
              </Button>
              <Button 
                variant="elegant" 
                size="lg" 
                onClick={scrollToPortfolio}
                className="group"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Our Portfolio
              </Button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-12"
              variants={itemVariants}
            >
              {[
                { icon: Award, number: "5+", label: "Years Experience", color: "text-gold-rich" },
                { icon: Users, number: "500+", label: "Happy Clients", color: "text-primary" },
                { icon: Star, number: "4.9", label: "Star Rating", color: "text-secondary" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 gradient-gold rounded-full mx-auto mb-3 shadow-gold group-hover:shadow-luxury transition-all duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-serif font-bold text-foreground"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 1.5, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image with Enhanced Effects */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-luxury hover-luxury"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img 
                src={heroImage} 
                alt="Exquisite bridal mehndi design showcasing intricate henna patterns and traditional artistry" 
                className="w-full h-[650px] object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute top-6 left-6 bg-gradient-to-r from-gold-rich to-gold-light text-foreground px-4 py-2 rounded-full shadow-gold font-semibold text-sm"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                ✨ Award Winning Artist
              </motion.div>
            </motion.div>
            
            {/* Enhanced Floating Card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-card/95 backdrop-blur-sm p-8 rounded-2xl shadow-luxury border border-gold-rich/20 max-w-sm hover-glow"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                className="font-serif font-bold text-foreground mb-3 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                🌟 Bridal Specialist
              </motion.h3>
              <motion.p 
                className="text-sm text-muted-foreground mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Creating unforgettable henna artistry for your most precious moments with traditional techniques and modern elegance.
              </motion.p>
              <motion.div 
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-secondary to-gold-light rounded-full border-3 border-card shadow-soft"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.4 + i * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  +500 satisfied clients
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;