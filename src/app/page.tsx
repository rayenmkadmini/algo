import React from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Terminal, 
  Layers, 
  CheckSquare, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  BookOpen, 
  Database,
  BarChart3
} from 'lucide-react';
import { modulesData, lessonsData } from '@/content/curriculum';
import { exercisesData } from '@/content/exercises';
import { examsData } from '@/content/exams';

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 lg:pt-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Conforme au Programme Officiel Bac Informatique 2026–2027</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.15]">
              Apprends à penser.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyanHover">
                Apprends à programmer.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl">
              Maîtrise l&apos;algorithmique et Python avec des cours illustrés, des exercices interactifs et une préparation adaptée au Baccalauréat Informatique tunisien.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/courses"
                className="px-6 py-3.5 rounded-xl bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-bold text-sm flex items-center gap-2 shadow-xl shadow-brand-cyan/20 transition-all hover:scale-[1.02]"
              >
                <span>Commencer à apprendre</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/visualizer"
                className="px-6 py-3.5 rounded-xl bg-brand-card hover:bg-brand-elevated text-brand-text font-semibold text-sm border border-brand-border flex items-center gap-2 transition-all hover:border-brand-cyan/40"
              >
                <Layers className="w-4 h-4 text-brand-cyan" />
                <span>Simulateur d&apos;algorithmes</span>
              </Link>
            </div>

            {/* Educational Philosophy Tag */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Explications Français + Derja</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span>Zéro Dépendance IA (Corrigés 100% Vérifiés)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Notation Officielle Algorithme & Python</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code & Algo Comparison Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-brand-surface border border-brand-border shadow-2xl p-6 overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-border text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-brand-cyan text-[11px]">Bac SI : Algorithme ⇄ Python</span>
              </div>

              {/* Algorithm Side */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase font-bold text-brand-muted block mb-1">
                  1. Algorithmique (Syllabus officiel) :
                </span>
                <pre className="p-3 bg-brand-dark/90 rounded-lg font-mono text-[11px] text-brand-text leading-relaxed border border-brand-border/40 overflow-x-auto">
{`Fonction Som_Diviseurs (x : entier) : entier
Début
    S ← 0
    Pour i de 1 à x div 2 Faire
        Si x mod i = 0 Alors
            S ← S + i
        FinSi
    FinPour
    Retourner S
Fin`}
                </pre>
              </div>

              {/* Python Side */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase font-bold text-brand-cyan block mb-1">
                  2. Traduction Python conforme :
                </span>
                <pre className="p-3 bg-brand-dark/90 rounded-lg font-mono text-[11px] text-emerald-300 leading-relaxed border border-brand-border/40 overflow-x-auto">
{`def som_diviseurs(x):
    s = 0
    for i in range(1, (x // 2) + 1):
        if x % i == 0:
            s += i
    return s`}
                </pre>
              </div>

              {/* Derja Callout */}
              <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-lg p-2.5 flex items-start gap-2">
                <span className="text-[10px] font-bold text-brand-amber px-1.5 py-0.5 rounded bg-brand-amber/20 shrink-0">
                  تفسير
                </span>
                <p className="text-[11px] text-amber-200/90 leading-relaxed text-right dir-rtl w-full">
                  الـ boucle تقف عند (x div 2) على خاطر مستحيل تلقى قاسم أكبر من شطر العدد إلا هو بيدو.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & CURRICULUM OVERVIEW */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-brand-surface border border-brand-border rounded-2xl shadow-lg">
        <div className="p-4 border-r border-brand-border/40 last:border-0">
          <span className="text-2xl sm:text-3xl font-extrabold text-brand-cyan font-mono block">
            {modulesData.length} Modules
          </span>
          <span className="text-xs text-brand-muted">Du programme officiel Bac SI</span>
        </div>
        <div className="p-4 border-r border-brand-border/40 last:border-0">
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono block">
            {lessonsData.length}+ Leçons
          </span>
          <span className="text-xs text-brand-muted">Structurées & bilingues (FR + Derja)</span>
        </div>
        <div className="p-4 border-r border-brand-border/40 last:border-0">
          <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono block">
            {exercisesData.length}+ Exercices
          </span>
          <span className="text-xs text-brand-muted">QCM, complétion & débogage</span>
        </div>
        <div className="p-4">
          <span className="text-2xl sm:text-3xl font-extrabold text-brand-text font-mono block">
            {examsData.length} Épreuves
          </span>
          <span className="text-xs text-brand-muted">Sujets Bac officiels avec corrigés /20</span>
        </div>
      </section>

      {/* 3. POURQUOI ALGO LAB ? */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
            Pourquoi ALGO LAB fait la différence ?
          </h2>
          <p className="text-sm text-brand-muted">
            L&apos;apprentissage de l&apos;algorithmique souffre souvent d&apos;abstractions difficiles à visualiser et d&apos;incompréhensions syntaxiques entre l&apos;algorithme papier et le code Python.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-cyan/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-cyan mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-text mb-2">Comprendre la Logique Réelle</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Pas de mémorisation bête. Chaque algorithme est décomposé étape par étape avec la justification mathématique et algorithmique de chaque instruction.
            </p>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-cyan/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-text mb-2">Visualisation Interactive</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Voyez les tableaux se trier, observez les indices i et j se déplacer et visualisez la pile d&apos;appels récursive monter et descendre en mémoire.
            </p>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-cyan/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-400/15 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-text mb-2">Conformité Bac Tunisie</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Strict respect des conventions d&apos;inspection : tableaux de déclaration (TDO, TDOL, TDNT), passage par référence (@), et modules usuels exigés au Bac.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MODULES DU PROGRAMME BAC SI */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
              Modules d&apos;Algorithmique & Python
            </h2>
            <p className="text-sm text-brand-muted">
              Explorez le tronc commun officiel de la 4ème année Sciences de l&apos;Informatique.
            </p>
          </div>
          <Link
            href="/courses"
            className="text-xs font-semibold text-brand-cyan hover:underline flex items-center gap-1"
          >
            <span>Voir tous les modules</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulesData.slice(0, 6).map((m) => (
            <Link
              key={m.id}
              href={`/courses/${m.slug}`}
              className="group bg-brand-surface border border-brand-border hover:border-brand-cyan/50 rounded-xl p-5 flex flex-col justify-between transition-all hover:scale-[1.01] shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-elevated text-brand-cyan border border-brand-border">
                    {m.verificationStatus}
                  </span>
                  <span className="text-xs text-brand-muted font-mono">{m.durationHours}h estimées</span>
                </div>
                <h3 className="text-base font-bold text-brand-text group-hover:text-brand-cyan transition-colors mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  {m.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-cyan">
                <span>{m.chaptersCount} chapitres</span>
                <span className="group-hover:translate-x-1 transition-transform">Accéder →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. VISUALISATEURS D'ALGORITHMES CTA */}
      <section className="bg-gradient-to-r from-brand-surface to-brand-card border border-brand-border rounded-2xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>Moteur Visuel Interactif</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text">
            Comprenez enfin ce qui se passe à l&apos;intérieur de la mémoire
          </h2>
          <p className="text-sm text-brand-muted leading-relaxed">
            Testez nos simulateurs pas à pas : tri à bulles optimisé, tri par sélection, tri par insertion, organigrammes (flowcharts) et empilement de la récursivité.
          </p>
          <div className="pt-2">
            <Link
              href="/visualizer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-bold text-sm shadow-lg shadow-brand-cyan/20 transition-all"
            >
              <span>Lancer les visualiseurs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CONSOLE PYTHON BAC CTA */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-brand-surface border border-brand-border rounded-2xl p-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Playground Sécurisé Sans Installation</span>
          </div>
          <h2 className="text-2xl font-bold text-brand-text">
            Pratiquez Python directement dans votre navigateur
          </h2>
          <p className="text-xs text-brand-muted leading-relaxed">
            Exécutez les algorithmes du Bac sans quitter la plateforme. Testez la somme des diviseurs, les tableaux NumPy, les fonctions récursives et observez les sorties console en temps réel.
          </p>
          <Link
            href="/playground"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-card hover:bg-brand-elevated text-brand-text border border-brand-border text-xs font-semibold hover:border-brand-cyan/40 transition-colors"
          >
            <span>Ouvrir le Playground</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
          </Link>
        </div>

        <div className="bg-brand-dark p-4 rounded-xl border border-brand-border font-mono text-xs text-brand-muted">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-brand-border/40 text-[11px]">
            <span className="text-brand-cyan">test_bac.py</span>
            <span className="text-emerald-400">● Bac Informatique</span>
          </div>
          <pre className="text-brand-text text-[11px] leading-relaxed overflow-x-auto">
{`from numpy import array

# Tri à bulles optimisé officiel Bac
T = array([45, 12, 89, 34, 23])
print("Tableau initial :", T)
# Exécution pas à pas en console...`}
          </pre>
        </div>
      </section>
    </div>
  );
}
