
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CalendarDays } from 'lucide-react';
import Link from 'next/link';

/**
 * Komponen GuestSpeakerCard
 * @param {object} props - Properti komponen
 * @param {string} props.image - URL gambar pembicara
 * @param {string} props.name - Nama pembicara
 * @param {string} props.title - Jabatan atau gelar pembicara
 * @param {string} props.topic - Topik yang akan dibawakan
 * @param {string} props.date - Tanggal seminar
 * @param {string} props.hint - Petunjuk AI untuk gambar
 * @param {string} [props.speakerLabel="Guest Star :"] - Label untuk pembicara
 * @param {'left' | 'right'} [props.imagePosition='left'] - Posisi gambar (kiri atau kanan)
 * @param {string} [props.imageClassName=""] - ClassName tambahan untuk gambar
 * @returns {JSX.Element} Kartu yang menampilkan detail pembicara dan seminar.
 */
const GuestSpeakerCard = ({ image, name, title, topic, date, hint, speakerLabel = "Guest Star :", imagePosition = 'left', imageClassName = "" }) => (
  <Card className="w-full overflow-hidden transition-all duration-300 transform bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
    <div className="grid items-center md:grid-cols-3">
      <div className={`relative h-80 min-h-[300px] md:h-full ${imagePosition === 'right' ? 'md:order-last' : ''}`}>
        <Image src={image} alt={name} fill className={`object-cover ${imageClassName}`} data-ai-hint={hint} />
      </div>
      <div className="p-6 text-left md:col-span-2 md:p-8">
        <p className="mb-2 text-lg text-muted-foreground">{speakerLabel}</p>
        <h3 className="mb-2 text-3xl font-black uppercase md:text-4xl font-headline text-white">{name}</h3>
        <p className="mb-4 text-lg font-semibold md:text-xl text-primary">{title}</p>
        <p className="mb-6 text-xl italic md:text-2xl text-accent">"{topic}"</p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="w-5 h-5 text-primary" />
          <span>{date}</span>
        </div>
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
        <section className="relative px-4 py-20 overflow-hidden">
        <div className="container mx-auto">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h2 className="mb-4 text-4xl font-black md:text-6xl font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">
                  SEMINAR
                </h2>
                <p className="mb-8 text-2xl font-bold md:text-4xl font-headline text-primary">IT-FESTIVAL 2025</p>
                <p className="max-w-xl text-lg md:text-xl text-muted-foreground">
                  Ikuti seminar kami dan dapatkan wawasan berharga dari para ahli di bidang teknologi.
                </p>
              </div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                <Image src="/seminar.jpg" alt="Hero Seminar IT Festival" fill className="object-cover" data-ai-hint="tech conference" />
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Pembicara */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="grid gap-12 mx-auto lg:grid-cols-1 max-w-5xl">
              <GuestSpeakerCard
                name="Theresa Tandrawinata"
                title="Creator, Web3 & Business"
                topic="From Zero to Digital Hero by Embracing Tech for a Better Future"
                date="Selasa, 16 September 2025"
                image="/image/theresa.jpg"
                hint="woman creator"
                imagePosition="left"
              />
              <GuestSpeakerCard
                name="Shelvina Puteri"
                speakerLabel="Speaker :"
                title="Content Creator & MC"
                topic="Mastering Digital Skills for Tomorrow’s Success"
                date="Selasa, 16 September 2025"
                image="/image/shelvina.jpg"
                hint="woman influencer"
                imagePosition="right"
                imageClassName="object-[center_20%]"
              />
            </div>
          </div>
        </section>

        {/* Tombol Pendaftaran */}
        <section className="px-4 py-10 text-center">
            <Link href="https://bit.ly/PendaftaranSeminarITFestival2025" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-10 py-6 text-lg font-bold">
                    Daftar Seminar
                </Button>
            </Link>
        </section>

      </main>
      <Footer />
    </div>
  );
}
