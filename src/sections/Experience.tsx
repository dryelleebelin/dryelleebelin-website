import ExperienceItem from "../components/ExperienceItem";

export default function Experience() {
  return (
    <div className="py-10 px-6 md:px-18">
      <h3 className="text-gray-300 font-bold block md:hidden">EXPERIÊNCIA</h3>

      <div className="flex flex-col md:gap-6">
        <ExperienceItem
          year="2024 - 2025"
          company="NDEVS / PostallLOG"
          role="Desenvolvedora Front-end Mobile"
          description="Atuação na modernização e evolução de app corporativo, com foco em performance, estabilidade e experiência do usuário. Responsável por liderar melhorias técnicas, desenvolver novas funcionalidades para Android e iOS, integrar APIs, otimizar fluxos logísticos e garantir entregas consistentes. Participação ativa na análise de requisitos, validação em campo e aplicação de boas práticas para manter qualidade e manutenibilidade do código."
          extraLink="https://postall-log.com.br/"
          extraLinkLabel="PostallLog"
          techs={["React Native", "TypeScript", "JavaScript", "Sass (SCSS)", "REST APIs", "C#", "Git", "Figma"]}
          link="https://ndevs.com.br/"
        />

        <ExperienceItem
          year="2024"
          company="NDEVS / In.book"
          role="Desenvolvedora Front-end"
          description="Atuação no desenvolvimento e evolução do In.book, plataforma digital da Incube Metrics voltada para equipes de campo e análise de performance no varejo. Responsável por implementar novas funcionalidades, corrigir falhas, otimizar interfaces e contribuir para melhorias de usabilidade e estabilidade do sistema em produção."
          extraLink="https://incubemetrics.com/"
          extraLinkLabel="Incube Metrics"
          extraLink2="https://inbook.incubemetrics.com/"
          extraLinkLabel2="In.book"
          techs={["JavaScript", "React.js", "TypeScript", "HTML & CSS", "Git"]}
          link="https://ndevs.com.br/"
        />

        <ExperienceItem
          year="2022 - 2023"
          company="VAR Solutions"
          role="Desenvolvedora de Software"
          description="Atuei no desenvolvimento do front-end da plataforma educacional da empresa, criando interfaces modernas, responsivas e focadas na experiência do aluno. Contribuí para novas funcionalidades, melhorias visuais e otimizações de usabilidade no portal de aulas. Também ofereci suporte técnico a estudantes de programação, auxiliando na solução de erros e no entendimento de boas práticas."
          techs={["JavaScript", "React.js", "HTML", "CSS", "Bootstrap", "REST APIs", "C#", "SQL Server"]}
          link="https://www.instagram.com/var.solutions"
        />
      </div>
    </div>
  );
}
