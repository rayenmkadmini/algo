import React from 'react';
import Link from 'next/link';
import { examsData } from '@/content/exams';
import { FileText, Clock, ArrowRight, Award, ShieldCheck } from 'lucide-react';

export default function ExamsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-brand-border pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-semibold mb-3">
          <FileText className="w-3.5 h-3.5" />
          <span>Épreuves Officielles du Baccalauréat</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-2">
          Annales & Examens Blancs Bac Informatique
        </h1>
        <p className="text-sm text-brand-muted max-w-3xl leading-relaxed">
          Entraînez-vous dans les conditions réelles du Baccalauréat tunisien : chronomètre officiel, barème détaillé sur 20 points, et corrigés types étape par étape.
        </p>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examsData.map((exam) => (
          <div
            key={exam.id}
            className="bg-brand-surface border border-brand-border hover:border-brand-cyan/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                  Session {exam.session} {exam.year}
                </span>
                <span className="text-xs text-brand-muted font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>{exam.durationMinutes} minutes</span>
                </span>
              </div>

              <h2 className="text-lg font-bold text-brand-text mb-2">
                {exam.title}
              </h2>

              <p className="text-xs text-brand-muted leading-relaxed mb-4">
                {exam.description}
              </p>

              <div className="bg-brand-card p-3 rounded-xl border border-brand-border text-xs mb-6 space-y-1">
                <div className="flex justify-between text-brand-muted">
                  <span>Nature de l&apos;épreuve :</span>
                  <span className="font-semibold text-brand-text">{exam.type}</span>
                </div>
                <div className="flex justify-between text-brand-muted">
                  <span>Nombre de questions :</span>
                  <span className="font-semibold text-brand-text">{exam.questions.length} exercices</span>
                </div>
                <div className="flex justify-between text-brand-muted">
                  <span>Barème officiel :</span>
                  <span className="font-semibold text-emerald-400">Noté sur {exam.totalPoints} points</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-brand-muted">
                Réf : {exam.sourceReference}
              </span>
              <Link
                href={`/exams/${exam.slug}`}
                className="px-5 py-2.5 rounded-xl bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-brand-cyan/20 transition-all"
              >
                <span>Démarrer l&apos;épreuve</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
