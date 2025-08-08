
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { User } from 'lucide-react';
import Link from 'next/link';

/**
 * Komponen GuestSpeakerCard
 * @param {object} props - Properti komponen
 * @param {string} props.image - URL gambar pembicara
 * @param {string} props.name - Nama pembicara
 * @param {string} props.title - Jabatan atau gelar pembicara
 * @param {string} props.topic - Topik yang akan dibawakan
 * @param {string} props.date - Tanggal dan waktu seminar
 * @param {string} props.hint - Petunjuk AI untuk gambar
 * @param {string} [props.speakerLabel="Guest Star :"] - Label untuk pembicara
 * @param {'left' | 'right'} [props.imagePosition='left'] - Posisi gambar (kiri atau kanan)
 * @returns {JSX.Element} Kartu yang menampilkan detail pembicara dan seminar.
 */
const GuestSpeakerCard = ({ image, name, title, topic, date, hint, speakerLabel = "Guest Star :", imagePosition = 'left' }) => (
  <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden w-full">
    <div className="grid md:grid-cols-3 items-center">
      <div className={`relative h-80 md:h-full min-h-[300px] ${imagePosition === 'right' ? 'md:order-last' : ''}`}>
        <Image src={image} alt={name} fill className="object-cover" data-ai-hint={hint} />
      </div>
      <div className="md:col-span-2 p-6 md:p-8 text-left">
        <p className="text-muted-foreground mb-2 text-lg">{speakerLabel}</p>
        <h3 className="text-3xl md:text-4xl font-headline font-black mb-2 text-white uppercase">{name}</h3>
        <p className="text-lg md:text-xl font-semibold text-primary mb-4">{title}</p>
        <p className="text-xl md:text-2xl text-accent mb-6 italic">"{topic}"</p>
        <p className="text-muted-foreground text-md md:text-lg">{date}</p>
      </div>
    </div>
  </Card>
);

/**
 * Halaman Seminar
 * @returns {JSX.Element} Halaman utama untuk bagian seminar.
 */
export default function SeminarPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Bagian Hero */}
        <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent mb-4">
                  SEMINAR
                </h2>
                <p className="text-2xl md:text-4xl font-headline font-bold text-primary mb-8">IT-FESTIVAL 2025</p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Ikuti seminar kami dan dapatkan wawasan berharga dari para ahli di bidang teknologi.
                </p>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                <Image src="https://placehold.co/600x400.png" alt="Seminar IT Festival" fill className="object-cover" data-ai-hint="conference presentation" />
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Pembicara */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
              <GuestSpeakerCard
                name="Theresa Tandrawinata"
                title="Creator, Web3 & Business"
                topic="Building a Personal Brand in the Web3 Era"
                date="16 September 2025 | 14.45 WIB"
                image="https://placehold.co/400x600.png"
                hint="woman creator"
                imagePosition="left"
              />
              <GuestSpeakerCard
                name="Nabila Carissa"
                speakerLabel="Speaker :"
                title="Content Creator & Social Media Influencer"
                topic="Self-Confident Importance for Struggling In Digital Era"
                date="16 September 2025 | 13.45 WIB"
                image="https://placehold.co/400x600.png"
                hint="woman influencer"
                imagePosition="right"
              />
            </div>
          </div>
        </section>

        {/* Tombol Pendaftaran */}
        <section className="py-10 px-4 text-center">
            <Link href="https://bit.ly/PendaftaranSeminarITFestival2025" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-bold text-lg px-10 py-6">
                    Daftar Seminar
                </Button>
            </Link>
        </section>

      </main>
      <Footer />
    </div>
  );
}
