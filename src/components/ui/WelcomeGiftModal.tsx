'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, GraduationCap, X, Gift, ArrowRight } from 'lucide-react';

const AUTO_DISMISS_SECONDS = 4.5;

export const WelcomeGiftModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [progressPercent, setProgressPercent] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startDismissTimer = () => {
    if (closeTimerRef.current) clearInterval(closeTimerRef.current);

    const stepMs = 50;
    const totalSteps = (AUTO_DISMISS_SECONDS * 1000) / stepMs;
    let currentStep = 0;

    closeTimerRef.current = setInterval(() => {
      currentStep++;
      const remaining = Math.max(0, 100 - (currentStep / totalSteps) * 100);
      setProgressPercent(remaining);

      if (remaining <= 0) {
        if (closeTimerRef.current) clearInterval(closeTimerRef.current);
        handleClose();
      }
    }, stepMs);
  };

  useEffect(() => {
    // Show splash on initial load
    const hasSeen = sessionStorage.getItem('algo_lab_welcome_seen');
    if (!hasSeen) {
      const showTimer = setTimeout(() => {
        setIsOpen(true);
        setTimeout(() => {
          setAnimateIn(true);
          startDismissTimer();
        }, 50);
      }, 300);
      return () => clearTimeout(showTimer);
    }
  }, []);

  const handleClose = () => {
    setAnimateIn(false);
    if (closeTimerRef.current) clearInterval(closeTimerRef.current);
    setTimeout(() => {
      setIsOpen(false);
      sessionStorage.setItem('algo_lab_welcome_seen', 'true');
    }, 400);
  };

  // Allow manual reopen from navbar or footer
  useEffect(() => {
    const handleReopen = () => {
      setIsOpen(true);
      setProgressPercent(100);
      setTimeout(() => {
        setAnimateIn(true);
        startDismissTimer();
      }, 50);
    };
    window.addEventListener('open-tribute-modal', handleReopen);
    return () => window.removeEventListener('open-tribute-modal', handleReopen);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-400 ${
        animateIn ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        onMouseEnter={() => {
          setIsPaused(true);
          if (closeTimerRef.current) clearInterval(closeTimerRef.current);
        }}
        onMouseLeave={() => {
          setIsPaused(false);
          startDismissTimer();
        }}
        className={`relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#101F38] via-[#0D182C] to-[#080E1B] border-2 border-cyan-400/50 p-7 sm:p-9 shadow-2xl shadow-cyan-500/30 transform transition-all duration-400 overflow-hidden ${
          animateIn ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 -translate-y-4'
        }`}
      >
        {/* Ambient background glows */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-500/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-400 rounded-2xl blur-lg opacity-75 animate-pulse" />
            <div className="relative w-16 h-16 rounded-2xl bg-[#091222] border-2 border-amber-400/70 flex items-center justify-center shadow-xl">
              <Gift className="w-8 h-8 text-amber-400 animate-bounce" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>هدية خاصة لأعز أصحاب وإخوة 🎁</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            Cadeau pour mes amis du{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300">
              Lycée Mixte Tataouine
            </span>
          </h2>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-cyan-300">
            Développé avec fierté par : <span className="text-white">Rayen Megadmin</span> (4SI 3)
          </div>

          {/* Heartfelt Dedication Message in Tunisian Derja */}
          <div className="p-4 rounded-2xl bg-[#14233D]/70 border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed text-right dir-rtl w-full space-y-2">
            <p className="font-semibold text-amber-200">
              &quot;خدمت المنصة هذي من كل قلبي كهدية لأصحابي وإخوتي في 4SI 3 بالمعهد المختلط بتطاوين.&quot;
            </p>
            <p className="text-slate-300 text-xs">
              باش نعاونو بعضنا ونفهموا الألغوريتم و Python بالباهي. ربي ينجحنا الكل ونفرحو عائلاتنا بنوتات عالية في الباك 2027 يا ربي ! 🎓❤️
            </p>
          </div>

          {/* Action button to dismiss or enter immediately */}
          <button
            onClick={handleClose}
            className="w-full mt-2 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/30 transition-all hover:scale-[1.02]"
          >
            <GraduationCap className="w-4 h-4" />
            <span>دخول للمنصة (تتنحّى وحدها في ثوانٍ)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Auto-dismiss progress countdown bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 overflow-hidden">
          <div
            style={{ width: `${progressPercent}%` }}
            className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 to-blue-500 transition-all duration-75"
          />
        </div>
      </div>
    </div>
  );
};
