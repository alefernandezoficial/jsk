import React from "react";
import { Link, useRouter, RoutePath } from "../router/Router";
import { content } from "../data/translations";

export const Navigation: React.FC = () => {
  const { currentPath } = useRouter();
  const t = content.nav;

  const navItems: { path: RoutePath; label: string; icon: React.ReactNode }[] = [
    {
      path: "/",
      label: t.profile,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      path: "/career",
      label: t.career,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      path: "/tournaments",
      label: t.tournaments,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      path: "/settings",
      label: t.settings,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* 1. Desktop & Mobile Top Bar */}
      <header className="sticky top-0 z-30 bg-[#08080A]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Mobile Left Identity Wordmark */}
        <div className="flex lg:hidden items-center gap-2">
          <Link to="/" className="text-xl font-display font-black text-white tracking-tighter">
            JSK
          </Link>
          <span className="w-1.5 h-1.5 bg-[#1769FF]" />
        </div>

        {/* Desktop Nav Links */}
        <nav aria-label="Secciones del portafolio" className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-xs tracking-wider">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-1 transition-colors whitespace-nowrap uppercase cursor-pointer ${
                  isActive
                    ? "text-white font-bold"
                    : "text-[#92929A] hover:text-[#F5F5F5]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1769FF]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Current Active Section Badge */}
        <div className="text-[11px] font-mono font-bold tracking-widest text-[#1769FF] uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#1769FF] rounded-none hidden sm:inline-block" />
          <span>{navItems.find((i) => i.path === currentPath)?.label}</span>
        </div>
      </header>

      {/* 2. Mobile Fixed Bottom Navigation Bar (Thumb-Zone) */}
      <nav
        aria-label="Navegación móvil"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0D]/95 backdrop-blur-lg border-t border-white/15 h-16 flex items-center justify-around px-2 shadow-2xl pb-safe"
      >
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex-1 min-h-[48px] flex flex-col items-center justify-center py-1 transition-all cursor-pointer relative ${
                isActive ? "text-[#1769FF]" : "text-[#92929A] hover:text-white"
              }`}
            >
              <div className="transition-transform active:scale-90">
                {item.icon}
              </div>
              <span className={`text-[10px] font-mono tracking-tight mt-0.5 truncate uppercase ${isActive ? "font-bold text-white" : ""}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute top-0 left-3 right-3 h-[2px] bg-[#1769FF]" />
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
};
