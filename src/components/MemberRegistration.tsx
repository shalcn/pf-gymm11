import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(1, "Nama harus diisi").max(100, "Nama terlalu panjang"),
  phone: z.string().trim().min(10, "Nomor HP minimal 10 digit").max(15, "Nomor HP terlalu panjang"),
  email: z.string().trim().email("Email tidak valid").max(255, "Email terlalu panjang"),
  location: z.enum(["condongcatur", "kasihan"], {
    required_error: "Pilih lokasi gym",
  }),
});

type FormData = z.infer<typeof formSchema>;

const MemberRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const locationText = data.location === "condongcatur" ? "PF Condong Catur" : "PF Kasihan";
    const message = `*Pendaftaran Member Baru*\n\nNama: ${data.name}\nNo HP: ${data.phone}\nEmail: ${data.email}\nLokasi: ${locationText}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6289892825120?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Membuka WhatsApp...");
    reset();
  };

  return (
    <section id="daftar-member" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-background border-border">
          <CardHeader>
            <CardTitle className="text-4xl font-black text-center">
              <span className="text-primary">■</span> DAFTAR MEMBER
            </CardTitle>
            <p className="text-muted-foreground text-center mt-2">
              Isi data diri Anda untuk memulai perjalanan fitness
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="mt-2"
                  placeholder="Masukkan nama lengkap"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Nomor HP / WhatsApp</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  className="mt-2"
                  placeholder="08xxxxxxxxxx"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="mt-2"
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label>Pilih Lokasi Gym</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <label className="flex items-center gap-2 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="radio"
                      value="condongcatur"
                      {...register("location")}
                      className="text-primary"
                    />
                    <span>PF Condong Catur</span>
                  </label>
                  <label className="flex items-center gap-2 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="radio"
                      value="kasihan"
                      {...register("location")}
                      className="text-primary"
                    />
                    <span>PF Kasihan</span>
                  </label>
                </div>
                {errors.location && (
                  <p className="text-destructive text-sm mt-1">{errors.location.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                size="lg"
              >
                Kirim via WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MemberRegistration;
