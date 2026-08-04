import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";
import type { Lang } from "../i18n/types";

const LANGS: { code: Lang; label: string; ariaLabel: string }[] = [
  { code: "pt", label: "PT", ariaLabel: "Português" },
  { code: "en", label: "EN", ariaLabel: "English" },
];

export default function LanguageToggle() {
  const { lang, setLang, t: tr } = useLanguage();

  return (
    <div
      role="group"
      aria-label={tr(t.language.label)}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 text-xs font-semibold"
    >
      {LANGS.map(({ code, label, ariaLabel }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            aria-label={ariaLabel}
            className={`
              px-2.5 py-1 rounded-full transition-colors focus:outline-none
              focus-visible:ring-2 focus-visible:ring-violet-400
              ${
                isActive
                  ? "bg-indigo-800 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
