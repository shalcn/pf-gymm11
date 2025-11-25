import { Users, Heart, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Komunitas",
      description: "Bergabung dengan komunitas yang suportif dan saling mendukung dalam perjalanan fitness Anda"
    },
    {
      icon: Heart,
      title: "Mentor Ramah",
      description: "Trainer profesional yang bersertifikasi dan siap membantu Anda mencapai target fitness"
    },
    {
      icon: DollarSign,
      title: "Harga Terjangkau",
      description: "Paket membership yang fleksibel dan student-friendly tanpa mengurangi kualitas"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 tracking-tight">
          Kenapa Pilih <span className="text-primary">Kami?</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Gym Workouts Designed for Your Personal Fitness Goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-red-glow"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
