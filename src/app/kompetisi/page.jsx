
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
 * Komponen CompetitionCard
 * @param {object} props - Properti komponen
 * @param {string} props.title - Judul kompetisi
 * @param {string} props.image - URL gambar untuk kompetisi
 * @param {string} props.hint - Petunjuk AI untuk gambar
 * @param {string} props.registerLink - Tautan untuk pendaftaran
 * @returns {JSX.Element} Kartu yang menampilkan detail kompetisi.
 */
const CompetitionCard = ({ title, image, hint, registerLink }) => (
    <Card className="relative flex flex-col h-full text-center transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:z-50">
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

// Data untuk linimasa kompetisi
const timelineData = [
    {
      title: 'Pendaftaran Lomba',
      date: '16 Agustus - 30 September 2025',
    },
    {
      title: 'Pembuatan Karya',
      date: '16 Agustus - 13 Oktober 2025',
    },
    {
      title: 'Technical Meeting',
      date: '3 Oktober 2025',
    },
    {
      title: 'Turnamen dan Penjurian',
      date: '4 - 16 Oktober 2025',
    },
    {
      title: 'Pengumuman Pemenang',
      date: '20 Oktober 2025',
    },
  ];

/**
 * Komponen CompetitionTimeline
 * @returns {JSX.Element} Bagian yang menampilkan linimasa kompetisi.
 */
const CompetitionTimeline = () => (
    <section className="px-4 py-20 bg-secondary/50">
      <div className="container mx-auto text-center">
        <h2 className="inline-block px-6 py-3 mb-16 text-2xl font-bold border rounded-lg font-headline border-primary/50">
          Timeline Kompetisi
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
          <div className="grid gap-y-12 md:grid-cols-5 md:gap-8">
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
 * Halaman Kompetisi
 * @returns {JSX.Element} Halaman utama untuk bagian kompetisi.
 */
export default function KompetisiPage() {

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
                  KOMPETISI
                </h2>
                <p className="mb-8 text-2xl font-bold md:text-4xl font-headline text-primary">IT-FESTIVAL 2025</p>
                <p className="max-w-xl text-lg md:text-xl text-muted-foreground">
                  Uji keterampilan Anda dan bersainglah dengan para penggemar teknologi terbaik dalam berbagai kompetisi kami yang menantang.
                </p>
              </div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                <Image src="https://placehold.co/600x400.png" alt="Kompetisi IT Festival" fill className="object-cover" data-ai-hint="programming competition" />
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Linimasa Kompetisi */}
        <CompetitionTimeline />

        {/* Bagian Kategori Kompetisi */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center font-headline">KATEGORI KOMPETISI</h2>
            <div className='flex items-center justify-center'>
                <Link href="/register">
                    <Button className='mb-8'>Daftar Kompetisi</Button>
                </Link>
            </div>
            <div className="relative w-full max-w-xs mx-auto sm:max-w-xl lg:max-w-5xl">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                className="w-full"
              >
                <CarouselContent className="-ml-8 py-4">
                  <CarouselItem className="pl-8 overflow-visible basis-full sm:basis-1/2 lg:basis-1/3">
                    <CompetitionCard
                      title="Mobile Legends"
                      image="/masckot/maskotml.png"
                      hint="gaming character"
                      registerLink="https://bit.ly/PendaftaranLombaMobileLegendITFestival2025"
                    />
                  </CarouselItem>
                  <CarouselItem className="pl-8 overflow-visible basis-full sm:basis-1/2 lg:basis-1/3">
                    <CompetitionCard
                      title="E-Goverment"
                      image="https://placehold.co/400x400.png"
                      hint="government building"
                      registerLink="https://bit.ly/PendaftaranLombaE-GovernmentITFestival2025"
                    />
                  </CarouselItem>
                   <CarouselItem className="pl-8 overflow-visible basis-full sm:basis-1/2 lg:basis-1/3">
                    <CompetitionCard
                      title="Lomba Cipta Inovasi"
                      image="https://placehold.co/400x400.png"
                      hint="innovation lightbulb"
                      registerLink="https://bit.ly/PendaftaranLombaCiptaInovasiITFestival2025"
                    />
                  </CarouselItem>
                   <CarouselItem className="pl-8 overflow-visible basis-full sm:basis-1/2 lg:basis-1/3">
                    <CompetitionCard
                      title="Lomba Animasi"
                      image="https://placehold.co/400x400.png"
                      hint="3d animation"
                      registerLink="https://bit.ly/PendaftaranLombaAnimasiITFestival2025"
                    />
                  </CarouselItem>
                  <CarouselItem className="pl-8 overflow-visible basis-full sm:basis-1/2 lg:basis-1/3">
                    <CompetitionCard
                      title="Lomba Desain Poster"
                      image="https://placehold.co/400x400.png"
                      hint="poster design"
                      registerLink="https://bit.ly/PendaftaranLombaDesignPosterITFestival2025"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden -left-12 sm:flex" />
                <CarouselNext className="hidden -right-12 sm:flex" />
                <div className="flex justify-center gap-4 mt-4 sm:hidden">
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