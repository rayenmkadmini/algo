'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Code2, ArrowRight, Lock, Mail, AlertCircle, CheckCircle2 } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      if (isSupabaseConfigured && supabase) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        setSuccessMsg('Connexion réussie ! Redirection...');
        setTimeout(() => router.push('/dashboard'), 1000);
      } else {
        // Local simulation when Supabase env keys are pending
        setSuccessMsg('Connexion réussie en mode invité local !');
        setTimeout(() => router.push('/dashboard'), 1000);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Erreur lors de la connexion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-brand-surface border border-brand-border rounded-2xl shadow-2xl">
      <div className="text-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center mx-auto mb-3">
          <Code2 className="w-6 h-6 text-brand-cyan" />
        </div>
        <h1 className="text-2xl font-extrabold text-brand-text">Connexion à ALGO LAB</h1>
        <p className="text-xs text-brand-muted mt-1">
          Accédez à votre historique, vos favoris et votre suivi de révision.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-4 p-3 rounded-lg bg-brand-rose/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="mb-4 p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-brand-muted uppercase block mb-1.5">
            Adresse E-mail
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-brand-muted absolute left-3 top-3" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="eleve@bac.tn"
              className="w-full bg-brand-dark border border-brand-border rounded-lg pl-9 pr-3 py-2 text-sm text-brand-text focus:outline-none focus:border-brand-cyan"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-brand-muted uppercase block mb-1.5">
            Mot de passe
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-brand-muted absolute left-3 top-3" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-brand-dark border border-brand-border rounded-lg pl-9 pr-3 py-2 text-sm text-brand-text focus:outline-none focus:border-brand-cyan"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg bg-brand-cyan hover:bg-brand-cyanHover text-brand-dark font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
        >
          <span>{loading ? 'Connexion...' : 'Se connecter'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="mt-6 pt-4 border-t border-brand-border/60 text-center text-xs text-brand-muted space-y-2">
        <p>
          Pas encore de compte ?{' '}
          <Link href="/register" className="text-brand-cyan hover:underline font-semibold">
            Créer un compte élève
          </Link>
        </p>
        <p className="text-[11px] text-brand-muted/80">
          Astuce : Tous les cours et simulateurs restent librement accessibles sans inscription.
        </p>
      </div>
    </div>
  );
}
