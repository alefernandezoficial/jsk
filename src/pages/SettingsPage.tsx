import React, { useState } from "react";
import { gamingSettings, SettingItem } from "../data/settings";
import { content } from "../data/translations";

type SettingsCategory = "mouse" | "video" | "crosshair" | "hardware" | "peripherals";

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsCategory>("mouse");
  const [codeCopied, setCodeCopied] = useState(false);
  const [launchCopied, setLaunchCopied] = useState(false);
  const t = content.settings;

  const handleCopyCrosshair = () => {
    navigator.clipboard.writeText(gamingSettings.crosshair.code).then(() => {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    });
  };

  const handleCopyLaunch = () => {
    navigator.clipboard.writeText(gamingSettings.launchOptions).then(() => {
      setLaunchCopied(true);
      setTimeout(() => setLaunchCopied(false), 2000);
    });
  };

  const tabs: { id: SettingsCategory; label: string }[] = [
    { id: "mouse", label: t.tabMouse },
    { id: "video", label: t.tabVideo },
    { id: "crosshair", label: t.tabCrosshair },
    { id: "hardware", label: t.tabHardware },
    { id: "peripherals", label: t.tabPeripherals },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in font-technical-mono">
      {/* Section Tag */}
      <div className="flex items-center gap-3 text-xs tracking-widest text-[#92929A]">
        <span className="text-[#1769FF] font-bold">■</span>
        <span className="text-[#F5F5F5] font-semibold">{t.sectionTag}</span>
        <span className="h-[1px] flex-1 bg-white/10" />
      </div>

      {/* Terminal Title Bar */}
      <div className="border border-white/15 bg-[#0B0B0D] overflow-hidden">
        <div className="px-3.5 py-2.5 bg-[#111114] border-b border-white/10 flex items-center justify-between text-xs text-[#92929A]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF3038] inline-block" />
            <span className="text-white font-semibold">autoexec.cfg</span>
          </div>
          <span className="text-[11px] text-[#1769FF] font-bold">VERIFICADO</span>
        </div>

        {/* Horizontally Scrollable Category Tabs */}
        <div className="flex items-center overflow-x-auto border-b border-white/10 bg-[#08080A] scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-[44px] px-4 sm:px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer border-r border-white/10 shrink-0 whitespace-nowrap relative flex items-center justify-center ${
                  isActive
                    ? "bg-[#111114] text-white"
                    : "text-[#92929A] hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1769FF]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div className="p-3.5 sm:p-6">
          {/* MOUSE */}
          {activeTab === "mouse" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {gamingSettings.mouse.map((item: SettingItem) => (
                <div
                  key={item.key}
                  className="p-3.5 border border-white/10 bg-[#111114] hover:border-white/20 transition-colors"
                >
                  <span className="text-[10px] text-[#92929A] block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white tabular-nums">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* VIDEO */}
          {activeTab === "video" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {gamingSettings.video.map((item: SettingItem) => (
                <div
                  key={item.key}
                  className="p-3.5 border border-white/10 bg-[#111114] hover:border-white/20 transition-colors"
                >
                  <span className="text-[10px] text-[#92929A] block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white tabular-nums">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* CROSSHAIR */}
          {activeTab === "crosshair" && (
            <div className="space-y-4 sm:space-y-6">
              {/* Code Box */}
              <div className="p-3.5 sm:p-4 bg-[#111114] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1 overflow-hidden">
                  <span className="text-[10px] text-[#1769FF] font-bold block uppercase tracking-wider">
                    {t.crosshairCodeLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-widest break-all select-all block">
                    {gamingSettings.crosshair.code}
                  </span>
                </div>

                <button
                  onClick={handleCopyCrosshair}
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2 bg-[#1769FF] hover:bg-[#1254cc] active:scale-95 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 flex items-center justify-center gap-1.5"
                >
                  <span>{codeCopied ? t.copied : t.copyCrosshair}</span>
                </button>
              </div>

              {/* Crosshair Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {gamingSettings.crosshairDetails.map((detail) => (
                  <div key={detail.key} className="p-2.5 sm:p-3 bg-[#111114] border border-white/10">
                    <span className="text-[9px] sm:text-[10px] text-[#92929A] block mb-0.5 truncate">
                      {detail.label}
                    </span>
                    <span className="text-xs font-bold text-white tabular-nums">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* HARDWARE - Uniform without uneven highlighting */}
          {activeTab === "hardware" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {gamingSettings.hardware.map((item: SettingItem) => (
                <div
                  key={item.key}
                  className="p-3.5 border border-white/10 bg-[#111114] hover:border-white/20 transition-colors"
                >
                  <span className="text-[10px] text-[#92929A] block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* PERIPHERALS - Uniform without uneven highlighting */}
          {activeTab === "peripherals" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {gamingSettings.peripherals.map((item: SettingItem) => (
                <div
                  key={item.key}
                  className="p-3.5 border border-white/10 bg-[#111114] hover:border-white/20 transition-colors"
                >
                  <span className="text-[10px] text-[#92929A] block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Launch Options Bottom Bar */}
        <div className="p-3.5 sm:p-4 bg-[#08080A] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1 overflow-hidden">
            <span className="text-[10px] text-[#92929A] font-bold block uppercase tracking-wider">
              {t.launchOptionsTitle}
            </span>
            <code className="text-xs text-white/90 bg-[#111114] px-2.5 py-1.5 border border-white/10 block break-all font-mono">
              {gamingSettings.launchOptions}
            </code>
          </div>

          <button
            onClick={handleCopyLaunch}
            className="w-full sm:w-auto min-h-[44px] px-4 py-2 bg-[#111114] hover:bg-white/10 border border-white/20 hover:border-[#1769FF] active:scale-95 text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shrink-0 flex items-center justify-center"
          >
            {launchCopied ? t.copied : t.copyLaunch}
          </button>
        </div>
      </div>
    </div>
  );
};
