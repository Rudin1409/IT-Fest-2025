
import './globals.css';
import { Toaster } from "@/components/ui/toaster";


export const metadata = {
  title: 'IT-Festival 2025',
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Russo+One&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
