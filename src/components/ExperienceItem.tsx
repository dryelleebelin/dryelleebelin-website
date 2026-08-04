import { ArrowUpRight, Link as LinkIcon, Lock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";
import type { Experience } from "../types/experience";

export default function ExperienceItem(props: Experience) {
  const { t: tr } = useLanguage();
  const highlights = props.highlights ? tr(props.highlights) : undefined;

  return (
    <article className="group relative flex flex-col md:flex-row gap-3 md:gap-4 md:px-4 py-6 rounded-lg border border-transparent transition-all duration-300 ease-out hover:bg-white/5 hover:border-white/10 hover:shadow-lg">
      <span className="w-full md:w-1/4 text-xs font-semibold pt-1 text-gray-400 whitespace-nowrap">
        {tr(props.year)}
      </span>

      <div className="w-full md:w-3/4 flex flex-col gap-2">
        <h3 className="text-base font-bold text-gray-200 group-hover:text-violet-400 transition-colors flex items-start flex-wrap gap-x-1">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1 focus:outline-none focus-visible:text-violet-400"
          >
            <span className="hover:underline underline-offset-4 decoration-violet-400/60">
              {tr(props.role)} · {props.company}
            </span>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="translate-y-[3px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </h3>

        <p className="text-sm leading-relaxed text-gray-400">
          {tr(props.description)}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="mt-1 flex flex-col gap-1 text-sm text-gray-400 list-disc list-inside marker:text-violet-400">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {props.extraLinks && props.extraLinks.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
            {props.extraLinks.map((link) => (
              <a
                key={`${link.label.pt}-${link.url}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-300 hover:text-violet-400 transition-colors inline-flex items-center gap-1 focus:outline-none"
              >
                {link.restricted ? (
                  <Lock size={12} aria-hidden="true" />
                ) : (
                  <LinkIcon size={12} aria-hidden="true" />
                )}
                <span className="hover:underline underline-offset-4">
                  {tr(link.label)}
                  {link.restricted && (
                    <span className="ml-1 text-[10px] font-normal text-gray-500">
                      ({tr(t.experiences.restricted)})
                    </span>
                  )}
                </span>
              </a>
            ))}
          </div>
        )}

        <ul className="flex flex-wrap gap-2 mt-3">
          {props.techs.map((tech) => (
            <li
              key={tech}
              className="bg-indigo-900/70 text-violet-300 font-semibold text-xs rounded-full px-3 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
