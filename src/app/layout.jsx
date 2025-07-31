import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Squares from '@/components/layout/Squares';
import './globals.css';


export const metadata = {
  title: 'IT-Festival',
  description: 'Festival teknologi terbesar tahun 2025 yang menghadirkan kompetisi, pelatihan, dan seminar untuk mengembangkan talenta digital masa depan.',
  icons: [{ rel: 'icon', url: '/logo.png' }],
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Squares 
          speed={0.1} 
          squareSize={40}
          direction='diagonal'
          borderColor='hsl(var(--primary) / 0.1)'
          hoverFillColor='hsl(var(--primary) / 0.2)'
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}