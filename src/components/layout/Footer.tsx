import React from 'react';
import Link from 'next/link';
import { Code2, Heart, ExternalLink, ShieldCheck, Sparkles, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070D18] border-t border-white/10 mt-24 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Code2 className="w-5 h-5 text-slate-950 font-black" />
              </div>
              <span className="text-xl font-black text-white">
                ALGO<span className="text-cyan-400">LAB</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              المنصة التفاعلية المخصصة لتلاميذ البكالوريا شعبة علوم الإعلامية في تونس. افهم الخوارزميات، برمج بـ Python، واضمن الـ 20/20 بإذن الله.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>مناهج رسمية معتمدة 2026–2027</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 mb-4">
              دروس ومحاور البكالوريا
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <Link href="/courses/structures-simples" className="hover:text-cyan-300 transition-colors">
                  Structures Simples & Opérateurs
                </Link>
              </li>
              <li>
                <Link href="/courses/structures-de-controle" className="hover:text-cyan-300 transition-colors">
                  Structures de Contrôle (Si, Pour, Tant que)
                </Link>
              </li>
              <li>
                <Link href="/courses/tableaux-et-matrices" className="hover:text-cyan-300 transition-colors">
                  Tableaux 1D & Matrices (NumPy)
                </Link>
              </li>
              <li>
                <Link href="/courses/sous-programmes" className="hover:text-cyan-300 transition-colors">
                  Modularité (Fonctions & Procédures @)
                </Link>
              </li>
              <li>
                <Link href="/courses/recursivite" className="hover:text-cyan-300 transition-colors">
                  La Récursivité & Pile d&apos;Appels
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 mb-4">
              المخابر التفاعلية
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <Link href="/visualizer" className="hover:text-cyan-300 transition-colors">
                  محاكي الفرز (Tri à Bulles & Sélection)
                </Link>
              </li>
              <li>
                <Link href="/visualizer" className="hover:text-cyan-300 transition-colors">
                  محاكي الركيرسيفيتي (Call Stack)
                </Link>
              </li>
              <li>
                <Link href="/playground" className="hover:text-cyan-300 transition-colors">
                  Playground Python Bac
                </Link>
              </li>
              <li>
                <Link href="/exercises" className="hover:text-cyan-300 transition-colors">
                  بنك التمارين التفاعلية بالصلوح
                </Link>
              </li>
              <li>
                <Link href="/exams" className="hover:text-cyan-300 transition-colors">
                  امتحانات بكالوريا سابقة مع الإصلاح
                </Link>
              </li>
            </ul>
          </div>

          {/* Motivational Quote & Derja Note */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>كلمة للتلاميذ</span>
            </h4>
            <div className="bg-[#0E182A] p-4 rounded-2xl border border-amber-500/20 text-xs text-slate-300 leading-relaxed space-y-2">
              <p className="font-bold text-amber-300 text-right dir-rtl">
                &quot;الباك خطوة ومرحلة، واللوجيك اللي باش تفهمو توا، باش يقعد سلاحك في لافاك والخدمة من بعد !&quot;
              </p>
              <p className="text-[11px] text-slate-400">
                طاقم ALGO LAB وراء كل تلميذ يحب ينجح ويتفوّق بجدارة.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026–2027 ALGO LAB. المنصة التعليمية لعلوم الإعلامية بتونس.</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-white transition-colors">حول المنصة</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">مساحة التلميذ</Link>
            <Link href="/admin" className="hover:text-white transition-colors">بوابة الأساتذة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
