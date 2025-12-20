import { Experience } from "../types/experience";
import { ArrowUpRight, Link } from 'lucide-react';

export default function ExperienceItem(props: Experience) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="group md:px-4 py-6 flex flex-col md:flex-row hover:bg-white/5 hover:shadow-md rounded-lg border border-transparent hover:border-white/10 transition-all duration-300 ease-in-out gap-2 md:gap-0"
    >
      <span className="w-full md:w-1/4 text-xs font-semibold pt-1">{props.year}</span>

      <div className="w-full md:w-3/4 flex flex-col gap-2">
        <h3 className="text-base font-bold text-gray-300 group-hover:text-violet-400 transition-colors flex items-center md:items-end">
          {props.role} · {props.company} <ArrowUpRight size={18} className="ml-1 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-1" />
        </h3>

        <p className="text-sm">{props.description}</p>

        <div className="flex gap-4">
          {props.extraLink && props.extraLinkLabel && (
            <a
              href={props.extraLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline flex items-center gap-1"
            >
              <Link size={12} />
              {props.extraLinkLabel}
            </a>
          )}
          {props.extraLink2 && props.extraLinkLabel2 && (
            <a
              href={props.extraLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline flex items-center gap-1"
            >
              <Link size={12} />
              {props.extraLinkLabel2}
            </a>
          )}
        </div>

        <ul className="flex flex-wrap gap-2 mt-2">
          {props.techs.map((tech) => (
            <li
              key={tech}
              className="bg-indigo-900 text-violet-400 font-semibold text-xs rounded-full px-3 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
