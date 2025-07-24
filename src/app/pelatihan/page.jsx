
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const TrainingCard = ({ title, description, image, hint }) => (
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

export default function PelatihanPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        <section className="text-center py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto relative">
            <h2 className="text-4xl md:text-6xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent mb-4">
              PELATIHAN
            </h2>
            <p className="text-2xl md:text-4xl font-headline font-bold text-primary mb-8">IT-FEST 2025</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Tingkatkan keahlian Anda dengan sesi pelatihan praktis kami yang dipimpin oleh para ahli industri.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TrainingCard
                title="Full-Stack Web"
                description="Pelajari cara membangun aplikasi web lengkap dari awal hingga akhir menggunakan teknologi terbaru."
                image="https://placehold.co/600x400.png"
                hint="web development"
              />
              <TrainingCard
                title="Data Science"
                description="Selami dunia data, pelajari analisis, visualisasi, dan machine learning."
                image="https://placehold.co/600x400.png"
                hint="data analytics"
              />
              <TrainingCard
                title="Mobile Development"
                description="Buat aplikasi seluler yang menakjubkan untuk platform iOS dan Android."
                image="https://placehold.co/600x400.png"
                hint="mobile app"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
