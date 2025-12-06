import react from "../assets/tech/react.svg";
import next from "../assets/tech/nextjs.svg";
import javascript from "../assets/tech/javascript.svg";
import typescript from "../assets/tech/typescript.svg";
import html from "../assets/tech/html.svg";
import css from "../assets/tech/css.svg";
import sass from "../assets/tech/sass.png";
import tailwind from "../assets/tech/tailwind.svg";
import bootstrap from "../assets/tech/bootstrap.svg";
import vite from "../assets/tech/vite.svg";
import node from "../assets/tech/node.png";
import api from "../assets/tech/api.png";
import firebase from "../assets/tech/firebase.svg";
import csharp from "../assets/tech/csharp.svg";
import sql from "../assets/tech/sql.png";
import python from "../assets/tech/python.svg";
import jest from "../assets/tech/jest.png";
import git from "../assets/tech/git.svg";
import cicd from "../assets/tech/cicd.png";
import docker from "../assets/tech/docker.svg";
import vercel from "../assets/tech/vercel.png";
import figma from "../assets/tech/figma.svg";
import uiux from "../assets/tech/uiux.png";
import responsividade from "../assets/tech/responsividade.png";
import metodologia from "../assets/tech/metodologia.png";
import type { TechBadge } from "../types/techBadge";

export default function TechBadge({ label, color, bgColor, url }: TechBadge) {
  const techsIcons: Record<string, string> = {
    "React JS": react,
    "React Native": react,
    "Next.js": next,
    "JavaScript": javascript,
    "TypeScript": typescript,
    "HTML": html,
    "CSS": css,
    "Sass/SCSS": sass,
    "Tailwind CSS": tailwind,
    "Bootstrap": bootstrap,
    "Vite": vite,
    "Node.js": node,
    "Integração com APIs RESTful": api,
    "Firebase": firebase,
    "C#": csharp,
    "Banco de Dados SQL": sql,
    "Python": python,
    "Jest": jest,
    "Git": git,
    "CI/CD": cicd,
    "Docker": docker,
    "Vercel": vercel,
    "Figma": figma,
    "Princípios de UI/UX": uiux,
    "Design responsivo": responsividade,
    "Metodologias Ágeis": metodologia,
  };

  const icon = techsIcons[label];

  return (
    <a
      href={url}
      target="_blank"
      className={`group inline-flex items-center rounded-full`}
    >
      <span className={`${color} ${bgColor} inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium border border-transparent transition-all duration-200 group-hover:border-current cursor-pointer`}>
        {icon && <img src={icon} className="h-5 w-5 object-contain" alt={label} />}
        {label}
      </span>
    </a>

  )
}