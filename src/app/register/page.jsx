
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Award, Code, Mic, Users } from 'lucide-react';

const RegistrationCard = ({ title, description, icon }) => (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden text-left">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-4">
            <div className="p-3 rounded-md bg-primary/20 text-primary">{icon}</div>
            <h3 className="font-headline text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="default" className="w-full font-bold">Daftar Sekarang</Button>
      </CardContent>
    </Card>
  );

const Section = ({ title, children, icon }) => (
    <section className="py-12">
        <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
                <div className="text-primary">{icon}</div>
                <h2 className="text-4xl font-headline font-bold text-center">{title}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {children}
            </div>
        </div>
    </section>
);

const SeminarSection = ({ title, children, icon }) => (
    <section className="py-12">
        <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
                <div className="text-primary">{icon}</div>
                <h2 className="text-4xl font-headline font-bold text-center">{title}</h2>
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-2/3 lg:w-1/3">
                 {children}
                </div>
            </div>
        </div>
    </section>
);


export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-20 px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent mb-4">
                PENDAFTARAN
            </h1>
            <p className="text-2xl font-headline font-bold text-primary">IT-FEST 2025</p>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Pilih kategori acara yang ingin Anda ikuti. Amankan tempat Anda sekarang dan jadilah bagian dari festival teknologi terbesar tahun ini!
            </p>
        </section>

        <Section title="Kompetisi" icon={<Award size={32} />}>
            <RegistrationCard title="Mobile Legends" description="Adu strategi dan kekompakan tim dalam turnamen e-sport paling bergengsi." icon={<Award size={24} />} />
            <RegistrationCard title="Poster Design" description="Tuangkan kreativitas tanpa batas dalam kompetisi desain poster yang inovatif." icon={<Award size={24} />} />
            <RegistrationCard title="Web Design" description="Rancang dan bangun tampilan web yang fungsional dan memukau." icon={<Award size={24} />} />
            <RegistrationCard title="UI/UX" description="Ciptakan pengalaman pengguna yang intuitif dan menarik dalam tantangan UI/UX." icon={<Award size={24} />} />
        </Section>
        
        <div className="px-4">
            <div className="border-t border-primary/20 container mx-auto"></div>
        </div>

        <Section title="Pelatihan" icon={<Code size={32} />}>
            <RegistrationCard title="Android Development" description="Belajar membangun aplikasi Android dari dasar hingga mahir bersama para ahli." icon={<Code size={24} />} />
            <RegistrationCard title="Full-Stack Web" description="Kuasai pengembangan web dari sisi front-end hingga back-end dalam pelatihan intensif." icon={<Code size={24} />} />
        </Section>
        
        <div className="px-4">
            <div className="border-t border-primary/20 container mx-auto"></div>
        </div>

        <SeminarSection title="Seminar" icon={<Mic size={32} />}>
           <RegistrationCard title="Seminar Teknologi" description="Dapatkan wawasan terbaru dari para pembicara ahli di industri teknologi." icon={<Mic size={24} />} />
        </SeminarSection>

      </main>
      <Footer />
    </div>
  );
}
