'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Code2, 
  BookOpen, 
  Terminal, 
  Layers, 
  CheckSquare, 
  FileText, 
  User, 
  Menu, 
  X,
  ShieldAlert,
  Flame,
  Gift,
  Heart
} from 'lucide-react';

const NAV_LINKS = [
  { href: '/courses', label: 'Cours & Leçons', icon: BookOpen },
  { href: '/visualizer', label: 'Simulateurs 3D', icon: Layers, highlight: true },
  { href: '/exercises', label: 'Exercices', icon: CheckSquare },
  { href: '/playground', label: 'Playground Python', icon: Terminal },
  { href: '/exams', label: 'Épreuves Bac', icon: FileText },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openTributeModal = () => {
    window.dispatchEvent(new CustomEvent('open-tribute-modal'));
  };

  return (
    <header className="sticky top-0 z-50 bg-[#060B14]/85 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with ambient glow */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 opacity-60 blur group-hover:opacity-100 transition duration-300" />
              <div className="relative w-11 h-11 rounded-xl bg-[#09111E] border border-white/15 flex items-center justify-center shadow-2xl">
                <Code2 className="w-6 h-6 text-cyan-400 group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white">
                  ALGO<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">LAB</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30">
                  <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>BAC 2027</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block tracking-wide font-medium">
                Learn the logic. Master the code.
              </p>
            </div>
          </Link>

          {/* Tribute button: 4SI 3 Lycée Mixte Tataouine */}
          <button
            onClick={openTributeModal}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-indigo-500/10 border border-amber-500/30 text-amber-300 hover:text-white hover:border-amber-400 transition-all text-xs font-bold group shadow-sm"
            title="Cadeau de Rayen Megadmin pour 4SI 3 Lycée Mixte Tataouine"
          >
            <Gift className="w-3.5 h-3.5 text-amber-400 group-hover:scale-125 transition-transform" />
            <span>4SI 3 • Lycée Mixte Tataouine</span>
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400 ml-0.5 animate-pulse" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0B1524]/70 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-300 border border-cyan-400/40 shadow-lg shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Dashboard & Admin */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <User className="w-3.5 h-3.5" />
              <span>Mon Espace</span>
              <span className="px-1.5 py-0.2 rounded bg-black/25 text-[10px] font-mono">20/20</span>
            </Link>

            <Link
              href="/admin"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
              title="Portail Enseignant"
            >
              <ShieldAlert className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1220]/95 border-b border-white/10 px-5 pt-3 pb-6 space-y-2 backdrop-blur-2xl">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openTributeModal();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-cyan-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs"
          >
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-amber-400" />
              <span>Cadeau pour 4SI 3 Lycée Mixte Tataouine</span>
            </div>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          </button>

          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold shadow-lg shadow-cyan-500/20"
            >
              <User className="w-4 h-4" />
              <span>Tableau de bord élève (Objectif 20)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
