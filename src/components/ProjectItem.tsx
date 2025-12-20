import { Project } from '../types/project';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectItem({ title, description, year, thumbnail, techs, liveUrl, repoUrl, status }: Project) {
  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group md:px-4 py-6 flex flex-col-reverse md:flex-row hover:bg-white/5 hover:shadow-md rounded-lg border border-transparent hover:border-white/10 transition-all duration-300 ease-in-out gap-2 md:gap-0"
    >
      <div className="w-full md:w-1/4 flex flex-col justify-between gap-2 md:gap-0">
        <div className='flex flex-col gap-2 md:pt-1'>
          <span className="text-xs font-semibold">{year}</span>

          {status === "in-progress" && (
            <span className="text-xs font-semibold">Em progresso</span>
          )}
        </div>

        <img
          src={thumbnail}
          alt={`Prévia de ${title}`}
          loading="lazy"
          className="w-full md:w-[90%] rounded-md border border-white/10 object-cover"
        />
      </div>

      <div className="w-full md:w-3/4 flex flex-col gap-2">
        <h3 className="text-base font-bold text-gray-300 group-hover:text-violet-400 transition-colors flex items-center md:items-end">
          {title}
          <ArrowUpRight size={18} className="ml-1 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-1" />
        </h3>

        <p className="text-sm">{description}</p>

        <div className="flex gap-4">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold hover:underline flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            Github
          </a>
        </div>

        <ul className="flex flex-wrap gap-2 mt-2">
          {techs.map((tech) => (
            <li key={tech} className="bg-indigo-900 text-violet-400 font-semibold text-xs rounded-full px-3 py-1">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
