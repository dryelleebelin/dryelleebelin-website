import ExperienceItem from "../components/ExperienceItem";
import type { Experience } from "../types/experience";

export default function Experiences() {
  const experiences: Experience[] = [
    {
      year: "2026 - Atual",
      company: "Greens Pharmaceutical Corp",
      role: "Desenvolvedora Front-end Pleno",
      description:
        "Atuação no desenvolvimento de aplicações web utilizando React, Next.js e TypeScript, criando interfaces responsivas, implementando novas funcionalidades, integrando APIs, corrigindo bugs e realizando melhorias contínuas de performance e usabilidade. Participação em definições técnicas, testes, validação de entregas e manutenção evolutiva dos sistemas da empresa.",
      techs: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
        "Git",
        "AWS",
        "Figma"
      ],
      link: "https://www.greens-corp.com/",
      extraLink: "https://www.greens-corp.com/",
      extraLinkLabel: "Greens Corp",
      extraLink2: "https://be4hope.org/",
      extraLinkLabel2: "Be4Hope",
      extraLink3: "https://main.d3b3n6yslmbdf5.amplifyapp.com/",
      extraLinkLabel3: "Portal Corporativo",
    },
    {
      year: "2024 - 2025",
      company: "NDEVS / PostallLOG",
      role: "Desenvolvedora Front-end Mobile",
      description: "Atuação na modernização e evolução de app corporativo, com foco em performance, estabilidade e experiência do usuário. Responsável por liderar melhorias técnicas, desenvolver novas funcionalidades para Android e iOS, integrar APIs, otimizar fluxos logísticos e garantir entregas consistentes. Participação ativa na análise de requisitos, validação em campo e aplicação de boas práticas para manter qualidade e manutenibilidade do código.",
      extraLink: "https://postall-log.com.br/",
      extraLinkLabel: "PostallLog",
      techs: ["React Native", "TypeScript", "JavaScript", "Sass (SCSS)", "REST APIs", "C#", "Git", "Figma", "CI/CD"],
      link: "https://ndevs.com.br/",
    },
    {
      year: "2024",
      company: "NDEVS / In.book",
      role: "Desenvolvedora Front-end",
      description: "Atuação no desenvolvimento e evolução do In.book, plataforma digital da Incube Metrics voltada para equipes de campo e análise de performance no varejo. Responsável por implementar novas funcionalidades, corrigir falhas, otimizar interfaces e contribuir para melhorias de usabilidade e estabilidade do sistema em produção.",
      extraLink: "https://incubemetrics.com/",
      extraLinkLabel: "Incube Metrics",
      extraLink2: "https://inbook.incubemetrics.com/",
      extraLinkLabel2: "In.book",
      techs: ["JavaScript", "React.js", "TypeScript", "HTML & CSS", "Git"],
      link: "https://ndevs.com.br/",
    },
    {
      year: "2022 - 2023",
      company: "VAR Solutions",
      role: "Desenvolvedora de Software",
      description: "Atuei no desenvolvimento do front-end da plataforma educacional da empresa, criando interfaces modernas, responsivas e focadas na experiência do aluno. Contribuí para novas funcionalidades, melhorias visuais e otimizações de usabilidade no portal de aulas. Também ofereci suporte técnico a estudantes de programação, auxiliando na solução de erros e no entendimento de boas práticas.",
      techs: ["JavaScript", "React.js", "HTML & CSS", "Bootstrap", "REST APIs", "C#", "Java", "SQL Server", "Git", "CI/CD"],
      link: "https://www.instagram.com/var.solutions",
    },
  ];

  return (
    <div className="py-10 px-6 md:px-18">
      <h3 className="text-gray-300 font-bold block md:hidden">EXPERIÊNCIAS</h3>

      <div className="flex flex-col md:gap-6">
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.company}-${experience.year}`}
            {...experience}
          />
        ))}
      </div>
    </div>
  );
}
