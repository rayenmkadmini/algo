'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Terminal, 
  Layers, 
  CheckSquare, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  BookOpen, 
  Flame,
  Zap,
  Award,
  ChevronRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Play
} from 'lucide-react';
import { modulesData, lessonsData } from '@/content/curriculum';
import { exercisesData } from '@/content/exercises';
import { examsData } from '@/content/exams';

export default function HomePage() {
  // Interactive Challenge Express Widget state
  const [selectedChallengeOption, setSelectedChallengeOption] = useState<number | null>(null);
  const [challengeSubmitted, setChallengeSubmitted] = useState<boolean>(false);

  // Quick challenge question
  const challengeQuestion = {
    title: "⚡ Défi Express Bac du Jour :",
    question: "Dans un Tri à Bulles optimisé, quand est-ce que l'algorithme s'arrête prématurément ?",
    options: [
      { text: "Dès que le premier élément T[0] est le minimum.", correct: false, explain: "Non, T[0] ne garantit pas que le reste du tableau est trié." },
      { text: "Quand un tour complet s'effectue sans AUCUNE permutation (echange = Faux).", correct: true, explain: "Exact ! Si aucun échange n'a eu lieu, le tableau est mathématiquement déjà dans l'ordre croissant !" },
      { text: "Après exactement 2 passages dans la boucle Pour.", correct: false, explain: "Faux, le nombre de tours dépend du désordre initial." }
    ]
  };

  const handleChallengeSelect = (idx: number) => {
    setSelectedChallengeOption(idx);
    setChallengeSubmitted(true);
  };

  return (
    <div className="space-y-28">
      {/* 1. HERO SECTION : HIGH-ENERGY & MOTIVATING */}
      <section className="relative pt-6 pb-8 lg:pt-14 lg:pb-16 overflow-hidden">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-purple-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold shadow-lg shadow-cyan-500/10">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
              <span>الباك في الجيب : دورة 2026–2027</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span className="text-slate-300 font-medium">Sciences de l&apos;Informatique</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.12]">
              افهم اللوجيك،{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                الكود يجي وحدو !
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              ودّع الحفظ الأعمى ! تعلّم الألغوريتم و Python بطريقة تفاعلية وممتعة : دروس واضحة، محاكاة بصرية ثلاثية الأبعاد، وتمارين تدريبية مطابقة لامتحانات البكالوريا التونسية.
            </p>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/courses"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-sm flex items-center gap-2.5 shadow-xl shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.03] hover:shadow-cyan-500/40"
              >
                <span>ابدأ التعلّم توا (مجاناً)</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/visualizer"
                className="px-6 py-4 rounded-2xl bg-[#101B2D]/80 hover:bg-[#16253E] text-white font-bold text-sm border border-white/10 hover:border-cyan-400/40 flex items-center gap-2.5 transition-all shadow-lg backdrop-blur-md"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>جرّب المحاكي البصري</span>
              </Link>
            </div>

            {/* Trust Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>عربي تونسي + Français</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>مطابق لوزارة التربية 100%</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>بدون تسجيل إجباري</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Interactive Challenge Express & Preview */}
          <div className="lg:col-span-5 space-y-4">
            {/* Interactive Express Quiz Box */}
            <div className="relative rounded-3xl bg-gradient-to-b from-[#101D33]/90 to-[#0A1322]/90 border border-cyan-500/30 shadow-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
                    تحدّي السرعة الذكي
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-400 font-bold bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-500/30">
                  +20 نقطة
                </span>
              </div>

              <h3 className="text-sm font-bold text-white mb-4 leading-snug">
                {challengeQuestion.question}
              </h3>

              <div className="space-y-2.5 mb-4">
                {challengeQuestion.options.map((opt, i) => {
                  const isSelected = selectedChallengeOption === i;
                  let btnStyle = "bg-[#14233D]/70 border-white/10 hover:border-cyan-400/50 text-slate-200";
                  if (challengeSubmitted) {
                    if (opt.correct) btnStyle = "bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold";
                    else if (isSelected) btnStyle = "bg-rose-500/20 border-rose-500 text-rose-200";
                  } else if (isSelected) {
                    btnStyle = "bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold";
                  }

                  return (
                    <button
                      key={i}
                      disabled={challengeSubmitted}
                      onClick={() => handleChallengeSelect(i)}
                      className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all flex items-start gap-2.5 ${btnStyle}`}
                    >
                      <span className="font-mono font-bold text-cyan-400 shrink-0">[{String.fromCharCode(65 + i)}]</span>
                      <span>{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {challengeSubmitted && selectedChallengeOption !== null && (
                <div className={`p-3.5 rounded-xl border text-xs leading-relaxed transition-all ${
                  challengeQuestion.options[selectedChallengeOption].correct
                    ? 'bg-emerald-500/15 border-emerald-400 text-emerald-300'
                    : 'bg-rose-500/15 border-rose-400 text-rose-300'
                }`}>
                  <p className="font-bold mb-1">
                    {challengeQuestion.options[selectedChallengeOption].correct ? '🎉 يعطيك الصحة ! إجابة صحيحة !' : '⚠️ مازالت فكرة صغيرة ناقصة :'}
                  </p>
                  <p>{challengeQuestion.options[selectedChallengeOption].explain}</p>
                </div>
              )}

              {/* Code comparison teaser */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>جرّب الكود مباشرة في الـ Playground :</span>
                <Link href="/playground" className="text-cyan-400 hover:underline font-bold flex items-center gap-1">
                  <span>فتح المحرر</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 POWERFUL VISUALIZERS CAROUSEL / HIGHLIGHT */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>تعلّم بعينيك قبل ماتكتب</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              المحاكيات التفاعلية : شوف الكود كيفاش يخدم في الميموار
            </h2>
          </div>
          <Link
            href="/visualizer"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-cyan-500/10 px-3.5 py-2 rounded-xl border border-cyan-500/20 transition-colors"
          >
            <span>دخول للمخبر البصري</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. Sorting Visualizer */}
          <Link
            href="/visualizer"
            className="group relative rounded-2xl bg-gradient-to-b from-[#101D33] to-[#0A1322] border border-white/10 hover:border-cyan-400/50 p-6 flex flex-col justify-between shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                1. خوارزميات الفرز (Tri)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                شوف الـ Tri à bulles و Tri sélection خطوة بخطوة، بالتبديل والمقارنة والألوان الحية.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-400">
              <span>جرّب الفرز</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* 2. Array Visualizer */}
          <Link
            href="/visualizer"
            className="group relative rounded-2xl bg-gradient-to-b from-[#101D33] to-[#0A1322] border border-white/10 hover:border-cyan-400/50 p-6 flex flex-col justify-between shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                2. ميموار التابلو (Tableaux 1D)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                تتبّع الـ indices من 0 لـ n-1، كيفاش نعمروا الكازات وكيفاش نلوجوا بالـ Recherche Séquentielle.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>تتبّع التابلو</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* 3. Recursion Visualizer */}
          <Link
            href="/visualizer"
            className="group relative rounded-2xl bg-gradient-to-b from-[#101D33] to-[#0A1322] border border-white/10 hover:border-cyan-400/50 p-6 flex flex-col justify-between shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                3. كدس الركيرسيفيتي (Pile d&apos;Appels)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                افهم الـ Débobinage وشرط الوقوف (Cas de base) في Factorielle و Fibonacci عيني عينك.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400">
              <span>تفقد الـ Pile</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* 4. Flowchart Visualizer */}
          <Link
            href="/visualizer"
            className="group relative rounded-2xl bg-gradient-to-b from-[#101D33] to-[#0A1322] border border-white/10 hover:border-cyan-400/50 p-6 flex flex-col justify-between shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-indigo-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                4. الأورغانيغرام (Flowcharts)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                تحويل الخوارزمية لشجرة منطقية مع جدول متابعة قيم المتغيرات (Trace d&apos;exécution).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-purple-400">
              <span>افتح المخطط</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. ROADMAP TO 20/20 (PARCOURS DU BAC) */}
      <section className="bg-gradient-to-r from-[#0D172A] via-[#101E36] to-[#0D172A] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl mb-8 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>خطة النجاح والتميّز</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            طريقك للـ 20/20 في الألغوريتم خطوة بخطوة
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            منهجية علمية واضحة ومجربة تخليك تدخل للامتحان وأنت واثق في روحك وفي كل سطر كود تكتبو.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="p-5 rounded-2xl bg-[#14233D]/60 border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-sm">1</div>
            <h4 className="font-bold text-white text-sm">الفهم النظري (Comprendre)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              تقرأ التعريف العلمي بالفرنسية وتفهم اللوجيك بالدارجة التونسية.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#14233D]/60 border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-sm">2</div>
            <h4 className="font-bold text-white text-sm">المحاكاة البصرية (Visualiser)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              تشوف الخوارزمية تخدم قدامك وتثبت في الكازات اللي تتبدل.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#14233D]/60 border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-sm">3</div>
            <h4 className="font-bold text-white text-sm">التطبيق العملي (Pratiquer)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              تخدم تمارين QCM، تكمل الفونكسيونات، وتصلح الأخطاء في الكود.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#14233D]/60 border border-cyan-400/40 space-y-2 bg-gradient-to-b from-cyan-500/10 to-transparent">
            <div className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-black text-sm">4</div>
            <h4 className="font-bold text-cyan-300 text-sm">محاكاة الباك (Maîtriser)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              تعدي امتحانات كاملة بالكرونو والبكاريج /20 وتشوف التصليح النموذجي.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MODULES CATALOG TEASER */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              محاور البرنامج الرسمي للباكالوريا
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              كل درس فيه التعريف، السنتاكس، المقارنة مع Python والأخطاء الشائعة اللي تطيّح النوتات.
            </p>
          </div>
          <Link
            href="/courses"
            className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>عرض المحاور كاملة ({modulesData.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modulesData.slice(0, 6).map((m) => (
            <Link
              key={m.id}
              href={`/courses/${m.slug}`}
              className="group rounded-2xl bg-[#0F1A2E]/80 border border-white/10 hover:border-cyan-400/50 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                    {m.verificationStatus}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{m.durationHours}h مقدرة</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {m.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-400">
                <span>{m.chaptersCount} فصول رسمية</span>
                <span className="group-hover:translate-x-1 transition-transform">دخول للدرس →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. PLAYGROUND PYTHON & INTERACTION BANNER */}
      <section className="rounded-3xl bg-gradient-to-r from-[#0C1525] via-[#101C31] to-[#0C1525] border border-cyan-500/20 p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Playground Python : جرّب بيدك</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
            اكتب الكود وجرّب النتيجة في المتصفح بلاش ما تنصب حتى شي في البيسي
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            تمارين حية على الـ Numpy Arrays، الفونكسيونات، والـ Tris. مع كود جاهز وموديلات نموذجية لامتحانات البكالوريا السابقة.
          </p>
          <div className="pt-2">
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs shadow-lg shadow-cyan-400/20 transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>افتح الـ Playground توا</span>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-96 bg-[#070D18] rounded-2xl border border-white/10 p-4 font-mono text-xs shadow-2xl">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-[11px] text-slate-400">
            <span className="text-cyan-400 font-bold">test_somme_diviseurs.py</span>
            <span className="text-emerald-400">● Python 3</span>
          </div>
          <pre className="text-emerald-300 leading-relaxed overflow-x-auto text-[11px]">
{`def som_diviseurs(x):
    s = 0
    for i in range(1, (x // 2) + 1):
        if x % i == 0:
            s += i
    return s

# Test Bac
print(som_diviseurs(6)) # -> 6`}
          </pre>
        </div>
      </section>
    </div>
  );
}

function BarChart3(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}
