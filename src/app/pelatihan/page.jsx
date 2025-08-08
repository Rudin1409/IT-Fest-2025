
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CalendarDays } from 'lucide-react';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from 'next/link';

/**
 * Komponen TrainingCategoryCard
 * @param {object} props - Properti komponen
 * @param {string} props.title - Judul kategori pelatihan
 * @param {string} props.image - URL gambar untuk kategori
 * @param {string} props.hint - Petunjuk AI untuk gambar
 * @param {string} props.registerLink - Tautan untuk pendaftaran
 * @returns {JSX.Element} Kartu yang menampilkan kategori pelatihan.
 */
const TrainingCategoryCard = ({ title, image, hint, registerLink }) => (
    <Card className="flex flex-col h-full overflow-hidden text-center transition-all duration-300 transform bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-contain p-4" data-ai-hint={hint} />
      </div>
      <CardContent className="flex flex-col flex-grow p-4">
        <div className='flex-grow pt-4 border-t border-primary/50 flex flex-col justify-center'>
          <h3 className="flex items-center justify-center min-h-[3.5rem] text-xl font-headline">{title}</h3>
        </div>
        <div className="flex flex-col gap-2 mt-auto sm:flex-row justify-around">
            <Link href={registerLink} target='_blank' rel='noopener noreferrer' className='w-full'>
              <Button variant="default" className="w-full">Daftar</Button>
            </Link>
            <Button variant="outline" className="w-full">Guide Book</Button>
        </div>
      </CardContent>
    </Card>
  );

// Data untuk linimasa pelatihan
const timelineData = [
    {
      title: 'Pembukaan Pendaftaran',
      date: '16 Agustus - 6 September 2025',
    },
    {
      title: 'Pelaksanaan Pelatihan',
      date: '17 - 20 September 2025',
    },
    {
      title: 'Pengumpulan Proyek',
      date: '20 September 2025',
    },
    {
      title: 'Pengumuman Lulusan',
      date: '20 September 2025',
    },
  ];

/**
 * Komponen TrainingTimeline
 * @returns {JSX.Element} Bagian yang menampilkan linimasa pelatihan.
 */
const TrainingTimeline = () => (
    <section className="px-4 py-20 bg-secondary/50">
      <div className="container mx-auto text-center">
        <h2 className="inline-block px-6 py-3 mb-16 text-2xl font-bold border rounded-lg font-headline border-primary/50">
          Timeline Pelatihan
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
          <div className="grid gap-y-12 md:grid-cols-4 md:gap-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                 <div className="relative z-10 flex items-center justify-center w-12 h-12 mb-4 border-2 rounded-full bg-card border-primary">
                    <CalendarDays className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="mb-1 text-lg font-bold font-headline">{item.title}</h3>
                 <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );


/**
 * Halaman Pelatihan
 * @returns {JSX.Element} Halaman utama untuk bagian pelatihan.
 */
export default function PelatihanPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      );

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Bagian Hero */}
        <section className="relative px-4 py-20 overflow-hidden">
        <div className="container mx-auto">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h2 className="mb-4 text-4xl font-black text-transparent md:text-6xl font-headline bg-clip-text bg-gradient-to-b from-white to-accent">
                  PELATIHAN
                </h2>
                <p className="mb-8 text-2xl font-bold md:text-4xl font-headline text-primary">IT-FESTIVAL</p>
                <p className="max-w-xl text-lg md:text-xl text-muted-foreground">
                    Tingkatkan keahlian Anda dengan sesi pelatihan praktis kami yang dipimpin oleh para ahli industri.
                </p>
              </div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                <Image src="https://placehold.co/600x400.png" alt="Pelatihan IT Festival" fill className="object-cover" data-ai-hint="training workshop" />
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Linimasa Pelatihan */}
        <TrainingTimeline />

        {/* Bagian Kategori Pelatihan */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center font-headline">KATEGORI PELATIHAN</h2>
            <div className="relative w-full max-w-xs mx-auto sm:max-w-xl lg:max-w-xl">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem className="pl-4 basis-full sm:basis-1/2">
                    <TrainingCategoryCard
                      title="Android Development"
                      image="https://placehold.co/400x400.png"
                      hint="mobile app"
                      registerLink="https://bit.ly/PendaftaranPelatihanAndroidITFestival2025"
                    />
                  </CarouselItem>
                  <CarouselItem className="pl-4 basis-full sm:basis-1/2">
                    <TrainingCategoryCard
                      title="Full-Stack Web"
                      image="https://placehold.co/400x400.png"
                      hint="web development"
                      registerLink="https://bit.ly/PendaftaranPelatihanWebITFestival2025"
                    />
                  </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-8 sm:hidden">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
