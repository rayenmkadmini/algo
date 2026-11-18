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
  ShieldAlert
} from 'lucide-react';

const NAV_LINKS = [
  { href: '/courses', label: 'Cours', icon: BookOpen },
  { href: '/algorithmique', label: 'Algorithmique', icon: Code2 },
  { href: '/python', label: 'Python', icon: Terminal },
  { href: '/visualizer', label: 'Visualiseurs', icon: Layers },
  { href: '/exercises', label: 'Exercices', icon: CheckSquare },
  { href: '/playground', label: 'Playground', icon: Terminal },
  { href: '/exams', label: 'Examens Bac', icon: FileText },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-cyanHover p-0.5 shadow-lg shadow-brand-cyan/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-brand-cyan" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-brand-text">
                  ALGO<span className="text-brand-cyan">LAB</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                  BAC SI
                </span>
              </div>
              <p className="text-[10px] text-brand-muted hidden sm:block tracking-wide">
                Learn the logic. Master the code.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30'
                      : 'text-brand-muted hover:text-brand-text hover:bg-brand-surface'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/dashboard"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-card hover:bg-brand-elevated text-brand-text border border-brand-border flex items-center gap-1.5 transition-colors"
            >
              <User className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Tableau de bord</span>
            </Link>

            <Link
              href="/admin"
              className="p-2 rounded-lg text-brand-muted hover:text-brand-cyan hover:bg-brand-surface border border-transparent hover:border-brand-border transition-colors"
              title="Administration"
            >
              <ShieldAlert className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-muted hover:text-brand-text hover:bg-brand-surface"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-surface border-b border-brand-border px-4 pt-2 pb-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-brand-cyan/20 text-brand-cyan font-bold'
                    : 'text-brand-muted hover:text-brand-text hover:bg-brand-card'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-2 border-t border-brand-border/60 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-brand-card text-brand-text text-sm font-medium border border-brand-border"
            >
              <User className="w-4 h-4 text-brand-cyan" />
              <span>Tableau de bord élève</span>
            </Link>
            <Link
              href="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-brand-elevated text-brand-muted text-sm font-medium"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Espace Enseignant / Admin</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
