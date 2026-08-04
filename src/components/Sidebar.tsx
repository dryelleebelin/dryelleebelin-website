import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";
import { sections } from "../data/sections";
import { socials } from "../data/socials";
import DownloadCVButton from "./DownloadCVButton";
import LanguageToggle from "./LanguageToggle";
import type { SectionId } from "../types/section";

const sectionIds: SectionId[] = sections.map((s) => s.id);

export default function Sidebar() {
  const active = useActiveSection(sectionIds);
  const { t: tr } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    setMobileOpen(false);
  }

  return (
    <>
      <div className="sticky top-0 z-30 md:z-auto md:h-screen py-8 md:py-24 px-6 md:px-10 lg:px-12 flex flex-col md:justify-between gap-6 bg-indigo-950/95 md:bg-transparent backdrop-blur md:backdrop-blur-none">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 tracking-tight">
              Dryelle Ebelin
            </h1>
            <p className="font-semibold text-gray-200 text-base md:text-lg">
              {tr(t.hero.role)}
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-xs">
              {tr(t.hero.tagline)}
            </p>

            <div className="mt-2 hidden md:flex flex-wrap items-center gap-3">
              <DownloadCVButton />
              <LanguageToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? tr(t.nav.closeMenu) : tr(t.nav.openMenu)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <nav
          aria-label={tr(t.nav.ariaLabel)}
          className="hidden md:flex flex-col items-start gap-3 text-sm font-semibold"
        >
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={isActive ? "true" : undefined}
                className={`
                  group flex items-center gap-3 uppercase tracking-widest transition-colors cursor-pointer
                  focus:outline-none focus-visible:text-violet-400
                  ${isActive ? "text-gray-100" : "text-gray-500 hover:text-gray-300"}
                `}
              >
                <span
                  className={`
                    h-px transition-all duration-300
                    ${isActive ? "w-12 bg-gray-100" : "w-6 bg-gray-600 group-hover:w-10 group-hover:bg-gray-300"}
                  `}
                  aria-hidden="true"
                />
                {tr(label)}
              </button>
            );
          })}
        </nav>

        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label={tr(t.nav.ariaLabel)}
            className="md:hidden flex flex-col gap-1 text-sm font-semibold border-t border-white/10 pt-4"
          >
            {sections.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`
                    text-left uppercase tracking-widest py-2 px-2 rounded-md transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400
                    ${isActive ? "text-gray-100 bg-white/5" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"}
                  `}
                >
                  {tr(label)}
                </button>
              );
            })}

            <div className="pt-3">
              <DownloadCVButton />
            </div>
          </nav>
        )}

        <div className="hidden md:flex items-center gap-4">
          {socials.map(({ label, url, Icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="text-gray-400 hover:text-gray-100 transition-colors duration-300 focus:outline-none focus-visible:text-violet-400"
            >
              <Icon size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="md:hidden flex items-center gap-5 px-6 pb-4">
        {socials.map(({ label, url, Icon }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="text-gray-400 hover:text-gray-100 transition-colors duration-300 focus:outline-none focus-visible:text-violet-400"
          >
            <Icon size={22} aria-hidden="true" />
          </a>
        ))}
      </div>
    </>
  );
}
