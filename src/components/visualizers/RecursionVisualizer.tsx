'use client';

import React, { useState } from 'react';
import { Layers, Play, RotateCcw, ArrowDown, ArrowUp } from 'lucide-react';

interface StackFrame {
  depth: number;
  n: number;
  action: 'call' | 'base' | 'unwind';
  returnValue?: number;
  explanation: string;
  derjaTip: string;
}

export const RecursionVisualizer: React.FC = () => {
  const [selectedFunc, setSelectedFunc] = useState<'facto' | 'fibonacci'>('facto');
  const [inputN, setInputN] = useState<number>(4);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [frames, setFrames] = useState<StackFrame[]>([]);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  // Generate trace for Factorial
  const buildFactoTrace = (n: number): StackFrame[] => {
    const list: StackFrame[] = [];

    const recurse = (val: number, d: number): number => {
      list.push({
        depth: d,
        n: val,
        action: val === 0 ? 'base' : 'call',
        explanation:
          val === 0
            ? `Cas de base atteint : Facto(0) = 1 (La condition d'arrêt stoppe la descente).`
            : `Appel récursif : Facto(${val}) empile un cadre et attend le résultat de Facto(${val - 1}).`,
        derjaTip:
          val === 0
            ? 'وصلنا للـ Cas de base ! Facto(0) ترجّع 1 وتوا باش يبدأ الرجوع (Débobinage).'
            : `Facto(${val}) مازالت ماتعرفش نتيجتها، تعيط لـ Facto(${val - 1}) وتستنى في الـ Pile.`,
      });

      if (val === 0) return 1;

      const res = val * recurse(val - 1, d + 1);

      list.push({
        depth: d,
        n: val,
        action: 'unwind',
        returnValue: res,
        explanation: `Débobinage : Facto(${val}) reçoit le retour et calcule ${val} * Facto(${val - 1}) = ${res}. Le cadre est dépilé.`,
        derjaTip: `نحسبو ${val} * النتيجة لي رجعت = ${res}، ونهبطو من الـ Pile.`,
      });

      return res;
    };

    recurse(n, 0);
    return list;
  };

  const handleStart = () => {
    const trace = buildFactoTrace(Math.min(Math.max(inputN, 1), 6));
    setFrames(trace);
    setStepIndex(0);
    setHasStarted(true);
  };

  const currentFrame = frames[stepIndex];

  // Active stack frames up to current step
  const activeStack: { n: number; depth: number }[] = [];
  if (frames.length > 0) {
    for (let i = 0; i <= stepIndex; i++) {
      const f = frames[i];
      if (f.action === 'call' || f.action === 'base') {
        activeStack.push({ n: f.n, depth: f.depth });
      } else if (f.action === 'unwind') {
        activeStack.pop();
      }
    }
  }

  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-border">
        <div>
          <h3 className="text-lg font-bold text-brand-text">Visualiseur de Récursivité & Pile d'Appels</h3>
          <p className="text-xs text-brand-muted">Observation de la mémoire LIFO (Last In First Out)</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min="1"
            max="6"
            value={inputN}
            onChange={(e) => setInputN(Number(e.target.value))}
            className="w-16 bg-brand-elevated border border-brand-border rounded-lg px-2.5 py-1 text-sm font-mono text-brand-text text-center focus:outline-none focus:border-brand-cyan"
          />
          <button
            onClick={handleStart}
            className="px-4 py-1.5 rounded-lg bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Lancer Facto({inputN})</span>
          </button>
        </div>
      </div>

      {hasStarted && currentFrame ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Call Stack Visualizer */}
          <div className="bg-brand-dark/70 border border-brand-border/80 rounded-xl p-4 flex flex-col justify-end min-h-[300px]">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-brand-border/40 text-xs font-semibold text-brand-muted">
              <span>PILE D'APPELS (CALL STACK)</span>
              <span className="text-brand-cyan">{activeStack.length} cadres actifs</span>
            </div>

            <div className="flex flex-col-reverse gap-2 items-center w-full py-4">
              {activeStack.length === 0 ? (
                <span className="text-xs text-brand-muted italic">Pile vide (Exécution terminée)</span>
              ) : (
                activeStack.map((item, idx) => {
                  const isTop = idx === activeStack.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`w-full max-w-xs p-3 rounded-lg border-2 text-center font-mono text-sm transition-all shadow-md ${
                        isTop
                          ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan font-bold shadow-cyan-500/20 animate-pulse'
                          : 'bg-brand-card/90 border-brand-border text-brand-muted'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-brand-muted">Cadre #{idx + 1}</span>
                        {isTop && <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-cyan/30 text-brand-cyan">Sommet</span>}
                      </div>
                      <div className="mt-1">
                        Facto(n = {item.n})
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Explanation panel */}
          <div className="flex flex-col justify-between bg-brand-card border border-brand-border rounded-xl p-4">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-brand-border">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                  Étape {stepIndex + 1} / {frames.length}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    currentFrame.action === 'base'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : currentFrame.action === 'unwind'
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                      : 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
                  }`}
                >
                  {currentFrame.action === 'base' && '★ Cas de base'}
                  {currentFrame.action === 'call' && '↓ Empilement'}
                  {currentFrame.action === 'unwind' && '↑ Débobinage'}
                </span>
              </div>

              <p className="text-sm text-brand-text font-medium mb-4 leading-relaxed">
                {currentFrame.explanation}
              </p>

              {currentFrame.returnValue !== undefined && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 mb-4">
                  <span className="text-xs font-mono text-emerald-400 font-semibold block">
                    Valeur retournée : {currentFrame.returnValue}
                  </span>
                </div>
              )}
            </div>

            <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-md p-3 flex items-start gap-2">
              <span className="text-xs font-bold text-brand-amber px-1.5 py-0.5 rounded bg-brand-amber/20 shrink-0">
                بالتونسي
              </span>
              <p className="text-xs text-amber-200/90 leading-relaxed text-right dir-rtl w-full">
                {currentFrame.derjaTip}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center text-brand-muted bg-brand-dark/40 rounded-xl border border-dashed border-brand-border mb-6">
          <Layers className="w-8 h-8 text-brand-cyan mx-auto mb-2 opacity-60" />
          <p className="text-sm">Cliquez sur &quot;Lancer Facto&quot; pour observer la création de la pile d&apos;appels pas à pas.</p>
        </div>
      )}

      {/* Navigation buttons */}
      {hasStarted && (
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
            disabled={stepIndex <= 0}
            className="px-4 py-2 rounded-lg bg-brand-card hover:bg-brand-elevated text-brand-text border border-brand-border disabled:opacity-40 text-xs transition-colors"
          >
            Étape précédente
          </button>
          <button
            onClick={() => setStepIndex((prev) => Math.min(prev + 1, frames.length - 1))}
            disabled={stepIndex >= frames.length - 1}
            className="px-5 py-2 rounded-lg bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-semibold text-xs shadow-md transition-all"
          >
            Étape suivante
          </button>
        </div>
      )}
    </div>
  );
};
