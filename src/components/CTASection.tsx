import { Button } from "@/components/ui/button";

const CTASection = () => {
  const scrollToTop = () => {
    const element = document.getElementById('daftar-member');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
          Kapan Kamu Akan <span className="text-primary">Mulai?</span>
        </h2>
        <Button
          onClick={scrollToTop}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-bold px-12 py-6 text-xl shadow-red-glow hover:shadow-red-glow-lg transition-all"
        >
          Mulai Sekarang
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
