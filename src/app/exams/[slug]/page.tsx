'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { examsData } from '@/content/exams';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  Award, 
  AlertCircle,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export default function ExamSimulationPage({ params }: Props) {
  const exam = examsData.find((e) => e.slug === params.slug);

  if (!exam) {
    notFound();
  }

  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(exam.durationMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isTimerRunning && secondsRemaining > 0 && !isSubmitted) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            setIsSubmitted(true);
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, secondsRemaining, isSubmitted]);

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQuestion = exam.questions[activeQuestionIndex];

  const handleAnswerChange = (text: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: text,
    }));
  };

  const toggleSolution = (qId: string) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Top Bar with Timer */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-brand-surface border border-brand-border rounded-xl p-4 sticky top-20 z-40 shadow-lg">
        <div>
          <Link
            href="/exams"
            className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-cyan transition-colors mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quitter l&apos;épreuve</span>
          </Link>
          <h2 className="text-sm font-bold text-brand-text truncate max-w-md">
            {exam.title}
          </h2>
        </div>

        {/* Timer Box */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-brand-dark px-4 py-2 rounded-lg border border-brand-border">
            <Clock className={`w-4 h-4 ${secondsRemaining < 300 ? 'text-rose-400 animate-pulse' : 'text-brand-cyan'}`} />
            <span className="font-mono text-sm font-bold text-brand-text">
              {formatTime(secondsRemaining)}
            </span>
          </div>

          {!isSubmitted && (
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-2 rounded-lg bg-brand-card hover:bg-brand-elevated text-brand-text border border-brand-border text-xs transition-colors"
              title={isTimerRunning ? 'Mettre en pause' : 'Reprendre'}
            >
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          )}

          {!isSubmitted ? (
            <button
              onClick={() => {
                if (window.confirm("Êtes-vous sûr de vouloir rendre votre copie maintenant ?")) {
                  setIsSubmitted(true);
                  setIsTimerRunning(false);
                }
              }}
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-brand-dark font-bold text-xs shadow-md transition-all"
            >
              Rendre la copie
            </button>
          ) : (
            <span className="text-xs px-3 py-1.5 rounded-lg bg-brand-cyan/20 text-brand-cyan font-bold border border-brand-cyan/30">
              Copie Soumise
            </span>
          )}
        </div>
      </div>

      {/* Question Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-brand-border pb-3 overflow-x-auto">
        {exam.questions.map((q, idx) => {
          const isActive = activeQuestionIndex === idx;
          const hasAnswer = Boolean(answers[q.id]?.trim());

          return (
            <button
              key={q.id}
              onClick={() => setActiveQuestionIndex(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                isActive
                  ? 'bg-brand-cyan text-brand-dark shadow-md shadow-brand-cyan/20'
                  : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'
              }`}
            >
              Question {q.questionNumber} ({q.bareme} pts)
              {hasAnswer && !isActive && <span className="ml-1 text-emerald-400">●</span>}
            </button>
          );
        })}
      </div>

      {/* Main Question Card */}
      <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-brand-border">
          <h3 className="text-base font-bold text-brand-text">
            {currentQuestion.title}
          </h3>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-card text-emerald-400 border border-brand-border">
            Barème : {currentQuestion.bareme} / 20 points
          </span>
        </div>

        {/* Statement */}
        <div className="bg-brand-dark/50 p-4 rounded-xl border border-brand-border/60">
          <p className="text-sm text-brand-text/95 leading-relaxed whitespace-pre-line font-normal">
            {currentQuestion.statement}
          </p>
        </div>

        {/* Hints */}
        {currentQuestion.hints.length > 0 && !isSubmitted && (
          <div className="bg-brand-elevated/40 p-3 rounded-lg border border-brand-border/40 text-xs text-brand-muted space-y-1">
            <strong className="text-amber-400">Indications d&apos;inspection :</strong>
            <ul className="list-disc list-inside space-y-0.5">
              {currentQuestion.hints.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Student Answer Box */}
        <div>
          <label className="text-xs font-semibold text-brand-muted uppercase block mb-2">
            Votre rédaction (Algorithme ou Code Python) :
          </label>
          <textarea
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswerChange(e.target.value)}
            disabled={isSubmitted}
            rows={10}
            className="w-full bg-brand-dark border border-brand-border rounded-xl p-4 font-mono text-sm text-brand-text focus:outline-none focus:border-brand-cyan leading-relaxed"
            placeholder="Rédigez votre réponse ici..."
          />
        </div>

        {/* Correction View when Submitted */}
        {isSubmitted && (
          <div className="pt-4 border-t border-brand-border space-y-4">
            <button
              onClick={() => toggleSolution(currentQuestion.id)}
              className="px-4 py-2 rounded-lg bg-brand-card hover:bg-brand-elevated text-brand-cyan text-xs font-semibold border border-brand-border transition-colors"
            >
              {revealedSolutions[currentQuestion.id] ? 'Masquer la correction' : 'Afficher le Corrigé Type Officiel'}
            </button>

            {revealedSolutions[currentQuestion.id] && (
              <div className="bg-brand-card rounded-xl p-5 border border-brand-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Corrigé Type Officiel de l&apos;Épreuve
                  </span>
                  <span className="text-xs text-brand-muted">
                    Notation barème / {currentQuestion.bareme}
                  </span>
                </div>
                <pre className="bg-brand-dark p-4 rounded-lg font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre-wrap border border-brand-border/40">
                  {currentQuestion.solution}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
