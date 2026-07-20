import TechBadge from "../components/TechBadge";

export default function Techs() {
  const data = [
    { label: "React JS", color: "text-sky-400", bgColor: "bg-sky-400/20", url: "https://react.dev" },
    { label: "React Native", color: "text-sky-400", bgColor: "bg-sky-400/20", url: "https://reactnative.dev" },
    { label: "Next.js", color: "text-gray-300", bgColor: "bg-gray-500/50", url: "https://nextjs.org" },
    { label: "JavaScript", color: "text-yellow-300", bgColor: "bg-yellow-300/20", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { label: "TypeScript", color: "text-blue-400", bgColor: "bg-blue-400/20", url: "https://www.typescriptlang.org" },
    { label: "HTML", color: "text-orange-400", bgColor: "bg-orange-400/20", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { label: "CSS", color: "text-blue-300", bgColor: "bg-blue-300/20", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { label: "Sass/SCSS", color: "text-pink-400", bgColor: "bg-pink-400/20", url: "https://sass-lang.com" },
    { label: "Tailwind CSS", color: "text-teal-400", bgColor: "bg-teal-400/20", url: "https://tailwindcss.com" },
    { label: "Bootstrap", color: "text-purple-400", bgColor: "bg-purple-400/20", url: "https://getbootstrap.com" },
    { label: "Vite", color: "text-purple-300", bgColor: "bg-purple-300/30", url: "https://vitejs.dev" },
    { label: "Node.js", color: "text-green-400", bgColor: "bg-green-400/20", url: "https://nodejs.org" },
    { label: "Integração com APIs RESTful", color: "text-pink-400", bgColor: "bg-pink-500/20", url: "https://restfulapi.net" },
    { label: "Firebase", color: "text-amber-400", bgColor: "bg-amber-400/20", url: "https://firebase.google.com" },
    { label: "AWS", color: "text-amber-400", bgColor: "bg-amber-400/15", url: "https://aws.amazon.com/amplify/" },
    { label: "C#", color: "text-gray-300", bgColor: "bg-gray-500/50", url: "https://learn.microsoft.com/dotnet/csharp" },
    { label: "Banco de Dados SQL", color: "text-cyan-300", bgColor: "bg-cyan-300/20", url: "https://www.microsoft.com/pt-br/sql-server/sql-server-downloads" },
    { label: "Python", color: "text-yellow-300", bgColor: "bg-yellow-300/20", url: "https://www.python.org" },
    { label: "Jest", color: "text-red-400", bgColor: "bg-red-500/20", url: "https://jestjs.io" },
    { label: "Git", color: "text-orange-500", bgColor: "bg-orange-500/20", url: "https://git-scm.com" },
    { label: "CI/CD", color: "text-green-400", bgColor: "bg-green-400/20", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
    { label: "Docker", color: "text-blue-300", bgColor: "bg-blue-300/20", url: "https://www.docker.com" },
    { label: "Vercel", color: "text-gray-300", bgColor: "bg-gray-300/20", url: "https://vercel.com" },
    { label: "Figma", color: "text-pink-400", bgColor: "bg-pink-400/20", url: "https://www.figma.com" },
    { label: "Princípios de UI/UX", color: "text-blue-300", bgColor: "bg-blue-300/20", url: "https://www.figma.com/pt-br/resource-library/diferenca-entre-ui-e-ux/" },
    { label: "Design responsivo", color: "text-orange-400", bgColor: "bg-orange-400/20", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
    { label: "Metodologias Ágeis", color: "text-purple-400", bgColor: "bg-purple-400/20", url: "https://www.atlassian.com/agile" },
  ];

  return (
    <div className="flex flex-col gap-4 py-14 md:py-16 px-6 md:pl-22">
      <h3 className="text-gray-300 font-bold block md:hidden">HABILIDADES</h3>

      <div className="flex flex-wrap gap-3 md:gap-2">
        {data.map((tech) => (
          <TechBadge
            key={tech.label}
            label={tech.label}
            color={tech.color}
            bgColor={tech.bgColor}
            url={tech.url}
          />
        ))}
      </div>
    </div>
  );
}
