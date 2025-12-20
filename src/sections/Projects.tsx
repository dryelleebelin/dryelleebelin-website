import ProjectItem from "../components/ProjectItem";
import type { Project } from "../types/project";

import thumbnailNft from "../assets/thumbnails/thumbnail-nft-landing-page.png";

export default function Projects() {
  const projects: Project[] = [
    {
      id: "nft-landing-page",
      title: "Landing Page NFT",
      description: "Landing page moderna e responsiva para apresentação de um projeto NFT, com foco em performance, design profissional e boas práticas de front-end.",
      year: 2025,
      thumbnail: thumbnailNft,
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://nft-landing-ui.vercel.app/",
      repoUrl: "https://github.com/dryelleebelin/nft-landing-page",
      type: "personal",
      status: "in-progress",
    },
  ];

  return (
    <div className="py-10 px-6 md:px-18">
      <h3 className="text-gray-300 font-bold block md:hidden">PROJETOS</h3>

      <div className="flex flex-col md:gap-6">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}