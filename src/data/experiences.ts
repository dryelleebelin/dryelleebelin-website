import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    year: { pt: "2026 — Atual", en: "2026 — Present" },
    company: "Greens Pharmaceutical Corp",
    role: {
      pt: "Desenvolvedora Front-end Pleno",
      en: "Mid-level Front-end Developer",
    },
    description: {
      pt: "Desenvolvimento de aplicações web com React, Next.js e TypeScript, criando interfaces responsivas, implementando novas funcionalidades, integrando APIs e realizando melhorias contínuas de performance e usabilidade. Participação em definições técnicas, testes e manutenção evolutiva dos sistemas da empresa.",
      en: "Development of web applications with React, Next.js and TypeScript, building responsive interfaces, implementing new features, integrating APIs and delivering continuous performance and usability improvements. Participation in technical decisions, testing and evolutionary maintenance of the company's systems.",
    },
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "AWS",
    ],
    link: "https://www.greens-corp.com/",
    extraLinks: [
      {
        label: { pt: "Greens Corp", en: "Greens Corp" },
        url: "https://www.greens-corp.com/",
      },
      {
        label: { pt: "Be4Hope", en: "Be4Hope" },
        url: "https://be4hope.org/",
      },
      {
        label: { pt: "Portal Corporativo", en: "Corporate Portal" },
        url: "https://sistemagreens.com/",
        restricted: true,
      },
    ],
  },
  {
    year: { pt: "2024 — 2025", en: "2024 — 2025" },
    company: "NDEVS / PostallLOG",
    role: {
      pt: "Desenvolvedora Front-end Mobile",
      en: "Front-end Mobile Developer",
    },
    description: {
      pt: "Modernização e evolução de app corporativo, com foco em performance, estabilidade e experiência do usuário. Desenvolvimento de novas funcionalidades para Android e iOS, integração com APIs, otimização de fluxos logísticos e validação em campo, aplicando boas práticas para manter qualidade e manutenibilidade do código.",
      en: "Modernization and evolution of a corporate app, focused on performance, stability and user experience. Development of new features for Android and iOS, API integration, optimization of logistics flows and field validation, applying best practices to maintain code quality and maintainability.",
    },
    techs: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Sass (SCSS)",
      "REST APIs",
      "C#",
      "Git",
      "Figma",
      "CI/CD",
    ],
    link: "https://ndevs.com.br/",
    extraLinks: [
      {
        label: { pt: "PostallLog", en: "PostallLog" },
        url: "https://postall-log.com.br/",
      },
    ],
  },
  {
    year: { pt: "2024", en: "2024" },
    company: "NDEVS / In.book",
    role: {
      pt: "Desenvolvedora Front-end",
      en: "Front-end Developer",
    },
    description: {
      pt: "Desenvolvimento e evolução do In.book, plataforma digital da Incube Metrics voltada para equipes de campo e análise de performance no varejo. Implementação de novas funcionalidades, correção de falhas, otimização de interfaces e melhorias de usabilidade em produção.",
      en: "Development and evolution of In.book, Incube Metrics' digital platform for field teams and retail performance analysis. Implementation of new features, bug fixing, interface optimization and usability improvements in production.",
    },
    techs: ["JavaScript", "React.js", "TypeScript", "HTML & CSS", "Git"],
    link: "https://ndevs.com.br/",
    extraLinks: [
      {
        label: { pt: "Incube Metrics", en: "Incube Metrics" },
        url: "https://incubemetrics.com/",
      },
      {
        label: { pt: "In.book", en: "In.book" },
        url: "https://inbook.incubemetrics.com/",
      },
    ],
  },
  {
    year: { pt: "2022 — 2023", en: "2022 — 2023" },
    company: "VAR Solutions",
    role: {
      pt: "Desenvolvedora de Software",
      en: "Software Developer",
    },
    description: {
      pt: "Front-end da plataforma educacional da empresa, criando interfaces modernas, responsivas e focadas na experiência do aluno. Contribuições em novas funcionalidades, melhorias visuais e usabilidade do portal de aulas. Suporte técnico a estudantes de programação, auxiliando na solução de erros e no entendimento de boas práticas.",
      en: "Front-end of the company's educational platform, creating modern, responsive interfaces focused on the student experience. Contributions to new features, visual improvements and usability of the classes portal. Technical support to programming students, helping troubleshoot errors and understand best practices.",
    },
    techs: [
      "JavaScript",
      "React.js",
      "HTML & CSS",
      "Bootstrap",
      "REST APIs",
      "C#",
      "Java",
      "SQL Server",
      "Git",
      "CI/CD",
    ],
    link: "https://www.instagram.com/var.solutions",
  },
];
