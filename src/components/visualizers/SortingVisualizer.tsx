'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, RotateCcw, Sliders, Sparkles, BarChart2 } from 'lucide-react';

export type SortingAlgorithmType = 'bulles' | 'selection' | 'insertion';

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
  const [speedMs, setSpeedMs] = useState<number>(500);
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
          description: 'Optimisation : Aucun échange effectué ! Le tableau est déjà trié.',
          derjaNote: 'العلامة (flag echange) قعدت Faux : التابلو مريقل، نقصو الـ boucle فيسع !',
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
          description: `Recherche du minimum : Comparaison de T[${j}] (${arr[j]}) avec T[${minIdx}] (${arr[minIdx]}).`,
          derjaNote: `نفركسو على أصغر نومرو ما بين الكازة ${i} وآخر التابلو.`,
        });
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
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
      description: 'Tri par Insertion : Le premier élément T[0] est considéré comme trié.',
      derjaNote: 'الكازة الأولى نعتبروها ديجا مفرزة كيما في لعبة الكارطة.',
    });

    for (let i = 1; i < n; i++) {
      const cle = arr[i];
      let j = i - 1;

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
        description: `Insertion de la clé ${cle} à la position T[${j + 1}].`,
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

  const resetToAlgorithm = (algo: SortingAlgorithmType) => {
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
    let st: SortStep[] = [];
    if (algo === 'bulles') st = generateBubbleSortSteps(INITIAL_ARRAY);
    else if (algo === 'selection') st = generateSelectionSortSteps(INITIAL_ARRAY);
    else if (algo === 'insertion') st = generateInsertionSortSteps(INITIAL_ARRAY);
    setHistory(st);
    setCurrentStepIndex(0);
  };

  useEffect(() => {
    resetToAlgorithm(algorithm);
  }, [algorithm]);

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
    <div className="bg-gradient-to-b from-[#0F1B2F] to-[#0A1322] border border-cyan-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Background glow circle */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header & Algorithm switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">الخوارزمية :</span>
          {(['bulles', 'selection', 'insertion'] as SortingAlgorithmType[]).map((algoKey) => (
            <button
              key={algoKey}
              onClick={() => setAlgorithm(algoKey)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                algorithm === algoKey
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/30 scale-105'
                  : 'bg-[#15233A] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {algoKey === 'bulles' && 'Tri à Bulles (الفرز بالفقاعات)'}
              {algoKey === 'selection' && 'Tri par Sélection (الفرز بالاختيار)'}
              {algoKey === 'insertion' && 'Tri par Insertion (الفرز بالإدراج)'}
            </button>
          ))}
        </div>

        {/* Speed Slider */}
        <div className="flex items-center gap-3 bg-[#0B1526] px-4 py-2 rounded-xl border border-white/10 text-xs text-slate-300 font-medium">
          <Sliders className="w-4 h-4 text-cyan-400" />
          <span>السرعة :</span>
          <input
            type="range"
            min="100"
            max="1000"
            step="100"
            value={speedMs}
            onChange={(e) => setSpeedMs(Number(e.target.value))}
            className="w-24 accent-cyan-400 cursor-pointer"
          />
          <span className="font-mono text-cyan-300 font-bold">{speedMs}ms</span>
        </div>
      </div>

      {/* Animated Array Bars Display */}
      <div className="h-72 flex items-end justify-center gap-3 sm:gap-5 p-6 bg-[#070D18]/90 rounded-2xl border border-white/10 mb-8 relative shadow-inner">
        {currentStep.array.map((val, idx) => {
          const isComparing = currentStep.comparing && (currentStep.comparing[0] === idx || currentStep.comparing[1] === idx);
          const isSwapping = currentStep.swapping && (currentStep.swapping[0] === idx || currentStep.swapping[1] === idx);
          const isSorted = currentStep.sortedIndices.includes(idx);

          let barBg = 'bg-gradient-to-t from-cyan-600/40 via-cyan-500/70 to-cyan-400 border-cyan-400/80 shadow-cyan-500/20';
          if (isComparing) barBg = 'bg-gradient-to-t from-amber-600/80 via-amber-500 to-yellow-300 border-yellow-300 shadow-lg shadow-amber-400/50 animate-pulse';
          if (isSwapping) barBg = 'bg-gradient-to-t from-rose-600 via-rose-500 to-pink-400 border-pink-400 shadow-xl shadow-rose-500/50 scale-105';
          if (isSorted) barBg = 'bg-gradient-to-t from-emerald-600/80 via-emerald-500 to-teal-300 border-emerald-300 shadow-emerald-500/30';

          const heightPercent = Math.max((val / maxValue) * 100, 16);

          return (
            <div key={idx} className="flex-1 max-w-[58px] flex flex-col items-center justify-end h-full transition-all duration-200">
              <span className={`text-xs font-mono font-black mb-2 transition-colors ${
                isComparing ? 'text-yellow-300 scale-125' : isSwapping ? 'text-pink-300 scale-125' : isSorted ? 'text-emerald-300' : 'text-slate-200'
              }`}>
                {val}
              </span>
              <div
                style={{ height: `${heightPercent}%` }}
                className={`w-full rounded-t-xl border-t-2 border-x transition-all duration-300 shadow-lg ${barBg}`}
              />
              <div className="w-full text-center mt-3 pt-1 border-t border-white/10">
                <span className="text-[11px] font-mono font-bold text-slate-400">T[{idx}]</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 mb-8 font-medium">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-md bg-gradient-to-t from-cyan-600 to-cyan-400 border border-cyan-300 shadow-sm" />
          <span>في الانتظار (Non trié)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-md bg-gradient-to-t from-amber-500 to-yellow-300 border border-yellow-200 shadow-sm shadow-amber-400/50" />
          <span>مقارنة مباشرة (Comparaison)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-md bg-gradient-to-t from-rose-500 to-pink-400 border border-pink-300 shadow-sm shadow-rose-500/50" />
          <span>تبديل في البلايص (Permutation)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-md bg-gradient-to-t from-emerald-500 to-teal-300 border border-emerald-300 shadow-sm" />
          <span>في بلاصتو الصحيحة (Trié)</span>
        </div>
      </div>

      {/* Step Explanation Card */}
      <div className="bg-[#0C1628] border border-white/10 rounded-2xl p-5 mb-8 shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-black uppercase tracking-wider text-cyan-400">
            الخطوة {currentStepIndex + 1} من {history.length}
          </span>
        </div>
        <p className="text-sm text-slate-100 font-semibold mb-3">{currentStep.description}</p>
        {currentStep.derjaNote && (
          <div className="bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 rounded-xl p-3.5 flex items-start gap-3">
            <span className="text-xs font-black text-amber-300 px-2 py-0.5 rounded-md bg-amber-500/20 shrink-0">
              بالتونسي 💡
            </span>
            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed text-right dir-rtl w-full font-medium">
              {currentStep.derjaNote}
            </p>
          </div>
        )}
      </div>

      {/* Controller Buttons */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => {
            setIsPlaying(false);
            setCurrentStepIndex(0);
          }}
          className="p-3.5 rounded-2xl bg-[#14233C] hover:bg-[#1A2E4F] text-slate-200 border border-white/10 transition-colors shadow-md"
          title="إعادة من البداية"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-sm flex items-center gap-2.5 shadow-xl shadow-cyan-500/30 transition-all hover:scale-105"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 fill-slate-950" />
              <span>إيقاف مؤقت</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-slate-950" />
              <span>تشغيل المحاكاة</span>
            </>
          )}
        </button>

        <button
          onClick={() => {
            setIsPlaying(false);
            setCurrentStepIndex((prev) => Math.min(prev + 1, history.length - 1));
          }}
          disabled={currentStepIndex >= history.length - 1}
          className="p-3.5 rounded-2xl bg-[#14233C] hover:bg-[#1A2E4F] text-slate-200 border border-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-md"
          title="الخطوة التالية"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
