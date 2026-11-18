'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { exercisesData } from '@/content/exercises';
import { ExerciseType, DifficultyLevel } from '@/types';
import { CheckSquare, ArrowRight, Filter, Search, Award } from 'lucide-react';
import { getLocalProgress } from '@/lib/progress';

export default function ExercisesPage() {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const progress = typeof window !== 'undefined' ? getLocalProgress() : null;

  const filtered = exercisesData.filter((ex) => {
    if (filterType !== 'all' && ex.type !== filterType) return false;
    if (filterDifficulty !== 'all' && ex.difficulty !== filterDifficulty) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return ex.title.toLowerCase().includes(q) || ex.statement.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-brand-border pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-semibold mb-3">
          <CheckSquare className="w-3.5 h-3.5" />
          <span>Banque d&apos;Exercices Officiels Bac SI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-2">
          Exercices Interactifs & Corrigés Détaillés
        </h1>
        <p className="text-sm text-brand-muted max-w-3xl leading-relaxed">
          Pratiquez les 10 types d&apos;exercices incontournables du Bac : QCM, complétion de fonctions, détection d&apos;erreurs, calcul de traces et questions d&apos;épreuves réelles.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-brand-surface p-4 rounded-xl border border-brand-border">
        {/* Search */}
        <div className="flex-1 min-w-[240px] flex items-center gap-2 bg-brand-card border border-brand-border rounded-lg px-3 py-2 text-xs">
          <Search className="w-4 h-4 text-brand-muted" />
          <input
            type="text"
            placeholder="Rechercher par mot-clé (tri, récursivité, diviseurs...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-brand-text focus:outline-none"
          />
        </div>

        {/* Filter Type */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-brand-muted">Type :</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-brand-card border border-brand-border rounded-lg px-3 py-2 text-brand-text focus:outline-none focus:border-brand-cyan cursor-pointer"
          >
            <option value="all">Tous les types</option>
            <option value="qcm">QCM</option>
            <option value="algo_completion">Compléter un algorithme</option>
            <option value="function_completion">Compléter une fonction</option>
            <option value="debugging">Débogage</option>
            <option value="trace_execution">Trace d&apos;exécution</option>
          </select>
        </div>

        {/* Filter Difficulty */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-brand-muted">Difficulté :</span>
          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="bg-brand-card border border-brand-border rounded-lg px-3 py-2 text-brand-text focus:outline-none focus:border-brand-cyan cursor-pointer"
          >
            <option value="all">Toutes</option>
            <option value="facile">Facile</option>
            <option value="moyen">Moyen</option>
            <option value="difficile">Difficile</option>
            <option value="niveau_bac">Niveau Bac</option>
          </select>
        </div>
      </div>

      {/* Exercises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((ex) => {
          const isDone = progress?.completedExerciseSlugs.includes(ex.slug);
          const score = progress?.scores[ex.slug];

          return (
            <div
              key={ex.id}
              className="bg-brand-surface border border-brand-border hover:border-brand-cyan/40 rounded-xl p-5 flex flex-col justify-between shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                    {ex.type.replace('_', ' ')}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-brand-muted font-medium capitalize">
                      {ex.difficulty.replace('_', ' ')}
                    </span>
                    {isDone && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Score : {score}/100
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold text-brand-text mb-2">
                  {ex.title}
                </h3>
                <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed mb-4">
                  {ex.statement}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-brand-muted">
                  {ex.hints.length} indices progressifs
                </span>
                <Link
                  href={`/exercises/${ex.slug}`}
                  className="px-4 py-2 rounded-lg bg-brand-card hover:bg-brand-cyan hover:text-brand-dark text-brand-text text-xs font-semibold border border-brand-border flex items-center gap-1.5 transition-all"
                >
                  <span>{isDone ? 'Recommencer' : 'Résoudre'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
