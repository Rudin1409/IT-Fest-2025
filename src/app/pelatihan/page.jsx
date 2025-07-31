
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
 * Komponen TrainingCategoryCard
 * @param {object} props - Properti komponen
 * @param {string} props.title - Judul kategori pelatihan
 * @param {string} props.image - URL gambar untuk kategori
 * @param {string} props.hint - Petunjuk AI untuk gambar
 * @returns {JSX.Element} Kartu yang menampilkan kategori pelatihan.
 */
const TrainingCategoryCard = ({ title, image, hint }) => (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden text-center flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-contain p-4" data-ai-hint={hint} />
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className='border-t border-primary/50 pt-4 flex-grow flex flex-col justify-center'>
          <h3 className="font-headline text-xl min-h-[3.5rem] flex items-center justify-center">{title}</h3>
        </div>
        <div className="flex flex-col sm:flex-row justify-around gap-2 mt-auto">
            <Button variant="default" className="w-full">Daftar</Button>
            <Button variant="outline" className="w-full">Guide Book</Button>
        </div>
      </CardContent>
    </Card>
  );

/**
 * Komponen ClassCard
 * @param {object} props - Properti komponen
 * @param {string} props.title - Judul kelas
 * @param {string} props.image - URL gambar untuk kelas
 * @param {string} props.hint - Petunjuk AI untuk gambar
 * @returns {JSX.Element} Kartu yang menampilkan detail kelas dengan pilihan pendaftaran.
 */
const ClassCard = ({ title, image, hint }) => (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden text-center flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-contain p-4" data-ai-hint={hint} />
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className='border-t border-primary/50 pt-4 flex-grow flex flex-col justify-center'>
          <h3 className="font-headline text-xl min-h-[3.5rem] flex items-center justify-center">{title}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
          <Button variant="default">Kelas A</Button>
          <Button variant="default">Kelas B</Button>
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
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="inline-block font-headline text-2xl font-bold border border-primary/50 rounded-lg px-6 py-3 mb-16">
          Timeline Pelatihan
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
 * Halaman Pelatihan
 * @returns {JSX.Element} Halaman utama untuk bagian pelatihan.
 */
export default function PelatihanPage() {
    
  const autoplayPlugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

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
                  PELATIHAN
                </h2>
                <p className="text-2xl md:text-4xl font-headline font-bold text-primary mb-8">IT-FESTIVAL</p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                    Tingkatkan keahlian Anda dengan sesi pelatihan praktis kami yang dipimpin oleh para ahli industri.
                </p>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                <Image src="https://placehold.co/600x400.png" alt="Pelatihan IT Festival" fill className="object-cover" data-ai-hint="training workshop" />
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Linimasa Pelatihan */}
        <TrainingTimeline />

        {/* Bagian Kategori Pelatihan */}
        <section className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-12">KATEGORI PELATIHAN</h2>
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
                <CarouselItem className="basis-full sm:basis-1/2 p-2 flex">
                  <TrainingCategoryCard
                    title="Android Development"
                    image="https://placehold.co/400x400.png"
                    hint="mobile app"
                  />
                </CarouselItem>
                <CarouselItem className="basis-full sm:basis-1/2 p-2 flex">
                  <TrainingCategoryCard
                    title="Full-Stack Web"
                    image="https://placehold.co/400x400.png"
                    hint="web development"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="sm:flex hidden -left-12" />
              <CarouselNext className="sm:flex hidden -right-12" />
              <div className="sm:hidden flex justify-center gap-4 mt-4">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
            </Carousel>
          </div>
        </section>

        {/* Bagian Daftar Kelas */}
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl font-headline font-bold text-center mb-12">DAFTAR KELAS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                  <ClassCard
                    title="Kelas Android"
                    image="/pelatihan/android.png"
                    hint="android logo"
                  />
                  <ClassCard
                    title="Kelas Web Design"
                    image="/pelatihan/web.png"
                    hint="vscode logo"
                  />
              </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
