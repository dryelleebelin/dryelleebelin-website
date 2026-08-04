import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

const year = new Date().getFullYear();

export default function Footer() {
  const { t: tr } = useLanguage();

  return (
    <footer className="pt-6 pb-16 px-6 md:px-10 lg:px-12 border-t border-white/5">
      <p className="text-sm leading-relaxed text-gray-500 max-w-2xl">
        {tr(t.footer.builtWith)}{" "}
        <a
          href="https://react.dev/"
          className="text-gray-300 font-semibold hover:text-violet-400 transition-colors focus:outline-none focus-visible:text-violet-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://vite.dev/"
          className="text-gray-300 font-semibold hover:text-violet-400 transition-colors focus:outline-none focus-visible:text-violet-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite
        </a>{" "}
        &{" "}
        <a
          href="https://tailwindcss.com/"
          className="text-gray-300 font-semibold hover:text-violet-400 transition-colors focus:outline-none focus-visible:text-violet-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        . {tr(t.footer.hostedOn)}{" "}
        <a
          href="https://vercel.com/"
          className="text-gray-300 font-semibold hover:text-violet-400 transition-colors focus:outline-none focus-visible:text-violet-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
        . {tr(t.footer.sourceCode)}{" "}
        <a
          href="https://github.com/dryelleebelin/dryelleebelin-website"
          className="text-gray-300 font-semibold hover:text-violet-400 transition-colors focus:outline-none focus-visible:text-violet-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          {tr(t.footer.repository)}
        </a>
        .
      </p>
      <p className="mt-3 text-xs text-gray-600">
        © {year} Dryelle Ebelin. {tr(t.footer.rights)}
      </p>
    </footer>
  );
}
