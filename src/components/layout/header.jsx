
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Image from 'next/image';

// Daftar tautan navigasi
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/kompetisi', label: 'Kompetisi' },
  { href: '/pelatihan', label: 'Pelatihan' },
  { href: '/seminar', label: 'Seminar' },
];

/**
 * Komponen Header
 * @returns {JSX.Element} Header situs web dengan navigasi.
 */
export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-3 px-6 bg-background/50 backdrop-blur-lg border-b border-border/50">
      {/* Logo Situs */}
      <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary tracking-widest">
        <Image src="/logo.png" alt="IT-Festival Logo" width={32} height={32} />
        IT-FESTIVAL 2025
      </Link>
      
      {/* Navigasi untuk Desktop */}
      <nav className="hidden md:flex items-center space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'relative font-semibold text-foreground/80 transition-colors hover:text-primary nav-link-underline',
              pathname === link.href ? 'text-primary' : ''
            )}
          >
            {link.label}
          </Link>
        ))}
        {/* Tombol Register */}
        <Link href="/register">
          <Button className="font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow ml-4">Register</Button>
        </Link>
      </nav>
      
      {/* Navigasi untuk Mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-semibold text-lg transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/register">
                <Button className="font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow w-full">Register</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
