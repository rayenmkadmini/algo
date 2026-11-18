import React from 'react';
import { Terminal } from 'lucide-react';
import { PythonPlayground } from '@/components/playground/PythonPlayground';

export default function PlaygroundPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-brand-border pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Environnement d&apos;Exécution Sécurisé</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-2">
          Playground Python Baccalauréat
        </h1>
        <p className="text-sm text-brand-muted max-w-3xl leading-relaxed">
          Testez vos fonctions, procédures, algorithmes de tri et calculs arithmétiques en temps réel dans un bac à sable isolé. Aucun besoin d&apos;installer Thonny ou Python en local.
        </p>
      </div>

      <PythonPlayground />
    </div>
  );
}
