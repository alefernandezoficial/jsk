import React, { useState } from "react";
import { torneosPorVersion } from "../data/tournaments";
import { content } from "../data/translations";

export const TournamentsPage: React.FC = () => {
  // CS2 starts expanded by default, others start compressed/collapsed as requested
  const [expandedVersions, setExpandedVersions] = useState<Record<string, boolean>>({
    cs2: true,
    csgo: false,
    "1.6": false,
    "1.5": false,
  });

  const t = content.tournaments;

  const toggleVersion = (id: string) => {
    setExpandedVersions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    setExpandedVersions({
      cs2: true,
      csgo: true,
      "1.6": true,
      "1.5": true,
    });
  };

  const collapseAll = () => {
    setExpandedVersions({
      cs2: false,
      csgo: false,
      "1.6": false,
      "1.5": false,
    });
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in font-editorial-body">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#92929A]">
        <span className="text-[#1769FF] font-bold">■</span>
        <span className="text-[#F5F5F5] font-semibold">{t.sectionTag}</span>
        <span className="h-[1px] flex-1 bg-white/10" />
      </div>

      {/* Header and Accordion Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold uppercase text-white tracking-tight">
            {t.headline}
          </h2>
        </div>

        {/* Global Expand / Collapse All buttons */}
        <div className="flex items-center gap-1 font-mono text-xs shrink-0">
          <button
            onClick={expandAll}
            className="min-h-[36px] px-3 py-1 bg-[#111114] hover:bg-white/10 text-[#92929A] hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            + Expandir
          </button>
          <button
            onClick={collapseAll}
            className="min-h-[36px] px-3 py-1 bg-[#111114] hover:bg-white/10 text-[#92929A] hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            − Comprimir
          </button>
        </div>
      </div>

      {/* Accordion Versions (CS2 -> CSGO -> CS 1.6 -> CS 1.5) */}
      <div className="space-y-4">
        {torneosPorVersion.map((grupo) => {
          const isExpanded = !!expandedVersions[grupo.id];

          return (
            <div
              key={grupo.id}
              className="border border-white/10 bg-[#0B0B0D] overflow-hidden transition-colors"
            >
              {/* Clickable Section Header / Accordion Trigger */}
              <button
                type="button"
                onClick={() => toggleVersion(grupo.id)}
                aria-expanded={isExpanded}
                className={`w-full min-h-[52px] px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer select-none ${
                  isExpanded ? "bg-[#111114] border-b border-white/10" : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-base font-mono font-bold transition-transform duration-200 ${
                      isExpanded ? "rotate-90 text-[#1769FF]" : "text-[#92929A]"
                    }`}
                  >
                    ▶
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-bold uppercase text-white tracking-tight flex items-center gap-2">
                      <span>{grupo.titulo}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-[#92929A]">
                      {grupo.periodo}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[#92929A] text-[11px]">
                    {grupo.torneos.length} torneos
                  </span>
                  <span className="text-[#1769FF] text-xs font-semibold hidden sm:inline">
                    {isExpanded ? "Ocultar" : "Ver torneos"}
                  </span>
                </div>
              </button>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="animate-fade-in">
                  {/* Desktop Table Header */}
                  <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-2.5 bg-[#0e0e11] border-b border-white/5 text-[10px] font-mono uppercase tracking-widest text-[#92929A]">
                    <div className="col-span-7">{t.tableHeaders.name}</div>
                    <div className="col-span-2 text-center">{t.tableHeaders.mode}</div>
                    <div className="col-span-3 text-right">{t.tableHeaders.placement}</div>
                  </div>

                  {/* Tournaments List */}
                  <div className="divide-y divide-white/5 font-mono text-xs">
                    {grupo.torneos.map((torneo) => {
                      const isFirst = torneo.posicion === "1st";
                      const isSecond = torneo.posicion === "2nd";
                      const isLan = torneo.modalidad === "LAN";

                      return (
                        <div
                          key={torneo.id}
                          className="p-3.5 sm:px-5 sm:py-3 flex items-center justify-between sm:grid sm:grid-cols-12 gap-3 hover:bg-white/5 transition-colors"
                        >
                          {/* Nombre */}
                          <div className="sm:col-span-7">
                            <span
                              className={`font-display text-sm font-bold uppercase tracking-tight block ${
                                isFirst ? "text-amber-300" : "text-white"
                              }`}
                            >
                              {torneo.nombre}
                            </span>

                            {/* Mobile mode tag */}
                            <div className="sm:hidden mt-0.5">
                              <span
                                className={`text-[10px] font-mono font-bold uppercase ${
                                  isLan ? "text-[#FF3038]" : "text-[#1769FF]"
                                }`}
                              >
                                [{torneo.modalidad}]
                              </span>
                            </div>
                          </div>

                          {/* Modalidad (Desktop) */}
                          <div className="hidden sm:flex sm:col-span-2 items-center justify-center">
                            <span
                              className={`inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase ${
                                isLan
                                  ? "bg-[#FF3038]/15 text-[#FF3038] border border-[#FF3038]/30"
                                  : "bg-[#1769FF]/15 text-[#1769FF] border border-[#1769FF]/30"
                              }`}
                            >
                              {torneo.modalidad}
                            </span>
                          </div>

                          {/* Posición */}
                          <div className="sm:col-span-3 text-right shrink-0">
                            <span
                              className={`font-display text-sm sm:text-base font-black tracking-tight ${
                                isFirst
                                  ? "text-amber-400"
                                  : isSecond
                                  ? "text-slate-200"
                                  : "text-white"
                              }`}
                            >
                              {isFirst && "🏆 "}
                              {torneo.posicion}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
