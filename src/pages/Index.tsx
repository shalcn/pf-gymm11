import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationHours from "@/components/LocationHours";
import Pricing from "@/components/Pricing";
import Facilities from "@/components/Facilities";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <LocationHours />
      <Pricing />
      <Facilities />
    </main>
  );
};

export default Index;