'use client';

import React, { useState } from 'react';
import { Layers, ArrowDownUp, Grid, Cpu, GitBranch } from 'lucide-react';
import { SortingVisualizer } from '@/components/visualizers/SortingVisualizer';
import { ArrayVisualizer } from '@/components/visualizers/ArrayVisualizer';
import { RecursionVisualizer } from '@/components/visualizers/RecursionVisualizer';
import { FlowchartVisualizer } from '@/components/visualizers/FlowchartVisualizer';

export default function VisualizerPage() {
  const [activeTab, setActiveTab] = useState<'sorting' | 'array' | 'recursion' | 'flowchart'>('sorting');

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="border-b border-brand-border pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-semibold mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Laboratoire Visuel d&apos;Algorithmique</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-2">
          Visualiseur Interactif d&apos;Algorithmes
        </h1>
        <p className="text-sm text-brand-muted max-w-3xl leading-relaxed">
          Comprenez le comportement intime des algorithmes en temps réel : déplacements d&apos;indices, comparaisons, permutations, pile d&apos;appels récursive et diagrammes de flux d&apos;instructions.
        </p>
      </div>

      {/* Visualizer Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-brand-border pb-4">
        <button
          onClick={() => setActiveTab('sorting')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'sorting'
              ? 'bg-brand-cyan text-brand-dark shadow-lg shadow-brand-cyan/20'
              : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'
          }`}
        >
          <ArrowDownUp className="w-4 h-4" />
          <span>1. Algorithmes de Tri</span>
        </button>

        <button
          onClick={() => setActiveTab('array')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'array'
              ? 'bg-brand-cyan text-brand-dark shadow-lg shadow-brand-cyan/20'
              : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'
          }`}
        >
          <Grid className="w-4 h-4" />
          <span>2. Tableaux & Vecteurs</span>
        </button>

        <button
          onClick={() => setActiveTab('recursion')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'recursion'
              ? 'bg-brand-cyan text-brand-dark shadow-lg shadow-brand-cyan/20'
              : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>3. Pile de Récursivité</span>
        </button>

        <button
          onClick={() => setActiveTab('flowchart')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'flowchart'
              ? 'bg-brand-cyan text-brand-dark shadow-lg shadow-brand-cyan/20'
              : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'
          }`}
        >
          <GitBranch className="w-4 h-4" />
          <span>4. Organigrammes (Flowcharts)</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div>
        {activeTab === 'sorting' && <SortingVisualizer />}
        {activeTab === 'array' && <ArrayVisualizer />}
        {activeTab === 'recursion' && <RecursionVisualizer />}
        {activeTab === 'flowchart' && <FlowchartVisualizer />}
      </div>
    </div>
  );
}
