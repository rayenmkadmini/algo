'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, RotateCcw, Sliders } from 'lucide-react';

export type SortingAlgorithmType = 'selection' | 'bulles' | 'insertion' | 'shell';

interface SortStep {
  array: number[];
  comparing: [number, number] | null;
  swapping: [number, number] | null;
  sortedIndices: number[];
  description: string;
  derjaNote: string;
}

const INITIAL_ARRAY = [45, 12, 89, 34, 67, 23, 9, 56];

export const SortingVisualizer: React.FC = () => {
  const [algorithm, setAlgorithm] = useState<SortingAlgorithmType>('bulles');
  const [history, setHistory] = useState<SortStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speedMs, setSpeedMs] = useState<number>(600);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate steps for Bubble Sort
  const generateBubbleSortSteps = (initial: number[]): SortStep[] => {
    const steps: SortStep[] = [];
    const arr = [...initial];
    const n = arr.length;
    const sorted: number[] = [];

    steps.push({
      array: [...arr],
      comparing: null,
      swapping: null,
      sortedIndices: [],
      description: 'État initial du tableau non trié.',
      derjaNote: 'هذا التابلو كيف ما هو في البداية قبل ما نبداو الخدمة.',
    });

    for (let i = 0; i < n - 1; i++) {
      let swappedInPass = false;
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({
          array: [...arr],
          comparing: [j, j + 1],
          swapping: null,
          sortedIndices: [...sorted],
          description: `Comparaison entre T[${j}] (${arr[j]}) et T[${j + 1}] (${arr[j + 1]}).`,
          derjaNote: `نقارنو الكازة ${j} بالكازة ${j + 1}.`,
        });

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swappedInPass = true;

          steps.push({
            array: [...arr],
            comparing: null,
            swapping: [j, j + 1],
            sortedIndices: [...sorted],
            description: `Permutation : ${arr[j + 1]} > ${arr[j]}, on échange leurs positions.`,
            derjaNote: `لقينا لي على اليسار أكبر، بدلناهم في البلايص.`,
          });
        }
      }
      sorted.unshift(n - i - 1);
      steps.push({
        array: [...arr],
        comparing: null,
        swapping: null,
        sortedIndices: [...sorted],
        description: `Fin du tour ${i + 1} : L'élément ${arr[n - i - 1]} est fixé à sa place définitive.`,
        derjaNote: `أكبر نومرو في الدورة هذي وصل لبلاصتو الصحيحة في آخر التابلو.`,
      });
      if (!swappedInPass) {
        steps.push({
          array: [...arr],
          comparing: null,
          swapping: null,
          sortedIndices: Array.from({ length: n }, (_, k) => k),
          description: 'Optimisation : Aucun échange effectué dans ce tour ! Le tableau est entièrement trié.',
          derjaNote: 'العلامة (flag echange) قعدت Faux : التابلو ديجا مريقل، نقصو الـ boucle فيسع !',
        });
        break;
      }
    }

    steps.push({
      array: [...arr],
      comparing: null,
      swapping: null,
      sortedIndices: Array.from({ length: n }, (_, k) => k),
      description: 'Tri terminé avec succès !',
      derjaNote: 'مبروك ! التابلو كامل ولا مرتب تصاعدياً.',
    });

    return steps;
  };

  // Generate steps for Selection Sort
  const generateSelectionSortSteps = (initial: number[]): SortStep[] => {
    const steps: SortStep[] = [];
    const arr = [...initial];
    const n = arr.length;
    const sorted: number[] = [];

    steps.push({
      array: [...arr],
      comparing: null,
      swapping: null,
      sortedIndices: [],
      description: 'Début du Tri par Sélection.',
      derjaNote: 'الفكرة : في كل دورة نفركسو على أصغر عنصر ونحطوه في أول التابلو.',
    });

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        steps.push({
          array: [...arr],
          comparing: [minIdx, j],
          swapping: null,
          sortedIndices: [...sorted],
          description: `Recherche du minimum : Comparaison de T[${j}] (${arr[j]}) avec le minimum actuel T[${minIdx}] (${arr[minIdx]}).`,
          derjaNote: `نفركسو على أصغر نومرو ما بين الكازة ${i} وآخر التابلو.`,
        });
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
          steps.push({
            array: [...arr],
            comparing: null,
            swapping: null,
            sortedIndices: [...sorted],
            description: `Nouveau minimum trouvé à l'indice ${minIdx} (valeur = ${arr[minIdx]}).`,
            derjaNote: `لقينا أصغر نومرو جديد في الكازة ${minIdx} !`,
          });
        }
      }

      if (minIdx !== i) {
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        steps.push({
          array: [...arr],
          comparing: null,
          swapping: [i, minIdx],
          sortedIndices: [...sorted],
          description: `Permutation : On place le minimum ${arr[i]} à l'indice ${i}.`,
          derjaNote: `نبدلو بلاصة الأصغر ونحطوه في الكازة ${i}.`,
        });
      }
      sorted.push(i);
    }
    sorted.push(n - 1);

    steps.push({
      array: [...arr],
      comparing: null,
      swapping: null,
      sortedIndices: sorted,
      description: 'Tri par Sélection terminé !',
      derjaNote: 'التابلو كامل تفرز بنجاح.',
    });

    return steps;
  };

  // Generate steps for Insertion Sort
  const generateInsertionSortSteps = (initial: number[]): SortStep[] => {
    const steps: SortStep[] = [];
    const arr = [...initial];
    const n = arr.length;

    steps.push({
      array: [...arr],
      comparing: null,
      swapping: null,
      sortedIndices: [0],
      description: 'Tri par Insertion : Le premier élément T[0] est considéré comme trivialement trié.',
      derjaNote: 'الكازة الأولى نعتبروها ديجا مفرزة كيما في لعبة الكارطة.',
    });

    for (let i = 1; i < n; i++) {
      const cle = arr[i];
      let j = i - 1;

      steps.push({
        array: [...arr],
        comparing: [i, j],
        swapping: null,
        sortedIndices: Array.from({ length: i }, (_, k) => k),
        description: `Prise de l'élément clé T[${i}] = ${cle} à insérer dans la partie triée.`,
        derjaNote: `خدينا الرقم ${cle} وباش نلوجولو على بلاصتو الصحيحة بين الأرقام لي قبلو.`,
      });

      while (j >= 0 && arr[j] > cle) {
        arr[j + 1] = arr[j];
        steps.push({
          array: [...arr],
          comparing: [j, j + 1],
          swapping: [j, j + 1],
          sortedIndices: [],
          description: `Décalage de T[${j}] (${arr[j]}) vers la droite.`,
          derjaNote: `نقدمو ${arr[j]} خطوة للقدام باش نوسعوا للبلاصة.`,
        });
        j--;
      }
      arr[j + 1] = cle;
      steps.push({
        array: [...arr],
        comparing: null,
        swapping: null,
        sortedIndices: Array.from({ length: i + 1 }, (_, k) => k),
        description: `Insertion de la clé ${cle} à sa position correcte T[${j + 1}].`,
        derjaNote: `حطينا ${cle} في بلاصتو المظبوطة !`,
      });
    }

    steps.push({
      array: [...arr],
      comparing: null,
      swapping: null,
      sortedIndices: Array.from({ length: n }, (_, k) => k),
      description: 'Tri par Insertion terminé !',
      derjaNote: 'تم الفرز بنجاح.',
    });

    return steps;
  };

  // Recompute steps when algorithm changes
  const resetToAlgorithm = (algo: SortingAlgorithmType) => {
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
    let st: SortStep[] = [];
    if (algo === 'bulles') st = generateBubbleSortSteps(INITIAL_ARRAY);
    else if (algo === 'selection') st = generateSelectionSortSteps(INITIAL_ARRAY);
    else if (algo === 'insertion') st = generateInsertionSortSteps(INITIAL_ARRAY);
    else st = generateBubbleSortSteps(INITIAL_ARRAY); // fallback
    setHistory(st);
    setCurrentStepIndex(0);
  };

  useEffect(() => {
    resetToAlgorithm(algorithm);
  }, [algorithm]);

  // Handle play / pause timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= history.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, speedMs);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, history, speedMs]);

  const currentStep = history[currentStepIndex] || {
    array: INITIAL_ARRAY,
    comparing: null,
    swapping: null,
    sortedIndices: [],
    description: 'Initialisation...',
    derjaNote: '',
  };

  const maxValue = Math.max(...INITIAL_ARRAY, 100);

  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-xl">
      {/* Algorithm selector & controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-border">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-brand-muted">Algorithme :</span>
          {(['bulles', 'selection', 'insertion'] as SortingAlgorithmType[]).map((algoKey) => (
            <button
              key={algoKey}
              onClick={() => {
                setAlgorithm(algoKey);
              }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                algorithm === algoKey
                  ? 'bg-brand-cyan text-brand-dark shadow-md shadow-brand-cyan/20'
                  : 'bg-brand-card text-brand-text hover:bg-brand-elevated border border-brand-border'
              }`}
            >
              {algoKey === 'bulles' && 'Tri à Bulles'}
              {algoKey === 'selection' && 'Tri par Sélection'}
              {algoKey === 'insertion' && 'Tri par Insertion'}
            </button>
          ))}
        </div>

        {/* Speed slider */}
        <div className="flex items-center gap-3 text-xs text-brand-muted">
          <Sliders className="w-4 h-4 text-brand-cyan" />
          <span>Vitesse :</span>
          <input
            type="range"
            min="100"
            max="1200"
            step="100"
            value={speedMs}
            onChange={(e) => setSpeedMs(Number(e.target.value))}
            className="w-24 accent-brand-cyan cursor-pointer"
          />
          <span className="font-mono text-brand-text">{speedMs}ms</span>
        </div>
      </div>

      {/* Array visualization bars */}
      <div className="h-64 flex items-end justify-center gap-3 sm:gap-4 p-4 bg-brand-dark/60 rounded-xl border border-brand-border/60 mb-6 relative">
        {currentStep.array.map((val, idx) => {
          const isComparing = currentStep.comparing && (currentStep.comparing[0] === idx || currentStep.comparing[1] === idx);
          const isSwapping = currentStep.swapping && (currentStep.swapping[0] === idx || currentStep.swapping[1] === idx);
          const isSorted = currentStep.sortedIndices.includes(idx);

          let barBg = 'bg-brand-cyan/60 border-brand-cyan';
          if (isComparing) barBg = 'bg-amber-400 border-amber-300 shadow-lg shadow-amber-400/40 animate-pulse';
          if (isSwapping) barBg = 'bg-brand-rose border-rose-400 shadow-lg shadow-rose-500/40';
          if (isSorted) barBg = 'bg-emerald-500/80 border-emerald-400';

          const heightPercent = Math.max((val / maxValue) * 100, 15);

          return (
            <div key={idx} className="flex-1 max-w-[54px] flex flex-col items-center justify-end h-full">
              <span className="text-xs font-mono font-bold text-brand-text mb-1">{val}</span>
              <div
                style={{ height: `${heightPercent}%` }}
                className={`w-full rounded-t-md border-t border-x transition-all duration-200 ${barBg}`}
              />
              <div className="w-full text-center mt-2 pt-1 border-t border-brand-border/40">
                <span className="text-[11px] font-mono text-brand-muted">[{idx}]</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-brand-muted mb-6">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-brand-cyan/60 border border-brand-cyan" />
          <span>Non trié</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-amber-400 border border-amber-300" />
          <span>En comparaison</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-brand-rose border border-rose-400" />
          <span>Échange / Déplacement</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-emerald-500/80 border border-emerald-400" />
          <span>Fixé / Trié</span>
        </div>
      </div>

      {/* Step explanation banner */}
      <div className="bg-brand-card border border-brand-border rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
            Étape {currentStepIndex + 1} / {history.length}
          </span>
        </div>
        <p className="text-sm text-brand-text font-medium mb-2">{currentStep.description}</p>
        {currentStep.derjaNote && (
          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-md p-2.5 flex items-start gap-2">
            <span className="text-xs font-bold text-brand-amber px-1.5 py-0.5 rounded bg-brand-amber/20 shrink-0">
              بالتونسي
            </span>
            <p className="text-xs text-amber-200/90 leading-relaxed text-right dir-rtl w-full">
              {currentStep.derjaNote}
            </p>
          </div>
        )}
      </div>

      {/* Player controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => {
            setIsPlaying(false);
            setCurrentStepIndex(0);
          }}
          className="p-2.5 rounded-lg bg-brand-card hover:bg-brand-elevated text-brand-text border border-brand-border transition-colors"
          title="Réinitialiser"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-5 py-2.5 rounded-lg bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-semibold flex items-center gap-2 shadow-lg shadow-brand-cyan/20 transition-all"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Animer</span>
            </>
          )}
        </button>

        <button
          onClick={() => {
            setIsPlaying(false);
            setCurrentStepIndex((prev) => Math.min(prev + 1, history.length - 1));
          }}
          disabled={currentStepIndex >= history.length - 1}
          className="p-2.5 rounded-lg bg-brand-card hover:bg-brand-elevated text-brand-text border border-brand-border disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          title="Étape suivante"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
