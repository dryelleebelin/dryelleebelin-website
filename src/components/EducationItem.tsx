import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Education } from "../types/education";

export default function EducationItem(props: Education) {
  const { t: tr } = useLanguage();

  return (
    <article className="group flex flex-col md:flex-row gap-3 md:gap-4 md:px-4 py-6 rounded-lg border border-transparent transition-all duration-300 ease-out hover:bg-white/5 hover:border-white/10">
      <span className="w-full md:w-1/4 text-xs font-semibold pt-1 text-gray-400 whitespace-nowrap">
        {tr(props.period)}
      </span>

      <div className="w-full md:w-3/4 flex flex-col gap-2">
        <h3 className="text-base font-bold text-gray-200 group-hover:text-violet-400 transition-colors">
          {props.link ? (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 focus:outline-none focus-visible:text-violet-400"
            >
              <span className="hover:underline underline-offset-4 decoration-violet-400/60">
                {tr(props.degree)} · {props.institution}
              </span>
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="translate-y-[3px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          ) : (
            <span>
              {tr(props.degree)} · {props.institution}
            </span>
          )}
        </h3>

        {props.description && (
          <p className="text-sm leading-relaxed text-gray-400">
            {tr(props.description)}
          </p>
        )}
      </div>
    </article>
  );
}
