import { MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LocationHours = () => {
  const schedule = [
    { day: "Senin", hours: "06:00 - 21:00", isOpen: true },
    { day: "Selasa", hours: "06:00 - 21:00", isOpen: false },
    { day: "Rabu", hours: "06:00 - 21:00", isOpen: false },
    { day: "Kamis", hours: "06:00 - 21:00", isOpen: false },
    { day: "Jumat", hours: "06:00 - 21:00", isOpen: false },
    { day: "Sabtu", hours: "06:00 - 21:00", isOpen: false },
    { day: "Minggu", hours: "08:00 - 21:00", isOpen: false },
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-3">
          <span className="text-primary">■</span> LOKASI & JAM BUKA
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="flex items-start gap-3 text-xl">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-foreground">Jl. Anggajaya 2, Sanggrahan,</p>
                  <p className="text-foreground">Condongcatur, Depok, Kab. Sleman, D.I.</p>
                  <p className="text-foreground">Yogyakarta 55281</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                Buka Google Map
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Clock className="w-6 h-6 text-primary" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {schedule.map((item) => (
                  <div 
                    key={item.day}
                    className={`flex justify-between items-center py-2 px-4 rounded ${
                      item.isOpen ? 'bg-green-900/20 border border-green-500/30' : 'bg-muted/50'
                    }`}
                  >
                    <span className="font-semibold">{item.day}</span>
                    <span className="text-muted-foreground">{item.hours}</span>
                    {item.isOpen && (
                      <span className="text-green-500 font-bold text-sm">BUKA</span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;
