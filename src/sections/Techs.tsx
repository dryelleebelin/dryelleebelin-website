import TechBadge from "../components/TechBadge";

export default function Techs() {
  const data = [
    { label: "React JS", color: "text-sky-400", bgColor: "bg-sky-400/20" },
    { label: "React Native", color: "text-sky-400", bgColor: "bg-sky-400/20" },
    { label: "Next.js", color: "text-gray-300", bgColor: "bg-gray-500/50" },
    { label: "JavaScript", color: "text-yellow-300", bgColor: "bg-yellow-300/20" },
    { label: "TypeScript", color: "text-blue-400", bgColor: "bg-blue-400/20" },
    { label: "HTML", color: "text-orange-400", bgColor: "bg-orange-400/20" },
    { label: "CSS", color: "text-blue-300", bgColor: "bg-blue-300/20" },
    { label: "Sass/SCSS", color: "text-pink-400", bgColor: "bg-pink-400/20" },
    { label: "Tailwind CSS", color: "text-teal-400", bgColor: "bg-teal-400/20" },
    { label: "Bootstrap", color: "text-purple-400", bgColor: "bg-purple-400/20" },
    { label: "Vite", color: "text-purple-300", bgColor: "bg-purple-300/30" },
    { label: "Node.js", color: "text-green-400", bgColor: "bg-green-400/20" },
    { label: "Integração com APIs RESTful", color: "text-pink-400", bgColor: "bg-pink-500/20" },
    { label: "Firebase", color: "text-amber-400", bgColor: "bg-amber-400/20" },
    { label: "C#", color: "text-gray-300", bgColor: "bg-gray-500/50" },
    { label: "Banco de Dados SQL", color: "text-cyan-300", bgColor: "bg-cyan-300/20" },
    { label: "Python", color: "text-yellow-300", bgColor: "bg-yellow-300/20" },
    { label: "Jest", color: "text-red-400", bgColor: "bg-red-500/20" },
    { label: "Git", color: "text-orange-500", bgColor: "bg-orange-500/20" },
    { label: "CI/CD", color: "text-green-400", bgColor: "bg-green-400/20" },
    { label: "Docker", color: "text-blue-300", bgColor: "bg-blue-300/20" },
    { label: "Vercel", color: "text-gray-300", bgColor: "bg-gray-300/20" },
    { label: "Figma", color: "text-pink-400", bgColor: "bg-pink-400/20" },
    { label: "Princípios de UI/UX", color: "text-blue-300", bgColor: "bg-blue-300/20" },
    { label: "Design responsivo", color: "text-orange-400", bgColor: "bg-orange-400/20" },
    { label: "Metodologias Ágeis", color: "text-purple-400", bgColor: "bg-purple-400/20" },
  ];

  return (
    <div className="flex flex-wrap gap-2 py-12 md:py-20 px-6 md:pl-22">
      {data.map((tech) => (
        <TechBadge
          key={tech.label}
          label={tech.label}
          color={tech.color}
          bgColor={tech.bgColor}
        />
      ))}
    </div>
  );
}
