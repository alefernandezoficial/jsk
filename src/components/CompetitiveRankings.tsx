import React from "react";
import { competitiveData } from "../data/competitiveStats";

export const CompetitiveRankings: React.FC = () => {
    const { faceit, gamersclub } = competitiveData;

    // Calculo de progreso hacia Nivel 10 en FACEIT (Nivel 9 es 1751 - 2000 ELO)
    const faceitMinElo = 1751;
    const faceitMaxElo = 2000;
    const faceitProgress = Math.min(
        100,
        Math.max(0, Math.round(((faceit.elo - faceitMinElo) / (faceitMaxElo - faceitMinElo)) * 100))
    );

    return (
        <div className="space-y-3 font-editorial-body">
            {/* Section Sub-Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF5500] inline-block animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
                        Rango Competitivo CS2
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="text-[10px] font-mono text-[#92929A]">Perfiles Oficiales Verificados</span>
                </div>
            </div>

            {/* Grid of FACEIT and GamersClub Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* =========================================
            FACEIT WIDGET — Estética Oficial Nivel 9
            ========================================= */}
                <div className="relative p-5 sm:p-6 bg-gradient-to-b from-[#131318] via-[#0C0C0F] to-[#070709] border border-white/10 hover:border-[#FF5500]/70 transition-all duration-300 flex flex-col justify-between gap-5 group overflow-hidden shadow-2xl">
                    {/* Ambient Platform Backlight Glow */}
                    <div
                        className="absolute -top-12 -right-12 w-48 h-48 opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none rounded-full blur-3xl"
                        style={{ backgroundColor: "#FF5500" }}
                    />

                    {/* Background Technical Watermark Vector */}
                    <div className="absolute right-3 bottom-8 text-[7rem] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
                        9
                    </div>

                    {/* Top row: Platform Brand & Verified Badge */}
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-sm bg-[#FF5500] flex items-center justify-center shadow-[0_0_12px_rgba(255,85,0,0.5)]">
                                {/* FACEIT Arrow / Polygon Chevron Icon */}
                                <svg className="w-4 h-4 text-black fill-current" viewBox="0 0 24 24">
                                    <path d="M22.9 3.5H1.1L12 20.5 22.9 3.5z" />
                                </svg>
                            </div>
                            <div className="space-y-0.5">
                                <span className="font-display text-base font-black tracking-wider text-white uppercase block leading-none">
                                    FACEIT
                                </span>
                            </div>
                        </div>

                        {/* Official Verified Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/50 text-[#FF5500] text-[10px] font-mono font-bold shadow-[0_0_10px_rgba(255,85,0,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-ping" />
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>VERIFICADO</span>
                        </div>
                    </div>

                    {/* Center Showcase: Redondo Nivel 9 + Redondo Puntos ELO */}
                    <div className="flex items-center justify-between gap-4 py-1 relative z-10">
                        {/* FACEIT Official Round Level 9 Badge */}
                        <div className="flex items-center gap-3.5">
                            <div className="relative shrink-0">
                                {/* Outer Ring with Neon Orange Glow */}
                                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr from-[#FF2200] via-[#FF5500] to-[#FFAA00] shadow-[0_0_24px_rgba(255,85,0,0.35)] group-hover:shadow-[0_0_32px_rgba(255,85,0,0.55)] transition-all duration-300">
                                    {/* Inner Dark Circular Disc */}
                                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#1A1A22] to-[#08080A] flex flex-col items-center justify-center border border-black">
                                        <span className="text-[8px] font-mono font-extrabold text-[#FF5500] tracking-widest uppercase leading-none">
                                            NIVEL
                                        </span>
                                        <span className="text-3xl sm:text-4xl font-display font-black text-white leading-none mt-0.5 tracking-tight">
                                            {faceit.level}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-xs sm:text-sm font-display font-bold text-white uppercase">
                                        {faceit.levelTierLabel}
                                    </span>
                                </div>
                                <span className="text-[11px] font-mono text-[#92929A] block">
                                    @{faceit.username}
                                </span>
                                <span className="text-[10px] font-mono text-[#FF5500] block">
                                    {faceit.region}
                                </span>
                            </div>
                        </div>

                        {/* Redondo Puntos ELO Pill */}
                        <div className="text-right shrink-0">
                            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111116] border border-[#FF5500]/40 shadow-[0_0_15px_rgba(255,85,0,0.15)] group-hover:border-[#FF5500] transition-colors">
                                <span className="text-xl sm:text-2xl font-display font-black text-white tracking-tight tabular-nums">
                                    {faceit.eloFormatted}
                                </span>
                                <span className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded-full bg-[#FF5500] text-black">
                                    ELO
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Mini ELO Progress Bar Towards Level 10 (2000 ELO) */}
                    <div className="space-y-1.5 pt-2 border-t border-white/5 relative z-10">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#92929A]">
                            <span>Rumbo a Nivel 10 (2,000 ELO)</span>
                            <span className="text-white font-bold">{faceit.elo} / 2,000 ELO</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
                            <div
                                className="h-full bg-gradient-to-r from-[#FF5500] to-[#FFAA00] rounded-full transition-all duration-700"
                                style={{ width: `${faceitProgress}%` }}
                            />
                        </div>
                    </div>

                    {/* Bottom link to profile */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between relative z-10 font-mono text-xs">
                        <a
                            href={faceit.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-[#FF5500] hover:text-white transition-colors flex items-center gap-1 group-hover:translate-x-1"
                        >
                            <span>Ver Perfil</span>
                            <span>↗</span>
                        </a>
                    </div>
                </div>

                {/* =========================================
            GAMERSCLUB WIDGET — Estética Oficial Nivel 20
            ========================================= */}
                <div className="relative p-5 sm:p-6 bg-gradient-to-b from-[#13151F] via-[#0C0E14] to-[#07080B] border border-white/10 hover:border-[#00A3FF]/70 transition-all duration-300 flex flex-col justify-between gap-5 group overflow-hidden shadow-2xl">
                    {/* Ambient Platform Backlight Glow */}
                    <div
                        className="absolute -top-12 -right-12 w-48 h-48 opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none rounded-full blur-3xl"
                        style={{ backgroundColor: "#00A3FF" }}
                    />

                    {/* Background Technical Watermark Vector */}
                    <div className="absolute right-3 bottom-8 text-[7rem] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
                        20
                    </div>

                    {/* Top row: Platform Brand & Verified Badge */}
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-[#00A3FF] to-[#1769FF] flex items-center justify-center shadow-[0_0_12px_rgba(0,163,255,0.5)]">
                                {/* GamersClub Geometric Crest / Shield */}
                                <svg className="w-4 h-4 text-black fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 15 10-15-10-5zm0 3.5l6.5 3.3L12 18.2 5.5 8.8 12 5.5z" />
                                </svg>
                            </div>
                            <div className="space-y-0.5">
                                <span className="font-display text-base font-black tracking-wider text-white uppercase block leading-none">
                                    GamersClub
                                </span>
                            </div>
                        </div>

                        {/* Official Verified Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00A3FF]/15 border border-[#00A3FF]/50 text-[#00A3FF] text-[10px] font-mono font-bold shadow-[0_0_10px_rgba(0,163,255,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] animate-ping" />
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>VERIFICADO</span>
                        </div>
                    </div>

                    {/* Center Showcase: Redondo Nivel 20 + Redondo Puntos ELO / GC */}
                    <div className="flex items-center justify-between gap-4 py-1 relative z-10">
                        {/* GamersClub Official Round Level 20 Badge */}
                        <div className="flex items-center gap-3.5">
                            <div className="relative shrink-0">
                                {/* Outer Ring with Neon Cyan / Electric Blue Glow */}
                                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr from-[#1769FF] via-[#00A3FF] to-[#00FFE0] shadow-[0_0_24px_rgba(0,163,255,0.35)] group-hover:shadow-[0_0_32px_rgba(0,163,255,0.55)] transition-all duration-300">
                                    {/* Inner Dark Circular Disc */}
                                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#161B28] to-[#080A0E] flex flex-col items-center justify-center border border-black">
                                        <span className="text-[8px] font-mono font-extrabold text-[#00A3FF] tracking-widest uppercase leading-none">
                                            NIVEL
                                        </span>
                                        <span className="text-3xl sm:text-4xl font-display font-black text-white leading-none mt-0.5 tracking-tight">
                                            {gamersclub.level}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-xs sm:text-sm font-display font-bold text-white uppercase">
                                        {gamersclub.levelTierLabel}
                                    </span>
                                </div>
                                <span className="text-[11px] font-mono text-[#92929A] block">
                                    {gamersclub.username}
                                </span>
                                <span className="text-[10px] font-mono text-[#00A3FF] block">
                                    {gamersclub.region}
                                </span>
                            </div>
                        </div>

                        {/* Redondo Puntos ELO / GC Pill */}
                        <div className="text-right shrink-0">
                            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111319] border border-[#00A3FF]/40 shadow-[0_0_15px_rgba(0,163,255,0.15)] group-hover:border-[#00A3FF] transition-colors">
                                <span className="text-xl sm:text-2xl font-display font-black text-white tracking-tight tabular-nums">
                                    {gamersclub.eloFormatted}
                                </span>
                                <span className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded-full bg-[#00A3FF] text-black">
                                    ELO
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Elite Tier Status Indicator */}
                    <div className="space-y-1.5 pt-2 border-t border-white/5 relative z-10">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#92929A]">
                            <span>Rango Máximo GamersClub</span>
                            <span className="text-[#00A3FF] font-bold">2,902 PTS · NIVEL 20</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
                            <div
                                className="h-full bg-gradient-to-r from-[#1769FF] via-[#00A3FF] to-[#00FFE0] rounded-full w-full shadow-[0_0_8px_rgba(0,163,255,0.5)]"
                            />
                        </div>
                    </div>

                    {/* Bottom link to profile */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between relative z-10 font-mono text-xs">
                        <a
                            href={gamersclub.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-[#00A3FF] hover:text-white transition-colors flex items-center gap-1 group-hover:translate-x-1"
                        >
                            <span>Ver Perfil</span>
                            <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
