import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, DollarSign, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Express Wash",
      description: "غسيل خارجي سريع بالصابون والشطف والتجفيف",
      price: "25,000 ل.س",
      duration: "15 min",
      features: ["غسيل خارجي", "تنظيف داخلي", "صابون وشطف", "تلميع الإطارات", "تلميع تابلو", "هدية مميزة"],
      color: "service-express",
      popular: false
    },
    {
      id: 2,
      name: "Full Service",
      description: "تنظيف شامل داخلي وخارجي",
      price: "30,000 ل.س",
      duration: "30 min",
      features: ["تنظيف داخلي عميق", "غسيل خارجي", "تنظيف وتلميع النوافذ", "تلميع مميز للتابلو", "تلميع مميز للإطارات", "هدية مميزة"],
      color: "service-full",
      popular: true
    },
    {
      id: 3,
      name: "Premium Detail",
      description: "تفصيل احترافي مع حماية الشمع",
      price: "35,000 ل.س",
      duration: "90 min",
      features: ["تنظيف داخلي عميق", "غسيل يدوي", "معالجة بالمسحوق السحري", "معالجة الجلد", "هدية مميزة"],
      color: "service-premium",
      popular: false
    },
    {
      id: 4,
      name: "Paint Protection",
      description: "طلاء سيراميك متقدم وحماية",
      price: "COMING SOON",
      duration: "3 hours",
      features: ["تصحيح الطلاء", "طلاء سيراميك", "حماية 6 أشهر", "طارد للماء", "حماية من الأشعة فوق البنفسجية", "هدية مميزة"],
      color: "service-protection",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
            Choose Your Service Package
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From quick express washes to premium detailing, we have the perfect service for your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="relative bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group overflow-visible"
            >
              {/* Interactive Character - appears on hover and mobile touch */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 group-active:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-active:translate-x-0 group-active:translate-y-0 transition-all duration-500 ease-out z-10 pointer-events-none">
                <img 
                  src="/lovable-uploads/2d1ba43e-243c-42f5-8254-f54ce808c346.png" 
                  alt="Character" 
                  className="h-20 w-auto animate-float"
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
              {service.popular && (
                <Badge className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-secondary text-secondary-foreground px-4 py-2 text-sm font-bold shadow-secondary border border-secondary/30 z-20">
                  الأكثر مبيعاً
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price and Duration */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-secondary">{service.price}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  variant="service" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground text-black"
                  onClick={() => window.open('tel:0950090590', '_self')}
                >
                  احجز الآن
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Custom Service CTA */}
        <div className="text-center bg-gradient-card rounded-2xl p-8 border border-border/50 relative">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need a custom service? We've got you covered!
          </h3>
          <p className="text-muted-foreground mb-6">
            Tell us what your car needs and we'll create a personalized service package just for you.
          </p>
          <Button 
            variant="premium" 
            size="lg"
            onClick={() => window.open('https://wa.me/+963950090590', '_blank')}
          >
            Request Custom Quote
          </Button>
          
          {/* Character decoration */}
          <div className="absolute -right-12 -top-8 hidden lg:block">
            <img 
              src="/lovable-uploads/9484fc27-3615-4dac-b2fa-ba066fce7efa.png" 
              alt="Salloum Character" 
              className="h-24 w-auto animate-float opacity-70"
              style={{ animationDelay: '1.5s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;