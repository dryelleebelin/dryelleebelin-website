import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";
import type { Project } from "../types/project";

export default function ProjectItem({
  title,
  description,
  year,
  thumbnail,
  techs,
  liveUrl,
  repoUrl,
  status,
  highlights,
}: Project) {
  const { t: tr } = useLanguage();
  const primaryUrl = liveUrl ?? repoUrl;
  const resolvedHighlights = highlights ? tr(highlights) : undefined;

  return (
    <article className="group relative flex flex-col-reverse md:flex-row gap-4 md:gap-4 md:px-4 py-6 rounded-lg border border-transparent transition-all duration-300 ease-out hover:bg-white/5 hover:border-white/10 hover:shadow-lg">
      <div className="w-full md:w-1/4 flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-1 md:pt-1">
          <span className="text-xs font-semibold text-gray-400">{year}</span>
          {status === "in-development" && (
            <span className="text-xs font-semibold text-amber-300">
              {tr(t.projects.inDevelopment)}
            </span>
          )}
        </div>

        {primaryUrl ? (
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tr(t.projects.openTitle)(title)}
            className="block overflow-hidden rounded-md border border-white/10 focus:outline-none"
          >
            <img
              src={thumbnail}
              alt={tr(t.projects.previewOf)(title)}
              loading="lazy"
              width={640}
              height={360}
              className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </a>
        ) : (
          <img
            src={thumbnail}
            alt={tr(t.projects.previewOf)(title)}
            loading="lazy"
            width={640}
            height={360}
            className="w-full h-auto rounded-md border border-white/10 object-cover"
          />
        )}
      </div>

      <div className="w-full md:w-3/4 flex flex-col gap-2">
        <h3 className="text-base font-bold text-gray-200 group-hover:text-violet-400 transition-colors flex items-start flex-wrap gap-x-1">
          {primaryUrl ? (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 focus:outline-none focus-visible:text-violet-400"
            >
              <span className="hover:underline underline-offset-4 decoration-violet-400/60">
                {title}
              </span>
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="translate-y-[3px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          ) : (
            <span>{title}</span>
          )}
        </h3>

        <p className="text-sm leading-relaxed text-gray-400">
          {tr(description)}
        </p>

        {resolvedHighlights && resolvedHighlights.length > 0 && (
          <ul className="mt-1 flex flex-col gap-1 text-sm text-gray-400 list-disc list-inside marker:text-violet-400">
            {resolvedHighlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {repoUrl && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-300 hover:text-violet-400 transition-colors inline-flex items-center gap-1 focus:outline-none"
            >
              <Github size={14} aria-hidden="true" />
              <span className="hover:underline underline-offset-4">
                {tr(t.projects.repository)}
              </span>
            </a>
          </div>
        )}

        <ul className="flex flex-wrap gap-2 mt-3">
          {techs.map((tech) => (
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
