import { Check, X, Dumbbell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Facilities = () => {
  const facilities = [
    { name: "AC", available: false },
    { name: "Air Minum Gratis", available: true },
    { name: "Air Mineral", available: true },
    { name: "Kopi", available: false },
    { name: "Teh", available: false },
    { name: "Aplikasi Mobile", available: false },
    { name: "Handuk", available: false },
    { name: "Kamar Mandi", available: true },
    { name: "Loker", available: true },
    { name: "Personal Trainer (PT)", available: true },
    { name: "WiFi", available: false },
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-3">
          <span className="text-primary">■</span> FASILITAS & KELENGKAPAN
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Fasilitas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {facilities.map((facility) => (
                  <div key={facility.name} className="flex items-center gap-3">
                    {facility.available ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                    <span className={facility.available ? "text-foreground" : "text-muted-foreground"}>
                      {facility.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Kelengkapan Alat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 justify-center py-8">
                {[...Array(6)].map((_, i) => (
                  <Dumbbell 
                    key={i}
                    className={`w-12 h-12 ${i === 0 ? 'text-primary' : 'text-muted-foreground/30'}`}
                  />
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Peralatan lengkap untuk semua jenis latihan
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
