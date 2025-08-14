
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Award, Code, Mic, Users, Film, Palette } from 'lucide-react';
import Link from 'next/link';

/**
 * Komponen RegistrationCard
 * @param {object} props - Properti komponen
 * @param {string} props.title - Judul acara (misal: "Mobile Legends")
 * @param {string} props.description - Deskripsi singkat acara
 * @param {React.ReactNode} props.icon - Ikon untuk kartu
 * @param {string} props.registerLink - Tautan untuk pendaftaran
 * @returns {JSX.Element} Kartu untuk pendaftaran satu acara.
 */
const RegistrationCard = ({ title, description, icon, registerLink }) => (
    <Card className="w-full overflow-hidden text-left transition-all duration-300 transform bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 md:max-w-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-4">
            <div className="p-3 rounded-md bg-primary/20 text-primary">{icon}</div>
            <h3 className="text-2xl font-bold font-headline">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <Link href={registerLink} target='_blank' rel='noopener noreferrer' className='w-full'>
            <Button variant="default" className="w-full font-bold">Daftar Sekarang</Button>
        </Link>
      </CardContent>
    </Card>
  );

/**
 * Komponen Section
 * @param {object} props - Properti komponen
 * @param {string} props.title - Judul bagian (misal: "Kompetisi")
 * @param {React.ReactNode} props.children - Konten bagian (kartu-kartu pendaftaran)
 * @param {React.ReactNode} props.icon - Ikon untuk judul bagian
 * @returns {JSX.Element} Bagian yang mengelompokkan kartu pendaftaran berdasarkan kategori.
 */
const Section = ({ title, children, icon }) => (
    <section className="py-12">
        <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
                <div className="text-primary">{icon}</div>
                <h2 className="text-4xl font-bold text-center font-headline">{title}</h2>
            </div>
            <div className="flex flex-wrap items-stretch justify-center gap-8">
                {children}
            </div>
        </div>
    </section>
);

/**
 * Komponen SeminarSection
 * @param {object} props - Properti komponen
 * @param {string} props.title - Judul bagian seminar
 * @param {React.ReactNode} props.children - Konten bagian (kartu pendaftaran seminar)
 * @param {React.ReactNode} props.icon - Ikon untuk judul bagian
 * @returns {JSX.Element} Bagian khusus untuk pendaftaran seminar dengan perataan tengah.
 */
const SeminarSection = ({ title, children, icon }) => (
    <section className="py-12">
        <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
                <div className="text-primary">{icon}</div>
                <h2 className="text-4xl font-bold text-center font-headline">{title}</h2>
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-auto">
                 {children}
                </div>
            </div>
        </div>
    </section>
);

/**
 * Halaman Pendaftaran
 * @returns {JSX.Element} Halaman yang menampilkan semua opsi pendaftaran yang dikelompokkan.
 */
export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Bagian Hero */}
        <section className="px-4 py-20 text-center">
            <h1 className="mb-4 text-5xl font-black md:text-7xl font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">
                PENDAFTARAN
            </h1>
            <p className="text-2xl font-bold font-headline text-primary">IT-FESTIVAL</p>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                Pilih kategori acara yang ingin Anda ikuti. Amankan tempat Anda sekarang dan jadilah bagian dari festival teknologi terbesar tahun ini!
            </p>
        </section>

        {/* Bagian Kompetisi */}
        <Section title="Kompetisi" icon={<Award size={32} />}>
            <RegistrationCard title="Mobile Legends" description="Adu strategi dan kekompakan tim dalam turnamen e-sport paling bergengsi." icon={<Award size={24} />} registerLink="https://bit.ly/PendaftaranLombaMobileLegendITFestival2025" />
            <RegistrationCard title="E-Goverment" description="Kompetisi membuat solusi inovatif untuk pemerintahan digital." icon={<Award size={24} />} registerLink="https://bit.ly/PendaftaranLombaE-GovernmentITFestival2025" />
            <RegistrationCard title="Lomba Cipta Inovasi" description="Ciptakan dan presentasikan inovasi teknologi kreatifmu." icon={<Award size={24} />} registerLink="https://bit.ly/PendaftaranLombaCiptaInovasiITFestival2025" />
            <RegistrationCard title="Lomba Animasi" description="Buat karya animasi 3D yang memukau dan menangkan hadiahnya." icon={<Film size={24} />} registerLink="https://bit.ly/PendaftaranLombaAnimasiITFestival2025" />
            <RegistrationCard title="Lomba Desain Poster" description="Rancang poster yang menarik dan informatif sesuai tema." icon={<Palette size={24} />} registerLink="https://bit.ly/PendaftaranLombaDesignPosterITFestival2025" />
        </Section>
        
        <div className="px-4">
            <div className="container mx-auto border-t border-primary/20"></div>
        </div>

        {/* Bagian Pelatihan */}
        <Section title="Pelatihan" icon={<Code size={32} />}>
            <RegistrationCard title="Android Development" description="Belajar membangun aplikasi Android dari dasar hingga mahir bersama para ahli." icon={<Code size={24} />} registerLink="https://bit.ly/PendaftaranPelatihanAndroidITFestival2025" />
            <RegistrationCard title="Web Development" description="Kuasai pengembangan web dari sisi front-end hingga back-end dalam pelatihan intensif." icon={<Code size={24} />} registerLink="https://bit.ly/PendaftaranPelatihanWebITFestival2025" />
        </Section>
        
        <div className="px-4">
            <div className="container mx-auto border-t border-primary/20"></div>
        </div>

        {/* Bagian Seminar */}
        <SeminarSection title="Seminar" icon={<Mic size={32} />}>
           <RegistrationCard title="Seminar Teknologi" description="Dapatkan wawasan terbaru dari para pembicara ahli di industri teknologi." icon={<Mic size={24} />} registerLink="https://bit.ly/PendaftaranSeminarITFestival2025" />
        </SeminarSection>

      </main>
      <Footer />
    </div>
  );
}