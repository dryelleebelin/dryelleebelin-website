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
import aws from "../assets/tech/aws.png";
import type { TechBadge as TechBadgeType } from "../types/techBadge";

const techsIcons: Record<string, string> = {
  "React JS": react,
  "React Native": react,
  "Next.js": next,
  JavaScript: javascript,
  TypeScript: typescript,
  HTML: html,
  CSS: css,
  "Sass/SCSS": sass,
  "Tailwind CSS": tailwind,
  Bootstrap: bootstrap,
  Vite: vite,
  "Node.js": node,
  "Integração com APIs RESTful": api,
  Firebase: firebase,
  AWS: aws,
  "C#": csharp,
  "Banco de Dados SQL": sql,
  Python: python,
  Jest: jest,
  Git: git,
  "CI/CD": cicd,
  Docker: docker,
  Vercel: vercel,
  Figma: figma,
  "Princípios de UI/UX": uiux,
  "Design responsivo": responsividade,
  "Metodologias Ágeis": metodologia,
};

export default function TechBadge({
  label,
  color,
  bgColor,
  url,
}: TechBadgeType) {
  const icon = techsIcons[label];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Documentação de ${label}`}
      className="group inline-flex items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950"
    >
      <span
        className={`${color} ${bgColor} inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border border-transparent transition-all duration-200 group-hover:border-current`}
      >
        {icon && (
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="h-4 w-4 object-contain"
            loading="lazy"
          />
        )}
        {label}
      </span>
    </a>
  );
}
