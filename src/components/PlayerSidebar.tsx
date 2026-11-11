import React, { useState } from "react";
import { player } from "../data/player";
import { content } from "../data/translations";

export const PlayerSidebar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const t = content.sidebar;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alefernandezoficial@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <aside
      aria-label="Identidad del Jugador"
      className="relative w-full lg:w-[40%] xl:w-[38%] lg:h-screen lg:sticky lg:top-0 bg-[#050505] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between overflow-hidden shrink-0 z-20"
    >
      {/* Background Player Photography — Bright, Sharp & Visible */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        <picture className="w-full h-full block">
          <source
            media="(max-width: 1024px)"
            srcSet={player.portraits.mobile}
          />
          <img
            src={player.portraits.desktop}
            alt="Ale 'JSK' Fernández — Jugador de Counter-Strike 2"
            referrerPolicy="no-referrer"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover object-top filter brightness-110 contrast-105 saturate-110 transition-all duration-700 ease-out ${
              imgLoaded ? "opacity-90 scale-100" : "opacity-0 scale-102"
            }`}
          />
        </picture>

        {/* Soft targeted gradients that let the photo shine through clearly while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[#050505]/20 to-[#050505]/60 pointer-events-none" />
      </div>

      {/* Top Header Information (Compact on mobile) */}
      <div className="relative z-10 px-4 py-3 sm:p-6 lg:p-8 flex items-center justify-between border-b border-white/10 bg-[#050505]/40 backdrop-blur-xs">
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-widest text-white/80 uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          <span className="w-2 h-2 bg-[#1769FF] inline-block shadow-[0_0_8px_rgba(23,105,255,0.8)]" />
          <span className="text-white font-bold">{t.game}</span>
          <span className="text-white/30">/</span>
          <span>{t.country}</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 px-2 py-0.5 rounded-full border border-white/10">
          <span className="w-1.5 h-1.5 bg-[#FF3038] rounded-full inline-block animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-white uppercase font-bold">
            {t.statusFreeAgent}
          </span>
        </div>
      </div>

      {/* Center Dominant Player Identity with High-Contrast Text Shadows */}
      <div className="relative z-10 px-4 py-6 sm:px-6 sm:py-8 lg:p-8 space-y-2 sm:space-y-3">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-display font-black tracking-tighter text-white leading-[0.85] uppercase select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          {player.nickname}
        </h1>

        <div className="space-y-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight uppercase">
            {player.realName}
          </div>
          <div className="inline-block text-[11px] sm:text-xs font-mono text-[#00E5FF] tracking-wider uppercase font-bold bg-black/50 px-2 py-0.5 border border-[#00E5FF]/30">
            {t.role}
          </div>
        </div>

        {/* Quick Email Copy / Contact (Min 44px tap target on mobile) */}
        <div className="pt-2">
          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-[#0B0B0D]/90 hover:bg-[#1769FF] active:scale-[0.98] text-white border border-white/20 hover:border-[#1769FF] font-mono text-xs font-bold tracking-wider transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.8)] backdrop-blur-sm"
          >
            <svg
              className="w-3.5 h-3.5 text-[#1769FF] group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{copied ? t.copied : t.contactBtn}</span>
          </button>
        </div>
      </div>

      {/* Bottom Verified Hubs & Links */}
      <div className="relative z-10 px-4 py-3 sm:p-5 lg:p-6 border-t border-white/10 bg-[#0B0B0D]/90 backdrop-blur-md">
        <span className="block text-[9px] sm:text-[10px] font-mono tracking-widest text-[#92929A] mb-2 uppercase font-semibold">
          Plataformas y Redes Oficiales
        </span>
        <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
          {[
            ...player.competitivePlatforms,
            ...player.streamingLinks.slice(0, 1),
          ].map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[38px] flex items-center justify-center py-1 px-1.5 border border-white/10 hover:border-[#1769FF] bg-[#111114]/90 text-center text-[10px] sm:text-[11px] text-[#92929A] hover:text-white transition-colors truncate"
              title={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
