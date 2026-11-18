import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WelcomeGiftModal } from '@/components/ui/WelcomeGiftModal';

export const metadata: Metadata = {
  title: 'ALGO LAB — Plateforme Éducative | Bac Informatique Tunisie',
  description: 'Apprends à penser. Apprends à programmer. Plateforme interactive complète développée par Rayen Megadmin pour les élèves de 4SI 3 au Lycée Mixte Tataouine et toute la Tunisie.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen flex flex-col bg-brand-dark text-brand-text antialiased">
        <WelcomeGiftModal />
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
