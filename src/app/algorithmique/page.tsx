import React from 'react';
import Link from 'next/link';
import { Code2, ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { lessonsData } from '@/content/curriculum';

export default function AlgorithmiqueSectionPage() {
  return (
    <div className="space-y-10">
      {/* Banner */}
      <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-semibold mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>Section Algorithmique</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-2">
          L&apos;Algorithmique selon la Norme Tunisienne
        </h1>
        <p className="text-sm text-brand-muted max-w-3xl leading-relaxed">
          Maîtrisez la démarche de résolution de problème, la syntaxe officielle d&apos;inspection, la rigueur des tableaux de déclaration (TDO, TDOL, TDNT) et la modélisation avant le passage au code machine.
        </p>
      </div>

      {/* Notation Rules Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-brand-cyan mb-2">1. Tableaux de Déclaration</h3>
          <p className="text-xs text-brand-muted leading-relaxed mb-3">
            Au Bac, aucun identificateur n&apos;est toléré sans déclaration formelle dans le TDO (Objets globaux) ou TDOL (Objets locaux d&apos;un sous-programme).
          </p>
          <div className="bg-brand-dark p-3 rounded font-mono text-[11px] text-brand-text">
            Objet | Type/Nature | Rôle<br />
            T | Tableau | Vecteur des notes<br />
            i | Entier | Compteur de boucle
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-amber-400 mb-2">2. Modularité Stricte</h3>
          <p className="text-xs text-brand-muted leading-relaxed mb-3">
            Séparation nette entre Fonctions (résultat simple unique via Retourner) et Procédures (modifications multiples via le symbole @).
          </p>
          <div className="bg-brand-dark p-3 rounded font-mono text-[11px] text-brand-text">
            Fonction Somme(a, b : entier) : entier<br />
            Procédure Permuter(@x, @y : entier)
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-emerald-400 mb-2">3. Structures de Contrôle</h3>
          <p className="text-xs text-brand-muted leading-relaxed mb-3">
            Conventions officielles : Pour .. Faire, Tant que .. Faire, Répéter .. Jusqu&apos;à, Si .. Alors .. Sinon .. FinSi, et Selon .. Faire.
          </p>
          <div className="bg-brand-dark p-3 rounded font-mono text-[11px] text-brand-text">
            Pour i de 0 à n - 1 Faire<br />
            &nbsp;&nbsp;Ecrire(T[i])<br />
            FinPour
          </div>
        </div>
      </div>

      {/* Algorithmic Lessons List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-brand-text">Leçons Spécifiques à l&apos;Algorithmique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessonsData.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-brand-surface border border-brand-border rounded-xl p-5 flex flex-col justify-between hover:border-brand-cyan/40 transition-colors"
            >
              <div>
                <span className="text-[11px] font-mono text-brand-cyan block mb-1">
                  Module : {lesson.moduleSlug}
                </span>
                <h3 className="text-base font-bold text-brand-text mb-2">{lesson.title}</h3>
                <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed mb-4">
                  {lesson.frenchDefinition}
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-brand-border/60">
                <span className="text-xs text-brand-muted font-mono">{lesson.durationMinutes} min</span>
                <Link
                  href={`/courses/${lesson.moduleSlug}/${lesson.slug}`}
                  className="text-xs font-semibold text-brand-cyan hover:underline flex items-center gap-1"
                >
                  <span>Étudier l&apos;algorithme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
