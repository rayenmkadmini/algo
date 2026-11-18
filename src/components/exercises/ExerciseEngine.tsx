'use client';

import React, { useState } from 'react';
import { ExerciseItem } from '@/types';
import { CheckCircle2, XCircle, Lightbulb, HelpCircle, RotateCcw, ArrowRight, Award } from 'lucide-react';
import { recordExerciseScore } from '@/lib/progress';

interface ExerciseEngineProps {
  exercise: ExerciseItem;
  onNext?: () => void;
}

export const ExerciseEngine: React.FC<ExerciseEngineProps> = ({ exercise, onNext }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [codeAnswer, setCodeAnswer] = useState<string>(exercise.initialCode || '');
  const [revealedHints, setRevealedHints] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');

  // Handle QCM submission
  const handleQCMSubmit = () => {
    if (!selectedOptionId || !exercise.options) return;
    const opt = exercise.options.find((o) => o.id === selectedOptionId);
    const correct = Boolean(opt?.isCorrect);
    setIsCorrect(correct);
    setIsSubmitted(true);
    const calculatedScore = correct ? Math.max(100 - revealedHints * 15, 40) : 0;
    setScore(calculatedScore);
    setFeedback(opt?.explanation || (correct ? 'Bonne réponse !' : 'Réponse incorrecte.'));
    if (correct) {
      recordExerciseScore(exercise.slug, exercise.title, calculatedScore);
    }
  };

  // Normalize string for code / token comparison
  const normalizeText = (str: string) => {
    return str
      .replace(/\r\n/g, '\n')
      .trim()
      .replace(/[ \t]+/g, ' ')
      .replace(/[\n]+/g, '\n')
      .toLowerCase();
  };

  // Handle Code / Text completion submission
  const handleCodeSubmit = () => {
    const userNorm = normalizeText(codeAnswer);
    let matched = false;

    if (exercise.expectedAnswer && userNorm === normalizeText(exercise.expectedAnswer)) {
      matched = true;
    } else if (exercise.acceptedAnswers) {
      matched = exercise.acceptedAnswers.some((ans) => {
        const normAns = normalizeText(ans);
        return userNorm === normAns || userNorm.includes(normAns);
      });
    }

    setIsCorrect(matched);
    setIsSubmitted(true);
    const calculatedScore = matched ? Math.max(100 - revealedHints * 15, 40) : 0;
    setScore(calculatedScore);
    setFeedback(
      matched
        ? 'Excellente réponse ! Votre solution respecte parfaitement la logique et les contraintes.'
        : 'Votre réponse ne correspond pas à la correction attendue. Consultez les indices ou la solution détaillée.'
    );
    if (matched) {
      recordExerciseScore(exercise.slug, exercise.title, calculatedScore);
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setCodeAnswer(exercise.initialCode || '');
    setIsSubmitted(false);
    setIsCorrect(false);
    setFeedback('');
  };

  const showNextHint = () => {
    if (revealedHints < exercise.hints.length) {
      setRevealedHints((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-xl">
      {/* Header with Type & Difficulty */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-brand-border">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase px-2.5 py-1 rounded-full font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            {exercise.type.replace('_', ' ')}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-brand-card text-brand-muted border border-brand-border capitalize">
            Difficulté : {exercise.difficulty.replace('_', ' ')}
          </span>
        </div>
        <span className="text-xs text-brand-muted font-mono">
          Réf : {exercise.sourceReference}
        </span>
      </div>

      {/* Statement */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-brand-text mb-3 leading-snug">
          {exercise.title}
        </h3>
        <p className="text-sm text-brand-text/90 leading-relaxed whitespace-pre-line mb-4 font-normal">
          {exercise.statement}
        </p>

        {exercise.derjaHint && (
          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-lg p-3 flex items-start gap-2.5">
            <span className="text-xs font-bold text-brand-amber px-2 py-0.5 rounded bg-brand-amber/20 shrink-0">
              ملاحظة بالتونسي
            </span>
            <p className="text-xs text-amber-200/95 leading-relaxed text-right dir-rtl w-full">
              {exercise.derjaHint}
            </p>
          </div>
        )}
      </div>

      {/* Input / Choice Section */}
      {exercise.type === 'qcm' && exercise.options && (
        <div className="flex flex-col gap-3 mb-6">
          {exercise.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            let optStyle = 'bg-brand-card border-brand-border hover:border-brand-muted text-brand-text';

            if (isSelected) {
              optStyle = 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-md';
            }
            if (isSubmitted) {
              if (opt.isCorrect) {
                optStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold';
              } else if (isSelected && !opt.isCorrect) {
                optStyle = 'bg-brand-rose/20 border-rose-500 text-rose-300';
              }
            }

            return (
              <label
                key={opt.id}
                onClick={() => !isSubmitted && setSelectedOptionId(opt.id)}
                className={`p-4 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition-all ${optStyle}`}
              >
                <input
                  type="radio"
                  name={`exercise-${exercise.id}`}
                  checked={isSelected}
                  onChange={() => {}}
                  disabled={isSubmitted}
                  className="mt-1 accent-brand-cyan"
                />
                <span className="text-sm leading-relaxed">{opt.label}</span>
              </label>
            );
          })}
        </div>
      )}

      {exercise.type !== 'qcm' && (
        <div className="mb-6">
          <label className="text-xs font-semibold text-brand-muted uppercase block mb-2">
            Votre solution ou code de réponse :
          </label>
          <textarea
            value={codeAnswer}
            onChange={(e) => setCodeAnswer(e.target.value)}
            disabled={isSubmitted && isCorrect}
            rows={Math.max((codeAnswer.split('\n').length || 4), 6)}
            className="w-full bg-brand-dark border border-brand-border rounded-xl p-4 font-mono text-sm text-brand-text focus:outline-none focus:border-brand-cyan leading-relaxed"
            placeholder="Écrivez votre réponse ici..."
          />
        </div>
      )}

      {/* Progressive Hints Accordion */}
      {exercise.hints.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-brand-muted uppercase flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Indices progressifs ({revealedHints}/{exercise.hints.length})</span>
            </span>
            {revealedHints < exercise.hints.length && (
              <button
                onClick={showNextHint}
                className="text-xs text-brand-cyan hover:underline font-medium"
              >
                Débloquer l&apos;indice suivant (-15 pts)
              </button>
            )}
          </div>

          {revealedHints > 0 && (
            <div className="flex flex-col gap-2">
              {exercise.hints.slice(0, revealedHints).map((h, i) => (
                <div
                  key={i}
                  className="p-3 bg-brand-elevated border border-brand-border/80 rounded-lg text-xs text-brand-muted leading-relaxed"
                >
                  <strong className="text-amber-400 font-semibold">Indice {i + 1} :</strong> {h}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      {!isSubmitted ? (
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={exercise.type === 'qcm' ? handleQCMSubmit : handleCodeSubmit}
            disabled={exercise.type === 'qcm' ? !selectedOptionId : !codeAnswer.trim()}
            className="px-6 py-2.5 rounded-lg bg-brand-cyan hover:bg-brand-cyanHover disabled:opacity-40 disabled:cursor-not-allowed text-brand-dark font-bold text-sm shadow-lg shadow-brand-cyan/20 transition-all"
          >
            Vérifier ma réponse
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Result Banner */}
          <div
            className={`p-4 rounded-xl border-2 flex items-start gap-3 ${
              isCorrect
                ? 'bg-emerald-500/15 border-emerald-400 text-emerald-200'
                : 'bg-brand-rose/15 border-rose-500 text-rose-200'
            }`}
          >
            {isCorrect ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-base">
                  {isCorrect ? 'Bravo, réponse correcte !' : 'Réponse incorrecte'}
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-dark/40">
                  Score : {score} / 100
                </span>
              </div>
              <p className="text-xs leading-relaxed">{feedback}</p>
            </div>
          </div>

          {/* Solution & Explanation */}
          <div className="bg-brand-card border border-brand-border rounded-xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan mb-2">
              Solution modèle & Explication
            </h4>
            <pre className="bg-brand-dark p-3 rounded-lg font-mono text-xs text-brand-text mb-3 overflow-x-auto whitespace-pre-wrap">
              {exercise.modelSolution}
            </pre>
            <p className="text-xs text-brand-muted leading-relaxed">
              {exercise.explanation}
            </p>
          </div>

          {/* Retry / Next */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg bg-brand-elevated hover:bg-brand-surface text-brand-text border border-brand-border text-xs flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Réessayer</span>
            </button>
            {onNext && (
              <button
                onClick={onNext}
                className="px-5 py-2 rounded-lg bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <span>Exercice suivant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
