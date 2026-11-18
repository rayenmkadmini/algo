import React from 'react';
import Link from 'next/link';
import { modulesData } from '@/content/curriculum';
import { BookOpen, ArrowRight, ShieldCheck, Clock, Layers } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-brand-border pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curriculum Officiel Baccalauréat Informatique</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-2">
          Tous les Modules de Cours
        </h1>
        <p className="text-sm text-brand-muted max-w-3xl leading-relaxed">
          Programme complet de la 4ème année Sciences de l&apos;Informatique. Chaque module comprend la rigueur théorique en français et les éclaircissements intuitifs en Derja tunisienne.
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modulesData.map((module) => (
          <div
            key={module.id}
            className="bg-brand-surface border border-brand-border hover:border-brand-cyan/50 rounded-2xl p-6 flex flex-col justify-between shadow-lg transition-all hover:scale-[1.01]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-elevated text-brand-cyan border border-brand-border">
                  {module.verificationStatus}
                </span>
                <div className="flex items-center gap-1 text-xs text-brand-muted font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{module.durationHours}h</span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-brand-text mb-1">
                {module.title}
              </h2>
              <p className="text-xs text-brand-cyan font-medium mb-3">
                {module.tagline}
              </p>
              <p className="text-xs text-brand-muted leading-relaxed mb-6">
                {module.description}
              </p>
            </div>

            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
              <span className="text-xs text-brand-muted">
                {module.chaptersCount} chapitres officiels
              </span>
              <Link
                href={`/courses/${module.slug}`}
                className="px-4 py-2 rounded-lg bg-brand-card hover:bg-brand-cyan hover:text-brand-dark text-brand-text text-xs font-semibold border border-brand-border flex items-center gap-1.5 transition-all"
              >
                <span>Accéder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
