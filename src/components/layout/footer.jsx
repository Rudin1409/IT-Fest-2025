
'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 mt-24 bg-secondary/30 text-secondary-foreground border-t border-primary/20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-muted-foreground">
        
        {/* About Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
             <span className="font-headline text-2xl font-bold text-white">IT FESTIVAL 2025</span>
          </div>
          <p className="max-w-md leading-relaxed">
          Festival teknologi terbesar tahun 2025 yang menghadirkan kompetisi, pelatihan, dan seminar untuk mengembangkan talenta digital masa depan.
          </p>
          <div className="flex space-x-4 mt-6">
            <Link href="#" className="w-8 h-8 rounded bg-primary/80 hover:bg-primary transition-colors"></Link>
            <Link href="#" className="w-8 h-8 rounded bg-accent/80 hover:bg-accent transition-colors"></Link>
            <Link href="#" className="w-8 h-8 rounded bg-primary/80 hover:bg-primary transition-colors"></Link>
          </div>
        </div>

        {/* Quick Links */}
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

        {/* Contact */}
        <div>
          <h3 className="font-headline text-lg font-bold text-white mb-4">CONTACT</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1" />
              <span>info@itfestival2025.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-primary mt-1" />
              <span>+62 xxx xxxx xxxx</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1" />
              <span>Palembang, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="container mx-auto mt-12 pt-8 border-t border-primary/20 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; 2025 IT Festival 2025. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-primary transition-colors">TERMS OF SERVICE</Link>
        </div>
      </div>
    </footer>
);
