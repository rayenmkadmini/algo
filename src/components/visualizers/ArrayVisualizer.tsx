'use client';

import React, { useState } from 'react';
import { Search, Plus, RotateCcw, ArrowRight } from 'lucide-react';

export const ArrayVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([15, 42, 8, 23, 91, 56, 34]);
  const [searchTarget, setSearchTarget] = useState<string>('23');
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [pointerIndex, setPointerIndex] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('Cliquez sur "Rechercher" ou modifiez une case.');
  const [derjaTip, setDerjaTip] = useState<string>('كل كازة في التابلو عندها indice يبدا من 0 حتى لـ n-1.');
  const [newValue, setNewValue] = useState<string>('');

  const handleSearch = () => {
    const target = Number(searchTarget);
    if (isNaN(target)) return;

    setActiveIndices([]);
    setFoundIndex(null);
    let step = 0;

    const interval = setInterval(() => {
      if (step >= array.length) {
        clearInterval(interval);
        setPointerIndex(null);
        setMessage(`Valeur ${target} non trouvée dans le tableau (-1).`);
        setDerjaTip(`دورنا على التابلو كامل وما لقيناش ${target}، الألغو يرجّع -1.`);
        return;
      }

      setPointerIndex(step);
      setActiveIndices([step]);

      if (array[step] === target) {
        clearInterval(interval);
        setFoundIndex(step);
        setMessage(`Valeur ${target} trouvée à l'indice ${step} !`);
        setDerjaTip(`لقيناها ! T[${step}] = ${target}، الفونكسيون ترجع l'indice ${step}.`);
        return;
      }

      step++;
    }, 450);
  };

  const handleUpdate = (idx: number) => {
    const val = Number(newValue);
    if (isNaN(val)) return;
    const copy = [...array];
    copy[idx] = val;
    setArray(copy);
    setActiveIndices([idx]);
    setMessage(`T[${idx}] ← ${val} (Modification de la case)`);
    setDerjaTip(`بدلنا محتوى الكازة ${idx} بالقيمة الجديدة ${val}.`);
  };

  const handleReset = () => {
    setArray([15, 42, 8, 23, 91, 56, 34]);
    setActiveIndices([]);
    setFoundIndex(null);
    setPointerIndex(null);
    setMessage('Tableau réinitialisé.');
    setDerjaTip('كل كازة في التابلو عندها indice يبدا من 0 حتى لـ n-1.');
  };

  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-border">
        <div>
          <h3 className="text-lg font-bold text-brand-text">Visualiseur de Tableau 1D (Vecteur)</h3>
          <p className="text-xs text-brand-muted">Indexation mémoire de 0 à N-1 selon la norme Python & Bac</p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-card hover:bg-brand-elevated text-brand-text text-xs border border-brand-border transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Réinitialiser</span>
        </button>
      </div>

      {/* Array Cells Display */}
      <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-brand-dark/60 rounded-xl border border-brand-border/60 mb-6 min-h-[140px]">
        {array.map((val, idx) => {
          const isPointer = pointerIndex === idx;
          const isFound = foundIndex === idx;
          const isActive = activeIndices.includes(idx);

          let cellBorder = 'border-brand-border';
          let cellBg = 'bg-brand-card';
          let textColor = 'text-brand-text';

          if (isFound) {
            cellBorder = 'border-emerald-400';
            cellBg = 'bg-emerald-500/20';
            textColor = 'text-emerald-300';
          } else if (isPointer) {
            cellBorder = 'border-amber-400';
            cellBg = 'bg-amber-400/20';
            textColor = 'text-amber-300';
          } else if (isActive) {
            cellBorder = 'border-brand-cyan';
            cellBg = 'bg-brand-cyan/20';
            textColor = 'text-brand-cyan';
          }

          return (
            <div key={idx} className="flex flex-col items-center">
              {/* Pointer indicator */}
              <div className="h-5 flex items-center justify-center mb-1">
                {isPointer && (
                  <span className="text-xs font-mono font-bold text-amber-400 animate-bounce">
                    ↓ [i={idx}]
                  </span>
                )}
                {isFound && (
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    ★ Trouvé
                  </span>
                )}
              </div>

              {/* Memory Cell */}
              <div
                className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center text-lg font-mono font-bold transition-all shadow-md ${cellBorder} ${cellBg} ${textColor}`}
              >
                {val}
              </div>

              {/* Index label */}
              <div className="mt-2 text-center">
                <span className="text-xs font-mono text-brand-muted">T[{idx}]</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Search tool */}
        <div className="bg-brand-card p-4 rounded-lg border border-brand-border">
          <label className="text-xs font-semibold text-brand-muted uppercase block mb-2">
            Recherche séquentielle
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={searchTarget}
              onChange={(e) => setSearchTarget(e.target.value)}
              placeholder="Valeur cible"
              className="flex-1 bg-brand-elevated border border-brand-border rounded-lg px-3 py-1.5 text-sm text-brand-text focus:outline-none focus:border-brand-cyan font-mono"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-1.5 rounded-lg bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-medium text-xs flex items-center gap-1.5 transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Chercher</span>
            </button>
          </div>
        </div>

        {/* Modify tool */}
        <div className="bg-brand-card p-4 rounded-lg border border-brand-border">
          <label className="text-xs font-semibold text-brand-muted uppercase block mb-2">
            Modifier une case T[i] ← val
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              placeholder="Nouvelle valeur"
              className="flex-1 bg-brand-elevated border border-brand-border rounded-lg px-3 py-1.5 text-sm text-brand-text focus:outline-none focus:border-brand-cyan font-mono"
            />
            <button
              onClick={() => handleUpdate(0)}
              className="px-3 py-1.5 rounded-lg bg-brand-elevated hover:bg-brand-surface text-brand-text border border-brand-border text-xs transition-colors"
            >
              Sur T[0]
            </button>
            <button
              onClick={() => handleUpdate(array.length - 1)}
              className="px-3 py-1.5 rounded-lg bg-brand-elevated hover:bg-brand-surface text-brand-text border border-brand-border text-xs transition-colors"
            >
              Sur T[{array.length - 1}]
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Message */}
      <div className="bg-brand-card border border-brand-border rounded-lg p-4">
        <p className="text-sm text-brand-text font-medium mb-2">{message}</p>
        <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-md p-2.5 flex items-start gap-2">
          <span className="text-xs font-bold text-brand-amber px-1.5 py-0.5 rounded bg-brand-amber/20 shrink-0">
            بالتونسي
          </span>
          <p className="text-xs text-amber-200/90 leading-relaxed text-right dir-rtl w-full">
            {derjaTip}
          </p>
        </div>
      </div>
    </div>
  );
};
