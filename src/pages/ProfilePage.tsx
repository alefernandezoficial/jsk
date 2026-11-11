import React from "react";
import { player } from "../data/player";
import { content } from "../data/translations";
import { Link } from "../router/Router";
import { CompetitiveRankings } from "../components/CompetitiveRankings";

export const ProfilePage: React.FC = () => {
  const t = content.profile;

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in font-editorial-body">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#92929A]">
        <span className="text-[#1769FF] font-bold">■</span>
        <span className="text-[#F5F5F5] font-semibold">{t.sectionTag}</span>
        <span className="h-[1px] flex-1 bg-white/10" />
      </div>

      {/* Resumen Competitivo */}
      <div className="border border-white/10 bg-[#0B0B0D] p-5 sm:p-7">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-[#1769FF]" />
          <span className="text-[10px] font-mono tracking-widest text-[#1769FF] uppercase font-bold">
            {t.miniBioTitle}
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 font-editorial-body text-sm sm:text-base">
          {t.miniBio
            .split(/\n\s*\n/)
            .map((p) => p.trim())
            .filter(Boolean)
            .map((paragraph, idx) => (
              <p
                key={idx}
                className="text-[#E6E6E6] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
        </div>
      </div>

      {/* Rango Competitivo CS2: FACEIT y GamersClub (Nivel y ELO) */}
      <CompetitiveRankings />

      {/* Core Gaming Metrics */}
      <div className="space-y-2.5 sm:space-y-3">
        <span className="block text-[10px] font-mono tracking-widest text-[#92929A] uppercase">
          {t.keySpecsTitle}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {t.specs.map((spec, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 bg-[#0B0B0D] border border-white/5"
            >
              <span className="block text-[9px] sm:text-[10px] font-mono text-[#92929A] uppercase truncate">
                {spec.label}
              </span>
              <span className="text-sm sm:text-base font-bold font-technical-mono text-white mt-1 block">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Player Personal Details Table */}
      <div className="space-y-2.5 sm:space-y-3">
        <span className="block text-[10px] font-mono tracking-widest text-[#92929A] uppercase">
          {t.personalDetailsTitle}
        </span>
        <div className="border border-white/10 bg-[#0B0B0D] divide-y divide-white/5 font-mono text-xs">
          {t.details.map((item, idx) => (
            <div
              key={idx}
              className="py-2.5 sm:py-3 px-3.5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1 hover:bg-white/5 transition-colors"
            >
              <span className="text-[#92929A] text-[11px] sm:text-xs">{item.label}</span>
              <span className="font-semibold text-white text-xs sm:text-xs">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 01. Plataformas Competitivas */}
      <div className="space-y-2.5 sm:space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#1769FF]" />
          <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
            Plataformas Competitivas
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {player.competitivePlatforms.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] p-3.5 bg-[#0B0B0D] border border-white/10 hover:border-[#1769FF] active:scale-[0.99] flex items-center justify-between group transition-all font-mono text-xs"
            >
              <div className="space-y-0.5">
                <span className="block font-bold text-white group-hover:text-[#1769FF] transition-colors">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#92929A]">
                  {item.username}
                </span>
              </div>
              <span className="text-[#92929A] group-hover:text-white transition-colors">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 02. Redes Sociales */}
      <div className="space-y-2.5 sm:space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#FF3038]" />
          <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
            Redes Sociales
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {player.socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] p-3.5 bg-[#0B0B0D] border border-white/10 hover:border-[#FF3038] active:scale-[0.99] flex items-center justify-between group transition-all font-mono text-xs"
            >
              <div className="space-y-0.5">
                <span className="block font-bold text-white group-hover:text-[#FF3038] transition-colors">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#92929A]">
                  {item.username}
                </span>
              </div>
              <span className="text-[#92929A] group-hover:text-white transition-colors">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 03. Streaming / Canal YouTube */}
      <div className="space-y-2.5 sm:space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#1769FF]" />
          <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
            Streaming & Canales Oficiales
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {player.streamingLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] p-3.5 bg-[#0B0B0D] border border-white/10 hover:border-[#1769FF] active:scale-[0.99] flex items-center justify-between group transition-all font-mono text-xs"
            >
              <div className="space-y-0.5">
                <span className="block font-bold text-white group-hover:text-[#1769FF] transition-colors">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#92929A]">
                  {item.username}
                </span>
              </div>
              <span className="text-[#92929A] group-hover:text-white transition-colors">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
