import React from 'react';
import Link from 'next/link';
import { Code2, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-surface border-t border-brand-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-brand-cyan" />
              </div>
              <span className="text-lg font-bold text-brand-text">
                ALGO<span className="text-brand-cyan">LAB</span>
              </span>
            </Link>
            <p className="text-xs text-brand-muted leading-relaxed mb-4">
              Plateforme éducative indépendante dédiée à l&apos;apprentissage de l&apos;Algorithmique et de Python pour le Baccalauréat Sciences de l&apos;Informatique en Tunisie.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-card border border-brand-border text-[11px] text-brand-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Conforme Syllabus Bac 2026–2027</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text mb-3">
              Programme Officiel
            </h4>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li>
                <Link href="/courses/structures-simples" className="hover:text-brand-cyan transition-colors">
                  Structures Simples & Opérateurs
                </Link>
              </li>
              <li>
                <Link href="/courses/structures-de-controle" className="hover:text-brand-cyan transition-colors">
                  Structures de Contrôle
                </Link>
              </li>
              <li>
                <Link href="/courses/tableaux-et-matrices" className="hover:text-brand-cyan transition-colors">
                  Tableaux & Matrices
                </Link>
              </li>
              <li>
                <Link href="/courses/sous-programmes" className="hover:text-brand-cyan transition-colors">
                  Fonctions & Procédures
                </Link>
              </li>
              <li>
                <Link href="/courses/recursivite" className="hover:text-brand-cyan transition-colors">
                  La Récursivité
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Visualizers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text mb-3">
              Outils Interactifs
            </h4>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li>
                <Link href="/visualizer" className="hover:text-brand-cyan transition-colors">
                  Simulateur de Tris (Bulles, Sélection...)
                </Link>
              </li>
              <li>
                <Link href="/visualizer" className="hover:text-brand-cyan transition-colors">
                  Visualiseur de Pile Récursive
                </Link>
              </li>
              <li>
                <Link href="/playground" className="hover:text-brand-cyan transition-colors">
                  Console Python Bac
                </Link>
              </li>
              <li>
                <Link href="/exercises" className="hover:text-brand-cyan transition-colors">
                  Banque d&apos;exercices QCM & Code
                </Link>
              </li>
              <li>
                <Link href="/exams" className="hover:text-brand-cyan transition-colors">
                  Simulateur d&apos;Épreuves Baccalauréat
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Philosophy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text mb-3">
              Philosophie Pédagogique
            </h4>
            <div className="bg-brand-card p-3 rounded-lg border border-brand-border text-xs text-brand-muted leading-relaxed">
              <p className="font-semibold text-brand-text mb-1">
                Comprendre → Visualiser → Pratiquer → Maîtriser
              </p>
              <p>
                Rigueur scientifique en français combinée à des explications intuitives en Derja tunisienne pour ancrer la logique algorithmique.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>© 2026–2027 ALGO LAB. Plateforme éducative pour le Baccalauréat Informatique tunisien.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-brand-text">À propos</Link>
            <Link href="/admin" className="hover:text-brand-text">Administration</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
