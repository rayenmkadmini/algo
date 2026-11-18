import React from 'react';
import Link from 'next/link';
import { Code2, Heart, ExternalLink, ShieldCheck, Sparkles, Award, Gift, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070D18] border-t border-white/10 mt-24 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
        {/* Dedicated Tribute Banner */}
        <div className="mb-12 p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-[#111F36] to-cyan-500/15 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-right sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#0B1527] border-2 border-amber-400/50 flex items-center justify-center shrink-0 shadow-lg">
              <Gift className="w-7 h-7 text-amber-400 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  إهداء خاص من القلب 🎁
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-xs text-cyan-300 font-bold">4SI 3</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                Cadeau pour mes amis du Lycée Mixte Tataouine
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Développé avec fierté par <strong className="text-amber-300 font-bold">Rayen Megadmin</strong> pour les élèves de 4SI 3 et tous les bacheliers de Tunisie.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-slate-200">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>نجاح الباك يجمعنا 2027 🎓</span>
          </div>
        </div>

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
                منصة مهداة من Rayen Megadmin إلى أصدقاء 4SI 3 بالمعهد المختلط تطاوين.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026–2027 ALGO LAB • Développé par Rayen Megadmin (4SI 3 Lycée Mixte Tataouine).</p>
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
