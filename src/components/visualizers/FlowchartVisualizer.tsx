'use client';

import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FlowNode {
  id: number;
  label: string;
  type: 'start' | 'io' | 'condition' | 'process' | 'end';
  vars: Record<string, string | number>;
  description: string;
  derja: string;
}

const FLOW_NODES: FlowNode[] = [
  {
    id: 1,
    label: 'Début',
    type: 'start',
    vars: { N: '?', S: '?' },
    description: "Initialisation du programme.",
    derja: 'بداية البرنامج وتجهيز المتغيرات.',
  },
  {
    id: 2,
    label: 'Lire(N)',
    type: 'io',
    vars: { N: 5, S: '?' },
    description: "L'utilisateur saisit la valeur N = 5.",
    derja: 'المستعمل يعطينا N = 5.',
  },
  {
    id: 3,
    label: 'S ← 0 ; i ← 1',
    type: 'process',
    vars: { N: 5, S: 0, i: 1 },
    description: "Initialisation du total S à 0 et du compteur i à 1.",
    derja: 'نصفرو الجمع S ← 0 والعداد يبدا من 1.',
  },
  {
    id: 4,
    label: 'Si i <= N ?',
    type: 'condition',
    vars: { N: 5, S: 0, i: 1 },
    description: "Test de boucle : i <= 5 est VRAI (1 <= 5).",
    derja: 'الشرط صحيح (1 <= 5) نكملو وسط الـ boucle.',
  },
  {
    id: 5,
    label: 'S ← S + i ; i ← i + 1',
    type: 'process',
    vars: { N: 5, S: 15, i: 6 },
    description: "Après 5 itérations de boucle, S = 1+2+3+4+5 = 15 et i passe à 6.",
    derja: 'بعد 5 دورات، حسبنا المجموع S = 15 والعداد وصل لـ 6.',
  },
  {
    id: 6,
    label: 'Ecrire(S)',
    type: 'io',
    vars: { N: 5, S: 15, i: 6 },
    description: "Affichage du résultat : 15.",
    derja: 'إظهار النتيجة 15 على الشاشة للمستعمل.',
  },
  {
    id: 7,
    label: 'Fin',
    type: 'end',
    vars: { N: 5, S: 15, i: 6 },
    description: "Fin normale de l'exécution.",
    derja: 'نهاية البرنامج بنجاح.',
  },
];

export const FlowchartVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const node = FLOW_NODES[activeStep];

  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-border">
        <div>
          <h3 className="text-lg font-bold text-brand-text">Visualiseur d'Organigramme (Flowchart)</h3>
          <p className="text-xs text-brand-muted">Suivi du flux d'instructions et de l'état des variables</p>
        </div>
        <button
          onClick={() => setActiveStep(0)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-card hover:bg-brand-elevated text-brand-text text-xs border border-brand-border transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Recommencer</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Flowchart Diagram */}
        <div className="lg:col-span-2 bg-brand-dark/70 rounded-xl border border-brand-border/80 p-6 flex flex-col items-center gap-4">
          {FLOW_NODES.map((n, idx) => {
            const isActive = activeStep === idx;
            let shapeClasses = 'rounded-lg border-2 px-6 py-2.5';
            if (n.type === 'start' || n.type === 'end') shapeClasses = 'rounded-full border-2 px-8 py-2';
            if (n.type === 'condition') shapeClasses = 'rotate-45 border-2 w-28 h-28 flex items-center justify-center';
            if (n.type === 'io') shapeClasses = '-skew-x-12 rounded-sm border-2 px-6 py-2.5';

            return (
              <React.Fragment key={n.id}>
                <div
                  className={`transition-all duration-200 cursor-pointer text-center font-mono text-xs font-semibold shadow-md ${shapeClasses} ${
                    isActive
                      ? 'bg-brand-cyan text-brand-dark border-cyan-300 shadow-lg shadow-brand-cyan/30 scale-105'
                      : 'bg-brand-card text-brand-text border-brand-border hover:border-brand-muted'
                  }`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className={n.type === 'condition' ? '-rotate-45 text-center' : ''}>
                    {n.label}
                  </div>
                </div>
                {idx < FLOW_NODES.length - 1 && (
                  <div className="w-0.5 h-4 bg-brand-border flex items-center justify-center">
                    <span className="text-brand-muted text-[10px]">↓</span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* State & Explanation Inspector */}
        <div className="flex flex-col justify-between bg-brand-card rounded-xl border border-brand-border p-5">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-brand-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                Nœud Actuel : Étape {activeStep + 1} / {FLOW_NODES.length}
              </span>
            </div>

            {/* Variable State Table */}
            <h4 className="text-xs font-semibold text-brand-muted uppercase mb-2">
              Mémoire (Variables d&apos;état)
            </h4>
            <div className="bg-brand-elevated rounded-lg p-3 border border-brand-border/60 font-mono text-xs mb-4">
              {Object.entries(node.vars).map(([k, v]) => (
                <div key={k} className="flex justify-between py-1 border-b border-brand-border/30 last:border-0">
                  <span className="text-brand-cyan font-bold">{k} :</span>
                  <span className="text-brand-text">{v}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xs font-semibold text-brand-muted uppercase mb-1">
              Description de l&apos;action
            </h4>
            <p className="text-sm text-brand-text mb-4 leading-relaxed font-medium">
              {node.description}
            </p>
          </div>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-md p-3 flex items-start gap-2">
            <span className="text-xs font-bold text-brand-amber px-1.5 py-0.5 rounded bg-brand-amber/20 shrink-0">
              بالتونسي
            </span>
            <p className="text-xs text-amber-200/90 leading-relaxed text-right dir-rtl w-full">
              {node.derja}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
          disabled={activeStep <= 0}
          className="px-4 py-2 rounded-lg bg-brand-card hover:bg-brand-elevated text-brand-text border border-brand-border disabled:opacity-40 text-xs transition-colors"
        >
          Précédent
        </button>
        <button
          onClick={() => setActiveStep((prev) => Math.min(prev + 1, FLOW_NODES.length - 1))}
          disabled={activeStep >= FLOW_NODES.length - 1}
          className="px-5 py-2 rounded-lg bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-semibold text-xs shadow-md transition-all flex items-center gap-1.5"
        >
          <span>Suivant</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
