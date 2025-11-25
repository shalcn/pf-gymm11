import heroImage from "@/assets/hero-gym.jpg";
import logo from "@/assets/pf-gym-logo.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-hero pt-20">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl text-center animate-in fade-in slide-in-from-bottom duration-1000">
          {/* Main Headline */}
          <h1 className="mb-6 text-5xl font-black tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Mulai <span className="text-primary">Transformasi</span> Anda
          </h1>
          
          <p className="mb-4 text-2xl font-bold tracking-wide text-foreground md:text-3xl lg:text-4xl">
            Pilih Lokasi Latihan Terbaik Anda di Jogja
          </p>

          {/* Sub-headline */}
          <p className="mb-12 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Dapatkan akses ke alat premium, kelas terbaik, dan komunitas yang mendukung di PF Gym
          </p>

          {/* CTA Button */}
          <div className="flex justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <a href="#daftar-member">
              <button className="group relative bg-primary hover:bg-primary/90 text-white px-16 py-8 rounded-full text-2xl font-black transition-all duration-300 shadow-red-glow hover:shadow-red-glow-lg hover:scale-105">
                DAFTAR MEMBER
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;