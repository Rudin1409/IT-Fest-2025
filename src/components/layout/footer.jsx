
'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import Image from 'next/image';


/**
 * Komponen Footer
 * @returns {JSX.Element} Footer situs web dengan informasi kontak dan tautan cepat.
 */
export const Footer = () => (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 mt-24 bg-secondary/30 text-secondary-foreground border-t border-primary/20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-muted-foreground">
        
        {/* Bagian Tentang & Media Sosial */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
             {/* Logo */}
             <Image src="/logo.png" alt="IT-Festival Logo" width={48} height={48} />
             <span className="font-headline text-2xl font-bold text-white">IT-FESTIVAL</span>
          </div>
          <p className="max-w-md leading-relaxed">
          Festival teknologi terbesar tahun 2025 yang menghadirkan kompetisi, pelatihan, dan seminar untuk mengembangkan talenta digital masa depan.
          </p>
          {/* Tautan Media Sosial */}
          <div className="flex space-x-4 mt-6">
            <Link href="https://www.instagram.com/ITFESTPOLSRI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/80 hover:bg-primary transition-colors flex items-center justify-center text-white">
                <Instagram size={20} />
            </Link>
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/80 hover:bg-primary transition-colors flex items-center justify-center text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.847 6.046l-1.107 4.027 4.13-1.082z" />
                </svg>
            </Link>
            <Link href="mailto:ITFESTIVALPOLSRI2025@GMAIL.COM" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/80 hover:bg-primary transition-colors flex items-center justify-center text-white">
                <Mail size={20} />
            </Link>
          </div>
        </div>

        {/* Bagian Tautan Cepat */}
        <div>
          <h3 className="font-headline text-lg font-bold text-white mb-4">QUICK LINKS</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-primary transition-colors">HOME</Link></li>
            <li><Link href="/kompetisi" className="hover:text-primary transition-colors">KOMPETISI</Link></li>
            <li><Link href="/pelatihan" className="hover:text-primary transition-colors">PELATIHAN</Link></li>
            <li><Link href="/seminar" className="hover:text-primary transition-colors">SEMINAR</Link></li>
            <li><Link href="/#timeline" className="hover:text-primary transition-colors">TIMELINE</Link></li>
          </ul>
        </div>

        {/* Bagian Kontak */}
        <div>
          <h3 className="font-headline text-lg font-bold text-white mb-4">CONTACT</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1" />
              <span>ITFESTIVALPOLSRI2025@GMAIL.COM</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-primary mt-1" />
              <div>
                <span>+62895604953816</span><br/>
                <span>+6285366799782</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1" />
              <span>Palembang, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bagian Bawah Footer */}
      <div className="container mx-auto mt-12 pt-8 border-t border-primary/20 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; 2025 IT-Festival. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
            <Image src="/logo.png" alt="IT-Festival Logo" width={48} height={48} />
            <Image src="/logokabinet.png" alt="Logo Kabinet" width={48} height={48} className="object-contain" data-ai-hint="organization logo" />
            <Image src="/logohmj.png" alt="Logo HMJ" width={48} height={48} className="object-contain" data-ai-hint="organization logo" />
            <Image src="/logopolsri.png" alt="Logo Polsri" width={48} height={48} className="object-contain" data-ai-hint="university logo" />
        </div>
      </div>
    </footer>
);
