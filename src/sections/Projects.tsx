import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProjectItem from "../components/ProjectItem";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

export default function Projects() {
  const { t: tr } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-6 md:px-6 lg:px-8">
      <div className="px-0 md:px-4">
        <SectionHeading
          eyebrow="04"
          title={tr(t.headings.projects)}
          id="projects-heading"
        />
      </div>

      <div className="flex flex-col md:gap-4">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>

      <div className="px-0 md:px-4 mt-8 rounded-lg border border-dashed border-white/10 bg-white/[0.02] p-4 text-sm text-gray-400">
        <p className="mb-2">{tr(t.projects.empty)}</p>
        <a
          href="https://github.com/dryelleebelin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-gray-300 hover:text-violet-400 transition-colors focus:outline-none focus-visible:text-violet-400"
        >
          <span className="hover:underline underline-offset-4">
            {tr(t.projects.moreOnGithub)}
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
