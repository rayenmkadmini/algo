import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { modulesData, chaptersData, lessonsData } from '@/content/curriculum';
import { BookOpen, ArrowLeft, ArrowRight, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export default function ModuleDetailPage({ params }: Props) {
  const moduleItem = modulesData.find((m) => m.slug === params.slug);

  if (!moduleItem) {
    notFound();
  }

  const moduleChapters = chaptersData.filter((c) => c.moduleSlug === moduleItem.slug);
  const moduleLessons = lessonsData.filter((l) => l.moduleSlug === moduleItem.slug);

  return (
    <div className="space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-cyan transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour à tous les modules</span>
        </Link>
      </div>

      {/* Module Banner */}
      <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            {moduleItem.verificationStatus}
          </span>
          <span className="text-xs text-brand-muted font-mono flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Volume horaire estimé : {moduleItem.durationHours} heures</span>
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-brand-text mb-2">
          {moduleItem.title}
        </h1>
        <p className="text-sm text-brand-cyan font-medium mb-4">
          {moduleItem.tagline}
        </p>
        <p className="text-sm text-brand-muted leading-relaxed max-w-3xl">
          {moduleItem.description}
        </p>
      </div>

      {/* Chapters & Lessons List */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-brand-text">
          Chapitres et Leçons du Module ({moduleLessons.length} leçons disponibles)
        </h2>

        {moduleLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moduleLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-brand-surface border border-brand-border hover:border-brand-cyan/50 rounded-xl p-5 flex flex-col justify-between shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-brand-cyan">
                      Leçon {lesson.orderIndex}
                    </span>
                    <span className="text-xs text-brand-muted font-mono">
                      {lesson.durationMinutes} min
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-brand-text mb-2">
                    {lesson.title}
                  </h3>

                  <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed mb-4">
                    {lesson.frenchDefinition}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-[11px] text-amber-400 font-medium">
                    Explications FR + Derja incluses
                  </span>
                  <Link
                    href={`/courses/${moduleItem.slug}/${lesson.slug}`}
                    className="px-3 py-1.5 rounded-lg bg-brand-card hover:bg-brand-cyan hover:text-brand-dark text-brand-text text-xs font-semibold border border-brand-border flex items-center gap-1 transition-all"
                  >
                    <span>Étudier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-brand-surface rounded-xl border border-brand-border text-brand-muted text-sm">
            Les fiches pédagogiques de ce module sont en cours de mise en forme conforme. Consultez les modules voisins !
          </div>
        )}
      </div>
    </div>
  );
}
