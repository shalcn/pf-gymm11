import Navbar from "@/components/Navbar";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="relative min-h-screen pt-24 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        
        <div className="relative z-10 container mx-auto px-6 py-24 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-center">
            About <span className="text-primary">Us</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center mb-16">
            PF Gym & Fitness hadir di Yogyakarta dengan satu misi: menciptakan ruang di mana setiap orang bisa mencapai versi terbaik dirinya, tanpa harus menguras kantong. Kami memahami bahwa kebugaran adalah sebuah perjalanan, dan kami berkomitmen untuk menjadi pendamping terbaik Anda di setiap langkahnya. Kami membangun tempat ini dengan semangat kekuatan, komunitas, dan determinasi.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Bagaimana <span className="text-primary">PF Gym</span> Dimulai?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Berawal dari keinginan untuk mengisi kekosongan pasar di Jogja akan gym yang berkualitas namun tetap student-friendly, PF Gym didirikan. Kami bukan franchise dari luar; kami tumbuh dari hati komunitas Jogja. Setiap barbell, setiap mesin, dan setiap kelas di sini dirancang untuk mendukung semangat lokal. Hari ini, kami bangga melayani ribuan anggota yang bersemangat di dua cabang utama kami.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
