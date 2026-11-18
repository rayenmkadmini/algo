import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lessonsData, modulesData } from '@/content/curriculum';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  BookOpen, 
  Code2, 
  Terminal, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
    lessonSlug: string;
  };
}

export default function LessonDetailPage({ params }: Props) {
  const lesson = lessonsData.find((l) => l.slug === params.lessonSlug);

  if (!lesson) {
    notFound();
  }

  const moduleItem = modulesData.find((m) => m.slug === lesson.moduleSlug);

  return (
    <div className="space-y-10">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-brand-muted">
        <Link href="/courses" className="hover:text-brand-cyan transition-colors">
          Modules
        </Link>
        <span>/</span>
        <Link href={`/courses/${moduleItem?.slug}`} className="hover:text-brand-cyan transition-colors">
          {moduleItem?.title}
        </Link>
        <span>/</span>
        <span className="text-brand-cyan font-semibold">{lesson.title}</span>
      </div>

      {/* Lesson Header Banner */}
      <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
              {lesson.verificationStatus}
            </span>
            <span className="text-xs text-brand-muted font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{lesson.durationMinutes} min de lecture & pratique</span>
            </span>
          </div>
          <span className="text-xs text-brand-muted font-mono">
            Source : {lesson.sourceReference}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-text mb-4">
          {lesson.title}
        </h1>

        {/* Objectives & Prerequisites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-brand-border/60 text-xs">
          <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
            <h4 className="font-bold text-brand-cyan uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-cyan" />
              <span>Objectifs Pédagogiques Officiels</span>
            </h4>
            <ul className="space-y-1.5 text-brand-text/90 list-disc list-inside">
              {lesson.learningObjectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Prérequis Indispensables</span>
            </h4>
            <ul className="space-y-1.5 text-brand-muted list-disc list-inside">
              {lesson.prerequisites.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 1. Scientific Definition (French) */}
      <section className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-md">
        <h2 className="text-base font-bold text-brand-text uppercase tracking-wider mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-brand-cyan" />
          <span>Définition Scientifique (Français)</span>
        </h2>
        <div className="text-sm text-brand-text/90 leading-relaxed whitespace-pre-line bg-brand-dark/50 p-4 rounded-lg border border-brand-border/40 font-normal">
          {lesson.frenchDefinition}
        </div>
      </section>

      {/* 2. Tunisian Derja Pedagogical Explanation */}
      <section className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Explication Pédagogique (Derja Tunisienne)</span>
          </h2>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
            تفسير بالدارجة
          </span>
        </div>
        <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-5">
          <p className="text-sm text-amber-100 leading-relaxed whitespace-pre-line text-right dir-rtl font-normal">
            {lesson.derjaExplanation}
          </p>
        </div>
      </section>

      {/* 3. Syntax Side-by-Side (Algorithmique vs Python) */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
          <Code2 className="w-4 h-4 text-brand-cyan" />
          <span>Comparaison Syntaxique : Algorithme ⇄ Python</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Algorithme side */}
          <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-brand-border text-xs text-brand-muted">
              <span className="font-bold text-brand-text">Convention Algorithmique Bac</span>
              <span className="font-mono text-[11px] text-brand-muted">Notation Papier</span>
            </div>
            <pre className="bg-brand-dark p-4 rounded-lg font-mono text-xs text-brand-text leading-relaxed overflow-x-auto whitespace-pre-wrap border border-brand-border/40">
              {lesson.algoSyntax}
            </pre>
          </div>

          {/* Python side */}
          <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-brand-border text-xs text-brand-muted">
              <span className="font-bold text-emerald-400">Syntaxe Python 3 Officielle</span>
              <span className="font-mono text-[11px] text-emerald-400">Code Machine</span>
            </div>
            <pre className="bg-brand-dark p-4 rounded-lg font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre-wrap border border-brand-border/40">
              {lesson.pythonSyntax}
            </pre>
          </div>
        </div>

        {/* Differences Notes */}
        {lesson.comparisonNotes && lesson.comparisonNotes.length > 0 && (
          <div className="bg-brand-card border border-brand-border rounded-xl p-4 text-xs text-brand-muted">
            <h4 className="font-bold text-brand-cyan uppercase mb-2">Points Clés de Différence :</h4>
            <ul className="space-y-1 list-disc list-inside">
              {lesson.comparisonNotes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 4. Detailed Step-by-Step Examples */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
          <Terminal className="w-4 h-4 text-brand-cyan" />
          <span>Exemples d&apos;Application Pratique</span>
        </h2>

        <div className="space-y-6">
          {lesson.examples.map((ex, i) => (
            <div key={i} className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-md space-y-4">
              <h3 className="text-sm font-bold text-brand-text">{ex.title}</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-brand-dark p-4 rounded-lg border border-brand-border/50">
                  <span className="text-[10px] font-mono text-brand-muted uppercase block mb-1">Algorithme :</span>
                  <pre className="font-mono text-xs text-brand-text leading-relaxed overflow-x-auto whitespace-pre-wrap">
                    {ex.algoCode}
                  </pre>
                </div>
                <div className="bg-brand-dark p-4 rounded-lg border border-brand-border/50">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">Python :</span>
                  <pre className="font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                    {ex.pythonCode}
                  </pre>
                </div>
              </div>

              <div className="text-xs text-brand-muted bg-brand-card p-3 rounded-lg border border-brand-border">
                <strong className="text-brand-text">Explication :</strong> {ex.explanation}
              </div>

              {ex.derjaTip && (
                <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-lg p-2.5 flex items-start gap-2">
                  <span className="text-[10px] font-bold text-brand-amber px-1.5 py-0.5 rounded bg-brand-amber/20 shrink-0">
                    نصيحة
                  </span>
                  <p className="text-xs text-amber-200/90 leading-relaxed text-right dir-rtl w-full">
                    {ex.derjaTip}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Common Mistakes to Avoid */}
      <section className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-md">
        <h2 className="text-base font-bold text-rose-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <span>Erreurs Fréquentes à Éviter au Bac</span>
        </h2>
        <ul className="space-y-2 text-xs text-brand-text/90">
          {lesson.commonMistakes.map((mistake, i) => (
            <li key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-brand-rose/10 border border-rose-500/20">
              <span className="text-rose-400 font-bold shrink-0">✕</span>
              <span>{mistake}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Summary */}
      <section className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-md">
        <h2 className="text-base font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>Résumé de l&apos;Essentiel</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {lesson.summaryPoints.map((pt, i) => (
            <div key={i} className="p-3 bg-brand-card rounded-lg border border-brand-border text-brand-text">
              ✓ {pt}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Next Actions CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-brand-card border border-brand-border rounded-2xl">
        <div>
          <h3 className="text-sm font-bold text-brand-text">Prêt à tester votre compréhension ?</h3>
          <p className="text-xs text-brand-muted">Passez aux exercices interactifs associés à cette leçon.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/visualizer"
            className="px-4 py-2 rounded-lg bg-brand-surface hover:bg-brand-elevated text-brand-text text-xs font-semibold border border-brand-border"
          >
            Ouvrir le Visualiseur
          </Link>
          <Link
            href="/exercises"
            className="px-5 py-2 rounded-lg bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark text-xs font-bold flex items-center gap-1.5 shadow-md"
          >
            <span>Faire les exercices</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
