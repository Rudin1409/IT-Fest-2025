import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Code, ShieldCheck, Cpu } from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-3 px-6 bg-background/50 backdrop-blur-lg border-b border-border/50">
    <h1 className="text-xl font-headline font-bold text-primary tracking-widest">VTF 2025</h1>
    <nav>
      <Button className="font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">Register Now</Button>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="w-full p-8 mt-24 bg-secondary text-secondary-foreground border-t border-border">
    <div className="container mx-auto text-center text-muted-foreground">
      <p className="font-headline text-lg text-primary mb-2">VALORANT TECH FEST 2025</p>
      <p>&copy; 2025 Valorant Tech Fest. All rights reserved.</p>
    </div>
  </footer>
);

const EventCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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

const SpeakerCard = ({ image, name, title, hint }: { image: string, name: string, title: string, hint: string }) => (
  <Card className="text-center bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
    <div className="relative h-72 w-full">
      <Image src={image} alt={name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" data-ai-hint={hint} />
    </div>
    <CardContent className="p-4">
      <h3 className="font-headline text-xl font-bold">{name}</h3>
      <p className="text-primary font-semibold">{title}</p>
    </CardContent>
  </Card>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24">
        <section id="hero" className="text-center py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
           <div className="container mx-auto relative">
            <h2 className="text-5xl md:text-8xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-accent mb-4">
              Valorant Tech Fest
            </h2>
             <p className="text-4xl font-headline font-bold text-primary mb-8">2025</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Where gaming innovation meets technological breakthrough. Join us for a two-day immersive experience into the future of tech.
            </p>
            <Button size="lg" className="font-bold text-lg px-10 py-6">
              Secure Your Spot
            </Button>
          </div>
        </section>

        <section id="events" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-12">Main Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <EventCard 
                icon={<Gamepad2 size={24} />} 
                title="Future of Gaming" 
                description="Explore next-gen graphics, AI-driven NPCs, and cloud gaming."
              />
              <EventCard 
                icon={<ShieldCheck size={24} />} 
                title="Cybersecurity Arena" 
                description="Live hacking competitions and talks from top security experts."
              />
              <EventCard 
                icon={<Code size={24} />} 
                title="Indie Dev Showcase" 
                description="Discover and play innovative games from independent developers."
              />
              <EventCard 
                icon={<Cpu size={24} />} 
                title="Hardware & Overclocking" 
                description="Push the limits of performance with the latest tech and expert guides."
              />
            </div>
          </div>
        </section>
        
        <section id="speakers" className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-12">Featured Speakers</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Dr. Evelyn Reed"
                title="Lead AI Architect"
                hint="woman scientist"
              />
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Jax 'Voltage' Miller"
                title="Pro Overclocker"
                hint="man engineer"
              />
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Kenji Tanaka"
                title="Cybersecurity Futurist"
                hint="man cyberpunk"
              />
              <SpeakerCard 
                image="https://placehold.co/400x600.png" 
                name="Anya Sharma"
                title="Indie Game Developer"
                hint="woman gamer"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
