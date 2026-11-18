import React from 'react';
import Link from 'next/link';
import { Terminal, ArrowRight, BookOpen, Layers, CheckCircle2, Play } from 'lucide-react';
import { lessonsData } from '@/content/curriculum';

export default function PythonSectionPage() {
  return (
    <div className="space-y-10">
      {/* Banner */}
      <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Section Python 3 Bac Informatique</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text mb-2">
          Python au Baccalauréat Tunisien
        </h1>
        <p className="text-sm text-brand-muted max-w-3xl leading-relaxed">
          Le programme officiel exige la maîtrise de Python 3 avec les tableaux NumPy, les sous-programmes (def), la gestion des chaînes et les fichiers binaires avec le module pickle.
        </p>
        <div className="mt-4 pt-4 border-t border-brand-border flex items-center gap-4">
          <Link
            href="/playground"
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-brand-dark font-bold text-xs flex items-center gap-1.5 shadow-md transition-all"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Tester du code dans le Playground</span>
          </Link>
        </div>
      </div>

      {/* Python Specifics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-emerald-400 mb-2">1. Tableaux avec NumPy</h3>
          <p className="text-xs text-brand-muted leading-relaxed mb-3">
            En Tunisie, les tableaux statiques sont déclarés via NumPy pour conserver l&apos;esprit algorithmique des vecteurs à taille fixe.
          </p>
          <div className="bg-brand-dark p-3 rounded font-mono text-[11px] text-emerald-300">
            from numpy import array<br />
            T = array([int()] * N)<br />
            T[0] = int(input(&quot;Valeur : &quot;))
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-brand-cyan mb-2">2. Fonctions & Portée</h3>
          <p className="text-xs text-brand-muted leading-relaxed mb-3">
            Déclaration avec def, retour explicite via return. Pour les procédures modifiant des scalaires, utilisation de retour tuple ou global.
          </p>
          <div className="bg-brand-dark p-3 rounded font-mono text-[11px] text-emerald-300">
            def som_div(x):<br />
            &nbsp;&nbsp;s = 0<br />
            &nbsp;&nbsp;for i in range(1, x//2 + 1):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;if x % i == 0: s += i<br />
            &nbsp;&nbsp;return s
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-amber-400 mb-2">3. Fichiers Binaires (Pickle)</h3>
          <p className="text-xs text-brand-muted leading-relaxed mb-3">
            Pour sauvegarder les enregistrements et tableaux sur disque selon les épreuves pratiques du Bac.
          </p>
          <div className="bg-brand-dark p-3 rounded font-mono text-[11px] text-emerald-300">
            from pickle import dump, load<br />
            f = open(&quot;donnees.dat&quot;, &quot;wb&quot;)<br />
            dump(enregistrements, f)<br />
            f.close()
          </div>
        </div>
      </div>

      {/* Python Lessons */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-brand-text">Leçons Python & Traduction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessonsData.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-brand-surface border border-brand-border rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-400 block mb-1">
                  Python 3 • {lesson.chapterSlug}
                </span>
                <h3 className="text-base font-bold text-brand-text mb-2">{lesson.title}</h3>
                <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed mb-4">
                  {lesson.frenchDefinition}
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-brand-border/60">
                <span className="text-xs text-brand-muted font-mono">{lesson.durationMinutes} min</span>
                <Link
                  href={`/courses/${lesson.moduleSlug}/${lesson.slug}`}
                  className="text-xs font-semibold text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Voir le code Python</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
