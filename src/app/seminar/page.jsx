
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { User } from 'lucide-react';

const SeminarCard = ({ title, description, speaker, image, hint }) => (
  <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
    <div className="relative h-60 w-full">
      <Image src={image} alt={title} fill className="object-cover" data-ai-hint={hint} />
    </div>
    <CardHeader>
      <CardTitle className="font-headline text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center gap-2 text-sm text-accent mb-4">
        <User size={16} />
        <span>{speaker}</span>
      </div>
      <Button variant="outline">Learn More</Button>
    </CardContent>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SeminarCard
                title="Masa Depan Kecerdasan Buatan"
                description="Jelajahi kemajuan terbaru dalam AI dan dampaknya terhadap berbagai industri."
                speaker="Dr. Aris Setiawan"
                image="https://placehold.co/600x400.png"
                hint="artificial intelligence"
              />
              <SeminarCard
                title="Keamanan Siber di Era Digital"
                description="Pelajari cara melindungi diri Anda dan organisasi Anda dari ancaman siber yang terus berkembang."
                speaker="Budi Hartono"
                image="https://placehold.co/600x400.png"
                hint="cyber security"
              />
              <SeminarCard
                title="Revolusi Blockchain"
                description="Pahami potensi teknologi blockchain dan aplikasinya di luar cryptocurrency."
                speaker="Citra Lestari"
                image="https://placehold.co/600x400.png"
                hint="blockchain technology"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
