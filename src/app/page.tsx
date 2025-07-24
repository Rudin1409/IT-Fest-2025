
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Award, Code, Gamepad2, Mic, Palette, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';


const contactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;


const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-3 px-6 bg-background/50 backdrop-blur-lg border-b border-border/50">
    <h1 className="text-xl font-headline font-bold text-primary tracking-widest">IT-FEST 2025</h1>
    <nav>
      <Button className="font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">Register</Button>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="w-full p-8 mt-24 bg-secondary text-secondary-foreground border-t border-border">
    <div className="container mx-auto text-center text-muted-foreground">
      <p className="font-headline text-lg text-primary mb-2">IT-FEST 2025</p>
      <p>&copy; 2025 IT-FEST. All rights reserved.</p>
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
      <Image src={image} alt={name} fill className="object-cover" data-ai-hint={hint} />
    </div>
    <CardContent className="p-4">
      <h3 className="font-headline text-xl font-bold">{name}</h3>
      <p className="text-primary font-semibold">{title}</p>
    </CardContent>
  </Card>
);

const ContactForm = () => {
    const { toast } = useToast();
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = (data: ContactFormValues) => {
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
             <p className="text-2xl md:text-4xl font-headline font-bold text-primary mb-8">THE BIGGEST IT FESTIVAL</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Join us for the most exciting IT festival of the year. Explore the latest trends in technology, compete in challenging competitions, and connect with industry experts.
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
                        IT-FEST 2025 is a premier event that brings together students, professionals, and technology enthusiasts from around the world. Our mission is to foster innovation, collaboration, and learning in the ever-evolving field of information technology. With a wide range of events, competitions, and talks, IT-FEST 2025 is the perfect platform to showcase your skills, learn from the best, and network with like-minded individuals.
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
                description="Gain insights from industry leaders and experts on the latest technology trends."
              />
              <EventCard 
                icon={<Code size={24} />} 
                title="Coding Competition" 
                description="Showcase your programming skills and solve real-world problems in our coding competition."
              />
              <EventCard 
                icon={<Palette size={24} />} 
                title="UI/UX Competition" 
                description="Design innovative and user-friendly interfaces in our UI/UX competition."
              />
              <EventCard 
                icon={<Gamepad2 size={24} />} 
                title="E-Sport Competition" 
                description="Compete with the best gamers and prove your skills in our e-sport tournament."
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

    