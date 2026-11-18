'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  User, 
  BookOpen, 
  CheckSquare, 
  Award, 
  Clock, 
  ArrowRight, 
  Bookmark, 
  RotateCcw,
  BarChart2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { getLocalProgress, saveLocalProgress } from '@/lib/progress';
import { lessonsData, modulesData } from '@/content/curriculum';
import { exercisesData } from '@/content/exercises';
import { StudentProgress } from '@/types';

export default function DashboardPage() {
  const [progress, setProgress] = useState<StudentProgress | null>(null);

  useEffect(() => {
    setProgress(getLocalProgress());
  }, []);

  if (!progress) {
    return (
      <div className="py-20 text-center text-brand-muted text-sm">
        Chargement de votre progression...
      </div>
    );
  }

  const completedLessonsCount = progress.completedLessonSlugs.length;
  const completedExercisesCount = progress.completedExerciseSlugs.length;
  const totalScoreValues = Object.values(progress.scores);
  const averageScore = totalScoreValues.length > 0
    ? Math.round(totalScoreValues.reduce((a, b) => a + b, 0) / totalScoreValues.length)
    : 0;

  // Recommended next lesson: first uncompleted lesson
  const recommendedLesson = lessonsData.find(
    (l) => !progress.completedLessonSlugs.includes(l.slug)
  ) || lessonsData[0];

  const handleClearProgress = () => {
    if (window.confirm("Voulez-vous réinitialiser votre progression locale ?")) {
      const reset: StudentProgress = {
        completedLessonSlugs: [],
        completedExerciseSlugs: [],
        scores: {},
        bookmarks: [],
        recentActivity: [],
      };
      saveLocalProgress(reset);
      setProgress(reset);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-border pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-semibold mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Espace Élève Bac Informatique</span>
          </div>
          <h1 className="text-3xl font-extrabold text-brand-text">
            Tableau de Bord Personnel
          </h1>
          <p className="text-xs text-brand-muted mt-1">
            Suivi temps réel de votre préparation sans dépendance de compte obligatoire.
          </p>
        </div>

        <button
          onClick={handleClearProgress}
          className="px-3 py-1.5 rounded-lg bg-brand-card hover:bg-brand-elevated text-brand-muted hover:text-brand-text text-xs border border-brand-border flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Réinitialiser les données</span>
        </button>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <div className="flex items-center justify-between text-brand-muted text-xs mb-2">
            <span>Leçons Complétées</span>
            <BookOpen className="w-4 h-4 text-brand-cyan" />
          </div>
          <div className="text-2xl font-bold font-mono text-brand-text">
            {completedLessonsCount} / {lessonsData.length}
          </div>
          <div className="mt-2 text-[11px] text-brand-muted">
            {Math.round((completedLessonsCount / (lessonsData.length || 1)) * 100)}% du programme officiel
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <div className="flex items-center justify-between text-brand-muted text-xs mb-2">
            <span>Exercices Résolus</span>
            <CheckSquare className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-400">
            {completedExercisesCount} / {exercisesData.length}
          </div>
          <div className="mt-2 text-[11px] text-brand-muted">
            {exercisesData.length - completedExercisesCount} exercices restants
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <div className="flex items-center justify-between text-brand-muted text-xs mb-2">
            <span>Moyenne aux Tests</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-amber-400">
            {averageScore} / 100
          </div>
          <div className="mt-2 text-[11px] text-brand-muted">
            Sur {totalScoreValues.length} tentative(s)
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <div className="flex items-center justify-between text-brand-muted text-xs mb-2">
            <span>Année Scolaire</span>
            <Calendar className="w-4 h-4 text-brand-cyan" />
          </div>
          <div className="text-2xl font-bold font-mono text-brand-text">
            2026–2027
          </div>
          <div className="mt-2 text-[11px] text-brand-cyan">
            Bac Sciences de l&apos;Informatique
          </div>
        </div>
      </div>

      {/* Recommended Next Lesson Card */}
      {recommendedLesson && (
        <div className="bg-gradient-to-r from-brand-surface to-brand-card border border-brand-border rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prochaine Étape Recommandée par le Programme</span>
            </div>
            <h3 className="text-xl font-bold text-brand-text">
              {recommendedLesson.title}
            </h3>
            <p className="text-xs text-brand-muted max-w-2xl leading-relaxed">
              {recommendedLesson.frenchDefinition.slice(0, 140)}...
            </p>
          </div>

          <Link
            href={`/courses/${recommendedLesson.moduleSlug}/${recommendedLesson.slug}`}
            className="px-6 py-3 rounded-xl bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-bold text-xs flex items-center gap-2 shadow-lg shadow-brand-cyan/20 shrink-0 transition-all"
          >
            <span>Démarrer cette leçon</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Activity and Exercises Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <h3 className="text-sm font-bold text-brand-text mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-cyan" />
            <span>Historique Récent des Activités</span>
          </h3>

          {progress.recentActivity.length > 0 ? (
            <div className="space-y-3">
              {progress.recentActivity.map((act, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-brand-card border border-brand-border text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                    <div>
                      <p className="font-semibold text-brand-text">{act.title}</p>
                      <span className="text-[10px] text-brand-muted">
                        {new Date(act.timestamp).toLocaleDateString()} à {new Date(act.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                  {act.score !== undefined && (
                    <span className="font-mono font-bold text-emerald-400">
                      {act.score}/100
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-brand-muted italic py-6 text-center">
              Aucune activité enregistrée pour le moment. Commencez par explorer une leçon ou un exercice !
            </p>
          )}
        </div>

        {/* Exercises Status */}
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <h3 className="text-sm font-bold text-brand-text mb-4 flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-emerald-400" />
            <span>Scores aux Exercices Résolus</span>
          </h3>

          <div className="space-y-3">
            {exercisesData.map((ex) => {
              const isDone = progress.completedExerciseSlugs.includes(ex.slug);
              const score = progress.scores[ex.slug];

              return (
                <div
                  key={ex.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-brand-card border border-brand-border text-xs"
                >
                  <div>
                    <p className="font-semibold text-brand-text">{ex.title}</p>
                    <span className="text-[10px] text-brand-muted uppercase">
                      {ex.type.replace('_', ' ')} • {ex.difficulty}
                    </span>
                  </div>

                  {isDone ? (
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                      {score}/100
                    </span>
                  ) : (
                    <Link
                      href={`/exercises/${ex.slug}`}
                      className="text-xs text-brand-cyan hover:underline"
                    >
                      À faire →
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
