
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Gamepad2, Mic, Palette } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link';

/**
 * Komponen EventCard
 * @param {object} props - Properti komponen
 * @param {React.ReactNode} props.icon - Ikon untuk acara
 * @param {string} props.title - Judul acara
 * @param {string} props.description - Deskripsi acara
 * @returns {JSX.Element} Kartu yang menampilkan detail acara.
 */
const EventCard = ({ icon, title, description }) => (
  <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="p-3 rounded-md bg-primary/20 text-primary">{icon}</div>
      <CardTitle className="font-headline text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

/**
 * Komponen SpeakerCard
 * @param {object} props - Properti komponen
 * @param {string} props.image - URL gambar pembicara
 * @param {string} props.name - Nama pembicara
 * @param {string} props.title - Jabatan atau gelar pembicara
 * @param {string} props.hint - Petunjuk AI untuk gambar
 * @returns {JSX.Element} Kartu yang menampilkan profil pembicara.
 */
const SpeakerCard = ({ image, name, title, hint }) => (
  <Card className="text-center bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
    <div className="relative h-72 w-full">
      <Image src={image} alt={name} fill className="object-cover" data-ai-hint={hint} />
    </div>
    <CardContent className="p-4">
      <h3 className="font-headline text-xl font-bold">{name}</h3>
      <p className="text-primary font-semibold">{title}</p>
    </CardContent>
  </Card>
);

// Data untuk linimasa acara
const timelineEvents = [
    {
      title: 'PEMBUKAAN PENDAFTARAN PERLOMBAAN, SEMINAR DAN PELATIHAN',
      date: 'N/A',
    },
    {
      title: 'PENUTUPAN PENDAFTARAN PESERTA SEMINAR DAN PELATIHAN',
      date: '08 September 2025',
    },
    {
      title: 'PEMBUKAAN ACARA IT FESTIVAL 2025 DAN SEMINAR',
      date: '16 September 2025',
    },
    {
      title: 'PELATIHAN ANDROID DAN WEB DEVELOPMENT',
      date: '17 - 20 September 2025',
    },
    {
      title: 'PENUTUPAN PENDAFTARAN LOMBA',
      date: '25 September 2025',
    },
    {
      title: 'TECHNICAL MEETING LOMBA (PHOTOGRAPHY, POSTER DESIGN, & WEB DESIGN)',
      date: '27 September 2025',
    },
    {
      title: 'TECHNICAL MEETING MOBILE LEGEND',
      date: '28 September 2025',
    },
    {
      title: 'LOMBA MOBILE LEGENDS',
      date: '29 September 2025',
    },
    {
      title: 'PENGUMPULAN KARYA LOMBA',
      date: '30 September 2025',
    },
    {
      title: 'PENJURIAN LOMBA (PHOTOGRAPHY & POSTER DESIGN)',
      date: '5 Oktober 2025',
    },
  ];

/**
 * Komponen TimelineItem
 * @param {object} props - Properti komponen
 * @param {object} props.event - Objek acara yang berisi judul dan tanggal
 * @param {number} props.index - Indeks item untuk menentukan posisi (kiri/kanan)
 * @returns {JSX.Element} Item linimasa.
 */
const TimelineItem = ({ event, index }) => {
    const isLeft = index % 2 !== 0;
    return (
      <div className="flex items-center w-full my-4">
        {isLeft ? (
          <>
            <div className="w-5/12 pr-8 text-right">
              <div className="p-4 rounded-lg bg-card/80 border border-primary/20 shadow-primary/10 shadow-lg">
                <h4 className="font-headline text-lg font-bold text-accent">{event.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
              </div>
            </div>
            <div className="w-2/12 flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary font-bold text-primary-foreground z-10">
                  {index + 1}
                </div>
              </div>
            </div>
            <div className="w-5/12"></div>
          </>
        ) : (
          <>
            <div className="w-5/12"></div>
            <div className="w-2/12 flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary font-bold text-primary-foreground z-10">
                  {index + 1}
                </div>
              </div>
            </div>
            <div className="w-5/12 pl-8 text-left">
              <div className="p-4 rounded-lg bg-card/80 border border-primary/20 shadow-primary/10 shadow-lg">
                <h4 className="font-headline text-lg font-bold text-accent">{event.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

/**
 * Komponen CountdownTimer
 * @returns {JSX.Element} Tampilan hitung mundur menuju tanggal acara.
 */
const CountdownTimer = () => {
  // Fungsi untuk menghitung sisa waktu
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-10-20T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  // useEffect untuk memastikan kode hanya berjalan di sisi klien
  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = isClient ? (
    Object.keys(timeLeft).map((interval) => (
      <div key={interval} className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-black font-headline text-primary">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-sm md:text-lg font-body uppercase tracking-widest text-muted-foreground">{interval}</span>
      </div>
    ))
  ) : (
    <div className="text-2xl text-muted-foreground">Loading...</div>
  );

  return (
    <div className="flex justify-center gap-4 md:gap-8 my-8">
      {timerComponents}
    </div>
  );
};

/**
 * Komponen FloatingSquares
 * @returns {JSX.Element} Animasi kotak-kotak mengambang sebagai latar belakang.
 */
const FloatingSquares = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
    <ul className="squares">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  </div>
);

/**
 * Komponen TypingAnimation
 * @param {object} props - Properti komponen
 * @param {string} props.text - Teks yang akan ditampilkan dengan animasi mengetik
 * @returns {JSX.Element} Judul dengan efek animasi mengetik.
 */
const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = text;
      const updatedText = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        // Jeda di akhir
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, text, loopNum, typingSpeed]);

  return (
    <h2 className="text-4xl md:text-6xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent mb-4 h-20 md:h-24">
      <span className="typing-text">{displayedText}</span>
      <span className="typing-cursor"></span>
    </h2>
  );
};

/**
 * Halaman Utama (Beranda)
 * @returns {JSX.Element} Komponen halaman utama yang menampilkan semua bagian.
 */
export default function Home() {
  // Plugin untuk autoplay korsel
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Bagian Hero */}
        <section id="hero" className="text-center py-24 px-4 relative overflow-hidden">
          <FloatingSquares />
           <div className="container mx-auto relative">
            <TypingAnimation text="WELCOME TO IT-FEST 2025" />
            <CountdownTimer />
             <p className="text-2xl md:text-4xl font-headline font-bold text-primary mb-8">THE BIGGEST IT FESTIVAL</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            IT-FEST 2025 adalah acara utama yang menyatukan mahasiswa, profesional, dan penggemar teknologi dari seluruh dunia. Misi kami adalah untuk mendorong inovasi, kolaborasi, dan pembelajaran di bidang teknologi informasi yang terus berkembang.
            </p>
            <div className="flex justify-center gap-4">
                <Button size="lg" className="font-bold text-lg px-10 py-6">
                Get Started
                </Button>
                <Button size="lg" variant="outline" className="font-bold text-lg px-10 py-6">
                Learn More
                </Button>
            </div>
          </div>
        </section>

        {/* Bagian Tentang Kami */}
        <section id="about" className="py-20 px-4">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-headline font-bold mb-4">ABOUT US</h2>
                    <h3 className="text-2xl font-bold text-primary mb-6">The Biggest IT Festival in 2025</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                    IT-FEST 2025 adalah acara utama yang menyatukan mahasiswa, profesional, dan penggemar teknologi dari seluruh dunia. Misi kami adalah untuk mendorong inovasi, kolaborasi, dan pembelajaran di bidang teknologi informasi yang terus berkembang. Dengan berbagai acara, kompetisi, dan seminar, IT-FEST 2025 adalah platform yang sempurna untuk menunjukkan keahlian Anda, belajar dari yang terbaik, dan berjejaring dengan individu yang berpikiran sama.
                    </p>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                     <Image src="https://placehold.co/600x400.png" alt="About IT Fest" fill className="object-cover" data-ai-hint="technology conference" />
                </div>
            </div>
        </section>

        {/* Bagian Acara Kami */}
        <section id="events" className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-2">OUR EVENTS</h2>
            <p className="text-center text-primary text-lg mb-12">Check Our Best Events</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              <EventCard 
                icon={<Mic size={24} />} 
                title="Webinar" 
                description="Dapatkan wawasan dari para pemimpin industri dan pakar tentang tren teknologi terkini."
              />
              <EventCard 
                icon={<Code size={24} />} 
                title="Pelatihan Web & Android" 
                description="Tingkatkan keahlian teknis Anda dalam pengembangan web dan Android."
              />
              <EventCard 
                icon={<Code size={24} />} 
                title="Kompetisi Coding" 
                description="Tunjukkan keahlian pemrograman Anda dan selesaikan masalah dunia nyata dalam kompetisi coding kami."
              />
              <EventCard 
                icon={<Palette size={24} />} 
                title="Kompetisi Desain" 
                description="Rancang antarmuka yang inovatif dan ramah pengguna dalam kompetisi desain kami."
              />
              <EventCard 
                icon={<Gamepad2 size={24} />} 
                title="Kompetisi E-Sport" 
                description="Bersaing dengan para gamer terbaik dan buktikan keahlian Anda di turnamen e-sport kami."
              />
            </div>
          </div>
        </section>
        
        {/* Bagian Pembicara */}
        <section id="speakers" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-2">OUR SPEAKERS</h2>
            <p className="text-center text-primary text-lg mb-12">Meet Our Professional Speakers</p>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Shandy Luo"
                title="Content Creator"
                hint="man content creator"
              />
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Nabila Carissa"
                title="Content Creator & Social Media Influencer"
                hint="woman influencer"
              />
            </div>
            <div className="text-center mt-12">
                <Link href="/seminar">
                    <Button size="lg" className="font-bold text-lg px-10 py-6">
                        Lihat Semua Pembicara
                    </Button>
                </Link>
            </div>
          </div>
        </section>

        {/* Bagian Linimasa */}
        <section id="timeline" className="py-20 px-4 bg-secondary/50">
            <div className="container mx-auto">
                <h2 className="text-4xl font-headline font-bold text-center mb-12">TIMELINE</h2>
                <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/50"></div>
                {timelineEvents.map((event, index) => (
                    <TimelineItem key={index} event={event} index={index} />
                ))}
                </div>
            </div>
        </section>

        {/* Bagian Didukung Oleh */}
        <section id="supported-by" className="py-20 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-headline font-bold mb-12">SUPPORTED BY</h2>
                <Image src="https://placehold.co/300x150.png" alt="Universitas Teknologi Indonesia" width={300} height={150} className="mx-auto" data-ai-hint="university logo" />
                 <p className="text-2xl font-headline font-bold text-primary mt-4">UNIVERSITAS TEKNOLOGI INDONESIA</p>
            </div>
        </section>

        {/* Bagian Sponsor */}
        <section id="sponsors" className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-headline font-bold mb-12">SPONSORS</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              onMouseEnter={() => autoplayPlugin.current.stop()}
              onMouseLeave={() => autoplayPlugin.current.play()}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-1">
                      <Image src="https://placehold.co/200x100.png" alt={`Sponsor ${index + 1}`} width={200} height={100} data-ai-hint="company logo" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Bagian Mitra Media */}
        <section id="media-partners" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-headline font-bold mb-12">MEDIA PARTNERS</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              onMouseEnter={() => autoplayPlugin.current.stop()}
              onMouseLeave={() => autoplayPlugin.current.play()}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-1">
                      <Image src="https://placehold.co/200x100.png" alt={`Media Partner ${index + 1}`} width={200} height={100} data-ai-hint="media logo" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
