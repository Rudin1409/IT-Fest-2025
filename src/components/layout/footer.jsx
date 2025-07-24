
import Link from 'next/link';

export const Footer = () => (
  <footer className="w-full p-8 mt-24 bg-secondary text-secondary-foreground border-t border-border">
    <div className="container mx-auto text-center text-muted-foreground">
      <Link href="/" className="font-headline text-lg text-primary mb-2 block">
        IT-FEST 2025
      </Link>
      <p>&copy; 2025 IT-FEST. All rights reserved.</p>
    </div>
  </footer>
);
