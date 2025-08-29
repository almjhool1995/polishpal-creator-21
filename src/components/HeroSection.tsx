
import { Button } from "@/components/ui/button";
import { Star, Shield, Zap, Award } from "lucide-react";
import heroBackgroundClean from "@/assets/hero-background-clean.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackgroundClean}
          alt="Mobile car wash service - سيارة يتم غسلها بخدمة غسيل السيارات المتنقل"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-slide-in">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">Rated #1 Car Wash Service</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-in drop-shadow-lg">
            <span className="text-primary drop-shadow-md">Salloum</span>
            <br />
            <span className="text-secondary drop-shadow-md">Wash</span>
            <br />
            <span className="text-foreground text-4xl md:text-5xl font-bold drop-shadow-md">غسيل سيارات متنقل</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-foreground font-semibold mb-8 max-w-2xl animate-slide-in drop-shadow-md bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
            تستطيع الان الحصول على خدمة غسيل السيارة تحت المنزل او عند المكتب او في اي مكان هي فيه عن طريق خدمتنا
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-in">
            <Button 
              variant="hero" 
              size="xl" 
              className="group font-bold text-lg shadow-glow border-2 border-white/30 bg-gradient-primary hover:bg-gradient-secondary"
              onClick={() => window.open('tel:0950090590', '_self')}
            >
              <span className="text-black font-bold drop-shadow-lg">احجز موعد</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform text-black font-bold">→</span>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-in">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">100% Safe</h3>
                <p className="text-sm text-muted-foreground">Eco-friendly products</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Quick Service</h3>
                <p className="text-sm text-muted-foreground">15-30 minutes</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Professional results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-32 right-32 w-12 h-12 bg-secondary/10 rounded-full animate-float hidden lg:block" 
           style={{ animationDelay: '1s' }} />
      
      {/* Salloum Character */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float" style={{ animationDelay: '0.5s' }}>
        <img 
          src="/lovable-uploads/9484fc27-3615-4dac-b2fa-ba066fce7efa.png" 
          alt="Salloum Character" 
          className="h-32 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </section>
  );
};

export default HeroSection;
