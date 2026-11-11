/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { RouterProvider, useRouter } from "./router/Router";
import { PlayerSidebar } from "./components/PlayerSidebar";
import { Navigation } from "./components/Navigation";
import { ProfilePage } from "./pages/ProfilePage";
import { CareerPage } from "./pages/CareerPage";
import { TournamentsPage } from "./pages/TournamentsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { content } from "./data/translations";

function MainLayout() {
  const { currentPath } = useRouter();

  useEffect(() => {
    document.documentElement.lang = "es";
  }, []);

  // Synchronize document.title, meta description, and OpenGraph tags in Spanish
  useEffect(() => {
    const tTitles = content.titles;
    const tDescriptions = content.routeDescriptions;

    let title = tTitles.profile;
    let description = tDescriptions.profile;
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${currentPath === "/" ? "" : currentPath}`;

    switch (currentPath) {
      case "/career":
        title = tTitles.career;
        description = tDescriptions.career;
        break;
      case "/tournaments":
        title = tTitles.tournaments;
        description = tDescriptions.tournaments;
        break;
      case "/settings":
        title = tTitles.settings;
        description = tDescriptions.settings;
        break;
      case "/":
      default:
        title = tTitles.profile;
        description = tDescriptions.profile;
        break;
    }

    document.title = title;

    // Helper to safely set meta tag content
    const setMetaTag = (selector: string, value: string, attr: string = "content") => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attr, value);
      }
    };

    setMetaTag('meta[name="description"]', description);
    setMetaTag('meta[property="og:title"]', title);
    setMetaTag('meta[property="og:description"]', description);
    setMetaTag('meta[property="og:url"]', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', title);
    setMetaTag('meta[name="twitter:description"]', description);

    // Update canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    }
  }, [currentPath]);

  // Render the active route component
  const renderRouteContent = () => {
    switch (currentPath) {
      case "/career":
        return <CareerPage />;
      case "/tournaments":
        return <TournamentsPage />;
      case "/settings":
        return <SettingsPage />;
      case "/":
      default:
        return <ProfilePage />;
    }
  };

  const tFooter = content.footer;

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased flex flex-col lg:flex-row selection:bg-[#1769FF]/30 selection:text-white">
      {/* LEFT: Persistent Player Identity Panel */}
      <PlayerSidebar />

      {/* RIGHT: Navigation & Route-Dependent Content */}
      <div className="flex-1 min-h-screen bg-[#08080A] flex flex-col justify-between overflow-x-hidden">
        <div>
          {/* Persistent Top Navigation Bar */}
          <Navigation />

          {/* Active Route View Container with Smooth Transition & Mobile Safe Padding */}
          <main className="p-4 sm:p-6 lg:p-12 max-w-4xl mx-auto w-full">
            {renderRouteContent()}
          </main>
        </div>

        {/* Compact Right Panel Footer — Editable placeholder text with mobile bottom bar offset */}
        <footer className="p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8 border-t border-white/10 text-[11px] font-mono text-[#5C5C66] max-w-4xl mx-auto w-full">
          <span>{tFooter.text}</span>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}
