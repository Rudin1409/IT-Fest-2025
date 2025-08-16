
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Gamepad2, Mic, Palette, ArrowDown, Award, Film } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import React, { useState, useEffect } from 'react';
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
  <Card className="transition-all duration-300 transform bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="p-3 rounded-md bg-primary/20 text-primary">{icon}</div>
      <CardTitle className="text-xl font-headline">{title}</CardTitle>
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
 * @param {string} props.className - ClassName tambahan untuk gambar
 * @returns {JSX.Element} Kartu yang menampilkan profil pembicara.
 */
const SpeakerCard = ({ image, name, title, hint, className }) => (
  <Card className="overflow-hidden text-center transition-all duration-300 transform bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
    <div className="relative w-full h-72">
      <Image src={image} alt={name} fill className={`object-cover ${className}`} data-ai-hint={hint} />
    </div>
    <CardContent className="p-4">
      <h3 className="text-xl font-bold font-headline">{name}</h3>
      <p className="font-semibold text-primary">{title}</p>
    </CardContent>
  </Card>
);

// Data untuk linimasa acara
const timelineEvents = [
    {
        title: 'Open Registration Seminar, Perlombaan dan Pelatihan (Android & Web)',
        date: 'Selasa, 16 Agustus 2025',
    },
    {
        title: 'Perlombaan (Pembuatan Karya)',
        date: '16 Agustus – 13 Oktober 2025',
    },
    {
        title: 'Batas Submit Abstrak (Cipta Inovasi)',
        date: 'Sabtu, 30 Agustus 2025',
    },
    {
        title: 'Penyisihan Abstrak (Cipta Inovasi)',
        date: 'Minggu, 31 Agustus 2025 – Selasa, 2 September 2025',
    },
    {
        title: 'Pengumuman Lolos Batch 2 (Cipta Inovasi)',
        date: 'Rabu, 3 September 2025',
    },
    {
        title: 'Close Registration Pelatihan dan Seminar',
        date: 'Sabtu, 6 September 2025',
    },
    {
        title: 'Opening Ceremony IT Festival 2025',
        date: 'Selasa, 16 September 2025',
    },
    {
        title: 'Pelaksanaan Seminar & Talkshow',
        date: 'Selasa, 16 September 2025',
    },
    {
        title: 'Pelatihan Android & Web',
        date: 'Rabu – Sabtu, 17 – 20 September 2025',
    },
    {
        title: 'Batas pengumpulan Full Paper (Cipta Inovasi)',
        date: 'Sabtu, 20 September 2025',
    },
    {
        title: 'Batas Penyisihan Full Paper (Cipta Inovasi)',
        date: 'Minggu, 21 September - Selasa, 23 September',
    },
    {
        title: 'Pengumuman Finalis (Cipta Inovasi)',
        date: 'Rabu, 24 September 2025',
    },
    {
        title: 'Close Registration Lomba, Pegumpulan PPT Cipta Inovasi',
        date: 'Selasa, 30 September 2025',
    },
    {
        title: 'Pelaksanaan Technical Meeting Lomba E-Government, Poster Design, Mobile Legends, dan Animasi',
        date: 'Jum’at, 3 Oktober 2025',
    },
    {
        title: 'Lomba Mobile Legends, Presentasi Cipta Inovasi',
        date: 'Sabtu, 4 Oktober 2025',
    },
    {
        title: 'Batas Akhir Pengumpulan Karya Lomba',
        date: 'Senin, 13 Oktober 2025',
    },
    {
        title: 'Seleksi Karya Lomba Web Development',
        date: 'Selasa - Rabu, 14 - 15 Oktober 2025',
    },
    {
        title: 'Penjurian Lomba (Animasi, Poster Design, dan Web Development)',
        date: 'Kamis, 16 Oktober 2025',
    },
    {
        title: 'Closing Ceremony IT Festival 2025 & Pengumuman Pemenang Lomba (Pembagian Sertifikat)',
        date: 'Senin, 20 Oktober 2025',
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
    // On mobile, every item will be on the "right" side of the timeline line
    return (
      <div className="flex w-full my-4 md:my-8">
        {/* Desktop view */}
        <div className="hidden w-full md:flex items-center">
            {isLeft ? (
            <>
                <div className="w-5/12 pr-8 text-right">
                <div className="p-4 border rounded-lg shadow-lg bg-card/80 border-primary/20 shadow-primary/10">
                    <h4 className="text-lg font-bold font-headline text-accent">{event.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{event.date}</p>
                </div>
                </div>
                <div className="flex-shrink-0 w-2/12 flex justify-center">
                    <div className="relative">
                        <div className="z-10 flex items-center justify-center w-10 h-10 font-bold rounded-full bg-primary text-primary-foreground">
                        {index + 1}
                        </div>
                    </div>
                </div>
                <div className="w-5/12"></div>
            </>
            ) : (
            <>
                <div className="w-5/12"></div>
                <div className="flex-shrink-0 w-2/12 flex justify-center">
                <div className="relative">
                    <div className="z-10 flex items-center justify-center w-10 h-10 font-bold rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                    </div>
                </div>
                </div>
                <div className="w-5/12 pl-8 text-left">
                <div className="p-4 border rounded-lg shadow-lg bg-card/80 border-primary/20 shadow-primary/10">
                    <h4 className="text-lg font-bold font-headline text-accent">{event.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{event.date}</p>
                </div>
                </div>
            </>
            )}
        </div>
        {/* Mobile view */}
        <div className="flex items-start w-full md:hidden">
            <div className="flex-shrink-0 w-2/12 flex justify-center">
                <div className="relative">
                    <div className="z-10 flex items-center justify-center w-10 h-10 font-bold rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                    </div>
                </div>
            </div>
            <div className="w-10/12 pl-4 text-left">
                <div className="p-4 border rounded-lg shadow-lg bg-card/80 border-primary/20 shadow-primary/10">
                    <h4 className="text-md font-bold font-headline text-accent">{event.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{event.date}</p>
                </div>
            </div>
        </div>
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
        <span className="text-4xl font-black md:text-6xl font-headline text-primary">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-sm uppercase md:text-lg font-body tracking-widest text-muted-foreground">{interval}</span>
      </div>
    ))
  ) : (
    <div className="text-2xl text-muted-foreground">Loading...</div>
  );

  return (
    <div className="flex justify-center gap-4 my-8 md:gap-8">
      {timerComponents}
    </div>
  );
};

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
    <h2 className="h-20 mb-4 text-4xl font-black md:text-6xl md:h-24 font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">
      <span className="typing-text">{displayedText}</span>
      <span className="typing-cursor"></span>
    </h2>
  );
};

