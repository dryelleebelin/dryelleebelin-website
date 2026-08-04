import type { Localized } from "./types";

export const t = {
  hero: {
    role: {
      pt: "Desenvolvedora Front-end Web & Mobile",
      en: "Front-end Web & Mobile Developer",
    },
    tagline: {
      pt: "Interfaces modernas, acessíveis e de alta performance com React, React Native e TypeScript.",
      en: "Modern, accessible and high-performance interfaces with React, React Native and TypeScript.",
    },
  },
  nav: {
    ariaLabel: { pt: "Seções do portfólio", en: "Portfolio sections" },
    openMenu: { pt: "Abrir menu", en: "Open menu" },
    closeMenu: { pt: "Fechar menu", en: "Close menu" },
    skip: { pt: "Ir para o conteúdo", en: "Skip to content" },
  },
  cv: {
    download: { pt: "Baixar currículo", en: "Download CV" },
    ariaLabel: {
      pt: "Baixar currículo em PDF",
      en: "Download CV as PDF",
    },
  },
  language: {
    label: { pt: "Idioma", en: "Language" },
  },
  headings: {
    about: { pt: "Sobre mim", en: "About me" },
    techs: { pt: "Habilidades", en: "Skills" },
    experiences: { pt: "Experiências", en: "Experience" },
    projects: { pt: "Projetos em destaque", en: "Featured projects" },
    education: {
      pt: "Formação & certificações",
      en: "Education & certifications",
    },
    testimonials: { pt: "Depoimentos", en: "Testimonials" },
    contact: { pt: "Entre em contato", en: "Get in touch" },
  },
  projects: {
    inDevelopment: { pt: "Em desenvolvimento", en: "In development" },
    repository: { pt: "Repositório", en: "Repository" },
    moreOnGithub: { pt: "Ver mais no GitHub", en: "See more on GitHub" },
    empty: {
      pt: "Novos projetos estão em desenvolvimento e serão adicionados em breve.",
      en: "New projects are in development and will be added soon.",
    },
    previewOf: {
      pt: (title: string) => `Prévia do projeto ${title}`,
      en: (title: string) => `Preview of the ${title} project`,
    },
    openTitle: {
      pt: (title: string) => `Abrir ${title}`,
      en: (title: string) => `Open ${title}`,
    },
  },
  experiences: {
    restricted: { pt: "acesso restrito", en: "restricted access" },
  },
  education: {
    certifications: { pt: "Certificações", en: "Certifications" },
    emptyTitle: {
      pt: "Seção em preparação",
      en: "Section in preparation",
    },
    emptyText: {
      pt: "Formação acadêmica e certificações serão listadas aqui em breve.",
      en: "Education and certifications will be listed here soon.",
    },
  },
  contact: {
    intro: {
      pt: "Aberta a oportunidades, projetos e conversas. Envie uma mensagem abaixo ou me chame diretamente pelo",
      en: "Open to opportunities, projects and conversations. Send a message below or reach me directly on",
    },
    fields: {
      name: { pt: "Nome", en: "Name" },
      email: { pt: "E-mail", en: "Email" },
      subject: { pt: "Assunto", en: "Subject" },
      message: { pt: "Mensagem", en: "Message" },
    },
    placeholders: {
      name: { pt: "Seu nome", en: "Your name" },
      email: { pt: "seu@email.com", en: "your@email.com" },
      subject: {
        pt: "Sobre o que você quer conversar?",
        en: "What would you like to talk about?",
      },
      message: {
        pt: "Conte um pouco sobre a oportunidade ou o projeto…",
        en: "Tell me about the opportunity or the project…",
      },
    },
    submit: { pt: "Enviar mensagem", en: "Send message" },
    sending: { pt: "Enviando…", en: "Sending…" },
    validation: {
      allFields: {
        pt: "Preencha todos os campos.",
        en: "Please fill in all fields.",
      },
      invalidEmail: {
        pt: "Digite um e-mail válido.",
        en: "Please enter a valid email address.",
      },
    },
    toasts: {
      success: {
        pt: "Mensagem enviada com sucesso!",
        en: "Message sent successfully!",
      },
      errorRequest: {
        pt: "Erro na solicitação. Tente novamente.",
        en: "Request error. Please try again.",
      },
      errorNetwork: {
        pt: "Não foi possível se conectar ao servidor. Tente novamente em instantes.",
        en: "Could not connect to the server. Please try again shortly.",
      },
      errorGeneric: {
        pt: "Não foi possível enviar. Tente novamente em instantes.",
        en: "Could not send. Please try again shortly.",
      },
    },
  },
  footer: {
    builtWith: {
      pt: "Construído com",
      en: "Built with",
    },
    hostedOn: { pt: "Hospedado na", en: "Hosted on" },
    sourceCode: {
      pt: "Código-fonte disponível no",
      en: "Source code available in the",
    },
    repository: { pt: "repositório", en: "repository" },
    rights: {
      pt: "Todos os direitos reservados.",
      en: "All rights reserved.",
    },
  },
  about: {
    p1: {
      pt: (bold: (t: string) => string) =>
        `Sou desenvolvedora front-end com foco em criar ${bold(
          "interfaces funcionais, acessíveis e visualmente marcantes"
        )}, unindo design, experiência do usuário e engenharia consistente.`,
      en: (bold: (t: string) => string) =>
        `I'm a front-end developer focused on building ${bold(
          "functional, accessible and visually striking interfaces"
        )}, combining design, user experience and consistent engineering.`,
    },
    p2: {
      pt: (bold: (t: string) => string) =>
        `Atualmente trabalho com ${bold(
          "React, React Native, Next.js e TypeScript"
        )}, criando e evoluindo aplicações web e mobile com foco em entrega de funcionalidades, performance e melhoria contínua. Gosto de entender o problema a fundo, alinhar tecnologia ao negócio e validar as soluções no cenário real.`,
      en: (bold: (t: string) => string) =>
        `I currently work with ${bold(
          "React, React Native, Next.js and TypeScript"
        )}, building and evolving web and mobile applications focused on feature delivery, performance and continuous improvement. I enjoy understanding problems in depth, aligning technology with business needs and validating solutions in real-world scenarios.`,
    },
    p3: {
      pt: "Ao longo da minha trajetória, atuei em ambientes corporativos, educacionais e no setor logístico, colaborando com equipes engajadas e contribuindo para sistemas web e mobile. Essas experiências ampliaram minha visão técnica e minha capacidade de adaptação.",
      en: "Throughout my career, I've worked in corporate, educational and logistics environments, collaborating with engaged teams and contributing to web and mobile systems. These experiences broadened my technical vision and my ability to adapt.",
    },
    p4: {
      pt: "Valorizo criatividade, pensamento crítico e boas práticas de engenharia de software, sempre buscando criar produtos cada vez mais eficientes, escaláveis e agradáveis de usar.",
      en: "I value creativity, critical thinking and software engineering best practices, always looking to build products that are more efficient, scalable and enjoyable to use.",
    },
  },
} as const;

/** Utilitário de tipagem para conferir se um objeto tem shape Localized. */
export type TranslationEntry = Localized;
