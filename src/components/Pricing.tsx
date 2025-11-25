import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      type: "Biaya bulanan",
      price: "Rp 139.000",
      description: "Akses penuh selama satu bulan"
    },
    {
      type: "Biaya pendaftaran",
      price: "Rp 50.000",
      description: "Sekali bayar untuk member baru"
    },
    {
      type: "Biaya insidental",
      price: "Rp 25.000",
      description: "Per kunjungan tanpa membership"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-3">
          <span className="text-primary">■</span> HARGA PF GYM & FITNESS CONDONGCATUR 2025
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all"
            >
              <CardHeader>
                <CardTitle className="text-muted-foreground text-base font-normal">
                  {plan.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-black text-foreground mb-2">
                  {plan.price}
                </p>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
