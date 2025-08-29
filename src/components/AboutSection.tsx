import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "+2",
      label: "عملاء سعداء",
      color: "text-primary"
    },
    {
      icon: Clock,
      number: "+10",
      label: "خدمة مميزة",
      color: "text-secondary"
    },
    {
      icon: Award,
      number: "+2",
      label: "مكافآت مكتسبة",
      color: "text-primary"
    },
    {
      icon: Heart,
      number: "100%",
      label: "معدل الرضا",
      color: "text-secondary"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
                <h2 className="text-sm font-semibold text-secondary mb-2 tracking-wide uppercase">
                  about Salloum Wash
                </h2>
               <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                 أفضل تجربة للعناية بالسيارات
               </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  نحن أول من يقدم هذا النوع من خدمات العناية بالسيارات في سوريا بهذه الطريقة المتطورة، بنينا سمعتنا من خلال تقديم خدمة استثنائية واستخدام أفضل المنتجات الصديقة للبيئة.
                </p>
               <p className="text-muted-foreground mb-6">
                فريقنا من المختصين المدربين يتعامل مع كل مركبة بالعناية والاهتمام اللذين تستحقهما. من الغسيل السريع إلى خدمات التفصيل الشاملة، نحن ملتزمون بتجاوز توقعاتك في كل مرة.
               </p>
               <p className="text-muted-foreground mb-8">
                 <strong className="text-secondary">خدمة متنقلة متاحة:</strong> نحن نحضر خدمة غسيل السيارات الاحترافية إليك مباشرة! أينما كانت سيارتك - في المنزل أو المكتب أو في أي مكان في المدينة - سنأتي إليك مع جميع معداتنا ونقدم نفس الخدمة عالية الجودة.
               </p>
            </div>

             <div className="space-y-4 mb-8">
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
                 <span className="text-foreground">فنيين محترفين معتمدين</span>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 bg-secondary rounded-full"></div>
                 <span className="text-foreground">منتجات صديقة للبيئة 100%</span>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
                 <span className="text-foreground">معدات حديثة متطورة</span>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 bg-secondary rounded-full"></div>
                 <span className="text-foreground">خدمة متنقلة - نأتي إليك</span>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
                 <span className="text-foreground">ضمان الرضا</span>
               </div>
             </div>

          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center relative">
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-foreground mb-4">مهمتنا</h4>
              <p className="text-lg text-muted-foreground">
                "تقديم خدمات استثنائية للعناية بالسيارات التي لا تجعل سيارتك تبدو رائعة فحسب، بل تحمي البيئة أيضاً من خلال الممارسات المستدامة وتحافظ على الموارد المائية. نحن نؤمن أن كل سيارة تستحق معاملة احترافية، وكل عميل يستحق خدمة متميزة."
              </p>
            </CardContent>
          </Card>
          
          {/* Character beside mission */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
            <img 
              src="/lovable-uploads/9484fc27-3615-4dac-b2fa-ba066fce7efa.png" 
              alt="Salloum Character" 
              className="h-24 w-auto animate-float"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;