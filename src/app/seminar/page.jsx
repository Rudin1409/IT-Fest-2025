
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { User } from 'lucide-react';

const GuestSpeakerCard = ({ image, name, title, topic, date, hint }) => (
  <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden w-full">
    <div className="grid md:grid-cols-3 items-center">
      <div className="relative h-96 md:h-full min-h-[300px]">
        <Image src={image} alt={name} fill className="object-cover" data-ai-hint={hint} />
      </div>
      <div className="md:col-span-2 p-8 text-left">
        <p className="text-muted-foreground mb-2 text-lg">Guest Star :</p>
        <h3 className="text-4xl font-headline font-black mb-2 text-white uppercase">{name}</h3>
        <p className="text-xl font-semibold text-primary mb-4">{title}</p>
        <p className="text-2xl text-accent mb-6 italic">"{topic}"</p>
        <p className="text-muted-foreground text-lg">{date}</p>
      </div>
    </div>
  </Card>
);

export default function SeminarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent mb-4">
                  SEMINAR
                </h2>
                <p className="text-2xl md:text-4xl font-headline font-bold text-primary mb-8">IT-FEST 2025</p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Ikuti seminar kami dan dapatkan wawasan berharga dari para ahli di bidang teknologi.
                </p>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                <Image src="https://placehold.co/600x400.png" alt="Seminar IT Fest" fill className="object-cover" data-ai-hint="conference presentation" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
              <GuestSpeakerCard
                name="Shandy Luo"
                title="Content Creator"
                topic="Optimizing Digital Content for Effective Learning"
                date="16 September 2025 | 14.45 WIB"
                image="https://placehold.co/400x600.png"
                hint="man content creator"
              />
              <GuestSpeakerCard
                name="Dr. Aris Setiawan"
                title="Pakar Kecerdasan Buatan"
                topic="Masa Depan Kecerdasan Buatan"
                date="17 September 2025 | 10.00 WIB"
                image="https://placehold.co/400x600.png"
                hint="man scientist"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
