import React from 'react';
import Link from 'next/link';
import { Code2, ShieldCheck, Heart, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-semibold">
          <Code2 className="w-3.5 h-3.5" />
          <span>Plateforme Éducative Indépendante</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text">
          À Propos d&apos;ALGO LAB
        </h1>
        <p className="text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Apprends à penser. Apprends à programmer. Une plateforme conçue sur-mesure pour les élèves du Baccalauréat Sciences de l&apos;Informatique en Tunisie.
        </p>
      </div>

      {/* Mission */}
      <section className="bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-xl space-y-4">
        <h2 className="text-xl font-bold text-brand-text flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-cyan" />
          <span>Notre Mission</span>
        </h2>
        <p className="text-sm text-brand-muted leading-relaxed">
          ALGO LAB est né d&apos;un constat clair : de nombreux élèves du Baccalauréat Informatique en Tunisie éprouvent des difficultés non pas parce qu&apos;ils manquent de potentiel, mais parce que l&apos;algorithmique leur est présentée comme un ensemble de recettes abstraites à mémoriser.
        </p>
        <p className="text-sm text-brand-muted leading-relaxed">
          Notre mission est de rendre la logique évidente et accessible à chaque élève grâce à notre méthode pédagogique :
        </p>
        <div className="p-4 rounded-xl bg-brand-card border border-brand-border font-semibold text-brand-cyan text-center text-sm">
          Comprendre → Visualiser → Pratiquer → Corriger → Maîtriser
        </div>
      </section>

      {/* Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 shadow-md space-y-3">
          <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
            <span>Bilinguisme Pédagogique (FR + Derja)</span>
          </h3>
          <p className="text-xs text-brand-muted leading-relaxed">
            La science et la syntaxe restent rigoureusement en français (conformément à l&apos;examen officiel du Bac). Mais les blocages conceptuels sont levés grâce à des explications chaleureuses, imagées et directes en Derja tunisienne.
          </p>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 shadow-md space-y-3">
          <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zéro Dépendance IA & Corrigés Types</span>
          </h3>
          <p className="text-xs text-brand-muted leading-relaxed">
            La plateforme ne dépend d&apos;aucune API d&apos;intelligence artificielle susceptible d&apos;halluciner ou d&apos;inventer des syntaxes non officielles. Tous les corrigés, indices et barèmes proviennent des documents pédagogiques officiels de la Tunisie.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="p-8 text-center bg-brand-card border border-brand-border rounded-2xl space-y-4">
        <h3 className="text-xl font-bold text-brand-text">Prêt à dompter l&apos;algorithmique ?</h3>
        <p className="text-xs text-brand-muted">Accédez librement et gratuitement à toutes les leçons et visualisateurs.</p>
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-bold text-xs shadow-lg shadow-brand-cyan/20 transition-all"
        >
          <span>Commencer maintenant</span>
        </Link>
      </div>
    </div>
  );
}
