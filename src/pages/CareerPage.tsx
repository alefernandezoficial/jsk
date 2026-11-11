import React from "react";
import { careerHistory } from "../data/career";
import { content } from "../data/translations";

export const CareerPage: React.FC = () => {
  const t = content.career;

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in font-editorial-body">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#92929A]">
        <span className="text-[#1769FF] font-bold">■</span>
        <span className="text-[#F5F5F5] font-semibold">{t.sectionTag}</span>
        <span className="h-[1px] flex-1 bg-white/10" />
      </div>

      {/* Page Headline */}
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold uppercase text-white tracking-tight">
          {t.headline}
        </h2>
      </div>

      {/* Current Team / Free Agent Spotlight */}
      <div className="p-4 sm:p-5 border border-[#1769FF]/40 bg-[#1769FF]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 font-mono text-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF3038] inline-block animate-pulse" />
            <span className="font-bold text-white tracking-wider uppercase">
              {t.statusBadge}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[#92929A]">ACTUAL</span>
          </div>
          <p className="text-[#F5F5F5] font-semibold text-xs sm:text-sm">
            Disponible para pruebas en equipos competitivos, bootcamps y fichajes oficiales de CS2.
          </p>
        </div>

        <a
          href="mailto:contact@jsk-esports.com"
          className="w-full sm:w-auto min-h-[44px] px-4 py-2 bg-[#1769FF] hover:bg-[#1254cc] active:scale-95 text-white font-bold tracking-wider uppercase transition-all shrink-0 flex items-center justify-center text-center"
        >
          Contactar
        </a>
      </div>

      {/* Compact Editorial Career History Table */}
      <div className="border border-white/10 bg-[#0B0B0D] overflow-hidden">
        {/* Desktop Table Header */}
        <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-[#111114] border-b border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#92929A]">
          <div className="col-span-5">{t.tableHeaders.team}</div>
          <div className="col-span-3">VERSIÓN / ERA</div>
          <div className="col-span-2">{t.tableHeaders.role}</div>
          <div className="col-span-2 text-right">{t.tableHeaders.region}</div>
        </div>

        {/* Career Items */}
        <div className="divide-y divide-white/5 font-mono text-xs">
          {careerHistory.map((item) => (
            <div
              key={item.id}
              className="p-3.5 sm:px-6 sm:py-4 flex flex-col sm:grid sm:grid-cols-12 gap-1.5 sm:gap-4 sm:items-center hover:bg-white/5 transition-colors"
            >
              {/* Team Name */}
              <div className="sm:col-span-5 flex items-center justify-between sm:justify-start gap-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-1.5 py-0.5 text-[9px] font-bold bg-white/10 text-[#92929A] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-sm font-display font-bold text-white uppercase tracking-tight">
                    {item.teamName}
                  </span>
                  {item.note && (
                    <span className="text-[10px] text-[#1769FF] font-mono">
                      ({item.note})
                    </span>
                  )}
                </div>
              </div>

              {/* Version / Era */}
              <div className="sm:col-span-3 text-[#92929A] text-[11px] sm:text-xs">
                <span className="inline-block px-2 py-0.5 bg-white/5 border border-white/10 text-white/90 text-[10px] font-semibold">
                  {item.era}
                </span>
              </div>

              {/* Role */}
              <div className="sm:col-span-2 text-[#1769FF] font-semibold text-[11px] sm:text-xs">
                {item.role}
              </div>

              {/* Region */}
              <div className="sm:col-span-2 text-[#92929A] text-[10px] sm:text-xs sm:text-right">
                {item.region}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
