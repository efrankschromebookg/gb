/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Trophy, ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';
import googlebookBg from './assets/images/googlebook_laptop_bg_1789085515421.jpg';
import {
  GeminiParticleCanvas,
  GeminiStar,
  triggerGeminiExplosion,
} from './components/GeminiInteractions';

export default function App() {
  const lastMoveBurst = useRef(0);

  return (
    <div className="min-h-screen bg-[#060911] text-slate-200 font-sans selection:bg-purple-500/30 selection:text-purple-200 py-8 sm:py-12 px-4 sm:px-6 flex items-center justify-center relative overflow-hidden">
      {/* Global Exploding Gemini Sparkle Particle Canvas */}
      <GeminiParticleCanvas />

      {/* Atmospheric Googlebook Laptop Background Layer */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
        {/* Soft Radial Ambient Aurora Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />

        {/* Floating Googlebook Laptop Image with Cinematic Dark Vignette */}
        <div className="absolute w-[70rem] max-w-[130vw] opacity-25 mix-blend-screen transition-opacity duration-700 pointer-events-none select-none">
          <img
            src={googlebookBg}
            alt="Googlebook Laptop Background"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover filter contrast-125 brightness-90 mask-radial"
            style={{
              maskImage: 'radial-gradient(ellipse 65% 55% at 50% 48%, black 20%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 48%, black 20%, transparent 80%)',
            }}
          />
        </div>
      </div>

      {/* Slim Newsletter Card Container */}
      <article className="relative z-10 w-full max-w-4xl bg-[#0b101e]/90 border border-slate-800/90 rounded-2xl shadow-2xl gemini-glow overflow-hidden backdrop-blur-md transition-all duration-300">
        
        {/* Gemini Signature Rainbow Gradient Strip */}
        <div className="h-1.5 w-full gemini-rainbow-bar" />

        {/* Compact Header */}
        <header className="p-6 sm:p-8 border-b border-slate-800/80 bg-[#090d1a]/80">
          <div className="flex items-center justify-end gap-3 text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            <span className="text-purple-400 flex items-center gap-1.5">
              <GeminiStar size={13} />
              Weekly Giveaway
            </span>
          </div>

          <h1 className="text-lg sm:text-2xl md:text-[27px] font-extrabold text-white tracking-tight leading-tight sm:whitespace-nowrap">
            How to Qualify for the{' '}
            <span className="gemini-rainbow-text">
              Weekly Giveaway
            </span>{' '}
            on SellPro
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed sm:whitespace-nowrap">
            Active brand reps qualify for random weekly drawings simply by completing Googlebook courses in SellPro.
          </p>
        </header>

        {/* Main Content Area */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* 3 Simple Steps */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              3 Steps to Qualify
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 space-y-1 flex flex-col justify-start">
                <div className="w-6 h-6 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-bold flex items-center justify-center font-mono mb-2">
                  1
                </div>
                <div className="font-bold text-white text-sm">
                  Sign in to SellPro
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Open the app or visit{' '}
                  <a
                    href="https://online.sellpro.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    online.sellpro.net
                  </a>. Navigate to the Googlebook courses or type Googlebook in the search bar to filter eligible content.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 space-y-1">
                <div className="w-6 h-6 rounded-md bg-purple-950/60 border border-purple-500/40 text-purple-400 text-xs font-bold flex items-center justify-center font-mono mb-2">
                  2
                </div>
                <div className="font-bold text-white text-sm">
                  Complete Courses
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  New content drops every 1–2 weeks. Engage with and complete available courses on a weekly basis.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 space-y-1">
                <div className="w-6 h-6 rounded-md bg-pink-950/60 border border-pink-500/40 text-pink-400 text-xs font-bold flex items-center justify-center font-mono mb-2">
                  3
                </div>
                <div className="font-bold text-white text-sm">
                  You're Entered
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Completions automatically enter you into that week's drawing pool.
                </p>
              </div>
            </div>
          </div>

          {/* Winner Selection & Notification Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/25 via-purple-950/25 to-pink-950/25 border border-purple-500/30 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
            <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-white">Winner Selection:</strong> Winners are randomly selected from a list of all active reps with content completions that week and notified via email of their reward.
            </div>
          </div>

          {/* Weekly Prize Pool Container (Official Rewards To Be Announced) */}
          <div className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400">
              <span className="flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                Weekly Prize Pool
              </span>
              <span className="text-slate-500 normal-case font-normal text-[11px]">To Be Announced</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Official weekly prizes will be announced soon. Active reps with course completions will be automatically eligible for drawings as rewards are revealed.
            </p>
          </div>

          {/* Direct CTA Link with Sparkle Burst on Hover/Move/Click */}
          <div className="text-center pt-2">
            <a
              id="newsletter-sellpro-link"
              href="https://online.sellpro.net/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => triggerGeminiExplosion(e.clientX, e.clientY, 26)}
              onMouseMove={(e) => {
                const now = Date.now();
                if (now - lastMoveBurst.current > 180) {
                  lastMoveBurst.current = now;
                  triggerGeminiExplosion(e.clientX, e.clientY, 6);
                }
              }}
              onClick={(e) => triggerGeminiExplosion(e.clientX, e.clientY, 36)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600/25 via-pink-600/25 to-blue-600/25 hover:from-purple-600/40 hover:via-pink-600/40 hover:to-blue-600/40 border border-purple-500/50 hover:border-purple-400 text-sm font-bold text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 group transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <GeminiStar size={16} className="group-hover:rotate-45 transition-transform" />
              <span>Launch SellPro & Complete Latest Courses</span>
              <ArrowUpRight className="w-4 h-4 text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Minimal Footer */}
        <footer className="px-6 py-4 bg-[#080c17]/90 border-t border-slate-800/80 text-slate-500 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Open to all authorized partner brand representatives.</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Googlebook Program.
          </div>
        </footer>

      </article>
    </div>
  );
}
