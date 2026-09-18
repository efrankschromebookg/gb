/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Trophy, ArrowUpRight, Mail, ShieldCheck, UserPlus, UserCheck, Store } from 'lucide-react';
import googlebookBg from './assets/images/googlebook_laptop_bg_1789085515421.jpg';
import {
  GeminiParticleCanvas,
  GeminiStar,
  triggerGeminiExplosion,
} from './components/GeminiInteractions';

type TabType = 'giveaway' | 'register';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('giveaway');
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

        {/* Compact Header with Tabs */}
        <header className="p-6 sm:p-8 border-b border-slate-800/80 bg-[#090d1a]/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            {/* Tab Navigation Controls */}
            <div className="flex items-center gap-1.5 p-1 bg-[#060a14] border border-slate-800 rounded-xl self-start">
              <button
                id="tab-giveaway-btn"
                onClick={() => setActiveTab('giveaway')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'giveaway'
                    ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white border border-purple-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Weekly Giveaway</span>
              </button>

              <button
                id="tab-register-btn"
                onClick={() => setActiveTab('register')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'register'
                    ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white border border-purple-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5 text-cyan-400" />
                <span>Register for SellPro</span>
              </button>
            </div>

            <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 self-start sm:self-center">
              <GeminiStar size={13} />
              {activeTab === 'giveaway' ? 'Weekly Giveaway' : 'Get Started'}
            </span>
          </div>

          {activeTab === 'giveaway' ? (
            <div>
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
            </div>
          ) : (
            <div>
              <h1 className="text-lg sm:text-2xl md:text-[27px] font-extrabold text-white tracking-tight leading-tight sm:whitespace-nowrap">
                How to Register for{' '}
                <span className="gemini-rainbow-text">
                  SellPro
                </span>
              </h1>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed sm:whitespace-nowrap">
                Select your role below to view step-by-step registration instructions.
              </p>
            </div>
          )}
        </header>

        {/* Main Content Area */}
        <div className="p-6 sm:p-8 space-y-6">

          {activeTab === 'giveaway' ? (
            <>
              {/* 3 Simple Steps for Giveaway */}
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
                        href="https://secure.sellpro.net/public/rep_invitation?token=RqKyV7wZ9a4="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline"
                      >
                        SellPro
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
                      New content drops every week. Engage with and complete available courses on a weekly basis.
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
                  <strong className="text-white">Winner Selection:</strong> Multiple winners will be selected each week. Winners are randomly drawn from all active reps with content completions that week and notified via email of their reward.
                </div>
              </div>

              {/* Weekly Prize Pool Container */}
              <div className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Weekly Prize Pool</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Winners will each receive a <strong className="text-white font-bold">$10 gift card</strong>. Complete available Googlebook courses in SellPro each week to ensure your eligibility for that week's drawing. Weekly drawings will be active for 6 weeks, ending on October 31st.
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
            </>
          ) : (
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Registration Instructions
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Option 1: Brand Representatives */}
                <div className="p-5 rounded-xl bg-[#0d1424] border border-slate-800 hover:border-purple-500/40 transition-all duration-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-400 flex items-center justify-center mb-2">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h2 className="text-base font-bold text-white">
                      Brand Representatives
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Step-by-step registration instructions and account setup guide for partner brand reps.
                    </p>
                  </div>

                  <div>
                    <a
                      id="brand-rep-instructions-link"
                      href="https://docs.google.com/presentation/d/1OdX2IrlmjZs8MkAUqG2rgQh3DR64wxstqRaDouD548M/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 hover:border-purple-400 text-xs sm:text-sm font-semibold text-purple-200 hover:text-white transition-all w-full justify-center group"
                    >
                      <span>View Brand Rep Guide</span>
                      <ArrowUpRight className="w-4 h-4 text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Option 2: Retail Store Associates */}
                <div className="p-5 rounded-xl bg-[#0d1424] border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-2">
                      <Store className="w-5 h-5" />
                    </div>
                    <h2 className="text-base font-bold text-white">
                      Retail Store Associates
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Step-by-step registration instructions and account setup guide for retail store associates.
                    </p>
                  </div>

                  <div>
                    <a
                      id="retail-associate-instructions-link"
                      href="https://docs.google.com/presentation/d/1DYmRK6MW6gwFFmLOKo1L7AMYfYUttNP-wQG0eu1wsI0/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/40 hover:border-cyan-400 text-xs sm:text-sm font-semibold text-cyan-200 hover:text-white transition-all w-full justify-center group"
                    >
                      <span>View Associate Guide</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Minimal Footer */}
        <footer className="px-6 py-4 bg-[#080c17]/90 border-t border-slate-800/80 text-slate-500 text-[11px] flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Open to all authorized partner brand representatives.</span>
          </div>
        </footer>

      </article>
    </div>
  );
}