// Komponen untuk logo yang bergulir
const ScrollingLogos = ({ items, hint, duration = '40s' }) => {
    const duplicatedItems = [...items, ...items];
  
    return (
      <div className="scroller" data-animated="true" style={{ '--duration': duration }}>
          <div className="scroller-inner">
              {duplicatedItems.map((item, index) => (
                  <Image key={index} src={item.src} alt={item.alt} width={200} height={100} className="object-contain h-24" data-ai-hint={hint} />
              ))}
          </div>
      </div>
    );
  };


/**
 * Halaman Utama (Beranda)
 * @returns {JSX.Element} Komponen halaman utama yang menampilkan semua bagian.
 */
export default function Home() {
  const handleScroll = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sponsorLogos = [
    { src: '/sponsor/Logo Cyborg.jpg', alt: 'Logo Cyborg', hint: 'company logo' },
    { src: '/sponsor/bri.png', alt: 'Logo BRI', hint: 'company logo' },
    { src: '/sponsor/mau.jpeg', alt: 'Logo MAU', hint: 'company logo' },
    { src: '/sponsor/pusri.png', alt: 'Logo Pusri', hint: 'company logo' },
  ];
  const mediaPartnerLogos = [
    { src: '/medpart/Logo HMJBI.png', alt: 'Logo HMJBI', hint: 'organization logo' },
    { src: '/medpart/himailkomunnes.png', alt: 'Logo Himailkom Unnes', hint: 'organization logo' },
    { src: '/medpart/himifunpad.png', alt: 'Logo Himif Unpad', hint: 'organization logo' },
    { src: '/medpart/himifunsika.png', alt: 'Logo Himif Unsika', hint: 'organization logo' },
    { src: '/medpart/hmeuny.png', alt: 'Logo HME UNY', hint: 'organization logo' },
    { src: '/medpart/polnrj.png', alt: 'Logo Polnrj', hint: 'organization logo' },
    { src: '/medpart/teknoevent.png', alt: 'Logo Teknoevent', hint: 'organization logo' },
    { src: '/medpart/ukmpoltek.png', alt: 'Logo UKM Poltek', hint: 'organization logo' },
  ];

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow">
        
        {/* Bagian Hero */}
        <section id="hero" className="relative flex flex-col items-center justify-center h-screen px-4 pt-24 overflow-hidden text-center">
           <div className="container relative mx-auto">
            <TypingAnimation text="WELCOME TO IT-FESTIVAL 2025" />
            <p className="mb-4 text-2xl font-bold md:text-4xl font-headline text-primary">Berakhir Dalam</p>
            <CountdownTimer />
             <p className="mb-8 text-2xl font-bold text-transparent md:text-4xl font-headline bg-clip-text bg-gradient-to-b from-white to-accent">THE BIGGEST IT-FESTIVAL</p>
          </div>
          <a href="#about" onClick={handleScroll} className="absolute cursor-pointer bottom-10 left-1/2 -translate-x-1/2">
              <div className="flex items-center justify-center w-12 h-12 text-primary animate-pulse-arrow">
                <ArrowDown size={48} />
              </div>
            </a>
        </section>

        {/* Bagian Tentang Kami */}
        <section id="about" className="px-4 py-20">
            <div className="container grid items-center gap-12 mx-auto md:grid-cols-2">
                <div>
                    <h2 className="mb-4 text-4xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">ABOUT US</h2>
                    <h3 className="mb-6 text-2xl font-bold text-primary">The Biggest IT-Festival in 2025</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                    IT-FESTIVAL 2025 adalah acara utama yang menyatukan mahasiswa, profesional, dan penggemar teknologi dari seluruh Indonesia. Misi kami adalah untuk mendorong inovasi, kolaborasi, dan pembelajaran di bidang teknologi informasi yang terus berkembang. Dengan berbagai acara, kompetisi, dan seminar, IT-FESTIVAL 2025 adalah platform yang sempurna untuk menunjukkan keahlian Anda, belajar dari yang terbaik, dan berjejaring dengan individu yang berpikiran sama.
                    </p>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                     <Image src="/masckot/maskotweb.png" alt="About IT Festival" fill className="object-contain" data-ai-hint="mascot illustration" />
                </div>
            </div>
        </section>

        {/* Bagian Acara Kami */}
        <section id="events" className="px-4 py-20 bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="mb-2 text-4xl font-bold text-center font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">OUR EVENTS</h2>
            <p className="mb-12 text-lg text-center text-primary">Check Our Best Events</p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
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
                icon={<Award size={24} />} 
                title="Kompetisi" 
                description="Tunjukkan keahlian Anda dan selesaikan masalah dunia nyata dalam kompetisi kami."
              />
              <EventCard 
                icon={<Film size={24} />} 
                title="Kompetisi Animasi" 
                description="Rancang animasi yang inovatif dan kreatif dalam kompetisi animasi kami."
              />
              <EventCard 
                icon={<Gamepad2 size={24} />} 
                title="Kompetisi E-Sport" 
                description="Bersaing dengan para gamer terbaik dan buktikan keahlian Anda di turnamen e-sport kami."
              />
              <EventCard 
                icon={<Award size={24} />} 
                title="Pameran Karya" 
                description="Lihat karya-karya inovatif dan kreatif dari para mahasiswa berbakat di bidang teknologi."
              />
            </div>
          </div>
        </section>
        
        {/* Bagian Pembicara */}
        <section id="speakers" className="px-4 py-20">
          <div className="container mx-auto">
            <h2 className="mb-2 text-4xl font-bold text-center font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">OUR SPEAKERS</h2>
            <p className="mb-12 text-lg text-center text-primary">Meet Our Professional Speakers</p>
            <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 max-w-4xl">
            <SpeakerCard
                image="/image/theresa.jpg"
                name="Theresa Tandrawinata"
                title="Creator, Web3 & Business"
                hint="woman creator"
              />
              <SpeakerCard
                image="/image/shelvina.jpg"
                name="Shelvina Puteri"
                title="Content Creator & MC"
                hint="woman influencer"
                className="object-[center_20%]"
              />
            </div>
            <div className="mt-12 text-center">
                <Link href="/seminar">
                    <Button size="lg" className="px-10 py-6 text-lg font-bold">
                        Lihat Pembicara
                    </Button>
                </Link>
            </div>
          </div>
        </section>

        {/* Bagian Linimasa */}
        <section id="timeline" className="px-4 py-20 bg-secondary/50">
            <div className="container mx-auto">
                <h2 className="mb-12 text-4xl font-bold text-center font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">TIMELINE</h2>
                <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/50 hidden md:block"></div>
                <div className="absolute left-[calc(1.25rem-1px)] md:left-1/2 h-full w-0.5 bg-primary/50"></div>
                {timelineEvents.map((event, index) => (
                    <TimelineItem key={index} event={event} index={index} />
                ))}
                </div>
            </div>
        </section>

        {/* Bagian Didukung Oleh */}
        <section id="supported-by" className="px-4 py-20">
            <div className="container mx-auto text-center">
                <h2 className="mb-12 text-4xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">SUPPORTED BY</h2>
                <div className="grid items-start justify-center gap-12 md:grid-cols-3">
                    <div className="flex flex-col items-center gap-4">
                        <Image src="/logopolsri.png" alt="Politeknik Negeri Sriwijaya" width={150} height={75} className="object-contain mx-auto" data-ai-hint="university logo" />
                        <p className="mt-4 text-xl font-bold font-headline text-primary">Politeknik Negeri Sriwijaya</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src="/logomi.webp" alt="Jurusan Manajemen Informatika" width={150} height={75} className="object-contain mx-auto" data-ai-hint="university logo" />
                        <p className="mt-4 text-xl font-bold font-headline text-primary">Jurusan Manajemen Informatika</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src="/logohmj.png" alt="Himpunan Mahasiswa Jurusan Manajemen Informatika" width={150} height={75} className="object-contain mx-auto" data-ai-hint="organization logo" />
                        <p className="mt-4 text-xl font-bold text-center font-headline text-primary">Himpunan Mahasiswa Jurusan Manajemen Informatika</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Bagian Sponsor */}
        <section id="sponsors" className="px-4 py-20 bg-secondary/50">
          <div className="container mx-auto text-center">
            <h2 className="mb-12 text-4xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">SPONSORS</h2>
             <ScrollingLogos items={sponsorLogos} hint="company logo" duration="20s" />
          </div>
        </section>

        {/* Bagian Mitra Media */}
        <section id="media-partners" className="px-4 py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-12 text-4xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent">MEDIA PARTNERS</h2>
            <ScrollingLogos items={mediaPartnerLogos} hint="organization logo" duration="40s" />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
