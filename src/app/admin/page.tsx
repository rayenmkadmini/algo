'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Plus, 
  Edit3, 
  Eye, 
  FileText, 
  Database,
  Lock,
  Layers
} from 'lucide-react';
import { modulesData, lessonsData } from '@/content/curriculum';
import { exercisesData } from '@/content/exercises';
import { examsData } from '@/content/exams';
import { PublicationStatus } from '@/types';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'content' | 'workflow' | 'audit'>('content');
  const [selectedStatus, setSelectedStatus] = useState<PublicationStatus>('published');

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="border-b border-brand-border pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-rose/15 text-rose-400 text-xs font-semibold mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>Zone d&apos;Administration Sécurisée</span>
          </div>
          <h1 className="text-3xl font-extrabold text-brand-text">
            Gestion des Contenus & Workflow Pédagogique
          </h1>
          <p className="text-xs text-brand-muted mt-1">
            Contrôle strict des publications selon le cycle : DRAFT → REVIEW → APPROVED → PUBLISHED.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-lg bg-brand-card border border-brand-border text-brand-muted">
            Rôle : <strong className="text-brand-text">Administrateur Pédagogique</strong>
          </span>
        </div>
      </div>

      {/* Admin KPI Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <span className="text-xs text-brand-muted block mb-1">Modules Gérés</span>
          <span className="text-2xl font-bold font-mono text-brand-text">{modulesData.length}</span>
          <span className="text-[11px] text-emerald-400 block mt-1">100% Vérifiés Officiels</span>
        </div>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <span className="text-xs text-brand-muted block mb-1">Leçons Actives</span>
          <span className="text-2xl font-bold font-mono text-brand-cyan">{lessonsData.length}</span>
          <span className="text-[11px] text-brand-muted block mt-1">Avec Derja + Python</span>
        </div>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <span className="text-xs text-brand-muted block mb-1">Banque d&apos;Exercices</span>
          <span className="text-2xl font-bold font-mono text-amber-400">{exercisesData.length}</span>
          <span className="text-[11px] text-brand-muted block mt-1">Multi-critères & corrigés</span>
        </div>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5 shadow-md">
          <span className="text-xs text-brand-muted block mb-1">Épreuves Bac</span>
          <span className="text-2xl font-bold font-mono text-emerald-400">{examsData.length}</span>
          <span className="text-[11px] text-brand-muted block mt-1">Barème /20 officiel</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-brand-border pb-3">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'content'
              ? 'bg-brand-cyan text-brand-dark shadow-md'
              : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'
          }`}
        >
          Gestion des Leçons & Références
        </button>
        <button
          onClick={() => setActiveTab('workflow')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'workflow'
              ? 'bg-brand-cyan text-brand-dark shadow-md'
              : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'
          }`}
        >
          Workflow de Publication
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'audit'
              ? 'bg-brand-cyan text-brand-dark shadow-md'
              : 'bg-brand-surface text-brand-muted hover:text-brand-text border border-brand-border'
          }`}
        >
          Sources Documentaires (38 GB)
        </button>
      </div>

      {/* Tab 1: Content Table */}
      {activeTab === 'content' && (
        <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-brand-border flex items-center justify-between">
            <h3 className="text-sm font-bold text-brand-text">
              Inventaire des Leçons et Traçabilité des Sources
            </h3>
            <span className="text-xs text-brand-muted">
              {lessonsData.length} leçons indexées
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-brand-card text-brand-muted uppercase tracking-wider text-[10px] border-b border-brand-border">
                <tr>
                  <th className="py-3 px-4">Titre de la leçon</th>
                  <th className="py-3 px-4">Module</th>
                  <th className="py-3 px-4">Statut d&apos;Inspection</th>
                  <th className="py-3 px-4">Document Source Officiel</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/60">
                {lessonsData.map((l) => (
                  <tr key={l.id} className="hover:bg-brand-card/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-brand-text">{l.title}</td>
                    <td className="py-3 px-4 font-mono text-brand-cyan">{l.moduleSlug}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full font-mono text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {l.verificationStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-brand-muted font-mono text-[11px] truncate max-w-xs">
                      {l.sourceReference}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/courses/${l.moduleSlug}/${l.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-brand-cyan hover:underline font-semibold"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Aperçu</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Workflow Explanation */}
      {activeTab === 'workflow' && (
        <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-xl space-y-6">
          <h3 className="text-base font-bold text-brand-text">
            Politique de Publication & Validation Pédagogique
          </h3>
          <p className="text-xs text-brand-muted leading-relaxed">
            Chaque élément de cours ou exercice créé par un enseignant passe par 4 états obligatoires avant d&apos;être visible par les élèves sur le site public :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
              <span className="text-xs font-bold text-brand-muted block mb-1">ÉTAPE 1</span>
              <h4 className="font-bold text-brand-text text-sm mb-2">DRAFT (Brouillon)</h4>
              <p className="text-xs text-brand-muted">
                Contenu en cours de rédaction par l&apos;enseignant. Accessible uniquement en mode édition privée.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
              <span className="text-xs font-bold text-amber-400 block mb-1">ÉTAPE 2</span>
              <h4 className="font-bold text-amber-400 text-sm mb-2">REVIEW (Revue)</h4>
              <p className="text-xs text-brand-muted">
                Vérification de la conformité au programme tunisien, rigueur du TDOL et clarté de la Derja.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
              <span className="text-xs font-bold text-brand-cyan block mb-1">ÉTAPE 3</span>
              <h4 className="font-bold text-brand-cyan text-sm mb-2">APPROVED (Validé)</h4>
              <p className="text-xs text-brand-muted">
                Validation par l&apos;inspecteur pédagogique avec signature de la source de référence.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-card border border-emerald-500/40">
              <span className="text-xs font-bold text-emerald-400 block mb-1">ÉTAPE 4</span>
              <h4 className="font-bold text-emerald-400 text-sm mb-2">PUBLISHED (En ligne)</h4>
              <p className="text-xs text-brand-muted">
                Contenu indexé et mis à disposition immédiate de tous les élèves de Tunisie sans restriction.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Sources Audit Directory */}
      {activeTab === 'audit' && (
        <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-brand-text">
            Répertoire Source Pédagogique (Base de Connaissances)
          </h3>
          <p className="text-xs text-brand-muted leading-relaxed">
            Emplacement local : <code className="text-brand-cyan font-mono">D:\EDUCATION RAYEN\bac info cours exam resourse</code> (9 120 fichiers, ~38 GB).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3 bg-brand-card rounded-lg border border-brand-border">
              <span className="text-brand-muted block">Documents PDF :</span>
              <span className="text-lg font-bold text-brand-text">5 735 fichiers</span>
            </div>
            <div className="p-3 bg-brand-card rounded-lg border border-brand-border">
              <span className="text-brand-muted block">Fichiers Python (.py) :</span>
              <span className="text-lg font-bold text-emerald-400">557 scripts</span>
            </div>
            <div className="p-3 bg-brand-card rounded-lg border border-brand-border">
              <span className="text-brand-muted block">Interfaces Qt (.ui) :</span>
              <span className="text-lg font-bold text-brand-cyan">115 fichiers</span>
            </div>
          </div>

          <div className="bg-brand-card p-4 rounded-xl border border-brand-border text-xs text-brand-muted">
            <strong className="text-brand-text">Règle de sécurité stricte :</strong> La totalité des documents originaux est traitée en lecture seule (READ-ONLY). Aucune modification ou suppression n&apos;est jamais autorisée sur le répertoire source.
          </div>
        </div>
      )}
    </div>
  );
}
