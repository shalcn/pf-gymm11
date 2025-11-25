import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Facilities = () => {
  const facilities = [
    { name: "Air Minum Gratis", available: true },
    { name: "Air Mineral", available: true },
    { name: "Kamar Mandi", available: true },
    { name: "Loker", available: true },
    { name: "Personal Trainer (PT)", available: true },
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-3">
          <span className="text-primary">■</span> FASILITAS & KELENGKAPAN
        </h2>

        <Card className="bg-background border-border max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Fasilitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {facilities.map((facility) => (
                <div key={facility.name} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">{facility.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Facilities;
