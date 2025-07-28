
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

/**
 * Komponen CompetitionCard
 * @param {object} props - Properti komponen
 * @param {string} props.title - Judul kompetisi
 * @param {string} props.image - URL gambar untuk kompetisi
 * @param {string} props.hint - Petunjuk AI untuk gambar
 * @returns {JSX.Element} Kartu yang menampilkan detail kompetisi.
 */
const CompetitionCard = ({ title, image, hint }) => (
  <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden text-center">
    <div className="relative h-80 w-full">
      <Image src={image} alt={title} fill className="object-contain p-4" data-ai-hint={hint} />
    </div>
    <CardContent className="p-4 space-y-4">
      <div className='border-t border-primary/50 pt-4'>
        <h3 className="font-headline text-xl">{title}</h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-2">
        <Button variant="default" className="w-full">Daftar</Button>
        <Button variant="outline" className="w-full">Guide Book</Button>
      </div>
    </CardContent>
  </Card>
);

// Data untuk linimasa kompetisi
const timelineData = [
    {
      title: 'Pembukaan Pendaftaran',
      date: '15 Agustus - 29 September 2025',
    },
    {
      title: 'Technical Meeting',
      date: '27 - 28 September 2025',
    },
    {
      title: 'Turnamen dan Penjurian',
      date: '29 September - 6 Oktober 2025',
    },
    {
      title: 'Pengumuman Pemenang',
      date: '10 Oktober 2025',
    },
  ];

/**
 * Komponen CompetitionTimeline
 * @returns {JSX.Element} Bagian yang menampilkan linimasa kompetisi.
 */
const CompetitionTimeline = () => (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="inline-block font-headline text-2xl font-bold border border-primary/50 rounded-lg px-6 py-3 mb-16">
          Timeline Kompetisi
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-4 gap-y-12 md:gap-8">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                 <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-card border-2 border-primary rounded-full mb-4">
                    <CalendarDays className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="font-headline font-bold text-lg mb-1">{item.title}</h3>
                 <p className="text-muted-foreground text-sm">{item.date}</p>
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
  // Plugin untuk autoplay korsel
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Bagian Hero */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent mb-4">
                  KOMPETISI
                </h2>
                <p className="text-2xl md:text-4xl font-headline font-bold text-primary mb-8">IT-FESTIVAL 2025</p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Uji keterampilan Anda dan bersainglah dengan para penggemar teknologi terbaik dalam berbagai kompetisi kami yang menantang.
                </p>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                <Image src="https://placehold.co/600x400.png" alt="Kompetisi IT Festival" fill className="object-cover" data-ai-hint="programming competition" />
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Linimasa Kompetisi */}
        <CompetitionTimeline />

        {/* Bagian Kategori Kompetisi */}
        <section className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-12">KATEGORI KOMPETISI</h2>
            <div className='flex items-center justify-center'>
              <Button className='mb-8'>Daftar Kompetisi</Button>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              onMouseEnter={() => autoplayPlugin.current.stop()}
              onMouseLeave={() => autoplayPlugin.current.play()}
              className="w-full max-w-sm md:max-w-xl lg:max-w-5xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                  <CompetitionCard
                    title="Mobile Legends"
                    image="https://placehold.co/400x400.png"
                    hint="gaming character"
                  />
                </CarouselItem>
                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                  <CompetitionCard
                    title="Poster Design"
                    image="https://placehold.co/400x400.png"
                    hint="design character"
                  />
                </CarouselItem>
                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                  <CompetitionCard
                    title="E-Goverment"
                    image="https://placehold.co/400x400.png"
                    hint="government building"
                  />
                </CarouselItem>
                 <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                  <CompetitionCard
                    title="Lomba Cipta Inovasi"
                    image="https://placehold.co/400x400.png"
                    hint="innovation lightbulb"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
