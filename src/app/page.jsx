
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Code, Gamepad2, Mic, Palette, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import React, { useState, useEffect } from 'react';

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

const TimelineItem = ({ date, title }) => (
    <div className="flex items-center w-full my-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 border-2 border-primary text-primary">
          <Calendar size={32} />
        </div>
      </div>
      <div className="flex-grow md:ml-8 ml-4">
        <h4 className="font-headline text-xl font-bold text-accent">{date}</h4>
        <p className="text-lg text-muted-foreground">{title}</p>
      </div>
    </div>
  );

const ContactForm = () => {
    const { toast } = useToast();
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We will get back to you shortly.",
        });
        form.reset();
    };
    
    return (
        <Card className="bg-card/80 backdrop-blur-sm p-8 border-primary/20">
            <CardHeader>
                <CardTitle className="text-3xl font-headline text-center">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Your Message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full font-bold">Send Message</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

const CountdownTimer = () => {
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

  useEffect(() => {
    setIsClient(true);
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


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        <section id="hero" className="text-center py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
           <div className="container mx-auto relative">
            <h2 className="text-4xl md:text-6xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent mb-4">
              WELCOME TO IT-FEST 2025
            </h2>
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

        <section id="events" className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-2">OUR EVENTS</h2>
            <p className="text-center text-primary text-lg mb-12">Check Our Best Events</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <EventCard 
                icon={<Mic size={24} />} 
                title="Webinar" 
                description="Dapatkan wawasan dari para pemimpin industri dan pakar tentang tren teknologi terkini."
              />
              <EventCard 
                icon={<Code size={24} />} 
                title="Kompetisi Coding" 
                description="Tunjukkan keahlian pemrograman Anda dan selesaikan masalah dunia nyata dalam kompetisi coding kami."
              />
              <EventCard 
                icon={<Palette size={24} />} 
                title="Kompetisi UI/UX" 
                description="Rancang antarmuka yang inovatif dan ramah pengguna dalam kompetisi UI/UX kami."
              />
              <EventCard 
                icon={<Gamepad2 size={24} />} 
                title="Kompetisi E-Sport" 
                description="Bersaing dengan para gamer terbaik dan buktikan keahlian Anda di turnamen e-sport kami."
              />
            </div>
          </div>
        </section>
        
        <section id="speakers" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-2">OUR SPEAKERS</h2>
            <p className="text-center text-primary text-lg mb-12">Meet Our Professional Speakers</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Dr. Aris Setiawan"
                title="Pakar Kecerdasan Buatan"
                hint="man scientist"
              />
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Budi Hartono"
                title="Analis Keamanan Siber"
                hint="man engineer"
              />
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Citra Lestari"
                title="Pengembang Blockchain"
                hint="woman developer"
              />
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Dewi Anggraini"
                title="Desainer UI/UX"
                hint="woman designer"
              />
            </div>
          </div>
        </section>

        <section id="timeline" className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-2">TIMELINE</h2>
            <p className="text-center text-primary text-lg mb-12">IT-FEST 2025</p>
            <div className="max-w-3xl mx-auto">
                <TimelineItem date="1 - 14 JULI 2025" title="OPEN REGISTRATION" />
                <TimelineItem date="20 JULI 2025" title="CLOSE REGISTRATION" />
                <TimelineItem date="25 JULI 2025" title="WEBINAR" />
                <TimelineItem date="26 JULI 2025" title="COMPETITION" />
                <TimelineItem date="27 JULI 2025" title="AWARDING" />
            </div>
          </div>
        </section>

        <section id="supported-by" className="py-20 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-headline font-bold mb-12">SUPPORTED BY</h2>
                <Image src="https://placehold.co/300x150.png" alt="Universitas Teknologi Indonesia" width={300} height={150} className="mx-auto" data-ai-hint="university logo" />
                 <p className="text-2xl font-headline font-bold text-primary mt-4">UNIVERSITAS TEKNOLOGI INDONESIA</p>
            </div>
        </section>

        <section id="sponsors" className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-headline font-bold mb-12">SPONSORS</h2>
            <div className="flex justify-center items-center flex-wrap gap-12">
              <Image src="https://placehold.co/200x100.png" alt="Sponsor 1" width={200} height={100} data-ai-hint="company logo" />
              <Image src="https://placehold.co/200x100.png" alt="Sponsor 2" width={200} height={100} data-ai-hint="tech company" />
              <Image src="https://placehold.co/200x100.png" alt="Sponsor 3" width={200} height={100} data-ai-hint="startup logo" />
              <Image src="https://placehold.co/200x100.png" alt="Sponsor 4" width={200} height={100} data-ai-hint="software company" />
            </div>
          </div>
        </section>

        <section id="media-partners" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-headline font-bold mb-12">MEDIA PARTNERS</h2>
            <div className="flex justify-center items-center flex-wrap gap-12">
              <Image src="https://placehold.co/200x100.png" alt="Media Partner 1" width={200} height={100} data-ai-hint="media logo" />
              <Image src="https://placehold.co/200x100.png" alt="Media Partner 2" width={200} height={100} data-ai-hint="news channel" />
              <Image src="https://placehold.co/200x100.png" alt="Media Partner 3" width={200} height={100} data-ai-hint="tech blog" />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-secondary/50">
            <div className="container mx-auto max-w-2xl">
                <ContactForm />
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
