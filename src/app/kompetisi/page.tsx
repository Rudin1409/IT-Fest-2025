'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const CompetitionCard = ({ title, description, image, hint }: { title: string, description: string, image: string, hint: string }) => (
  <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
    <div className="relative h-60 w-full">
      <Image src={image} alt={title} fill className="object-cover" data-ai-hint={hint} />
    </div>
    <CardHeader>
      <CardTitle className="font-headline text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="outline">Learn More</Button>
    </CardContent>
  </Card>
);

export default function KompetisiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        <section className="text-center py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto relative">
            <h2 className="text-4xl md:text-6xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent mb-4">
              KOMPETISI
            </h2>
            <p className="text-2xl md:text-4xl font-headline font-bold text-primary mb-8">IT-FEST 2025</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Uji keterampilan Anda dan bersainglah dengan para penggemar teknologi terbaik dalam berbagai kompetisi kami yang menantang.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CompetitionCard
                title="Webinar"
                description="Dapatkan wawasan dari para pemimpin industri dan pakar tentang tren teknologi terkini."
                image="https://placehold.co/600x400.png"
                hint="online webinar"
              />
              <CompetitionCard
                title="Kompetisi Coding"
                description="Tunjukkan keahlian pemrograman Anda dan selesaikan masalah dunia nyata dalam kompetisi coding kami."
                image="https://placehold.co/600x400.png"
                hint="coding hackathon"
              />
              <CompetitionCard
                title="Kompetisi UI/UX"
                description="Rancang antarmuka yang inovatif dan ramah pengguna dalam kompetisi UI/UX kami."
                image="https://placehold.co/600x400.png"
                hint="design workshop"
              />
              <CompetitionCard
                title="Kompetisi E-Sport"
                description="Bersaing dengan para gamer terbaik dan buktikan keahlian Anda di turnamen e-sport kami."
                image="https://placehold.co/600x400.png"
                hint="esports tournament"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}